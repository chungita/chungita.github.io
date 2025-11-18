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
        'about_subtitle': '生醫工程畢業生，專精於微小探頭and導管設計',
        'about_desc': '我畢業於清華大學生醫工程學系。我熱衷於開發能改善人類健康的技術',
        'cv_button': '下載我的履歷 (CV)',
        'projects_title': '作品集',
        'project1_title': '專案一：ECG 訊號即時監測 App',
        'project1_desc': '[簡短描述]：此專案開發了一個 Android 應用程式，能即時接收並視覺化穿戴式裝置傳來的 ECG 訊號，並使用 K-means 演算法初步篩選心律不整波形。',
        'project2_title': '專案二：超音波影像 AI 輔助診斷',
        'project2_desc': '[簡短描述]：訓練一個 YOLOv5 模型，用於即時偵測超音波影片中的特定解剖結構或病灶。',
        'project3_title': '專案三：3D 列印義肢原型設計',
        'project3_desc': '[簡短描述]：使用 SolidWorks 進行參數化設計，並透過 3D 列印製作出符合人體工學的低成本義肢手掌原型。',
        'contact_title': '聯絡我',
        'contact_desc': '歡迎透過以下方式與我聯繫，討論合作機會或任何問題！',
        'contact_email': 'Email: your.email@example.com',
        'footer_text': '&copy; 2025 [你的名字]. All Rights Reserved.',
    },
    // 英文內容
    'en': {
        'site_title': 'Your Name - BME Portfolio',
        'your_name': '[Your Name]',
        'nav_about': 'About Me',
        'nav_projects': 'Projects',
        'nav_contact': 'Contact',
        'lang_toggle': '中文', // 按鈕上顯示的文字
        'about_title': 'Hi, I am [Your Name]',
        'about_subtitle': 'Biomedical Engineer | Specialized in Medical Imaging and Biosignals',
        'about_desc': 'I am a BME graduate from [Your University]. I am passionate about developing technologies to improve human health. My expertise includes ECG/EEG signal analysis with Python, deep learning for medical image recognition, and prototyping medical devices with SolidWorks.',
        'cv_button': 'Download My CV',
        'projects_title': 'Projects',
        'project1_title': 'Project 1: Real-time ECG Monitoring App',
        'project1_desc': '[Description]: Developed an Android app to visualize real-time ECG signals from a wearable device, using K-means clustering for preliminary arrhythmia detection.',
        'project2_title': 'Project 2: AI-Assisted Ultrasound Diagnosis',
        'project2_desc': '[Description]: Trained a YOLOv5 model to detect and track specific anatomical structures or lesions in ultrasound videos in real-time.',
        'project3_title': 'Project 3: 3D-Printed Prosthetic Hand Design',
        'project3_desc': '[Description]: Utilized SolidWorks for parametric design and 3D printing to create a low-cost, ergonomic prosthetic hand prototype.',
        'contact_title': 'Contact Me',
        'contact_desc': 'Feel free to reach out for collaborations or any inquiries!',
        'contact_email': 'Email: your.email@example.com',
        'footer_text': '&copy; 2025 [Your Name]. All Rights Reserved.',
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
