// 优化版 JavaScript - 提高性能和加载速度

// 1. 使用常量存储翻译内容，减少内存占用
const translations = Object.freeze({
    // 中文内容
    'zh': Object.freeze({
        'site_title': '鍾易達 - 個人網站',
        'my_name': '鍾易達',
        'nav_about': '關於我',
        'nav_projects': '作品集',
        "nav_experiences": '經歷',
        'nav_contact': '聯絡我',
        'lang_toggle': 'English',
        'lang_toggle_mobile': '🌐',
        'about_title': '鍾易達',
        'about_subtitle': '生醫工程學士畢業生|專精於微小探頭and導管設計',
        'about_desc': '<strong><em>「今日的科學是明日的技術。」</em><br>- Edward Teller -</strong>',
        'cv_button': '個人履歷 (CV)',
        'projects_title': '作品集',
        'project1_title': '專案一：超聲波輔助溶栓導管',
        'project1_desc': '開發與驗證結合超音波導引與藥物溶栓的導管原型，以提升血栓溶解效率並降低對周圍組織的損傷。',
        'project2_title': '專案二：超音波微型陣列探頭，生成超音波Vortex',
        'project2_desc': '此專案旨在開發一款創新的超音波微型陣列探頭，能夠生成具有特殊空間結構的超音波渦旋（Ultrasound Vortex）。透過精密的多通道控制系統，實現對超音波聲場的精確調控。',
        'project3_title': '專案三：Drone object tracking using YOLOv12',
        'project3_desc': '利用AIRSIM 製作雙目立體視覺模擬資料訓練 YOLOv12 + RaftStereo模型以偵測並追蹤無人機在空間中的位置。',
        "experiences_title": "經歷",
        'exp1_title': '研發實習生',
        'exp1_company': '聲捷醫學 (SoundJet Medical Inc.)',
        'exp1_meta': '2023 年 - 2024 年 | 台灣',
        'exp1_desc': `
            <ul>
                <li>針對導管製程開發自動化樹脂注射系統，提升生產精確度。</li>
                <li>參與醫療器材原型設計與驗證流程。</li>
            </ul>`,
        'exp2_title': '清華大學中醫社社長',
        'exp2_company': '國立清華大學 (NTHU)',
        'exp2_meta': '2021 - 2023 | 台灣',
        'exp2_desc': `
            <ul>
                <li>執行多次偏鄉義診，學習中醫臨床知識。</li>
            </ul>`,
        'contact_title': '聯絡我',
        'contact_desc': '歡迎透過以下方式與我聯繫，討論合作機會或任何問題！',
        'contact_email': 'Email: joe.chungita@gmail.com',
        'footer_text': '&copy; 2025 I-TA CHUNG. All Rights Reserved.',
        'more_details': '更多細節',
    }),
    
    // 英文内容
    'en': Object.freeze({
        'site_title': 'I-TA CHUNG - Personal Website',
        'my_name': 'I-TA CHUNG',
        'nav_about': 'About Me',
        'nav_projects': 'Projects',
        "nav_experiences": 'Experiences',
        'nav_contact': 'Contact',
        'lang_toggle': '中文',
        'lang_toggle_mobile': '🌐',
        'about_title': 'I-Ta Chung',
        'about_subtitle': 'Biomedical Engineering (B.S.)<br>Specialized in Micro Transducer and Catheter Design',
        'about_desc': '<strong><em>"The science of today is the technology of tomorrow."</em><br>- Edward Teller -</strong>',
        'cv_button': 'Personal CV',
        'projects_title': 'Projects',
        'project1_title': 'Project 1: Ultrasound-assisted Thrombolytic Catheter',
        'project1_desc': 'Developed and validated a prototype catheter combining ultrasound with thrombolytic medicine delivery to improve clot dissolution efficiency while minimizing collateral tissue damage.',
        'project2_title': 'Project 2: Micro-array Ultrasound Transducer with Ultrasound Vortex Generation',
        'project2_desc': 'This project aims to develop an innovative micro-array ultrasound transducer capable of generating ultrasound vortex with special spatial structure. Through a precision multi-channel control system, it achieves accurate modulation of the ultrasound acoustic field.',
        'project3_title': 'Project 3: Drone Object Tracking using YOLOv12',
        'project3_desc': 'Utilized AIRSIM to create stereo vision simulation training data and trained a YOLOv12 + RaftStereo model to detect and track drone positions in 3D space.',
        "experiences_title": "Experiences",
        'exp1_title': 'R&D Intern',
        'exp1_company': 'SoundJet Medical Inc.',
        'exp1_meta': '2023 - 2024 | Taiwan',
        'exp1_desc': `
            <ul>
                <li>Developed an automated needle epoxy injection system for catheter manufacturing, improving production precision.</li>
                <li>Participated in medical device prototype design and validation processes.</li>
            </ul>`,
        'exp2_title': 'President of Traditional Chinese Medicine Club',
        'exp2_company': 'National Tsing Hua University (NTHU)',
        'exp2_meta': '2021 - 2023 | Taiwan',
        'exp2_desc': `
            <ul>
                <li>Organized multiple medical outreach programs in rural areas and learned clinical knowledge of traditional Chinese medicine.</li>
            </ul>`,
        'contact_title': 'Contact Me',
        'contact_desc': 'Feel free to reach out for collaborations or any inquiries!',
        'contact_email': 'Email: joe.chungita@gmail.com',
        'footer_text': '&copy; 2025 I-TA CHUNG. All Rights Reserved.',
        'more_details': 'More Details',
    })
});

// 2. 优化的DOM操作和事件处理
class PortfolioApp {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.isTargetVisible = false;
        this.currentTargetIndex = -1;
        this.cachedSectionTop = null;
        this.lastScrollCheck = 0;
        this.SCROLL_THROTTLE = 100; // ms
        this.resizeObserver = null;
        
        // 缓存DOM元素
        this.elements = {};
        
        // Target 和 Item 的配对关系
        this.targetItemPairs = Object.freeze([
            { target: 'files/images/game/targets/Coal_Ore.png', item: 'files/images/game/items/Coal.png' },
            { target: 'files/images/game/targets/Diamond_Ore.png', item: 'files/images/game/items/Diamond.png' },
            { target: 'files/images/game/targets/Emerald_Ore.png', item: 'files/images/game/items/Emerald.png' },
            { target: 'files/images/game/targets/Gold_Ore.png', item: 'files/images/game/items/Gold.png' },
            { target: 'files/images/game/targets/Iron_Ore.png', item: 'files/images/game/items/Iron.png' },
            { target: 'files/images/game/targets/Lapis_Lazuli_Ore.png', item: 'files/images/game/items/Lapis_Lazuli.png' },
            { target: 'files/images/game/targets/Redstone_Ore.png', item: 'files/images/game/items/Redstone.png' }
        ]);
    }

    // 初始化应用
    init() {
        this.cacheElements();
        this.bindEvents();
        this.translatePage(this.currentLang);
        this.initializePositionCache();
        this.handleScrollForGameImages();
        this.initializeImageLoading(); // 新增圖片加載初始化
    }

    // 初始化位置缓存和監聽器
    initializePositionCache() {
        // 等待一個 frame 確保佈局完成
        requestAnimationFrame(() => {
            this.updateSectionTopCache();
            this.setupResizeObserver();
        });
    }

    // 更新位置缓存
    updateSectionTopCache() {
        if (this.elements.experiencesSection) {
            this.cachedSectionTop = this.elements.experiencesSection.offsetTop;
        }
    }

    // 設置 ResizeObserver 來監聽佈局變化
    setupResizeObserver() {
        if ('ResizeObserver' in window && this.elements.experiencesSection) {
            this.resizeObserver = new ResizeObserver(() => {
                // 使用 requestAnimationFrame 避免在重排期間讀取幾何屬性
                requestAnimationFrame(() => {
                    this.updateSectionTopCache();
                });
            });
            this.resizeObserver.observe(this.elements.experiencesSection);
        }
    }

    // 缓存DOM元素以提高性能
    cacheElements() {
        this.elements = {
            langToggleMobile: document.getElementById('lang-toggle'),
            langToggleDesktop: document.getElementById('lang-toggle-desktop'),
            experiencesSection: document.getElementById('experiences'),
            gameImageElement: document.getElementById('random-game-image'),
            targetImageElement: document.getElementById('target-image'),
            itemImageElement: document.getElementById('item-image')
        };
    }

    // 绑定事件监听器
    bindEvents() {
        // 语言切换事件
        if (this.elements.langToggleMobile) {
            this.elements.langToggleMobile.addEventListener('click', () => this.switchLanguage());
        }
        
        if (this.elements.langToggleDesktop) {
            this.elements.langToggleDesktop.addEventListener('click', () => this.switchLanguage());
        }

        // 优化的滚动事件监听器 - 使用被动监听器
        window.addEventListener('scroll', () => this.handleScrollForGameImages(), { passive: true });
    }

    // 翻译页面的函数
    translatePage(lang) {
        // 更新 <html> 的 lang 属性
        document.documentElement.lang = lang;
        
        // 使用文档片段减少重绘
        const elements = document.querySelectorAll('[data-key]');
        const langData = translations[lang];
        
        if (!langData) return;

        // 批量更新以减少重绘次数和 CLS
        requestAnimationFrame(() => {
            // 暂时隐藏变化的元素以减少 layout shift
            document.documentElement.style.setProperty('--translation-update', '1');
            
            elements.forEach(element => {
                const key = element.getAttribute('data-key');
                if (langData[key] && element.innerHTML !== langData[key]) {
                    element.innerHTML = langData[key];
                }
            });
            
            // 特别处理手机版语言切换按钮
            if (this.elements.langToggleMobile && langData['lang_toggle_mobile']) {
                this.elements.langToggleMobile.innerHTML = langData['lang_toggle_mobile'];
            }
            
            // 恢复正常显示
            requestAnimationFrame(() => {
                document.documentElement.style.removeProperty('--translation-update');
            });
        });
    }

    // 语言切换函数
    switchLanguage() {
        // 切换语言
        this.currentLang = (this.currentLang === 'zh') ? 'en' : 'zh';
        
        // 储存新的语言选择到 localStorage
        localStorage.setItem('lang', this.currentLang);
        
        // 重新翻译页面
        this.translatePage(this.currentLang);
    }

    // 选择随机目标和物品
    selectRandomTargetAndItem() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.targetItemPairs.length);
        } while (newIndex === this.currentTargetIndex && this.targetItemPairs.length > 1);
        
        this.currentTargetIndex = newIndex;
        return this.targetItemPairs[this.currentTargetIndex];
    }

    // 优化的滚动处理函数
    handleScrollForGameImages() {
        const now = Date.now();
        if (now - this.lastScrollCheck < this.SCROLL_THROTTLE) return;
        this.lastScrollCheck = now;
        
        const { experiencesSection, gameImageElement, targetImageElement, itemImageElement } = this.elements;
        
        if (!experiencesSection || !gameImageElement || !targetImageElement || !itemImageElement) return;
        
        // 使用缓存的位置避免強制重排
        if (this.cachedSectionTop === null) {
            // 如果緩存尚未初始化，先跳過此次處理
            return;
        }
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const viewportBottom = scrollTop + windowHeight;
        
        // Steve 永远显示
        if (!gameImageElement.src.includes('Steve_pickaxe.png')) {
            gameImageElement.src = 'files/images/game/Steve_pickaxe.png';
            gameImageElement.classList.add('show');
        }
        
        // Target 和 Item 只在滚动到 experiences 区域时显示
        if (viewportBottom >= this.cachedSectionTop) {
            // 当 target 从不可见变为可见时，选择新的配对
            if (!this.isTargetVisible) {
                const pair = this.selectRandomTargetAndItem();
                targetImageElement.src = pair.target;
                itemImageElement.src = pair.item;
                this.isTargetVisible = true;
            }
            targetImageElement.classList.add('show');
            itemImageElement.classList.add('show');
        } else {
            targetImageElement.classList.remove('show');
            itemImageElement.classList.remove('show');
            this.isTargetVisible = false; // 离开区域后重置状态
        }
    }

    // 清理資源
    cleanup() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }

    // 初始化圖片加載監控
    initializeImageLoading() {
        // 為所有 picture 元素添加加載狀態監控
        const pictures = document.querySelectorAll('picture');
        pictures.forEach(picture => {
            // 如果已經有 image-loader 類，跳過
            if (picture.classList.contains('image-loader')) return;
            
            // 添加 image-loader 類
            picture.classList.add('image-loader');
            
            const img = picture.querySelector('img');
            if (!img) return;
            
            // 為圖片添加加載狀態監控
            this.setupImageLoadListener(picture, img);
        });

        // 也為直接的 img 標籤設置監控（如果有的話）
        const allImages = document.querySelectorAll('img[loading="lazy"], .project-image, .experience-media img');
        allImages.forEach(img => {
            if (img.closest('picture')) return; // 跳過已在 picture 中的圖片
            this.setupImageLoadListener(img, img);
        });
    }

    // 設置單個圖片的加載監控
    setupImageLoadListener(container, img) {
        const isLoaded = () => {
            return img.complete && img.naturalHeight !== 0;
        };

        const handleLoad = () => {
            // 移除加載狀態
            container.classList.remove('loading');
            img.classList.remove('loading');
        };

        const handleError = () => {
            // 即使出錯也移除加載狀態
            container.classList.remove('loading');
            img.classList.remove('loading');
        };

        // 如果圖片已經加載過
        if (isLoaded()) {
            handleLoad();
        } else {
            // 添加加載狀態
            container.classList.add('loading');
            img.classList.add('loading');
            
            // 監聽加載事件
            img.addEventListener('load', handleLoad, { once: true });
            img.addEventListener('error', handleError, { once: true });
        }

        // 處理 srcset 變化的情況（Intersection Observer）
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // 圖片進入視口時，檢查加載狀態
                        if (!isLoaded()) {
                            container.classList.add('loading');
                            img.classList.add('loading');
                        } else {
                            container.classList.remove('loading');
                            img.classList.remove('loading');
                        }
                    }
                });
            }, { rootMargin: '50px' });
            
            observer.observe(img);
        }
    }
}

// 使用 DOMContentLoaded 事件优化初始化时机
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new PortfolioApp();
        app.init();
    });
} else {
    // DOM已经加载完成
    const app = new PortfolioApp();
    app.init();
}


