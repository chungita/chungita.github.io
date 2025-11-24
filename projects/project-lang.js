const translations = {
    // 中文內容
    'zh': {
        'site_title': '鍾易達 - 個人網站',
        'back_home': '◀ 返回首頁',
        'lang_toggle': 'English',
        'footer_text': '&copy; 2025 CHUNG, I-TA. All Rights Reserved.',
        
        // Project 1
        'project1_title': '專案一：超聲波輔助溶栓導管',
        'project1_overview_title': '專案概述',
        'project1_overview_desc': '本專案旨在開發結合超音波技術與藥物溶栓的創新導管系統，透過超音波的機械振動效應增強溶栓藥物的效果，同時降低對周圍健康組織的損傷。此導管整合了柔性電路板（FPC）技術，實現精密的超音波換能器控制與訊號傳輸。',
        'project1_prototype_title': '導管原型展示',
        'project1_prototype_desc': '下方展示導管原型的動態演示影片以及柔性電路板（FPC）的設計細節。FPC作為導管的核心控制元件，提供了超音波換能器所需的電氣連接與訊號控制功能，其柔性特性使導管能夠適應人體血管的彎曲結構。',
        'project1_types_title': '導管類型比較',
        'project1_types_desc': '在研發過程中，我們測試了多種導管配置方案，包括搭配Dynaflex管、Zuss管以及無外管設計。每種設計都針對不同的臨床需求與操作場景進行了優化，以下展示各類型導管的實際外觀與結構特性。',
        'project1_dynaflex_caption': 'Dynaflex管配置',
        'project1_zuss_caption': 'Zuss管配置',
        'project1_notube_caption': '無外管配置',
        'project1_welding_title': '製程技術：精密焊接',
        'project1_welding_desc': '導管製作的關鍵步驟之一是超音波換能器的精密焊接。透過嚴格的焊接工藝控制，確保換能器與FPC之間的電氣連接穩定可靠，同時維持導管的微型化設計。以下展示焊接製程的各個階段，從初始焊接到最終成品的完整過程。',
        'project1_welding1_caption': '焊接製程 - 步驟一',
        'project1_welding2_caption': '焊接製程 - 步驟二',
        'project1_welding_front_caption': '焊接完成 - 正面視角',
        'project1_welding_side_caption': '焊接完成 - 側面視角',
        'project1_ground_front_caption': '接地線焊接 - 正面',
        'project1_ground_side_caption': '接地線焊接 - 側面',
        'project1_tech_title': '技術特色',
        'project1_tech_desc': `
            <ul>
                <li><strong>超音波增強溶栓：</strong>利用超音波的空化效應與機械振動，顯著提升溶栓藥物的穿透力與作用效率</li>
                <li><strong>柔性電路整合：</strong>採用FPC技術實現導管的柔性與可操控性，適應複雜的血管路徑</li>
                <li><strong>多管配置方案：</strong>針對不同臨床場景開發多種導管外管配置，提供靈活的治療選擇</li>
                <li><strong>精密製造工藝：</strong>運用微型焊接技術確保換能器的穩定性與可靠性</li>
                <li><strong>生物相容性設計：</strong>所有材料均符合醫療級標準，確保患者安全</li>
            </ul>`,
        'project1_applications_title': '應用領域',
        'project1_applications_desc': `
            <ul>
                <li><strong>急性缺血性中風：</strong>快速溶解腦血管栓塞，恢復腦部血流供應</li>
                <li><strong>深層靜脈栓塞：</strong>治療下肢深層靜脈血栓，預防肺栓塞併發症</li>
                <li><strong>急性心肌梗塞：</strong>輔助冠狀動脈血栓的快速清除</li>
                <li><strong>周邊動脈疾病：</strong>改善周邊血管的血流通暢性</li>
            </ul>`,
        'project1_future_title': '未來展望',
        'project1_future_desc': `
            <ul>
                <li>進行動物實驗驗證，評估臨床安全性與有效性</li>
                <li>開發即時超音波影像導引系統，實現精準定位</li>
                <li>優化超音波參數控制演算法，提升治療效率</li>
                <li>申請醫療器材認證，推動臨床試驗與商業化應用</li>
                <li>探索與其他治療技術（如光熱治療）的聯合應用可能性</li>
            </ul>`,
        
        // Project 2
        'project2_title': '專案二：超音波微型陣列探頭，生成超音波Vortex',
        'project2_overview_title': '專案概述',
        'project2_overview_desc': '此專案旨在開發一款創新的超音波微型陣列探頭，能夠生成具有特殊空間結構的超音波渦旋（Ultrasound Vortex）。透過精密的多通道控制系統，實現對超音波聲場的精確調控與視覺化。',
        'project2_technology_title': '技術特色',
        'project2_technology_desc': `
            <ul>
                <li><strong>4通道微型陣列設計：</strong>採用四通道獨立控制的壓電陣列結構，每個通道可獨立調整相位與振幅</li>
                <li><strong>渦旋聲場生成：</strong>透過精確的相位控制演算法，生成具有螺旋相位分佈的超音波渦旋場</li>
                <li><strong>高頻操作：</strong>工作頻率可達數MHz，適用於生醫檢測與微操控應用</li>
                <li><strong>聲場視覺化：</strong>結合數值模擬與實驗量測，完整呈現三維空間中的聲場分佈特性</li>
            </ul>`,
        'project2_vortex_title': '超音波渦旋場演示',
        'project2_vortex_desc': '下方影片展示了不同平面（XZ平面與XY平面）上的超音波渦旋聲場分佈。渦旋結構在空間中呈現螺旋形的相位變化，這種獨特的聲場結構具有軌道角動量，可應用於粒子操控、藥物傳遞等先進生醫技術。',
        'project2_video1_caption': 'XZ平面渦旋聲場分佈',
        'project2_video2_caption': 'XY平面渦旋聲場分佈',
        'project2_vortex_static_title': '渦旋場靜態分析',
        'project2_vortex_static_desc': '以下展示渦旋聲場在XZ平面與XY平面的靜態聲壓分布圖。這些可視化結果清楚呈現了渦旋場的核心特徵：中央區域的低聲壓「零點」以及圍繞中心的螺旋狀相位分布，這正是渦旋聲場具有軌道角動量的關鍵證據。',
        'project2_vortex_xz_caption': '渦旋場 - XZ平面靜態分布',
        'project2_vortex_xy_caption': '渦旋場 - XY平面靜態分布',
        'project2_comparison_title': '聲場模式比較：渦旋場 vs 同相位場',
        'project2_comparison_desc': '為了凸顯渦旋場的獨特性，我們將其與傳統的同相位（In-Phase）聲場進行對比。同相位模式下，所有通道以相同相位驅動，產生中央聚焦的聲場；而渦旋模式則透過相位梯度產生中央低壓區與螺旋結構。這種對比清楚展現了相位控制對聲場形態的關鍵影響。',
        'project2_vortex_mode_title': '渦旋模式 (Vortex Mode)',
        'project2_vortex_xz_label': 'XZ平面',
        'project2_vortex_xy_label': 'XY平面',
        'project2_inphase_mode_title': '同相位模式 (In-Phase Mode)',
        'project2_inphase_xz_label': 'XZ平面',
        'project2_inphase_xy_label': 'XY平面',
        'project2_comparison_note': '<strong>關鍵差異：</strong>渦旋場呈現中央零點與環形分布，具有相位奇異性；同相位場則形成中央聚焦峰值，適合能量集中應用。這展示了多通道陣列在聲場調控上的強大靈活性。',
        'project2_applications_title': '應用領域',
        'project2_applications_desc': `
            <ul>
                <li><strong>細胞操控：</strong>利用渦旋聲場的軌道角動量實現非接觸式細胞旋轉與定位</li>
                <li><strong>藥物傳遞：</strong>透過聚焦的渦旋聲場增強局部藥物滲透效果</li>
                <li><strong>醫學影像：</strong>結合超音波造影技術，提升組織結構的對比度與解析度</li>
                <li><strong>微流體系統：</strong>整合於微流道中進行流體混合與粒子分選</li>
                <li><strong>標靶治療：</strong>結合微泡造影劑進行精準的腫瘤標靶治療</li>
            </ul>`,
        'project2_methods_title': '研究方法',
        'project2_methods_desc': `
            <ol>
                <li><strong>探頭設計與製作：</strong>
                    <ul>
                        <li>使用COMSOL Multiphysics進行有限元素分析與最佳化設計</li>
                        <li>選用高性能壓電陶瓷材料（PZT-5H）</li>
                        <li>精密切割與電極沉積技術製作微型陣列結構</li>
                    </ul>
                </li>
                <li><strong>訊號控制系統：</strong>
                    <ul>
                        <li>開發多通道獨立相位調控電路</li>
                        <li>實現即時相位與振幅調整功能</li>
                        <li>整合數位訊號處理器（DSP）進行波形生成</li>
                    </ul>
                </li>
                <li><strong>聲場量測與視覺化：</strong>
                    <ul>
                        <li>使用水聽器（Hydrophone）進行三維聲場掃描</li>
                        <li>結合MATLAB進行數據處理與3D重建</li>
                        <li>與數值模擬結果進行比對驗證</li>
                    </ul>
                </li>
            </ol>`,
        'project2_results_title': '研究成果',
        'project2_results_desc': `
            <ul>
                <li>成功開發可產生穩定渦旋聲場的4通道微型超音波探頭</li>
                <li>實現了XZ與XY平面上的渦旋聲場視覺化與量測</li>
                <li>驗證了數值模擬與實驗結果的高度一致性（誤差小於5%）</li>
                <li>探頭尺寸小於10mm，適合整合於微型化醫療器械中</li>
                <li>完成渦旋場與同相位場的對比實驗，驗證相位調控的有效性</li>
                <li>為後續的生醫應用研究奠定了堅實的技術基礎</li>
            </ul>`,
        'project2_future_title': '未來展望',
        'project2_future_desc': `
            <ul>
                <li>增加陣列通道數量，實現更複雜的聲場調控模式</li>
                <li>開發即時影像回饋系統，實現閉迴路控制</li>
                <li>結合微泡造影劑，探索腫瘤標靶治療的可能性</li>
                <li>與臨床醫師合作，進行體外與活體實驗驗證</li>
                <li>申請相關技術專利，推動技術商業化應用</li>
            </ul>`,
        
        // Project 3
        'project3_title': '專案三：Drone object tracking using YOLOv12',
    },
    
    // 英文內容
    'en': {
        'site_title': 'Chung I-Ta - Personal Website',
        'back_home': '◀ Back to Home',
        'lang_toggle': '中文',
        'footer_text': '&copy; 2025 CHUNG, I-TA. All Rights Reserved.',
        
        // Project 1
        'project1_title': 'Project 1: Ultrasound-assisted Thrombolytic Catheter',
        'project1_overview_title': 'Project Overview',
        'project1_overview_desc': 'This project aims to develop an innovative catheter system combining ultrasound technology with thrombolytic drug delivery. By utilizing the mechanical vibration effects of ultrasound, we significantly enhance the effectiveness of thrombolytic drugs while minimizing damage to surrounding healthy tissue. The catheter integrates Flexible Printed Circuit (FPC) technology to achieve precise ultrasound transducer control and signal transmission.',
        'project1_prototype_title': 'Catheter Prototype Demonstration',
        'project1_prototype_desc': 'Below are the dynamic demonstration video of the catheter prototype and the design details of the Flexible Printed Circuit (FPC). As the core control component of the catheter, the FPC provides the electrical connection and signal control functions required by the ultrasound transducer. Its flexible characteristics enable the catheter to adapt to the curved structure of human blood vessels.',
        'project1_types_title': 'Catheter Type Comparison',
        'project1_types_desc': 'During the development process, we tested multiple catheter configuration solutions, including designs with Dynaflex tube, Zuss tube, and no outer tube. Each design has been optimized for different clinical needs and operational scenarios. Below are the actual appearances and structural characteristics of each catheter type.',
        'project1_dynaflex_caption': 'Dynaflex Tube Configuration',
        'project1_zuss_caption': 'Zuss Tube Configuration',
        'project1_notube_caption': 'No Outer Tube Configuration',
        'project1_welding_title': 'Manufacturing Technology: Precision Welding',
        'project1_welding_desc': 'One of the key steps in catheter fabrication is the precision welding of the ultrasound transducer. Through strict welding process control, we ensure stable and reliable electrical connections between the transducer and FPC while maintaining the miniaturized design of the catheter. The following shows the various stages of the welding process, from initial welding to the complete final product.',
        'project1_welding1_caption': 'Welding Process - Step 1',
        'project1_welding2_caption': 'Welding Process - Step 2',
        'project1_welding_front_caption': 'Welding Completed - Front View',
        'project1_welding_side_caption': 'Welding Completed - Side View',
        'project1_ground_front_caption': 'Ground Wire Welding - Front',
        'project1_ground_side_caption': 'Ground Wire Welding - Side',
        'project1_tech_title': 'Technical Features',
        'project1_tech_desc': `
            <ul>
                <li><strong>Ultrasound-Enhanced Thrombolysis:</strong> Utilizing cavitation effects and mechanical vibrations of ultrasound to significantly improve penetration and effectiveness of thrombolytic drugs</li>
                <li><strong>Flexible Circuit Integration:</strong> Employing FPC technology to achieve catheter flexibility and maneuverability, adapting to complex vascular pathways</li>
                <li><strong>Multiple Tube Configurations:</strong> Developing various catheter outer tube configurations for different clinical scenarios, providing flexible treatment options</li>
                <li><strong>Precision Manufacturing Process:</strong> Utilizing micro-welding technology to ensure transducer stability and reliability</li>
                <li><strong>Biocompatible Design:</strong> All materials meet medical-grade standards, ensuring patient safety</li>
            </ul>`,
        'project1_applications_title': 'Application Areas',
        'project1_applications_desc': `
            <ul>
                <li><strong>Acute Ischemic Stroke:</strong> Rapidly dissolve cerebrovascular embolism and restore cerebral blood flow</li>
                <li><strong>Deep Vein Thrombosis:</strong> Treat lower extremity deep vein thrombosis and prevent pulmonary embolism complications</li>
                <li><strong>Acute Myocardial Infarction:</strong> Assist in rapid clearance of coronary artery thrombosis</li>
                <li><strong>Peripheral Arterial Disease:</strong> Improve blood flow patency in peripheral vessels</li>
            </ul>`,
        'project1_future_title': 'Future Prospects',
        'project1_future_desc': `
            <ul>
                <li>Conduct animal experimental validation to assess clinical safety and efficacy</li>
                <li>Develop real-time ultrasound image guidance system for precise positioning</li>
                <li>Optimize ultrasound parameter control algorithms to improve treatment efficiency</li>
                <li>Apply for medical device certification and promote clinical trials and commercial applications</li>
                <li>Explore possibilities of combined applications with other therapeutic technologies (such as photothermal therapy)</li>
            </ul>`,
        
        // Project 2
        'project2_title': 'Project 2: Micro-array Ultrasound Transducer with Ultrasound Vortex Generation',
        'project2_overview_title': 'Project Overview',
        'project2_overview_desc': 'This project aims to develop an innovative micro-array ultrasound transducer capable of generating ultrasound vortex fields with special spatial structures. Through a precision multi-channel control system, we achieve accurate manipulation and visualization of ultrasound acoustic fields.',
        'project2_technology_title': 'Technical Features',
        'project2_technology_desc': `
            <ul>
                <li><strong>4-Channel Micro-Array Design:</strong> Employs a four-channel independently controlled piezoelectric array structure, with each channel capable of independent phase and amplitude adjustment</li>
                <li><strong>Vortex Field Generation:</strong> Generates ultrasound vortex fields with spiral phase distribution through precise phase control algorithms</li>
                <li><strong>High-Frequency Operation:</strong> Operating frequency up to several MHz, suitable for biomedical detection and micro-manipulation applications</li>
                <li><strong>Acoustic Field Visualization:</strong> Combines numerical simulation and experimental measurement to fully present acoustic field distribution characteristics in 3D space</li>
            </ul>`,
        'project2_vortex_title': 'Ultrasound Vortex Field Demonstration',
        'project2_vortex_desc': 'The videos below demonstrate the ultrasound vortex acoustic field distribution on different planes (XZ plane and XY plane). The vortex structure exhibits spiral phase variations in space. This unique acoustic field structure possesses orbital angular momentum and can be applied to advanced biomedical technologies such as particle manipulation and drug delivery.',
        'project2_video1_caption': 'XZ Plane Vortex Acoustic Field Distribution',
        'project2_video2_caption': 'XY Plane Vortex Acoustic Field Distribution',
        'project2_vortex_static_title': 'Vortex Field Static Analysis',
        'project2_vortex_static_desc': 'The following shows the static acoustic pressure distribution of the vortex acoustic field on XZ and XY planes. These visualization results clearly present the core characteristics of the vortex field: the low acoustic pressure "null point" in the central region and the spiral phase distribution around the center, which is the key evidence that the vortex acoustic field possesses orbital angular momentum.',
        'project2_vortex_xz_caption': 'Vortex Field - XZ Plane Static Distribution',
        'project2_vortex_xy_caption': 'Vortex Field - XY Plane Static Distribution',
        'project2_comparison_title': 'Acoustic Field Mode Comparison: Vortex Field vs In-Phase Field',
        'project2_comparison_desc': 'To highlight the uniqueness of the vortex field, we compare it with the traditional In-Phase acoustic field. In the in-phase mode, all channels are driven with the same phase, producing a centrally focused acoustic field; while the vortex mode generates a central low-pressure zone and spiral structure through phase gradients. This comparison clearly demonstrates the critical influence of phase control on acoustic field morphology.',
        'project2_vortex_mode_title': 'Vortex Mode',
        'project2_vortex_xz_label': 'XZ Plane',
        'project2_vortex_xy_label': 'XY Plane',
        'project2_inphase_mode_title': 'In-Phase Mode',
        'project2_inphase_xz_label': 'XZ Plane',
        'project2_inphase_xy_label': 'XY Plane',
        'project2_comparison_note': '<strong>Key Differences:</strong> The vortex field exhibits a central null point and annular distribution with phase singularity; the in-phase field forms a central focused peak, suitable for energy concentration applications. This demonstrates the powerful flexibility of multi-channel arrays in acoustic field control.',
        'project2_applications_title': 'Application Areas',
        'project2_applications_desc': `
            <ul>
                <li><strong>Cell Manipulation:</strong> Utilize orbital angular momentum of vortex acoustic fields to achieve non-contact cell rotation and positioning</li>
                <li><strong>Drug Delivery:</strong> Enhance local drug penetration through focused vortex acoustic fields</li>
                <li><strong>Medical Imaging:</strong> Integrate with ultrasound contrast imaging technology to improve tissue structure contrast and resolution</li>
                <li><strong>Microfluidic Systems:</strong> Integrate into microchannels for fluid mixing and particle sorting</li>
                <li><strong>Targeted Therapy:</strong> Combine with microbubble contrast agents for precise tumor-targeted therapy</li>
            </ul>`,
        'project2_methods_title': 'Research Methods',
        'project2_methods_desc': `
            <ol>
                <li><strong>Transducer Design and Fabrication:</strong>
                    <ul>
                        <li>Finite element analysis and optimization design using COMSOL Multiphysics</li>
                        <li>Selection of high-performance piezoelectric ceramic materials (PZT-5H)</li>
                        <li>Precision cutting and electrode deposition techniques for micro-array structure fabrication</li>
                    </ul>
                </li>
                <li><strong>Signal Control System:</strong>
                    <ul>
                        <li>Development of multi-channel independent phase control circuits</li>
                        <li>Implementation of real-time phase and amplitude adjustment functions</li>
                        <li>Integration of Digital Signal Processor (DSP) for waveform generation</li>
                    </ul>
                </li>
                <li><strong>Acoustic Field Measurement and Visualization:</strong>
                    <ul>
                        <li>3D acoustic field scanning using hydrophone</li>
                        <li>Data processing and 3D reconstruction using MATLAB</li>
                        <li>Comparison and validation with numerical simulation results</li>
                    </ul>
                </li>
            </ol>`,
        'project2_results_title': 'Research Achievements',
        'project2_results_desc': `
            <ul>
                <li>Successfully developed a 4-channel micro ultrasound transducer capable of generating stable vortex acoustic fields</li>
                <li>Achieved visualization and measurement of vortex acoustic fields on XZ and XY planes</li>
                <li>Validated high consistency between numerical simulation and experimental results (error less than 5%)</li>
                <li>Transducer size less than 10mm, suitable for integration into miniaturized medical devices</li>
                <li>Completed comparative experiments between vortex and in-phase fields, validating the effectiveness of phase control</li>
                <li>Established a solid technical foundation for subsequent biomedical application research</li>
            </ul>`,
        'project2_future_title': 'Future Prospects',
        'project2_future_desc': `
            <ul>
                <li>Increase the number of array channels to achieve more complex acoustic field control modes</li>
                <li>Develop real-time image feedback systems for closed-loop control</li>
                <li>Combine with microbubble contrast agents to explore possibilities for tumor-targeted therapy</li>
                <li>Collaborate with clinicians for in vitro and in vivo experimental validation</li>
                <li>Apply for relevant technical patents to promote technology commercialization</li>
            </ul>`,
        
        // Project 3
        'project3_title': 'Project 3: Drone Object Tracking using YOLOv12',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');

    const translatePage = (lang) => {
        document.documentElement.lang = lang;
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    };

    const switchLanguage = () => {
        currentLang = (currentLang === 'zh') ? 'en' : 'zh';
        
        localStorage.setItem('lang', currentLang);
        
        translatePage(currentLang);
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    
    translatePage(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', switchLanguage);
    }
});
