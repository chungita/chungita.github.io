// 1. 儲存所有語言的文字內容
const translations = {
    // 中文內容
    'zh': {
        'site_title': '鍾易達 - 個人網站',
        'my_name': '鍾易達',
        'nav_about': '關於我',
        'nav_projects': '作品集',
        "nav_experiences": '經歷',
        'nav_contact': '聯絡我',
        'lang_toggle': 'English', // 桌面版按鈕文字
        'lang_toggle_mobile': '🌐', // 手機版emoji
        'about_title': '鍾易達',
        'about_subtitle': '生醫工程學士畢業生|專精於微小探頭and導管設計',
        'about_desc': '畢業於清華大學生醫工程學系。我熱衷於開發能改善人類健康的技術',
        'cv_button': '我的履歷 (CV)',
        'projects_title': '作品集',
        'project1_title': '專案一：超聲波輔助溶栓導管',
        'project1_desc': '開發與驗證結合超音波導引與藥物溶栓的導管原型，以提升血栓溶解效率並降低對周圍組織的損傷。',
        'project2_title': '專案二：超音波微型陣列探頭，生成超音波Vortex',
        'project2_desc': '用於視覺化超音波聲場傳遞。',
        'project3_title': '專案三：Drone object tracking using YOLOv12',
        'project3_desc': '訓練 YOLOv12 模型以即時偵測並追蹤無人機攝影機畫面中的特定物體。',
        "experiences_title": "經歷", // 注意拼字修正
        // 經歷 1: SoundJet
        'exp1_title': '研發實習生',
        'exp1_company': '聲捷醫學 (SoundJet Medical Inc.)',
        'exp1_meta': '2023 年 - 2024 年 | 台灣',
        'exp1_desc': `
            <ul>
                <li>針對導管製程開發自動化樹脂注射系統，提升生產精確度。</li>
                <li>參與醫療器材原型設計與驗證流程。</li>
            </ul>`,
            
        // 經歷 2: 中醫社社長
        'exp2_title': '中醫社社長',
        'exp2_company': '國立清華大學 (NTHU)',
        'exp2_meta': '2021 - 2023 | 台灣',
        'exp2_desc': `
            <ul>
                <li>執行多次偏鄉義診，學習中醫臨床知識。</li>
            </ul>`,
        'contact_title': '聯絡我',
        'contact_desc': '歡迎透過以下方式與我聯繫，討論合作機會或任何問題！',
        'contact_email': 'Email: joe.chungita@gmail.com',
        'footer_text': '&copy; 2025 CHUNG, I-TA. All Rights Reserved.',
        'more_details': '更多細節',
        'warning_content': '血腥內容警告',
        'warning_click': '點擊查看',
    },
    // 英文內容
    'en': {
        'site_title': 'Chung I-Ta - Personal Website',
        'my_name': 'CHUNG, I-TA',
        'nav_about': 'About Me',
        'nav_projects': 'Projects',
        "nav_experiences": 'Experiences',
        'nav_contact': 'Contact',
        'lang_toggle': '中文', // 桌面版按鈕文字
        'lang_toggle_mobile': '🌐', // 手機版emoji
        'about_title': 'Chung I-Ta',
        'about_subtitle': 'Biomedical Engineering (B.S.)<br>Specialized in Micro Transducer and Catheter Design',
        'about_desc': 'I graduated from the Department of Biomedical Engineering at NTHU.<br>I am passionate about developing technologies that improve human health.',
        'cv_button': 'My CV',
        'projects_title': 'Projects',
        'project1_title': 'Project 1: Ultrasound-assisted Thrombolytic Catheter',
        'project1_desc': 'Developed and validated a prototype catheter combining ultrasound with thrombolytic medicine delivery to improve clot dissolution efficiency while minimizing collateral tissue damage.',
        'project2_title': 'Project 2: Micro-array Ultrasound Transducer with Ultrasound Vortex Generation',
        'project2_desc': 'Used to visualize ultrasound acoustic field propagation.',
        'project3_title': 'Project 3: Drone Object Tracking using YOLOv12',
        'project3_desc': 'Trained a YOLOv12 model to detect and track specific objects in drone camera footage in real-time.',
        "experiences_title": "Experiences", // 注意拼字修正
        // Experience 1: SoundJet
        'exp1_title': 'R&D Intern',
        'exp1_company': 'SoundJet Medical Inc.',
        'exp1_meta': '2023 - 2024 | Taiwan',
        'exp1_desc': `
            <ul>
                <li>Developed an automated needle epoxy injection system for catheter manufacturing, improving production precision.</li>
                <li>Participated in medical device prototype design and validation processes.</li>
            </ul>`,

        // Experience 2: 中醫社社長
        'exp2_title': 'President of Chinese Medicine Club ',
        'exp2_company': 'National Tsing Hua University (NTHU)',
        'exp2_meta': '2021 - 2023 | Taiwan',
        'exp2_desc': `
            <ul>
                <li>Organized multiple medical outreach programs in rural areas and learned clinical knowledge of traditional Chinese medicine.</li>
            </ul>`,

        'contact_title': 'Contact Me',
        'contact_desc': 'Feel free to reach out for collaborations or any inquiries!',
        'contact_email': 'Email: joe.chungita@gmail.com',
        'footer_text': '&copy; 2025 CHUNG, I-TA. All Rights Reserved.',
        'more_details': 'More Details',
        'warning_content': 'Graphic Content Warning',
        'warning_click': 'Click to View',
    }
};

// 2. DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
    const langToggleMobile = document.getElementById('lang-toggle');
    const langToggleDesktop = document.getElementById('lang-toggle-desktop');

    // 翻譯頁面的函數
    const translatePage = (lang) => {
        // 更新 <html> 的 lang 屬性
        document.documentElement.lang = lang;
        
        // 抓取所有帶有 data-key 的元素
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            // 檢查 translations 物件和對應的 lang 是否有這個 key
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key]; // 使用 innerHTML 才能正確顯示 &copy; 等符號
            }
        });
        
        // 特別處理手機版語言切換按鈕
        if (langToggleMobile && translations[lang]['lang_toggle_mobile']) {
            langToggleMobile.innerHTML = translations[lang]['lang_toggle_mobile'];
        }
    };

    // 語言切換函數
    const switchLanguage = () => {
        // 切換語言
        currentLang = (currentLang === 'zh') ? 'en' : 'zh';
        
        // 儲存新的語言選擇到 localStorage
        localStorage.setItem('lang', currentLang);
        
        // 重新翻譯頁面
        translatePage(currentLang);
    };

    // 獲取儲存的語言，若無則預設為 'en'
    let currentLang = localStorage.getItem('lang') || 'en';
    
    // 立即翻譯頁面
    translatePage(currentLang);

    // 監聽手機版切換按鈕點擊事件
    if (langToggleMobile) {
        langToggleMobile.addEventListener('click', switchLanguage);
    }
    
    // 監聽桌面版切換按鈕點擊事件
    if (langToggleDesktop) {
        langToggleDesktop.addEventListener('click', switchLanguage);
    }

    // 初始化圖片功能
    setRandomProfilePicture();
    
    // 添加滾動事件監聽器
    window.addEventListener('scroll', function() {
        handleScrollForProfileImage();
        handleScrollForGameImages();
    });
    
    // 初始檢查一次（防止頁面載入時已經滾動到相關部分）
    handleScrollForProfileImage();
    handleScrollForGameImages();

});

let currentProfileIndex = -1;
let isProfileImageVisible = false;
let isFirstLoad = true; // 追蹤是否為首次加載
let currentGameIndex = -1;
let currentSelectedGameImage = null;
let isGameImageVisible = false;

function setRandomProfilePicture() {
    const profileImages = [
        'files/images/headshot/chungita_nthu_2024_graduation_photo1.jpg',
        'files/images/headshot/chungita_nthu_2024_graduation_photo2.jpg',
        'files/images/headshot/chungita_nthu_2024_graduation_photo3.jpg',
        'files/images/headshot/chungita_nthu_2024_graduation_photo4.jpg',
        'files/images/headshot/chungita_nthu_2024_graduation_photo5.jpg'
    ];
    
    let newIndex;
    
    // 如果是首次加載，總是顯示第一張圖片（索引0）
    if (isFirstLoad) {
        newIndex = 0;
        isFirstLoad = false;
    } else {
        // 之後則隨機選擇不同的圖片
        do {
            newIndex = Math.floor(Math.random() * profileImages.length);
        } while (newIndex === currentProfileIndex && profileImages.length > 1);
    }
    
    currentProfileIndex = newIndex;
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.src = profileImages[currentProfileIndex];
    }
}

function handleScrollForProfileImage() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const sectionTop = aboutSection.offsetTop;
    const sectionBottom = sectionTop + aboutSection.offsetHeight;
    
    if (scrollTop + windowHeight >= sectionTop && scrollTop <= sectionBottom) {
        if (!isProfileImageVisible) {
            setRandomProfilePicture();
            isProfileImageVisible = true;
        }
    } else {
        isProfileImageVisible = false;
    }
}

function selectNewGameAndTarget() {
    const gameImages = [
        'files/images/game/character/hornet.png',
        'files/images/game/character/Melinoë.png', 
        'files/images/game/character/steve.png',
        'files/images/game/character/miyabi.png',
        'files/images/game/character/miku.png'
    ];
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * gameImages.length);
    } while (newIndex === currentGameIndex && gameImages.length > 1);
    
    currentGameIndex = newIndex;
    currentSelectedGameImage = gameImages[currentGameIndex];
    setTargetImage(currentSelectedGameImage);
}

function setTargetImage(gameImagePath) {
    const targetMapping = {
        'hornet.png': 'hornet_target.png',
        'Melinoë.png': 'Melinoë_target.png',
        'steve.png': 'steve_target.png',
        'miyabi.png': 'miyabi_target.png',
        'miku.png': 'miku_target.png'
    };
    
    const fileName = gameImagePath.split('/').pop();
    const targetFileName = targetMapping[fileName];
    
    if (targetFileName) {
        const targetImagePath = `files/images/game/target/${targetFileName}`;
        const targetImageElement = document.getElementById('target-image');
        if (targetImageElement) {
            targetImageElement.src = targetImagePath;
        }
    } else {
        console.error('找不到對應的目標圖片:', fileName);
    }
}

function handleScrollForGameImages() {
    const experiencesSection = document.getElementById('experiences');
    const gameImageElement = document.getElementById('random-game-image');
    const targetImageElement = document.getElementById('target-image');
    
    if (!experiencesSection || !gameImageElement || !targetImageElement) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const sectionTop = experiencesSection.offsetTop;
    const viewportBottom = scrollTop + windowHeight;
    
    if (viewportBottom >= sectionTop) {
        if (!isGameImageVisible) {
            selectNewGameAndTarget();
            gameImageElement.src = currentSelectedGameImage;
            isGameImageVisible = true;
        }
        gameImageElement.classList.add('show');
        targetImageElement.classList.add('show');
    } else {
        gameImageElement.classList.remove('show');
        targetImageElement.classList.remove('show');
        isGameImageVisible = false;
    }
}


