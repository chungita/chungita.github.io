// Projects 頁面圖片加載初始化

// 預加載 loading.gif
const preloadLoadingGif = () => {
    const img = new Image();
    img.src = '../files/images/loading.gif';
};

preloadLoadingGif();

class ProjectImageLoader {
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

        // 關鍵修復：立即添加加載狀態
        const startLoadingMonitor = () => {
            targetContainer.classList.add('loading');
            if (img) img.classList.add('loading');

            const onLoadComplete = () => {
                handleLoad();
                img.removeEventListener('load', onLoadComplete);
                img.removeEventListener('error', handleError);
                observer?.disconnect();
            };

            img.addEventListener('load', onLoadComplete, { once: true });
            img.addEventListener('error', handleError, { once: true });

            // 監聽 src 屬性變化
            if ('MutationObserver' in window) {
                const observer = new MutationObserver(() => {
                    if (!img.complete) {
                        targetContainer.classList.add('loading');
                        if (img) img.classList.add('loading');
                    }
                });

                observer.observe(img, {
                    attributes: true,
                    attributeFilter: ['src', 'srcset']
                });
            }
        };

        startLoadingMonitor();

        // Intersection Observer 用於 lazy loading 圖片
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!img.hasLoadListener) {
                            img.addEventListener('load', handleLoad, { once: true });
                            img.addEventListener('error', handleError, { once: true });
                            img.hasLoadListener = true;
                        }
                    }
                });
            }, { rootMargin: '100px' });

            observer.observe(img);
        }
    }
}

// 初始化
new ProjectImageLoader();
