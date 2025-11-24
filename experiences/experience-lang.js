// 經歷詳細頁面專用的語言翻譯系統

const translations = {
    // 中文內容
    'zh': {
        'site_title': '鍾易達 - 個人網站',
        'back_home': '◀ 返回首頁',
        'lang_toggle': 'English',
        'footer_text': '&copy; 2025 CHUNG, I-TA. All Rights Reserved.',
        
        // Experience 1: SoundJet 實習
        'exp1_title': '研發實習生',
        'exp1_company': '聲捷醫學 (SoundJet Medical Inc.)',
        'exp1_meta': '2023 年 - 2024 年 | 台灣',
        'exp1_overview_title': '經歷概述',
        'exp1_overview_desc': '在聲捷醫學實習期間，我參與了超音波輔助溶栓導管的研發工作，從製程自動化到臨床前驗證。',
        'exp1_photo1_caption': '實習工作現場',
        'exp1_photo2_caption': '血壓量測實驗',
        'exp1_responsibilities_title': '主要職責',
        'exp1_responsibilities_desc': `
            <ul>
                <li>開發自動化樹脂注射系統，提升導管製程的精確度與一致性</li>
                <li>參與醫療器材原型設計、組裝與功能驗證</li>
                <li>協助進行動物實驗與數據分析</li>
            </ul>`,
        'exp1_research_title': '動物實驗',
        'exp1_research_desc': '參與豬肺血栓溶解實驗，驗證超音波輔助溶栓導管的效能。',
        'exp1_achievements_title': '主要成果',
        'exp1_achievements_desc': `
            <ul>
                <li>成功開發自動化注射系統，將製程時間縮短30%</li>
                <li>提升產品良率，減少人為操作誤差</li>
                <li>完成多次動物實驗，驗證產品可行性</li>
                <li>實驗設計、執行與數據分析</li>
            </ul>`,
        'exp1_skills_title': '習得技能',
        'exp1_skills_desc': ``,
        'exp1_certificate_title': '實習證書',
        'exp1_certificate_desc': '',
        'warning_content': '血腥內容警告',
        'warning_click': '點擊查看',
        'warning_click_to_reveal': '點擊下方圖片以查看',
        
        // Experience 2: 中醫社社長
        'exp2_title': '中醫社社長',
        'exp2_company': '國立清華大學 (NTHU)',
        'exp2_meta': '2021 - 2023 | 台灣',
        'exp2_overview_title': '職務概述',
        'exp2_overview_desc': '擔任國立清華大學中醫社社長期間，負責社團運營、活動規劃與偏鄉義診服務，推廣中醫知識並服務社區。透過領導社團，我學習到如何結合傳統智慧與現代管理，為更多人帶來健康與關懷。',
        'exp2_photo1_caption': '中醫社活動照片',
        'exp2_photo2_caption': '社團活動圖集',
        'exp2_responsibilities_title': '主要職責',
        'exp2_responsibilities_desc': `
            <ul>
                <li>統籌社團年度活動規劃與執行</li>
                <li>組織並參與多次偏鄉義診活動</li>
                <li>邀請中醫師進行講座與實作課程</li>
                <li>管理社團財務與行政事務</li>
                <li>招募新社員並培訓幹部團隊</li>
            </ul>`,
        'exp2_service_title': '義診服務',
        'exp2_service_desc': '帶領社員前往偏鄉地區提供免費中醫諮詢與推拿服務，讓更多人認識中醫療法的價值。',
        'exp2_poster1_caption': '義診活動海報',
        'exp2_poster2_caption': '義診宣傳海報',
        'exp2_learning_title': '學習內容',
        'exp2_learning_desc': `
            <ul>
                <li>中醫基礎理論：陰陽五行、經絡穴位</li>
                <li>推拿手法與實作練習</li>
                <li>常見病症的中醫診斷與處理</li>
                <li>中藥材認識與應用</li>
            </ul>`,
        'exp2_achievements_title': '主要成果',
        'exp2_achievements_desc': `
            <ul>
                <li>成功舉辦5場偏鄉義診活動</li>
                <li>獲得學校與社區的高度肯定</li>
            </ul>`,
        'exp2_skills_title': '習得能力',
        'exp2_skills_desc': `
            <ul>
                <li>領導與團隊管理能力</li>
                <li>活動企劃與執行經驗</li>
                <li>公關與對外聯繫能力</li>
                <li>預算規劃與資源分配</li>
            </ul>`,
        'exp2_reflection_title': '心得反思',
        'exp2_reflection_desc': '擔任中醫社社長的經歷讓我深刻體會到服務他人的意義，也培養了我的領導與組織能力。透過義診活動，我不僅學習到中醫知識，更學會如何與不同背景的人溝通，如何在資源有限的情況下完成目標。這段經歷對我日後從事生醫工程研發工作有很大的啟發，讓我更加重視技術應用的人文關懷面向。',
    },
    
    // 英文內容
    'en': {
        'site_title': 'I-Ta Chung - Personal Website',
        'back_home': '◀ Back to Home',
        'lang_toggle': '中文',
        'footer_text': '&copy; 2025 CHUNG, I-TA. All Rights Reserved.',
        
        // Experience 1: SoundJet Internship
        'exp1_title': 'R&D Intern',
        'exp1_company': 'SoundJet Medical Inc.',
        'exp1_meta': '2023 - 2024 | Taiwan',
        'exp1_overview_title': 'Experience Overview',
        'exp1_overview_desc': 'During my internship at SoundJet Medical, I participated in the R&D of ultrasound-assisted thrombolytic catheters, from process automation to preclinical validation.',
        'exp1_photo1_caption': 'Porcine Experiment',
        'exp1_photo2_caption': 'Blood Pressure Measurement Experiment',
        'exp1_responsibilities_title': 'Key Responsibilities',
        'exp1_responsibilities_desc': `
            <ul>
                <li>Developed an automated epoxy injection system to enhance precision and consistency in catheter manufacturing processes</li>
                <li>Participated in medical device prototype design, assembly, and functional validation</li>
                <li>Assisted in conducting animal experiments and data analysis</li>
            </ul>`,
        'exp1_research_title': 'Animal Experiments',
        'exp1_research_desc': 'Participated in porcine pulmonary thrombolysis experiments to validate the efficacy of ultrasound-assisted thrombolytic catheters.',
        'exp1_achievements_title': 'Key Achievements',
        'exp1_achievements_desc': `
            <ul>
                <li>Successfully developed an automated injection system, reducing process time by 30%</li>
                <li>Improved product yield and reduced human error</li>
                <li>Completed multiple animal experiments, validating product feasibility</li>
                <li>Experimental design, execution, and data analysis</li>
            </ul>`,
        'exp1_skills_title': 'Skills Acquired',
        'exp1_skills_desc': ``,
        'exp1_certificate_title': 'Internship Certificate',
        'exp1_certificate_desc': '',
        'warning_content': 'Graphic Content Warning',
        'warning_click': 'Click to View',
        'warning_click_to_reveal': 'Click images below to reveal',
        
        // Experience 2: President of Chinese Medicine Club
        'exp2_title': 'President of Chinese Medicine Club',
        'exp2_company': 'National Tsing Hua University (NTHU)',
        'exp2_meta': '2021 - 2023 | Taiwan',
        'exp2_overview_title': 'Position Overview',
        'exp2_overview_desc': 'As President of the Chinese Medicine Club at National Tsing Hua University, I was responsible for club operations, activity planning, and medical outreach services in rural areas, promoting traditional Chinese medicine knowledge and serving the community. Through leading the club, I learned how to combine traditional wisdom with modern management to bring health and care to more people.',
        'exp2_photo1_caption': 'Chinese Medicine Club Activity Photo',
        'exp2_photo2_caption': 'Club Activity Gallery',
        'exp2_responsibilities_title': 'Key Responsibilities',
        'exp2_responsibilities_desc': `
            <ul>
                <li>Coordinated annual club activity planning and execution</li>
                <li>Organized and participated in multiple medical outreach activities in rural areas</li>
                <li>Invited Chinese medicine practitioners for lectures and hands-on courses</li>
                <li>Managed club finances and administrative affairs</li>
                <li>Recruited new members and trained the leadership team</li>
            </ul>`,
        'exp2_service_title': 'Medical Outreach Services',
        'exp2_service_desc': 'Led club members to rural areas to provide free Chinese medicine consultations and massage therapy services, helping more people understand the value of traditional Chinese medicine.',
        'exp2_poster1_caption': 'Medical Outreach Activity Poster',
        'exp2_poster2_caption': 'Medical Outreach Promotion Poster',
        'exp2_learning_title': 'Learning Content',
        'exp2_learning_desc': `
            <ul>
                <li>Basic TCM theory: Yin-Yang and Five Elements, meridians and acupuncture points</li>
                <li>Massage techniques and practical exercises</li>
                <li>TCM diagnosis and treatment of common ailments</li>
                <li>Knowledge and application of Chinese herbal medicines</li>
            </ul>`,
        'exp2_achievements_title': 'Key Achievements',
        'exp2_achievements_desc': `
            <ul>
                <li>Successfully organized 5 rural medical outreach activities</li>
                <li>Received high recognition from the university and community</li>
            </ul>`,
        'exp2_skills_title': 'Skills Acquired',
        'exp2_skills_desc': `
            <ul>
                <li>Leadership and team management abilities</li>
                <li>Event planning and execution experience</li>
                <li>Public relations and external liaison capabilities</li>
                <li>Budget planning and resource allocation</li>
            </ul>`,
        'exp2_reflection_title': 'Reflection',
        'exp2_reflection_desc': 'My experience as President of the Chinese Medicine Club gave me a deep appreciation for the meaning of serving others and cultivated my leadership and organizational skills. Through the outreach activities, I not only learned TCM knowledge but also learned how to communicate with people from different backgrounds and how to achieve goals with limited resources. This experience has greatly inspired my subsequent work in biomedical engineering R&D, making me more attentive to the humanistic care aspect of technology applications.',
    }
};

// DOM 載入完成後執行翻譯
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
                element.innerHTML = translations[lang][key];
            }
        });
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

    // 監聽語言切換按鈕點擊事件
    if (langToggle) {
        langToggle.addEventListener('click', switchLanguage);
    }

    // 初始化遊戲圖片和目標圖片
    selectNewGameAndTarget();
    showImages();
});

// =================================
//   圖片管理相關變數和函數
// =================================

/**
 * 選擇新的遊戲角色和對應的目標圖片
 * 功能：隨機選擇一個遊戲角色，並自動設置對應的目標圖片
 */
function selectNewGameAndTarget() {
    const gameImages = [
        '../files/images/game/hornet.png',
        '../files/images/game/Melinoë.png', 
        '../files/images/game/steve.png',
        '../files/images/game/miyabi.png',
        '../files/images/game/miku.png'
    ];
    
    // 隨機選擇一個角色
    const randomIndex = Math.floor(Math.random() * gameImages.length);
    const selectedGameImage = gameImages[randomIndex];
    
    // 設置遊戲角色圖片
    const gameImageElement = document.getElementById('random-game-image');
    if (gameImageElement) {
        gameImageElement.src = selectedGameImage;
    }
}

/**
 * 顯示遊戲角色和目標圖片
 * 頁面載入時立即顯示圖片
 */
function showImages() {
    const gameImageElement = document.getElementById('random-game-image');
    
    if (gameImageElement) {
        gameImageElement.classList.add('show');
    }
}
