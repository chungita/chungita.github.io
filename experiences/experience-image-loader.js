// Experiences 頁面圖片加載初始化

// 預加載 loading.png
const preloadLoadingGif = () => {
    const img = new Image();
    img.src = '../files/images/loading.png';
};

preloadLoadingGif();

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
            // 跳過已經是 loading.png 的圖片
            if (img.src.includes('loading.png')) return;
            
            const originalSrc = img.src;
            const originalSrcset = img.srcset;
            
            // 設置為 loading.png
            img.src = '../files/images/loading.png';
            img.removeAttribute('srcset');
            img.classList.add('loading-placeholder');
            
            // 在背景加載真正的圖片
            this.loadImageInBackground(img, originalSrc, originalSrcset);
        });

        // 為所有 picture 元素設置加載監控
        const pictures = document.querySelectorAll('picture');
        pictures.forEach(picture => {
            const img = picture.querySelector('img');
            if (img && !img.src.includes('loading.png')) {
                const originalSrc = img.src;
                const originalSrcset = img.srcset;
                
                img.src = '../files/images/loading.png';
                img.removeAttribute('srcset');
                img.classList.add('loading-placeholder');
                
                this.loadImageInBackground(img, originalSrc, originalSrcset);
            }
        });
    }

    loadImageInBackground(imgElement, originalSrc, originalSrcset) {
        const tempImg = new Image();
        
        const onLoadComplete = () => {
            imgElement.src = originalSrc;
            if (originalSrcset) {
                imgElement.srcset = originalSrcset;
            }
            imgElement.classList.remove('loading-placeholder');
            
            imgElement.style.opacity = '0';
            setTimeout(() => {
                imgElement.style.transition = 'opacity 0.3s ease';
                imgElement.style.opacity = '1';
            }, 10);
        };
        
        const onError = () => {
            imgElement.src = originalSrc;
            imgElement.classList.remove('loading-placeholder');
        };
        
        tempImg.onload = onLoadComplete;
        tempImg.onerror = onError;
        tempImg.src = originalSrc;
    }
}

// 初始化
new ExperienceImageLoader();
