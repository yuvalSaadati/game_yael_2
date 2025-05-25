// מערכת המשחק - חושבים מערכת: הכל מחובר!
document.addEventListener('DOMContentLoaded', function() {
    // מאפיינים גלובליים של המשחק
    let currentScreen = 'welcome-screen';
    let currentEasyIndex = 0;
    let currentMediumIndex = 0;
    let currentHardIndex = 0;
    let correctAnswers = 0;
    let totalQuestions = 0;
    
    // מערכות למשחק ברמה קלה
    const easySystems = [
        {
            title: "משחק כדורגל",
            image: "football-system",
            imageName: "משחק כדורגל",
            description: "משחק כדורגל הוא מערכת מורכבת המורכבת מרכיבים שונים הפועלים יחד.",
            question: "אילו רכיבים מהווים חלק ממערכת משחק הכדורגל?",
            components: [
                { text: "מזג אוויר", isCorrect: false },
                { text: "כדור", isCorrect: true },
                { text: "שחקנים", isCorrect: true },
                { text: "מכונת קפה", isCorrect: false },
                { text: "מגרש", isCorrect: true },
                { text: "תשלום כניסה", isCorrect: false },
                { text: "שופט", isCorrect: true },
                { text: "חוקי המשחק", isCorrect: true }
            ],
            explanation: "משחק כדורגל מורכב משחקנים, כדור, מגרש, שופט וחוקי משחק. כל אלה הם חלק מהמערכת כי הם משפיעים זה על זה ופועלים יחד ליצירת המשחק. מזג האוויר ותשלום כניסה הם חיצוניים למערכת המשחק עצמה ומהווים את הסביבה שבה המערכת פועלת."
        },
        {
            title: "מערכת שעות בית הספר",
            image: "school-system",
            imageName: "מערכת שעות",
            description: "מערכת השעות בבית הספר היא מערכת מורכבת שמאורגנת על פי ימים ושעות.",
            question: "אילו רכיבים מהווים חלק ממערכת השעות בבית הספר?",
            components: [
                { text: "תפריט קפיטריה", isCorrect: false },
                { text: "הפסקות", isCorrect: true },
                { text: "כיתות", isCorrect: true },
                { text: "מזג אוויר", isCorrect: false },
                { text: "מורים", isCorrect: true },
                { text: "זמני שיעורים", isCorrect: true },
                { text: "תחבורה לבית הספר", isCorrect: false },
                { text: "שיעורים", isCorrect: true }
            ],
            explanation: "מערכת השעות כוללת את השיעורים, המורים, הכיתות, זמני השיעורים וההפסקות. אלה הם הרכיבים של המערכת שפועלים יחד ליצירת מבנה הלימודים. תפריט הקפיטריה, מזג האוויר ותחבורה הם חיצוניים למערכת השעות עצמה ומהווים חלק מסביבת המערכת."
        },
        {
            title: "גל אנושי באצטדיון",
            image: "wave-system",
            imageName: "גל אנושי באצטדיון",
            description: "גל אנושי הוא תופעה של תנועה מתואמת בין צופים באצטדיון.",
            question: "אילו רכיבים מהווים חלק ממערכת הגל האנושי?",
            components: [
                { text: "צבע הכיסאות", isCorrect: false },
                { text: "תנועה", isCorrect: true },
                { text: "מוזיקה באצטדיון", isCorrect: false },
                { text: "תיאום", isCorrect: true },
                { text: "סוג המשחק", isCorrect: false },
                { text: "אנשים", isCorrect: true },
                { text: "תוצאת המשחק", isCorrect: false },
                { text: "עיתוי", isCorrect: true }
            ],
            explanation: "הגל האנושי מורכב מאנשים, תיאום בין האנשים, עיתוי ותנועה. אלה הם רכיבי המערכת שיוצרים את התופעה המיוחדת. המוזיקה, צבע הכיסאות, סוג המשחק ותוצאת המשחק אינם חלק מרכיבי המערכת עצמה אלא גורמים חיצוניים שמהווים את הסביבה."
        },
        {
            title: "אופניים",
            image: "bicycle-system",
            imageName: "אופניים",
            description: "אופניים הם מערכת מכנית המאפשרת תנועה באמצעות הפעלת כוח על ידי הרוכב.",
            question: "אילו רכיבים מהווים חלק ממערכת האופניים?",
            components: [
                { text: "יעד הנסיעה", isCorrect: false },
                { text: "דוושות", isCorrect: true },
                { text: "גלגלים", isCorrect: true },
                { text: "איכות הכביש", isCorrect: false },
                { text: "שלדה", isCorrect: true },
                { text: "סימני דרך", isCorrect: false },
                { text: "כידון", isCorrect: true },
                { text: "שרשרת", isCorrect: true }
            ],
            explanation: "מערכת האופניים כוללת את הגלגלים, השלדה, השרשרת, הדוושות והכידון. אלה הם רכיבי המערכת שפועלים יחד ומאפשרים את פעולת האופניים. סימני דרך, איכות הכביש ויעד הנסיעה הם חיצוניים למערכת עצמה ומהווים את הסביבה שבה המערכת פועלת."
        }
    ];
    
    // מערכות למשחק ברמה בינונית
    const mediumSystems = [
        {
            title: "גל אנושי באצטדיון - רמות ארגון",
            image: "wave-system",
            imageName: "גל אנושי באצטדיון",
            description: "גל אנושי הוא דוגמה מצוינת למערכת בה יש רמות ארגון שונות.",
            question: "מה יקרה אם נסתכל על הגל האנושי ברמת המיקרו (אדם בודד) לעומת רמת המאקרו (כל הקהל)?",
            options: [
                { text: "ברמת המיקרו נראה גל מתקדם, ברמת המאקרו נראה אנשים בודדים", isCorrect: false },
                { text: "אי אפשר לראות שום קשר בין רמת המיקרו למאקרו", isCorrect: false },
                { text: "ברמת המיקרו ובמאקרו נראה את אותה תופעה בדיוק", isCorrect: false },
                { text: "ברמת המיקרו נראה אדם שקם ומתיישב, ברמת המאקרו נראה תנועת גל", isCorrect: true }
            ],
            explanation: "כאשר מתבוננים ברמת המיקרו (אדם בודד), רואים פעולה פשוטה של קימה והתיישבות. לעומת זאת, ברמת המאקרו (הקהל כולו) רואים תופעה מורכבת של גל מתקדם. זוהי דוגמה מצוינת להבדל בין רמות ארגון שונות של מערכת: ברמות ארגון שונות, אותה המערכת יכולה להראות התנהגויות שונות לחלוטין."
        },
        {
            title: "משחק כדורגל - השפעת רכיב בודד",
            image: "football-system",
            imageName: "משחק כדורגל",
            description: "במשחק כדורגל, גם רכיב בודד יכול להשפיע על המערכת כולה.",
            question: "כיצד שחקן בודד יכול להשפיע על מערכת משחק הכדורגל כולה?",
            options: [
                { text: "המשחק תלוי רק בשחקן היושב על הספסל", isCorrect: false },
                { text: "השפעת השחקן הבודד תלויה רק במזג האוויר", isCorrect: false },
                { text: "שחקן שמבקיע גול או מקבל כרטיס אדום יכול לשנות את מהלך המשחק כולו", isCorrect: true },
                { text: "תלבושתו הייחודית של השוער משפיעה על המשחק", isCorrect: false }
            ],
            explanation: "שחקן בודד יכול להשפיע משמעותית על מערכת המשחק כולה - למשל, שחקן שמבקיע גול משנה את התוצאה, או שחקן שמקבל כרטיס אדום משנה את מאזן הכוחות בין הקבוצות. זוהי דוגמה לקשר ההדדי בין רמות הארגון: שינויים ברמת המיקרו (שחקן בודד) משפיעים על המערכת כולה (המשחק)."
        },
        {
            title: "מערכת אקולוגית - תיאום בין רכיבים",
            image: "ecosystem-system",
            imageName: "מערכת אקולוגית",
            description: "במערכת אקולוגית, התיאום בין רכיבי המערכת חיוני להצלחתה.",
            question: "כיצד מתבצע התאום בין רכיבי המערכת האקולוגית?",
            options: [
                { text: "התיאום נקבע על ידי גורם חיצוני בלבד", isCorrect: false },
                { text: "רק היצור החזק ביותר משפיע על המערכת", isCorrect: false },
                { text: "כל יצור במערכת תלוי באחרים ומשפיע עליהם באיזון עדין", isCorrect: true },
                { text: "רק היצור החלש ביותר משפיע על המערכת האקולוגית", isCorrect: false }
            ],
            explanation: "במערכת אקולוגית, כל יצור (רכיב) תלוי באחרים ומשפיע עליהם - צמחים מייצרים חמצן, בעלי חיים צורכים צמחים, טורפים צורכים בעלי חיים, פסולת מתפרקת ומזינה את הקרקע וחוזר חלילה. התיאום והאיזון בין כל הרכיבים חיוני לקיום המערכת כולה. זוהי דוגמה לחשיבות התיאום בין הרכיבים במערכת מורכבת."
        },
        {
            title: "מערכת שעות בית הספר - גבולות המערכת",
            image: "school-system",
            imageName: "מערכת שעות",
            description: "הגדרת גבולות המערכת היא סובייקטיבית בהתאם לצרכי המתבונן.",
            question: "כיצד ניתן להגדיר גבולות שונים למערכת השעות בבית הספר?",
            options: [
                { text: "גבולות המערכת נקבעים אך ורק על ידי מנהל בית הספר", isCorrect: false },
                { text: "גבולות המערכת כוללים רק את זמני השיעורים ללא קשר למורים ותלמידים", isCorrect: false },
                { text: "גבולות מערכת השעות קבועים ולא ניתנים לשינוי", isCorrect: false },
                { text: "אפשר להגדיר את הגבולות כמערכת של כיתה בודדת, שכבה שלמה או בית הספר כולו", isCorrect: true }
            ],
            explanation: "הגדרת גבולות מערכת היא סובייקטיבית - במערכת השעות אפשר להתמקד במערכת של כיתה בודדת, של שכבה שלמה, או של בית הספר כולו. ניתן גם להתייחס למורה בודד כמערכת, או לתלמיד בודד. כל נקודת מבט תספק תובנות שונות על המערכת. גבולות המערכת נקבעים בהתאם לשאלות שמעניינות אותנו ולמטרות שלנו."
        }
    ];
    
    // מערכות למשחק ברמה מתקדמת - תקלות והשפעתן
    const hardSystems = [
        {
            title: "תקלה במערכת חשמל",
            image: "ecosystem-system",
            imageName: "מערכת חשמל",
            description: "מערכת החשמל היא מערכת מורכבת המספקת אנרגיה לבתים ולמבנים.",
            question: "מה יכול לקרות אם יש תקלה בתחנת כוח אחת במערכת החשמל הארצית?",
            options: [
                { text: "שום דבר, כי כל תחנת כוח עובדת באופן עצמאי", isCorrect: false },
                { text: " תחנות אחרות יפצו על החסר, אך יתכנו הפסקות חשמל זמניות באזורים מסוימים ", isCorrect: true },
                { text: "כל מערכת החשמל הארצית תקרוס מיד", isCorrect: false },
                { text: "רק האזור שמקבל חשמל מאותה תחנה יושפע, ואין השפעה על שאר המערכת", isCorrect: false }
            ],
            explanation: "במערכת חשמל מורכבת, תקלה בתחנת כוח אחת עשויה לגרום לעומס נוסף על תחנות אחרות שצריכות לפצות. בגלל יתירות מתוכננת (redundancy), המערכת יכולה להמשיך לתפקד, אך עם פחות יכולת עמידה בעומסים. לכן, יתכנו הפסקות חשמל מתוכננות או לא מתוכננות באזורים מסוימים עד לתיקון התקלה. זוהי דוגמה לאופן שבו תקלה ברכיב אחד יכולה להשפיע על המערכת כולה."
        },
        {
            title: "תקלה במערכת גוף האדם",
            image: "bicycle-system",
            imageName: "מערכת גוף האדם",
            description: "גוף האדם הוא מערכת מורכבת של מערכות משנה הפועלות יחד.",
            question: "מה קורה כאשר אדם סובל מפציעה באחת הרגליים?",
            options: [
                { text: "אין השפעה על שאר הגוף כי כל איבר פועל באופן עצמאי ללא תלות", isCorrect: false },
                { text: "הגוף מיד מפסיק לתפקד לחלוטין ולא יכול לבצע שום פעילות גופנית נוספת", isCorrect: false },
                { text: "הגוף מפתח התאמות זמניות: שינוי הליכה, עומס על הרגל השנייה ושיווי משקל חדש", isCorrect: true },
                { text: "רק הרגל הפגועה מושפעת ללא שינויים בשאר חלקי הגוף", isCorrect: false }
            ],
            explanation: "גוף האדם הוא מערכת הסתגלותית מורכבת. כאשר חלק אחד נפגע (כמו רגל), הגוף מפתח מנגנוני פיצוי - אדם ישנה את צורת ההליכה, יעביר משקל לרגל השנייה, וישתמש יותר בידיים לתמיכה. מערכת זו מדגימה את היכולת של מערכות מורכבות להסתגל לשינויים ותקלות, ואת הקשר ההדדי בין הרכיבים."
        },
        {
            title: "תקלה במערכת חברתית - צוות עבודה",
            image: "football-system",
            imageName: "צוות עבודה",
            description: "צוות עבודה הוא מערכת חברתית שבה אנשים שונים עובדים יחד להשגת מטרה משותפת.",
            question: "מה יקרה אם חבר צוות מרכזי עוזב באמצע פרויקט חשוב?",
            options: [
                { text: "אין לכך כל השפעה על הפרויקט כי כל חבר צוות עובד בנפרד", isCorrect: false },
                { text: "הפרויקט בהכרח ייכשל ויתבטל לחלוטין מכיוון שאין דרך להמשיכו ללא החבר שעזב", isCorrect: false },
                { text: "רק המטלות הספציפיות של אותו חבר צוות יושפעו ללא השפעה על שאר הפרויקט", isCorrect: false },
                { text: "הצוות יצטרך להסתגל: חלוקה מחדש של תפקידים, הכנסת חבר חדש, והתאמת לוחות זמנים", isCorrect: true }
            ],
            explanation: "מערכת חברתית כמו צוות עבודה מדגימה את עקרון ההסתגלות במערכות. כאשר חבר צוות עוזב, נוצר 'חור' במערכת שמשפיע על מרכיבים אחרים. הצוות יצטרך להסתדר מחדש: לחלק אחרת את המשימות, אולי לגייס חבר חדש, ולהתאים את התכנון. זוהי דוגמה לדינמיות של מערכות חברתיות והתיאום הנדרש בין הרכיבים."
        },
        {
            title: "תקלה במערכת תחבורה",
            image: "wave-system",
            imageName: "מערכת תחבורה",
            description: "מערכת התחבורה העירונית כוללת כבישים, רמזורים, תחבורה ציבורית ונהגים.",
            question: "מה קורה כאשר כביש מרכזי נחסם בשל תאונה?",
            options: [
                { text: "התנועה נמשכת כרגיל כי מסלולים אחרים לא מושפעים", isCorrect: false },
                { text: "נהיגה בכל העיר נעצרת לחלוטין ולא ניתן יהיה לנוע בשום דרך אחרת", isCorrect: false },
                { text: "נוצרים עומסי תנועה בדרכים חלופיות ומשתנים דפוסי הנסיעה בכל האזור", isCorrect: true },
                { text: "רק האנשים שרצו לנסוע באותו כביש מושפעים ללא השפעה על שאר התנועה", isCorrect: false }
            ],
            explanation: "מערכת תחבורה מדגימה את עקרון ההשפעה ההדדית. כאשר כביש מרכזי נחסם, התנועה 'זורמת' לדרכים חלופיות, יוצרת עומסים גם במקומות רחוקים מהתקלה המקורית. מערכות ניווט מכוונות אנשים למסלולים אחרים, ומשפיעות על המערכת כולה. זוהי דוגמה ל'אפקט הפרפר' במערכות מורכבות, כאשר שינוי קטן במקום אחד מוביל לשינויים גדולים במקומות אחרים."
        },
        {
            title: "יתירות במערכות קריטיות - מטוס",
            image: "school-system",
            imageName: "מערכות מטוס",
            description: "מטוסים מתוכננים עם מערכות כפולות ומשולשות למקרה של תקלה.",
            question: "למה במטוסים קיימות מספר מערכות חשמל עצמאיות ומקבילות?",
            options: [
                { text: "כדי לחסוך בדלק ולהפחית את עלויות התפעול של המטוס במהלך הטיסה", isCorrect: false },
                { text: "כדי שהמטוס יוכל להמשיך לטוס בבטחה גם אם אחת המערכות נכשלת", isCorrect: true },
                { text: "רק כדי לעמוד בתקנות התעופה, אין להן שימוש אמיתי או מעשי בפועל", isCorrect: false },
                { text: "כדי לאפשר לטייסים לבחור איזו מערכת להפעיל בכל רגע נתון", isCorrect: false }
            ],
            explanation: "מטוסים מדגימים את עקרון היתירות (Redundancy) במערכות קריטיות. מערכות חיוניות כמו חשמל, הידראוליקה ואוויוניקה מותקנות בכפילות או שילוש, כך שאם מערכת אחת נכשלת, מערכות גיבוי נכנסות לפעולה. זוהי דוגמה למערכת עם חוסן (Resilience) - היכולת להמשיך לתפקד גם כאשר חלקים ממנה נכשלים, וזאת בזכות תכנון מראש שלוקח בחשבון אפשרות של תקלות."
        }
    ];
    
    // טעינת מסך הפתיחה
    function showScreen(screenId) {
        // הסתרת כל המסכים
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // הצגת המסך המבוקש
        document.getElementById(screenId).classList.add('active');
        currentScreen = screenId;
    }
    
    // מעבר בין מסכים
    document.getElementById('start-btn').addEventListener('click', function() {
        showScreen('difficulty-screen');
    });
    
    document.getElementById('instructions-btn').addEventListener('click', function() {
        showScreen('instructions-screen');
    });
    
    document.getElementById('back-to-welcome').addEventListener('click', function() {
        showScreen('welcome-screen');
    });
    
    document.getElementById('back-from-difficulty').addEventListener('click', function() {
        showScreen('welcome-screen');
    });
    
    document.getElementById('back-from-game-easy').addEventListener('click', function() {
        resetGame();
        showScreen('difficulty-screen');
    });
    
    document.getElementById('back-from-game-medium').addEventListener('click', function() {
        resetGame();
        showScreen('difficulty-screen');
    });
    
    document.getElementById('back-from-game-hard').addEventListener('click', function() {
        resetGame();
        showScreen('difficulty-screen');
    });
    
    document.getElementById('play-again').addEventListener('click', function() {
        resetGame();
        showScreen('difficulty-screen');
    });
    
    document.getElementById('go-home').addEventListener('click', function() {
        resetGame();
        showScreen('welcome-screen');
    });
    
    // בחירת רמת קושי
    document.getElementById('easy-level').addEventListener('click', function() {
        startEasyGame();
    });
    
    document.getElementById('medium-level').addEventListener('click', function() {
        startMediumGame();
    });
    
    document.getElementById('hard-level').addEventListener('click', function() {
        startHardGame();
    });
    
    // התחלת משחק ברמה קלה
    function startEasyGame() {
        currentEasyIndex = 0;
        correctAnswers = 0;
        totalQuestions = easySystems.length;
        showScreen('game-easy-screen');
        loadEasySystem(currentEasyIndex);
        updateProgress(currentEasyIndex, easySystems.length, 'progress-easy');
    }
    
    // התחלת משחק ברמה בינונית
    function startMediumGame() {
        currentMediumIndex = 0;
        correctAnswers = 0;
        totalQuestions = mediumSystems.length;
        showScreen('game-medium-screen');
        loadMediumSystem(currentMediumIndex);
        updateProgress(currentMediumIndex, mediumSystems.length, 'progress-medium');
    }
    
    // התחלת משחק ברמה מתקדמת
    function startHardGame() {
        currentHardIndex = 0;
        correctAnswers = 0;
        totalQuestions = hardSystems.length;
        showScreen('game-hard-screen');
        loadHardSystem(currentHardIndex);
        updateProgress(currentHardIndex, hardSystems.length, 'progress-hard');
    }
    
    // עדכון סרגל התקדמות
    function updateProgress(current, total, progressId) {
        const progressPercent = (current / total) * 100;
        document.getElementById(progressId).style.width = progressPercent + '%';
    }
    
    // טעינת מערכת ברמה קלה
    function loadEasySystem(index) {
        const system = easySystems[index];
        const container = document.getElementById('systems-container');
        
        // ניקוי התוכן הקודם
        container.innerHTML = '';
        
        // יצירת כרטיס מערכת
        const systemCard = document.createElement('div');
        systemCard.className = 'system-card';
        
        // כותרת המערכת
        const title = document.createElement('h3');
        title.className = 'system-title';
        title.textContent = system.title;
        systemCard.appendChild(title);
        
        // תמונת המערכת
        const image = document.createElement('div');
        image.className = 'system-image ' + system.image;
        image.textContent = system.imageName;
        systemCard.appendChild(image);
        
        // תיאור המערכ
        // תיאור המערכת
        const description = document.createElement('p');
        description.className = 'system-description';
        description.textContent = system.description;
        systemCard.appendChild(description);
        
        // שאלה על המערכת
        const question = document.createElement('div');
        question.className = 'system-question';
        question.textContent = system.question;
        systemCard.appendChild(question);
        
        // רכיבי המערכת
        const components = document.createElement('div');
        components.className = 'system-components';
        
        // יצירת לחצנים עבור כל רכיב
        system.components.forEach((component, i) => {
            const componentBtn = document.createElement('div');
            componentBtn.className = 'component';
            componentBtn.textContent = component.text;
            componentBtn.dataset.correct = component.isCorrect;
            componentBtn.dataset.index = i;
            
            componentBtn.addEventListener('click', function() {
                // הוספת או הסרת קלאס 'נבחר'
                this.classList.toggle('selected');
            });
            
            components.appendChild(componentBtn);
        });
        
        systemCard.appendChild(components);
        
        // הוספת תיבת הכרטיס למיכל
        container.appendChild(systemCard);
        
        // איפוס משוב
        const feedback = document.getElementById('feedback-easy');
        feedback.innerHTML = '';
        feedback.className = 'feedback';
        
        // הפעלת כפתור המשך
        document.getElementById('next-easy').onclick = function() {
            checkEasyAnswer(index);
        };
    }
    
    // טעינת מערכת ברמה בינונית
    function loadMediumSystem(index) {
        const system = mediumSystems[index];
        const container = document.getElementById('medium-systems-container');
        
        // ניקוי התוכן הקודם
        container.innerHTML = '';
        
        // יצירת כרטיס מערכת
        const systemCard = document.createElement('div');
        systemCard.className = 'system-card';
        
        // כותרת המערכת
        const title = document.createElement('h3');
        title.className = 'system-title';
        title.textContent = system.title;
        systemCard.appendChild(title);
        
        // תמונת המערכת
        const image = document.createElement('div');
        image.className = 'system-image ' + system.image;
        image.textContent = system.imageName;
        systemCard.appendChild(image);
        
        // תיאור המערכת
        const description = document.createElement('p');
        description.className = 'system-description';
        description.textContent = system.description;
        systemCard.appendChild(description);
        
        // שאלה על המערכת
        const question = document.createElement('div');
        question.className = 'system-question';
        question.textContent = system.question;
        systemCard.appendChild(question);
        
        // אפשרויות תשובה
        const options = document.createElement('div');
        options.className = 'system-options';
        
        // יצירת לחצנים עבור כל אפשרות
        system.options.forEach((option, i) => {
            const optionBtn = document.createElement('div');
            optionBtn.className = 'option';
            optionBtn.textContent = option.text;
            optionBtn.dataset.correct = option.isCorrect;
            optionBtn.dataset.index = i;
            
            optionBtn.addEventListener('click', function() {
                // הסרת הבחירה הקודמת
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // סימון האפשרות הנוכחית
                this.classList.add('selected');
            });
            
            options.appendChild(optionBtn);
        });
        
        systemCard.appendChild(options);
        
        // הוספת תיבת הכרטיס למיכל
        container.appendChild(systemCard);
        
        // איפוס משוב
        const feedback = document.getElementById('feedback-medium');
        feedback.innerHTML = '';
        feedback.className = 'feedback';
        
        // הפעלת כפתור המשך
        document.getElementById('next-medium').onclick = function() {
            checkMediumAnswer(index);
        };
    }

// טעינת מערכת ברמה מתקדמת
function loadHardSystem(index) {
    const system = hardSystems[index];
    const container = document.getElementById('hard-systems-container');
    
    // ניקוי התוכן הקודם
    container.innerHTML = '';
    
    // יצירת כרטיס מערכת
    const systemCard = document.createElement('div');
    systemCard.className = 'system-card';
    
    // כותרת המערכת
    const title = document.createElement('h3');
    title.className = 'system-title';
    title.textContent = system.title;
    systemCard.appendChild(title);
    
    // תמונת המערכת
    const image = document.createElement('div');
    image.className = 'system-image ' + system.image;
    image.textContent = system.imageName;
    systemCard.appendChild(image);
    
    // תיאור המערכת
    const description = document.createElement('p');
    description.className = 'system-description';
    description.textContent = system.description;
    systemCard.appendChild(description);
    
    // שאלה על המערכת
    const question = document.createElement('div');
    question.className = 'system-question';
    question.textContent = system.question;
    systemCard.appendChild(question);
    
    // אפשרויות תשובה
    const options = document.createElement('div');
    options.className = 'system-options';
    
    // יצירת לחצנים עבור כל אפשרות
    system.options.forEach((option, i) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'option';
        optionBtn.textContent = option.text;
        optionBtn.dataset.correct = option.isCorrect;
        optionBtn.dataset.index = i;
        
        optionBtn.addEventListener('click', function() {
            // הסרת הבחירה הקודמת
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // סימון האפשרות הנוכחית
            this.classList.add('selected');
        });
        
        options.appendChild(optionBtn);
    });
    
    systemCard.appendChild(options);
    
    // הוספת תיבת הכרטיס למיכל
    container.appendChild(systemCard);
    
    // איפוס משוב
    const feedback = document.getElementById('feedback-hard');
    feedback.innerHTML = '';
    feedback.className = 'feedback';
    
    // הפעלת כפתור המשך
    document.getElementById('next-hard').onclick = function() {
        checkHardAnswer(index);
    };
}

// בדיקת תשובה ברמה קלה
function checkEasyAnswer(index) {
    const system = easySystems[index];
    const selectedComponents = document.querySelectorAll('.component.selected');
    const feedback = document.getElementById('feedback-easy');
    let isCorrect = true;
    let hasSelection = selectedComponents.length > 0;
    
    // בדיקה אם לא נבחרו רכיבים
    if (!hasSelection) {
        showFeedback(feedback, 'אנא בחר לפחות רכיב אחד', 'hint');
        return;
    }
    
    // בדיקת בחירות
    document.querySelectorAll('.component').forEach(component => {
        const shouldBeSelected = component.dataset.correct === 'true';
        const isSelected = component.classList.contains('selected');
        
        // בדיקה אם הרכיב צריך להיבחר והוא לא נבחר או להיפך
        if (shouldBeSelected !== isSelected) {
            isCorrect = false;
        }
        
        // סימון התשובות הנכונות והשגויות
        if (isSelected) {
            if (shouldBeSelected) {
                component.classList.add('correct');
            } else {
                component.classList.add('incorrect');
            }
        } else if (shouldBeSelected) {
            component.classList.add('correct');
        }
        
        // ביטול האפשרות להמשיך לבחור
        component.style.pointerEvents = 'none';
    });
    
    // עדכון המשוב
    if (isCorrect) {
        showFeedback(feedback, 'כל הכבוד! בחרת את כל הרכיבים הנכונים.', 'correct');
        correctAnswers++;
    } else {
        showFeedback(feedback, system.explanation, 'incorrect');
    }
    
    // שינוי פעולת כפתור ההמשך
    document.getElementById('next-easy').onclick = function() {
        if (currentEasyIndex < easySystems.length - 1) {
            currentEasyIndex++;
            loadEasySystem(currentEasyIndex);
            updateProgress(currentEasyIndex, easySystems.length, 'progress-easy');
        } else {
            finishGame();
        }
    };
}

// בדיקת תשובה ברמה בינונית
function checkMediumAnswer(index) {
    const system = mediumSystems[index];
    const selectedOption = document.querySelector('.option.selected');
    const feedback = document.getElementById('feedback-medium');
    
    // בדיקה אם לא נבחרה אפשרות
    if (!selectedOption) {
        showFeedback(feedback, 'אנא בחר אפשרות אחת', 'hint');
        return;
    }
    
    const isCorrect = selectedOption.dataset.correct === 'true';
    
    // סימון התשובות הנכונות והשגויות
    document.querySelectorAll('.option').forEach(option => {
        if (option.dataset.correct === 'true') {
            option.classList.add('correct');
        } else if (option === selectedOption && !isCorrect) {
            option.classList.add('incorrect');
        }
        
        // ביטול האפשרות להמשיך לבחור
        option.style.pointerEvents = 'none';
    });
    
    // עדכון המשוב
    if (isCorrect) {
        showFeedback(feedback, 'כל הכבוד! בחרת את התשובה הנכונה.', 'correct');
        correctAnswers++;
    } else {
        showFeedback(feedback, system.explanation, 'incorrect');
    }
    
    // שינוי פעולת כפתור ההמשך
    document.getElementById('next-medium').onclick = function() {
        if (currentMediumIndex < mediumSystems.length - 1) {
            currentMediumIndex++;
            loadMediumSystem(currentMediumIndex);
            updateProgress(currentMediumIndex, mediumSystems.length, 'progress-medium');
        } else {
            finishGame();
        }
    };
}

// בדיקת תשובה ברמה מתקדמת
function checkHardAnswer(index) {
    const system = hardSystems[index];
    const selectedOption = document.querySelector('.option.selected');
    const feedback = document.getElementById('feedback-hard');
    
    // בדיקה אם לא נבחרה אפשרות
    if (!selectedOption) {
        showFeedback(feedback, 'אנא בחר אפשרות אחת', 'hint');
        return;
    }
    
    const isCorrect = selectedOption.dataset.correct === 'true';
    
    // סימון התשובות הנכונות והשגויות
    document.querySelectorAll('.option').forEach(option => {
        if (option.dataset.correct === 'true') {
            option.classList.add('correct');
        } else if (option === selectedOption && !isCorrect) {
            option.classList.add('incorrect');
        }
        
        // ביטול האפשרות להמשיך לבחור
        option.style.pointerEvents = 'none';
    });
    
    // עדכון המשוב
    if (isCorrect) {
        showFeedback(feedback, 'כל הכבוד! בחרת את התשובה הנכונה.', 'correct');
        correctAnswers++;
    } else {
        showFeedback(feedback, system.explanation, 'incorrect');
    }
    
    // שינוי פעולת כפתור ההמשך
    document.getElementById('next-hard').onclick = function() {
        if (currentHardIndex < hardSystems.length - 1) {
            currentHardIndex++;
            loadHardSystem(currentHardIndex);
            updateProgress(currentHardIndex, hardSystems.length, 'progress-hard');
        } else {
            finishGame();
        }
    };
}

// הצגת משוב
function showFeedback(element, message, type) {
    element.textContent = message;
    element.className = 'feedback ' + type + ' show';
}

// סיום המשחק
function finishGame() {
    const summary = document.getElementById('summary-stats');
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    
    summary.innerHTML = `
        <h2>הציון שלך: ${score}%</h2>
        <p>ענית נכון על ${correctAnswers} שאלות מתוך ${totalQuestions}</p>
    `;
    
    showScreen('summary-screen');
}

// איפוס המשחק
function resetGame() {
    currentEasyIndex = 0;
    currentMediumIndex = 0;
    currentHardIndex = 0;
    correctAnswers = 0;
    totalQuestions = 0;
    
    document.getElementById('progress-easy').style.width = '0%';
    document.getElementById('progress-medium').style.width = '0%';
    document.getElementById('progress-hard').style.width = '0%';
}
})