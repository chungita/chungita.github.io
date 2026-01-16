// Experiences 頁面圖片加載初始化

class ExperienceImageLoader {
    constructor() {
        this.init();
    }

    init() {
        // 等待 DOM 完全加載
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupImageLoading());
        } else {
            this.setupImageLoading();
        }
    }

    setupImageLoading() {
        // 為所有 img 標籤設置加載監控
        const allImages = document.querySelectorAll('img');
        allImages.forEach(img => {
            this.setupImageLoadListener(img);
        });

        // 為所有 picture 元素設置加載監控
        const pictures = document.querySelectorAll('picture');
        pictures.forEach(picture => {
            const img = picture.querySelector('img');
            if (img) {
                this.setupImageLoadListener(img, picture);
            }
        });
    }

    setupImageLoadListener(img, container = null) {
        const targetContainer = container || img.parentElement || img;

        const handleLoad = () => {
            targetContainer.classList.remove('loading');
            if (img) img.classList.remove('loading');
        };

        const handleError = () => {
            targetContainer.classList.remove('loading');
            if (img) img.classList.remove('loading');
        };

        // 添加 image-loader 類
        if (!targetContainer.classList.contains('image-loader')) {
            targetContainer.classList.add('image-loader');
        }

        // 總是先添加加載狀態
        targetContainer.classList.add('loading');
        if (img) img.classList.add('loading');

        // 檢查圖片是否已完全加載
        const checkIfLoaded = () => {
            if (img.complete && img.naturalHeight > 0) {
                handleLoad();
                return true;
            }
            return false;
        };

        // 立即檢查一次
        if (!checkIfLoaded()) {
            // 監聽加載事件
            img.addEventListener('load', handleLoad, { once: true });
            img.addEventListener('error', handleError, { once: true });

            // Intersection Observer 用於 lazy loading 圖片
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            if (!checkIfLoaded()) {
                                if (!img.hasLoadListener) {
                                    img.addEventListener('load', handleLoad, { once: true });
                                    img.addEventListener('error', handleError, { once: true });
                                    img.hasLoadListener = true;
                                }
                            }
                        }
                    });
                }, { rootMargin: '50px' });

                observer.observe(img);
            }
        }
    }
}

// 初始化
new ExperienceImageLoader();
