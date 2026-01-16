// Cache Performance Monitor
// This script helps monitor cache effectiveness and provides insights

class CachePerformanceMonitor {
    constructor() {
        this.performanceData = {
            resourceTimings: [],
            cacheHits: 0,
            cacheMisses: 0,
            totalSavings: 0
        };
        this.init();
    }

    init() {
        // Monitor page load complete
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.analyzePerformance();
            }, 1000);
        });

        // Monitor resource loading
        this.observeResourceTimings();
    }

    observeResourceTimings() {
        // Use Performance Observer to monitor resource timings
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.analyzeResourceTiming(entry);
                }
            });
            observer.observe({ entryTypes: ['resource'] });
        }
    }

    analyzeResourceTiming(entry) {
        const timing = {
            name: entry.name,
            duration: entry.duration,
            transferSize: entry.transferSize || 0,
            encodedBodySize: entry.encodedBodySize || 0,
            decodedBodySize: entry.decodedBodySize || 0,
            // Check if resource was served from cache
            fromCache: entry.transferSize === 0 && entry.decodedBodySize > 0
        };

        if (timing.fromCache) {
            this.performanceData.cacheHits++;
            this.performanceData.totalSavings += timing.decodedBodySize;
        } else {
            this.performanceData.cacheMisses++;
        }

        this.performanceData.resourceTimings.push(timing);
    }

    analyzePerformance() {
        const navigation = performance.getEntriesByType('navigation')[0];
        
        const results = {
            pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            firstPaint: this.getFirstPaint(),
            cacheEfficiency: this.calculateCacheEfficiency(),
            largestResources: this.getLargestResources(),
            recommendations: this.generateRecommendations()
        };

        this.displayResults(results);
    }

    getFirstPaint() {
        const paintTimings = performance.getEntriesByType('paint');
        const firstPaint = paintTimings.find(entry => entry.name === 'first-paint');
        return firstPaint ? firstPaint.startTime : null;
    }

    calculateCacheEfficiency() {
        const total = this.performanceData.cacheHits + this.performanceData.cacheMisses;
        if (total === 0) return 0;
        
        return {
            hitRate: (this.performanceData.cacheHits / total * 100).toFixed(1),
            totalRequests: total,
            cacheHits: this.performanceData.cacheHits,
            cacheMisses: this.performanceData.cacheMisses,
            bytesSaved: this.formatBytes(this.performanceData.totalSavings)
        };
    }

    getLargestResources() {
        return this.performanceData.resourceTimings
            .filter(timing => timing.transferSize > 0)
            .sort((a, b) => b.transferSize - a.transferSize)
            .slice(0, 10)
            .map(timing => ({
                name: timing.name.split('/').pop(),
                size: this.formatBytes(timing.transferSize),
                duration: timing.duration.toFixed(2) + 'ms',
                fromCache: timing.fromCache
            }));
    }

    generateRecommendations() {
        const recommendations = [];
        
        // Check for large uncached resources
        const largeUncached = this.performanceData.resourceTimings
            .filter(timing => !timing.fromCache && timing.transferSize > 100000); // > 100KB
        
        if (largeUncached.length > 0) {
            recommendations.push({
                type: 'warning',
                message: `發現 ${largeUncached.length} 個大型未快取資源`,
                details: largeUncached.map(r => r.name)
            });
        }

        // Check cache efficiency
        const efficiency = this.calculateCacheEfficiency();
        if (efficiency.hitRate < 50) {
            recommendations.push({
                type: 'error',
                message: `快取命中率偏低 (${efficiency.hitRate}%)`,
                details: '建議檢查快取策略設定'
            });
        } else if (efficiency.hitRate > 80) {
            recommendations.push({
                type: 'success',
                message: `快取策略運作良好 (命中率: ${efficiency.hitRate}%)`,
                details: `已節省 ${efficiency.bytesSaved} 的資料傳輸`
            });
        }

        return recommendations;
    }

    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    displayResults(results) {
        // Only show results in development mode or if explicitly enabled
        if (window.location.hostname === 'localhost' || 
            window.location.search.includes('debug=cache')) {
            
            console.group('🚀 Cache Performance Analysis');
            console.log('⏱️ Page Load Time:', results.pageLoadTime.toFixed(2) + 'ms');
            console.log('📄 DOM Content Loaded:', results.domContentLoaded.toFixed(2) + 'ms');
            if (results.firstPaint) {
                console.log('🎨 First Paint:', results.firstPaint.toFixed(2) + 'ms');
            }
            
            console.group('💾 Cache Efficiency');
            console.log('Hit Rate:', results.cacheEfficiency.hitRate + '%');
            console.log('Cache Hits:', results.cacheEfficiency.cacheHits);
            console.log('Cache Misses:', results.cacheEfficiency.cacheMisses);
            console.log('Bytes Saved:', results.cacheEfficiency.bytesSaved);
            console.groupEnd();
            
            if (results.largestResources.length > 0) {
                console.group('📊 Largest Resources');
                console.table(results.largestResources);
                console.groupEnd();
            }
            
            if (results.recommendations.length > 0) {
                console.group('💡 Recommendations');
                results.recommendations.forEach(rec => {
                    const icon = rec.type === 'error' ? '❌' : 
                                rec.type === 'warning' ? '⚠️' : '✅';
                    console.log(icon, rec.message);
                    if (rec.details) {
                        console.log('   Details:', rec.details);
                    }
                });
                console.groupEnd();
            }
            
            console.groupEnd();
        }
    }
}

// Initialize the monitor when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CachePerformanceMonitor();
    });
} else {
    new CachePerformanceMonitor();
}