const translations = {
    // 中文內容
    'zh': {
        'site_title': '鍾易達 - 個人網站',
        'back_home': '◀ 返回首頁',
        'lang_toggle': 'English',
        'footer_text': '&copy; 2025 I-TA CHUNG. All Rights Reserved.',
        
        // Project 1
        'project1_title': '專案一：超聲波輔助溶栓導管',
        'project1_overview_title': '專案概述',
        'project1_overview_desc': '本專案旨在開發結合超音波聲鉗技術與藥物溶栓的創新導管系統，透過超音波的機械振動與剪切效應增強溶栓藥物的效果，同時降低對周圍健康組織的損傷。此導管整合了柔性電路板（FPC）技術，實現精密的超音波換能器控制與訊號傳輸。',
        'project1_prototype_title': '導管原型展示',
        'project1_prototype_desc': '下方展示導管原型的動態演示影片以及柔性電路板（FPC）的設計細節。FPC作為導管的核心控制元件，提供了超音波換能器所需的電氣連接與訊號控制功能，其柔性特性使導管能夠適應人體血管的彎曲結構。',
        'project1_types_title': '導管組裝流程與配置',
        'project1_types_desc': '導管在完成焊接後，需要裝配外管以適應不同的臨床需求。上方展示的是裝配外管前的初始狀態，下方則是裝配不同外管後的兩種配置：Dynaflex管與Zuss管。每種外管提供不同的硬度特性，以適應特定的血管路徑與手術需求。',
        'project1_dynaflex_caption': 'Dynaflex管配置',
        'project1_zuss_caption': 'Zuss管配置',
        'project1_notube_caption': '裝配外管前的狀態',
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
                <li><strong>生物相容性設計：</strong>所有材料均符合醫療級標準，確保患者安全</li>
            </ul>`,
        'project1_applications_title': '應用領域',
        'project1_applications_desc': `
            <ul>
                <li><strong>肺栓塞：</strong>溶解肺動脈栓塞，恢復肺部血流供應</li>
                <li><strong>深層靜脈栓塞：</strong>治療下肢深層靜脈血栓，預防肺栓塞併發症</li>
                <li><strong>周邊動脈疾病：</strong>改善周邊血管的血流通暢性</li>
            </ul>`,
        'project1_future_title': '未來展望',
        'project1_future_desc': `
            <ul>
                <li>開發即時超音波影像導引系統，實現精準定位</li>
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
            </ul>`,
        'project2_methods_title': '研究方法',
        'project2_methods_desc': `
            <ol>
                <li><strong>探頭設計與製作：</strong>
                    <ul>
                        <li>使用PZT-4壓電陶瓷材料</li>
                        <li>精密切割與電極沉積技術製作微型陣列結構</li>
                    </ul>
                </li>
                <li><strong>聲場量測與視覺化：</strong>
                    <ul>
                        <li>使用水聽器（Hydrophone）進行三維聲場掃描</li>
                        <li>結合MATLAB進行數據處理視覺重建</li>
                    </ul>
                </li>
            </ol>`,
        'project2_results_title': '研究成果',
        'project2_results_desc': `
            <ul>
                <li>成功開發可產生穩定渦旋聲場的4通道微型超音波探頭</li>
                <li>實現了XZ與XY平面上的渦旋聲場視覺化與量測</li>
                <li>完成渦旋場與同相位場的對比實驗，驗證相位調控的有效性</li>
                <li>為後續的生醫應用研究奠定了堅實的技術基礎</li>
            </ul>`,
        
        // Project 3
        'project3_title': '專案三：Drone object tracking using YOLOv12',
        'project3_overview_title': '專案概述',
        'project3_overview_desc': '本專案旨在開發一個基於深度學習的無人機追蹤系統，利用 AIRSIM 模擬器生成雙目立體視覺訓練資料，並訓練 YOLOv12 模型以實現即時偵測與追蹤無人機在 3D 空間中的位置。此系統結合了立體視覺深度估計與多目標追蹤（MOT）技術，能夠準確定位並追蹤多個無人機目標。',
        'project3_technology_title': '技術特色',
        'project3_technology_desc': `
            <ul>
                <li><strong>AIRSIM 模擬環境：</strong>使用 Microsoft AIRSIM 建立逼真的無人機飛行場景，生成大量高品質的雙目立體視覺訓練資料</li>
                <li><strong>雙目立體視覺：</strong>透過左右相機同步拍攝，生成深度圖並建立 3D 空間資訊</li>
                <li><strong>YOLOv12 目標偵測：</strong>採用最新的 YOLOv12 架構進行即時目標偵測，具備高精度與快速推理能力</li>
                <li><strong>多目標追蹤（MOT）：</strong>整合追蹤演算法，實現多個無人機目標的持續追蹤與 ID 維持</li>
                <li><strong>3D 位置估計：</strong>結合深度資訊與 2D 偵測結果，計算目標在 3D 空間中的精確位置</li>
            </ul>`,
        'project3_airsim_title': 'AIRSIM 資料生成',
        'project3_airsim_desc': '使用 AIRSIM 模擬器生成雙目立體視覺訓練資料。系統配置左右兩個相機，同步拍攝無人機飛行場景，並自動生成對應的深度圖。這些合成資料提供了豐富且多樣化的訓練樣本，包含不同光照條件、背景環境與飛行姿態。',
        'project3_left_camera_caption': '左相機視角',
        'project3_right_camera_caption': '右相機視角',
        'project3_depth_caption': '深度圖視覺化',
        'project3_tracking_title': '追蹤結果展示',
        'project3_tracking_desc': '訓練完成的 YOLOv12 模型能夠即時偵測並追蹤多個無人機目標。系統結合多目標追蹤演算法，為每個偵測到的目標分配唯一 ID，並在後續幀中維持追蹤一致性。同時，利用立體視覺深度資訊，系統能夠計算目標在 3D 空間中的位置座標。',
        'project3_mot_caption': '多目標追蹤（MOT）結果',
        'project3_3d_track_caption': '3D 空間追蹤視覺化',
        'project3_results_title': '研究成果',
        'project3_results_desc': '本專案成功實現了基於 AIRSIM 合成資料訓練的無人機追蹤系統。系統能夠在複雜場景中準確偵測多個無人機目標，並維持穩定的追蹤性能。3D 位置估計功能為後續的導航與控制應用奠定了基礎。',
        'project3_3d_visualization_caption': '3D 追蹤軌跡視覺化 - 展示無人機在 XY 平面上的運動軌跡',
        'project3_github_title': 'GitHub 專案連結',
        'project3_methods_title': '研究方法',
        'project3_methods_desc': `
            <ol>
                <li><strong>資料生成階段：</strong>
                    <ul>
                        <li>使用 AIRSIM 模擬器建立無人機飛行場景</li>
                        <li>配置雙目相機系統，同步拍攝左右視角影像</li>
                        <li>自動生成深度圖與對應的標註資料</li>
                        <li>資料增強與預處理，提升模型泛化能力</li>
                    </ul>
                </li>
                <li><strong>模型訓練階段：</strong>
                    <ul>
                        <li>使用 YOLOv12 架構進行目標偵測模型訓練</li>
                        <li>整合立體視覺深度資訊進行 3D 位置估計</li>
                        <li>實作多目標追蹤演算法，維持追蹤一致性</li>
                    </ul>
                </li>
                <li><strong>評估與優化：</strong>
                    <ul>
                        <li>使用多種評估指標（mAP、MOTA、IDF1）評估模型性能</li>
                        <li>針對不同場景進行測試與優化</li>
                    </ul>
                </li>
            </ol>`,
        'project3_applications_title': '應用領域',
        'project3_applications_desc': `
            <ul>
                <li><strong>無人機監控：</strong>用於機場、重要設施等場所的無人機監控與追蹤</li>
                <li><strong>自主導航：</strong>為無人機自主導航系統提供目標定位與追蹤功能</li>
                <li><strong>搜救任務：</strong>在搜救任務中追蹤多個無人機協同作業</li>
                <li><strong>競技比賽：</strong>應用於無人機競技比賽中的目標追蹤與定位</li>
            </ul>`,
        'project3_challenges_title': '技術挑戰 (Technical Challenges)',
        'project3_challenges_desc': `
            <ul>
                <li><strong>即時處理限制：</strong>目前系統尚無法達到完全的即時處理 (Real-time)，主要受限於深度估計與多目標追蹤演算法的計算複雜度</li>
                <li><strong>計算資源需求：</strong>YOLOv12 模型與立體視覺深度計算需要較高的運算資源，在邊緣設備上的部署仍需進一步優化</li>
                <li><strong>模擬到真實的遷移：</strong>雖然 AIRSIM 提供高品質的合成資料，但從模擬環境到真實世界的遷移仍存在領域適應（Domain Adaptation）的挑戰</li>
            </ul>`,
    },
    
    // 英文內容
    'en': {
        'site_title': 'I-Ta Chung - Personal Website',
        'back_home': '◀ Back to Home',
        'lang_toggle': '中文',
        'footer_text': '&copy; 2025 I-TA CHUNG. All Rights Reserved.',
        
        // Project 1
        'project1_title': 'Project 1: Ultrasound-assisted Thrombolytic Catheter',
        'project1_overview_title': 'Project Overview',
        'project1_overview_desc': 'This project aims to develop an innovative catheter system combining ultrasound acoustic tweezer technology with thrombolytic drug delivery. By utilizing the mechanical vibration and shear effects of ultrasound, we significantly enhance the effectiveness of thrombolytic drugs while minimizing damage to surrounding healthy tissue. The catheter integrates Flexible Printed Circuit (FPC) technology to achieve precise ultrasound transducer control and signal transmission.',
        'project1_prototype_title': 'Catheter Prototype Demonstration',
        'project1_prototype_desc': 'Below are the dynamic demonstration video of the catheter prototype and the design details of the Flexible Printed Circuit (FPC). As the core control component of the catheter, the FPC provides the electrical connection and signal control functions required by the ultrasound transducer. Its flexible characteristics enable the catheter to adapt to the curved structure of human blood vessels.',
        'project1_types_title': 'Catheter Assembly Process and Configurations',
        'project1_types_desc': 'After welding is completed, the catheter needs to be fitted with an outer tube to adapt to different clinical requirements. The image above shows the initial state before installing the outer tube, while below are two configurations after fitting different outer tubes: Dynaflex tube and Zuss tube. Each outer tube provides different stiffness characteristics, optimized for specific vascular pathways and procedural needs.',
        'project1_dynaflex_caption': 'Dynaflex Tube Configuration',
        'project1_zuss_caption': 'Zuss Tube Configuration',
        'project1_notube_caption': 'Before Installing Outer Tube',
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
                <li><strong>Biocompatible Design:</strong> All materials meet medical-grade standards, ensuring patient safety</li>
            </ul>`,
        'project1_applications_title': 'Application Areas',
        'project1_applications_desc': `
            <ul>
                <li><strong>Pulmonary Embolism:</strong> Dissolve pulmonary artery embolism and restore blood flow to the lungs</li>
                <li><strong>Deep Vein Thrombosis:</strong> Treat deep vein thrombosis in lower limbs and prevent pulmonary embolism complications</li>
                <li><strong>Peripheral Arterial Disease:</strong> Improve blood flow patency in peripheral vessels</li>
            </ul>`,
        'project1_future_title': 'Future Prospects',
        'project1_future_desc': `
            <ul>
                <li>Develop real-time ultrasound image guidance system for precise positioning</li>
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
            </ul>`,
        'project2_methods_title': 'Research Methods',
        'project2_methods_desc': `
            <ol>
                <li><strong>Transducer Design and Fabrication:</strong>
                    <ul>
                        <li>Using PZT-4 piezoelectric ceramic material</li>
                        <li>Precision cutting and electrode deposition techniques for micro-array structure fabrication</li>
                    </ul>
                </li>
                <li><strong>Acoustic Field Measurement and Visualization:</strong>
                    <ul>
                        <li>3D acoustic field scanning using hydrophone</li>
                        <li>Data processing and 3D reconstruction using MATLAB</li>
                    </ul>
                </li>
            </ol>`,
        'project2_results_title': 'Research Achievements',
        'project2_results_desc': `
            <ul>
                <li>Successfully developed a 4-channel micro ultrasound transducer capable of generating stable vortex acoustic fields</li>
                <li>Achieved visualization and measurement of vortex acoustic fields on XZ and XY planes</li>
                <li>Completed comparative experiments between vortex and in-phase fields, validating the effectiveness of phase control</li>
                <li>Established a solid technical foundation for subsequent biomedical application research</li>
            </ul>`,
        
        // Project 3
        'project3_title': 'Project 3: Drone Object Tracking using YOLOv12',
        'project3_overview_title': 'Project Overview',
        'project3_overview_desc': 'This project aims to develop a deep learning-based drone tracking system using AIRSIM simulator to generate stereo vision training data and training a YOLOv12 model for real-time detection and tracking of drones in 3D space. The system combines stereo vision depth estimation with multi-object tracking (MOT) technology to accurately locate and track multiple drone targets.',
        'project3_technology_title': 'Technical Features',
        'project3_technology_desc': `
            <ul>
                <li><strong>AIRSIM Simulation Environment:</strong> Using Microsoft AIRSIM to create realistic drone flight scenarios and generate large amounts of high-quality stereo vision training data</li>
                <li><strong>Stereo Vision:</strong> Synchronized left and right camera capture to generate depth maps and establish 3D spatial information</li>
                <li><strong>YOLOv12 Object Detection:</strong> Employing the latest YOLOv12 architecture for real-time object detection with high accuracy and fast inference capabilities</li>
                <li><strong>Multi-Object Tracking (MOT):</strong> Integrating tracking algorithms to achieve continuous tracking and ID maintenance for multiple drone targets</li>
                <li><strong>3D Position Estimation:</strong> Combining depth information with 2D detection results to calculate precise target positions in 3D space</li>
            </ul>`,
        'project3_airsim_title': 'AIRSIM Data Generation',
        'project3_airsim_desc': 'Using AIRSIM simulator to generate stereo vision training data. The system configures left and right cameras to synchronously capture drone flight scenes and automatically generates corresponding depth maps. These synthetic data provide rich and diverse training samples, including different lighting conditions, background environments, and flight poses.',
        'project3_left_camera_caption': 'Left Camera View',
        'project3_right_camera_caption': 'Right Camera View',
        'project3_depth_caption': 'Depth Map Visualization',
        'project3_tracking_title': 'Tracking Results',
        'project3_tracking_desc': 'The trained YOLOv12 model can detect and track multiple drone targets in real-time. The system combines multi-object tracking algorithms to assign unique IDs to each detected target and maintains tracking consistency across subsequent frames. Simultaneously, utilizing stereo vision depth information, the system can calculate target positions in 3D space.',
        'project3_mot_caption': 'Multi-Object Tracking (MOT) Results',
        'project3_3d_track_caption': '3D Space Tracking Visualization',
        'project3_results_title': 'Research Achievements',
        'project3_results_desc': 'This project successfully implemented a drone tracking system trained on AIRSIM synthetic data. The system can accurately detect multiple drone targets in complex scenes and maintain stable tracking performance. The 3D position estimation functionality provides a foundation for subsequent navigation and control applications.',
        'project3_3d_visualization_caption': '3D Tracking Trajectory Visualization - Showing drone movement trajectory on XY plane',
        'project3_github_title': 'GitHub Project Links',
        'project3_methods_title': 'Research Methods',
        'project3_methods_desc': `
            <ol>
                <li><strong>Data Generation Phase:</strong>
                    <ul>
                        <li>Using AIRSIM simulator to create drone flight scenarios</li>
                        <li>Configuring stereo camera system for synchronized left and right view capture</li>
                        <li>Automatically generating depth maps and corresponding annotation data</li>
                        <li>Data augmentation and preprocessing to improve model generalization</li>
                    </ul>
                </li>
                <li><strong>Model Training Phase:</strong>
                    <ul>
                        <li>Training object detection model using YOLOv12 architecture</li>
                        <li>Integrating stereo vision depth information for 3D position estimation</li>
                        <li>Implementing multi-object tracking algorithms to maintain tracking consistency</li>
                    </ul>
                </li>
                <li><strong>Evaluation and Optimization:</strong>
                    <ul>
                        <li>Using various evaluation metrics (mAP, MOTA, IDF1) to assess model performance</li>
                        <li>Testing and optimization for different scenarios</li>
                    </ul>
                </li>
            </ol>`,
        'project3_applications_title': 'Application Areas',
        'project3_applications_desc': `
            <ul>
                <li><strong>Drone Surveillance:</strong> For drone monitoring and tracking at airports, critical facilities, and other locations</li>
                <li><strong>Autonomous Navigation:</strong> Providing target localization and tracking capabilities for drone autonomous navigation systems</li>
                <li><strong>Search and Rescue:</strong> Tracking multiple drones for coordinated operations in search and rescue missions</li>
                <li><strong>Competitive Events:</strong> Applications in drone racing competitions for target tracking and localization</li>
            </ul>`,
        'project3_challenges_title': 'Technical Challenges',
        'project3_challenges_desc': `
            <ul>
                <li><strong>Real-time Processing Limitations:</strong> The current system cannot yet achieve fully real-time processing, primarily limited by the computational complexity of depth estimation and multi-object tracking algorithms</li>
                <li><strong>Computational Resource Requirements:</strong> The YOLOv12 model and stereo vision depth computation require substantial computing resources, and deployment on edge devices requires further optimization</li>
                <li><strong>Sim-to-Real Transfer:</strong> Although AIRSIM provides high-quality synthetic data, the transfer from simulation to real-world environments still faces domain adaptation challenges</li>
            </ul>`,
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

    // 初始化遊戲圖片功能
    initializeGameImages();
    
    // 添加滾動事件監聽器
    window.addEventListener('scroll', handleScrollForGameImages);
    
    // 初始檢查一次（防止頁面載入時已經滾動到相關部分）
    handleScrollForGameImages();
});

// 遊戲相關變數
let isSteveInitialized = false;
let isTargetVisible = false;
let currentTreeIndex = -1;

// 樹木與物品的配對關係
const treeItemPairs = [
    {
        target: '../files/images/game/targets/Mushroom_tree.png',
        item: '../files/images/game/items/Mushroom.png'
    },
    {
        target: '../files/images/game/targets/Oak_tree.png',
        item: '../files/images/game/items/Oak_log.png'
    },
    {
        target: '../files/images/game/targets/Birch_tree.png',
        item: '../files/images/game/items/Birch_log.png'
    },
    {
        target: '../files/images/game/targets/Jungle_tree.png',
        item: '../files/images/game/items/Jungle_log.png'
    }
];

// 初始化遊戲圖片
function initializeGameImages() {
    const gameImageElement = document.getElementById('random-game-image');
    const targetImageElement = document.getElementById('target-image');
    const itemImageElement = document.getElementById('item-image');
    
    if (!gameImageElement || !targetImageElement || !itemImageElement) return;
    
    // 設置 Steve 圖片（僅執行一次）
    if (!isSteveInitialized) {
        gameImageElement.src = '../files/images/game/Steve_axe.png';
        isSteveInitialized = true;
    }
    
    // 隨機選擇一個樹木配對
    selectRandomTree();
}

// 隨機選擇樹木和對應物品
function selectRandomTree() {
    const targetImageElement = document.getElementById('target-image');
    const itemImageElement = document.getElementById('item-image');
    
    if (!targetImageElement || !itemImageElement) return;
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * treeItemPairs.length);
    } while (newIndex === currentTreeIndex && treeItemPairs.length > 1);
    
    currentTreeIndex = newIndex;
    const pair = treeItemPairs[currentTreeIndex];
    
    targetImageElement.src = pair.target;
    itemImageElement.src = pair.item;
}

// 處理滾動以顯示遊戲圖片
function handleScrollForGameImages() {
    const gameImageElement = document.getElementById('random-game-image');
    const targetImageElement = document.getElementById('target-image');
    const itemImageElement = document.getElementById('item-image');
    const footerElement = document.querySelector('footer');
    
    if (!gameImageElement || !targetImageElement || !itemImageElement || !footerElement) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const footerTop = footerElement.offsetTop;
    const triggerPoint = footerTop - 300; // footer 上方 300px 處
    const viewportBottom = scrollTop + windowHeight;
    
    // Steve 永遠顯示
    gameImageElement.classList.add('show');
    
    // Item 永遠顯示
    itemImageElement.classList.add('show');
    
    // Target 只在滾動到 footer 上方 300px 時顯示
    if (viewportBottom >= triggerPoint) {
        targetImageElement.classList.add('show');
        isTargetVisible = true;
    } else {
        targetImageElement.classList.remove('show');
        isTargetVisible = false;
    }
}
