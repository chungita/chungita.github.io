// 1. 儲存所有語言的文字內容
const translations = {
    // 中文內容
    'zh': {
        'site_title': '鍾易達 - 生醫工程作品集',
        'your_name': '鍾易達',
        'nav_about': '關於我',
        'nav_projects': '作品集',
        'nav_contact': '聯絡我',
        'lang_toggle': 'English', // 按鈕上顯示的文字
        'about_title': '你好，我是鍾易達',
        'about_subtitle': '生醫工程畢業生|專精於微小探頭and導管設計',
        'about_desc': '我畢業於清華大學生醫工程學系。我熱衷於開發能改善人類健康的技術',
        'cv_button': '下載我的履歷 (CV)',
        'projects_title': '作品集',
        'project1_title': '專案一：超聲波輔助溶栓導管',
        'project1_desc': '[簡短描述]：開發與驗證結合超音波導引與藥物溶栓的導管原型，以提升血栓溶解效率並降低對周圍組織的損傷。',
        'project2_title': '專案二：超音波影像微型陣列探頭輔助生成超音波Vortex',
        'project2_desc': '[簡短描述]：用於視覺化超音波聲場傳遞。',
        'project3_title': '專案三：Drone object tracking using YOLOv12',
        'project3_desc': '[簡短描述]：訓練 YOLOv12 模型以即時偵測並追蹤無人機攝影機畫面中的特定物體。',
        'contact_title': '聯絡我',
        'contact_desc': '歡迎透過以下方式與我聯繫，討論合作機會或任何問題！',
        'contact_email': 'Email: joe.chungita@gmail.com',
        'footer_text': '&copy; 2025 CHUNG, I-TA. All Rights Reserved.',
    },
    // 英文內容
    'en': {
        'site_title': 'Chung I-Ta - Biomedical Engineering Portfolio',
        'your_name': 'CHUNG, I-TA',
        'nav_about': 'About Me',
        'nav_projects': 'Projects',
        'nav_contact': 'Contact',
        'lang_toggle': '中文', // 按鈕上顯示的文字
        'about_title': 'Hi, I am Chung I-Ta',
        'about_subtitle': 'Biomedical Engineering Graduate | Specialized in Micro Probe and Catheter Design',
        'about_desc': 'I graduated from the Department of Biomedical Engineering at NTHU. I am passionate about developing technologies that improve human health.',
        'cv_button': 'Download My CV',
        'projects_title': 'Projects',
        'project1_title': 'Project 1: Ultrasound-assisted Thrombolytic Catheter',
        'project1_desc': 'Developed and validated a prototype catheter combining ultrasound guidance with thrombolytic delivery to improve clot dissolution efficiency while minimizing collateral tissue damage.',
        'project2_title': 'Project 2: Micro-array Ultrasound Probe Assisted Ultrasound Vortex Generation',
        'project2_desc': 'Used to visualize ultrasound acoustic field propagation.',
        'project3_title': 'Project 3: Drone Object Tracking using YOLOv12',
        'project3_desc': 'Trained a YOLOv12 model to detect and track specific objects in drone camera footage in real-time.',
        'contact_title': 'Contact Me',
        'contact_desc': 'Feel free to reach out for collaborations or any inquiries!',
        'contact_email': 'Email: joe.chungita@gmail.com',
        'footer_text': '&copy; 2025 CHUNG, I-TA. All Rights Reserved.',
    }
};

// 2. DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');

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
    };

    // 獲取儲存的語言，若無則預設為 'zh'
    let currentLang = localStorage.getItem('lang') || 'zh';
    
    // 立即翻譯頁面
    translatePage(currentLang);

    // 監聽切換按鈕點擊事件
    langToggle.addEventListener('click', () => {
        // 切換語言
        currentLang = (currentLang === 'zh') ? 'en' : 'zh';
        
        // 儲存新的語言選擇到 localStorage
        localStorage.setItem('lang', currentLang);
        
        // 重新翻譯頁面
        translatePage(currentLang);
    });

});


