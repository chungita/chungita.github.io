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
            
        // 經歷 2: NCKU RA
        'exp2_title': '研究助理',
        'exp2_company': '國立成功大學 (NCKU)',
        'exp2_meta': '2023 年 - 2024 年 | 台灣，台南',
        'exp2_desc': `
            <ul>
                <li>專注於基於人工智慧的結構健康監測 (AISHM) 研究。</li>
                <li>應用深度學習模型分析結構數據，協助開發預測維護系統。</li>
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
        'about_desc': 'I graduated from the Department of Biomedical Engineering at NTHU. I am passionate about developing technologies that improve human health.',
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

        // Experience 2: NCKU RA
        'exp2_title': 'Research Assistant',
        'exp2_company': 'National Cheng Kung University (NCKU)',
        'exp2_meta': '2023 - 2024 | Tainan, Taiwan',
        'exp2_desc': `
            <ul>
                <li>Focused on AI-based Structural Health Monitoring (AISHM).</li>
                <li>Applied deep learning models to analyze structural data and assisted in developing predictive maintenance systems.</li>
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
    setRandomGameImage();
    setRandomProfilePicture();
    
    // 添加滾動事件監聽器
    window.addEventListener('scroll', function() {
        handleScrollForGameImage();
        handleScrollForProfileImage();
    });
    
    // 初始檢查一次（防止頁面載入時已經滾動到相關部分）
    handleScrollForGameImage();
    handleScrollForProfileImage();

});

// 當前選擇的圖片索引
let currentProfileIndex = -1;
let currentGameIndex = -1;

// 設置隨機大頭貼（不重複）
function setRandomProfilePicture() {
    const profileImages = [
        'files/images/headshot/chungita_nthu_2024_graduation_photo1.jpg',
        'files/images/headshot/chungita_nthu_2024_graduation_photo2.jpg'
    ];
    
    let newIndex;
    // 確保新圖片與上一張不同
    do {
        newIndex = Math.floor(Math.random() * profileImages.length);
    } while (newIndex === currentProfileIndex && profileImages.length > 1);
    
    currentProfileIndex = newIndex;
    const selectedImage = profileImages[currentProfileIndex];
    
    console.log('Setting profile picture to:', selectedImage); // 調試用
    
    // 設置大頭貼圖片源
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.src = selectedImage;
        console.log('Profile picture element found and updated'); // 調試用
    } else {
        console.log('Profile picture element not found'); // 調試用
    }
}

// 設置隨機遊戲圖片（不重複）
function setRandomGameImage() {
    const gameImages = [
        'files/images/game/hornet.png',
        'files/images/game/Melinoë.png', 
        'files/images/game/steve.png',
        'files/images/game/miyabi.png'
    ];
    
    let newIndex;
    // 確保新圖片與上一張不同
    do {
        newIndex = Math.floor(Math.random() * gameImages.length);
    } while (newIndex === currentGameIndex && gameImages.length > 1);
    
    currentGameIndex = newIndex;
    const selectedImage = gameImages[currentGameIndex];
    
    // 設置圖片源
    const gameImageElement = document.getElementById('random-game-image');
    if (gameImageElement) {
        gameImageElement.src = selectedImage;
    }
}

// 追蹤角色是否已顯示的狀態
let isGameImageVisible = false;
let isProfileImageVisible = false; // 大頭貼初始為不可見，以便首次載入時觸發設置

// 監聽滾動事件，當滾動到關於部分時刷新大頭貼
function handleScrollForProfileImage() {
    const aboutSection = document.getElementById('about');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!aboutSection) return;
    
    const sectionTop = aboutSection.offsetTop;
    const sectionBottom = sectionTop + aboutSection.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // 當滾動到關於部分時（簡化檢測邏輯）
    if (scrollTop + windowHeight >= sectionTop && scrollTop <= sectionBottom) {
        // 只有當之前不可見時才重新選擇圖片
        if (!isProfileImageVisible) {
            setRandomProfilePicture();
            isProfileImageVisible = true;
        }
    } else {
        isProfileImageVisible = false;
    }
}

// 監聽滾動事件，當滾動到經歷部分時顯示圖片
function handleScrollForGameImage() {
    const experiencesSection = document.getElementById('experiences');
    const gameImageElement = document.getElementById('random-game-image');
    
    if (!experiencesSection || !gameImageElement) return;
    
    const sectionTop = experiencesSection.offsetTop;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    // 當滾動到經歷部分時顯示圖片
    if (scrollTop + windowHeight >= sectionTop) {
        // 只有當角色之前不可見時才重新選擇圖片
        if (!isGameImageVisible) {
            setRandomGameImage();
            isGameImageVisible = true;
        }
        gameImageElement.classList.add('show');
    } else {
        gameImageElement.classList.remove('show');
        isGameImageVisible = false; // 角色消失時重置狀態
    }
}


