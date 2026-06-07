// 優化版 JavaScript - 提高性能和加載速度

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

// 2. 優化的 DOM 操作和事件處理
class PortfolioApp {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.isTargetVisible = false;
        this.currentTargetIndex = -1;
        this.cachedSectionTop = null;
        this.lastScrollCheck = 0;
        this.SCROLL_THROTTLE = 100;
        this.resizeObserver = null;
        this.elements = {};
        this.headshotPhotos = Object.freeze([
            'files/images/headshot/chungita_nthu_2024_graduation_photo1.jpg',
            'files/images/headshot/chungita_nthu_2024_graduation_photo2.jpg',
            'files/images/headshot/chungita_nthu_2024_graduation_photo3.jpg',
            'files/images/headshot/chungita_nthu_2024_graduation_photo4.jpg',
            'files/images/headshot/chungita_nthu_2024_graduation_photo5.jpg'
        ]);
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

    init() {
        this.cacheElements();
        this.bindEvents();
        this.translatePage(this.currentLang);
        this.loadRandomHeadshot();
        this.setupSkeletonLoading();
        this.initializePositionCache();
        this.handleScrollForGameImages();
    }

    initializePositionCache() {
        requestAnimationFrame(() => {
            this.updateSectionTopCache();
            this.setupResizeObserver();
        });
    }

    updateSectionTopCache() {
        if (this.elements.experiencesSection) {
            this.cachedSectionTop = this.elements.experiencesSection.offsetTop;
        }
    }

    setupResizeObserver() {
        if ('ResizeObserver' in window && this.elements.experiencesSection) {
            this.resizeObserver = new ResizeObserver(() => {
                requestAnimationFrame(() => {
                    this.updateSectionTopCache();
                });
            });
            this.resizeObserver.observe(this.elements.experiencesSection);
        }
    }

    cacheElements() {
        this.elements = {
            langToggleMobile: document.getElementById('lang-toggle'),
            langToggleDesktop: document.getElementById('lang-toggle-desktop'),
            experiencesSection: document.getElementById('experiences'),
            gameImageElement: document.getElementById('random-game-image'),
            targetImageElement: document.getElementById('target-image'),
            itemImageElement: document.getElementById('item-image'),
            headshotElement: document.getElementById('random-headshot')
        };
    }

    loadRandomHeadshot() {
        if (!this.elements.headshotElement) return;
        
        // 获取上次使用的照片索引
        const lastUsedIndex = parseInt(localStorage.getItem('lastHeadshotIndex')) || -1;
        
        // 创建可用照片索引数组（排除上次使用的）
        let availableIndices = [];
        for (let i = 0; i < this.headshotPhotos.length; i++) {
            if (i !== lastUsedIndex) {
                availableIndices.push(i);
            }
        }
        
        // 如果所有照片都用过了（只有在只有一张照片时才会发生），则重置
        if (availableIndices.length === 0) {
            availableIndices = Array.from({ length: this.headshotPhotos.length }, (_, i) => i);
        }
        
        // 随机选择一个索引
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        
        // 设置图片
        this.elements.headshotElement.src = this.headshotPhotos[randomIndex];
        
        // 保存这次使用的索引
        localStorage.setItem('lastHeadshotIndex', randomIndex.toString());
    }

    bindEvents() {
        if (this.elements.langToggleMobile) {
            this.elements.langToggleMobile.addEventListener('click', () => this.switchLanguage());
        }
        if (this.elements.langToggleDesktop) {
            this.elements.langToggleDesktop.addEventListener('click', () => this.switchLanguage());
        }
        window.addEventListener('scroll', () => this.handleScrollForGameImages(), { passive: true });
    }

    setupSkeletonLoading() {
        // Handle img elements with skeleton-loading class
        document.querySelectorAll('img.skeleton-loading').forEach(img => {
            if (img.complete) {
                // Image is already cached/loaded
                img.classList.remove('skeleton-loading');
            } else {
                img.addEventListener('load', () => {
                    img.classList.remove('skeleton-loading');
                });
                img.addEventListener('error', () => {
                    img.classList.remove('skeleton-loading');
                });
            }
        });

        // Handle picture elements with skeleton-loading class
        document.querySelectorAll('picture.skeleton-loading').forEach(picture => {
            const img = picture.querySelector('img');
            if (img) {
                if (img.complete) {
                    picture.classList.remove('skeleton-loading');
                } else {
                    img.addEventListener('load', () => {
                        picture.classList.remove('skeleton-loading');
                    });
                    img.addEventListener('error', () => {
                        picture.classList.remove('skeleton-loading');
                    });
                }
            }
        });

        // Handle video elements with skeleton-loading class
        document.querySelectorAll('video.skeleton-loading').forEach(video => {
            const handleLoadStart = () => {
                video.classList.add('skeleton-loading');
            };
            const handleCanPlay = () => {
                video.classList.remove('skeleton-loading');
            };
            const handleError = () => {
                video.classList.remove('skeleton-loading');
            };

            video.addEventListener('canplay', handleCanPlay);
            video.addEventListener('error', handleError);
            
            // If video is already playing/loaded
            if (video.readyState >= 2) {
                video.classList.remove('skeleton-loading');
            }
        });
    }

    translatePage(lang) {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-key]');
        const langData = translations[lang];
        if (!langData) return;

        requestAnimationFrame(() => {
            elements.forEach(element => {
                const key = element.getAttribute('data-key');
                if (langData[key] && element.innerHTML !== langData[key]) {
                    element.innerHTML = langData[key];
                }
            });
        });
    }

    switchLanguage() {
        this.currentLang = (this.currentLang === 'zh') ? 'en' : 'zh';
        localStorage.setItem('lang', this.currentLang);
        this.translatePage(this.currentLang);
    }

    selectRandomTargetAndItem() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.targetItemPairs.length);
        } while (newIndex === this.currentTargetIndex && this.targetItemPairs.length > 1);
        this.currentTargetIndex = newIndex;
        return this.targetItemPairs[this.currentTargetIndex];
    }

    handleScrollForGameImages() {
        const now = Date.now();
        if (now - this.lastScrollCheck < this.SCROLL_THROTTLE) return;
        this.lastScrollCheck = now;

        const { experiencesSection, gameImageElement, targetImageElement, itemImageElement } = this.elements;
        if (!experiencesSection || !gameImageElement || !targetImageElement || !itemImageElement) return;
        if (this.cachedSectionTop === null) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const viewportBottom = scrollTop + windowHeight;

        if (!gameImageElement.src.includes('Steve_pickaxe.png')) {
            gameImageElement.src = 'files/images/game/Steve_pickaxe.png';
            gameImageElement.classList.add('show');
        }

        if (viewportBottom >= this.cachedSectionTop) {
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
            this.isTargetVisible = false;
        }
    }

    cleanup() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new PortfolioApp();
        app.init();
    });
} else {
    const app = new PortfolioApp();
    app.init();
}
