/* ===================================================================
   برنامج احتراف الذكاء الاصطناعي الشامل - م. أمير عادل عيد
   JavaScript: Interactive Engine, HR WhatsApp Automation & AI Bot
   =================================================================== */

// Constant HR Phone Configuration
const HR_PHONE = "201012668128"; // Egypt country code + 01012668128
const HR_DISPLAY_PHONE = "01012668128";

// Global Storage for latest lead
let currentLeadData = null;

// ==========================================
// 1. DOM CONTENT LOADED & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initCountdownTimer();
    initNavbarScroll();
    initMobileNav();
    initFieldTabs();
});

// ==========================================
// 2. COUNTDOWN TIMER FOR FREE FRIDAY LECTURE
// ==========================================
function initCountdownTimer() {
    function getNextFriday() {
        const now = new Date();
        const nextFriday = new Date();
        const dayOfWeek = now.getDay(); // 0 is Sunday, 5 is Friday
        let daysUntilFriday = (5 - dayOfWeek + 7) % 7;
        
        // If today is Friday and past 8:00 PM, target next Friday
        if (daysUntilFriday === 0 && now.getHours() >= 20) {
            daysUntilFriday = 7;
        } else if (daysUntilFriday === 0 && now.getHours() < 20) {
            daysUntilFriday = 0; // Today is Friday before 8 PM
        }

        nextFriday.setDate(now.getDate() + daysUntilFriday);
        nextFriday.setHours(20, 0, 0, 0); // 8:00 PM
        return nextFriday;
    }

    const targetDate = getNextFriday();

    function update() {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if (difference <= 0) {
            document.getElementById("cd-days").textContent = "00";
            document.getElementById("cd-hours").textContent = "00";
            document.getElementById("cd-minutes").textContent = "00";
            document.getElementById("cd-seconds").textContent = "00";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
        document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("cd-minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("cd-seconds").textContent = String(seconds).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
}

// ==========================================
// 3. NAVBAR & MOBILE MENU
// ==========================================
function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.6)";
            navbar.style.background = "rgba(7, 9, 14, 0.96)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(7, 9, 14, 0.85)";
        }
    });
}

function initMobileNav() {
    const toggleBtn = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("mobile-active");
            const icon = toggleBtn.querySelector("i");
            if (navLinks.classList.contains("mobile-active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });

        // Close on link click
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("mobile-active");
                const icon = toggleBtn.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }
}

// ==========================================
// 4. FIELDS & SPECIALIZATION DYNAMIC TABS
// ==========================================
const fieldsData = {
    marketing: {
        title: "التسويق، الإعلانات، وبناء العلامات التجارية",
        subtitle: "حوّل حملاتك التسويقية إلى مكائن نمو فائقة الدقة والسرعة وتجاوز المنافسين",
        icon: "fa-bullhorn",
        points: [
            { icon: "fa-chart-pie", title: "تحليل سلوك الجمهور والمنافسين", desc: "استخراج ثغرات السوق وصياغة استراتيجيات تسويق محكمة في دقائق." },
            { icon: "fa-pen-fancy", title: "كتابة إعلانات وإيميلات عالية التحويل", desc: "صياغة نصوص Copywriting بيعية مقنعة تناسب كل شريحة عملاء بدقة." },
            { icon: "fa-wand-magic-sparkles", title: "توليد محتوى مرئي وحملات سريعة", desc: "إنشاء تصاميم، بنرات وفيديوهات إعلانية باستخدام أدوات الذكاء الاصطناعي التوليدي." },
            { icon: "fa-robot", title: "أتمتة الردود ومتابعة العملاء المحتملين", desc: "بناء شات بوت تسويقي يتابع العملاء على مدار الساعة ويزيد نسبة الإغلاق." }
        ]
    },
    legal: {
        title: "القانون، المحاماة، والاستشارات القانونية",
        subtitle: "ارتقِ بجودة أبحاثك القانونية ومذكراتك القضائية مع تقليص وقت الصياغة بنسبة 80%",
        icon: "fa-scale-balanced",
        points: [
            { icon: "fa-file-contract", title: "فحص وتدقيق العقود والاتفاقيات", desc: "اكتشاف البنود المبهمة والثغرات المحتملة في ثوانٍ مع اقتراح صياغات بديلة متينة." },
            { icon: "fa-book-bookmark", title: "البحث في السوابق والمراجع القانونية", desc: "تلخيص الأحكام القضائية واستخراج المواد القانونية ذات الصلة بقضيتك فوراً." },
            { icon: "fa-file-lines", title: "صياغة مسودات المذكرات والدعاوى", desc: "إعداد مسودات أولية قوية لمذكرات الدفاع وصحف الدعاوى مبنية على أسانيد محكمة." },
            { icon: "fa-shield-halved", title: "أمان وسرية بيانات الموكلين", desc: "معرفة آليات استخدام النماذج دون المساس بسرية القضايا أو أخلاقيات المهنة." }
        ]
    },
    programming: {
        title: "البرمجة وتكنولوجيا المعلومات (IT)",
        subtitle: "ضاعف سرعتك كـ Developer بأكثر من 4 أضعاف مع أدوات الـ AI Pair Programming",
        icon: "fa-code",
        points: [
            { icon: "fa-laptop-code", title: "كتابة الأكواد وتصحيح الأخطاء الذاتي", desc: "توليد دوال معقدة، كتابة Unit Tests، واكتشاف الـ Bugs المستعصية في ثوانٍ." },
            { icon: "fa-network-wired", title: "بناء تطبيقات ذكية (AI Apps)", desc: "دمج الـ APIs ونماذج الـ LLM في تطبيقات الويب والموبايل الخاصة بك." },
            { icon: "fa-database", title: "أتمتة قواعد البيانات والـ DevOps", desc: "صياغة استعلامات SQL متقدمة وأتمتة خطوط النشر والتشغيل CI/CD." },
            { icon: "fa-rocket", title: "تطوير الـ Full-Stack بأقل مجهود", desc: "تحويل الأفكار والـ Wireframes إلى واجهات وكود جاهز للعمل فوراً." }
        ]
    },
    design: {
        title: "التصميم، الجرافيك، والميديا التفاعلية",
        subtitle: "اكسر حدود الخيال وأنتج أصولاً بصرية ثلاثية الأبعاد وصوراً سينمائية تخطف الأنظار",
        icon: "fa-palette",
        points: [
            { icon: "fa-image", title: "التوليد البصري الفائق (Photorealistic)", desc: "إتقان أوامر Midjourney و DALL-E لإنتاج صور واقعية بجودة الإعلانات العالمية." },
            { icon: "fa-paint-roller", title: "تصميم الهويات والعلامات التجارية", desc: "ابتكار Moodboards، لوحات ألوان، وعناصر بصرية متناسقة للشركات بسرعة مذهلة." },
            { icon: "fa-film", title: "توليد وتحريك الفيديو بالـ AI", desc: "تحويل الصور والنصوص إلى لقطات فيديو سينمائية عبر Runway و Pika." },
            { icon: "fa-vector-square", title: "توسيع الصور وتحسين الجودة (Upscaling)", desc: "معالجة الصور، تعديل الإضاءة والنسب، وإزالة العناصر المشتتة بدقة بالغة." }
        ]
    },
    management: {
        title: "إدارة الأعمال، الموارد البشرية (HR) والقيادة",
        subtitle: "تحويل القرارات الإدارية إلى بيانات ذكية وتوفير عشرات الساعات أسبوعياً",
        icon: "fa-briefcase",
        points: [
            { icon: "fa-address-card", title: "فلترة وتقييم السير الذاتية (CVs)", desc: "استخراج أفضل المرشحين ومطابقة متطلبات الوظيفة مع المهارات بدون تحيز." },
            { icon: "fa-chart-simple", title: "تحليل مؤشرات الأداء (KPIs)", desc: "تحويل تقارير الأداء المعقدة إلى رؤى تنفيذية واضحة تدعم اتخاذ القرار." },
            { icon: "fa-envelope-open-text", title: "صياغة المراسلات والسياسات الرسمية", desc: "كتابة لوائح الشركات، إيميلات التواصل الداخلي، والخطابات الرسمية بدقة لغوية تامة." },
            { icon: "fa-calendar-check", title: "تنظيم وجدولة الاجتماعات والمهام", desc: "تلخيص الاجتماعات، استخراج الـ Action Items، ومتابعة تنفيذها آلياً." }
        ]
    },
    content: {
        title: "صناعة المحتوى، الكتابة الإبداعية والبودكاست",
        subtitle: "توقف عن المعاناة من قفلة الكاتب (Writer's Block) وأنتج محتوى فيروسي متواصل",
        icon: "fa-pen-nib",
        points: [
            { icon: "fa-fire", title: "ابتكار أفكار تريند وفيروسية (Viral Ideas)", desc: "توليد مئات الزوايا الإبداعية لمحتوى السوشيال ميديا، اليوتيوب والتيك توك." },
            { icon: "fa-microphone-lines", title: "كتابة اسكربتات الفيديو والبودكاست", desc: "هيكلة اسكربتات مشوقة تعتمد على مبدأ الـ Hook القوي لإبقاء المشاهد مشدوداً." },
            { icon: "fa-file-lines", title: "المقالات وتحسين محركات البحث (SEO)", desc: "كتابة مقالات متوافقة مع معايير جوجل لجلب آلاف الزيارات المجانية." },
            { icon: "fa-language", title: "الترجمة التكيفية والتوطين (Localization)", desc: "ترجمة المحتوى مع الحفاظ على روح اللهجة والجمهور المستهدف دون ركاكة." }
        ]
    },
    education: {
        title: "التعليم، التدريب، والبحث العلمي",
        subtitle: "تحويل تجربة التدريس إلى تجربة تفاعلية مبهرة تلائم كل طالب ومستمع",
        icon: "fa-graduation-cap",
        points: [
            { icon: "fa-chalkboard-user", title: "إعداد المناهج وخطط الدروس التفاعلية", desc: "تصميم خطط تعليمية شاملة ومصممة وفق أحدث استراتيجيات التعلم النشط." },
            { icon: "fa-file-circle-question", title: "توليد بنوك الأسئلة والاختبارات", desc: "إنشاء امتحانات متدرجة الصعوبة مع نماذج إجابة وشرح تفصيلي للحلول." },
            { icon: "fa-file-pdf", title: "تلخيص الأوراق البحثية والكتب", desc: "استيعاب مئات الصفحات من المراجع العلمية واستخلاص جوهرها في دقائق." },
            { icon: "fa-display", title: "عروض تقديمية (PowerPoint) ذكية", desc: "إنشاء شرائح презентаций احترافية جاهزة للشرح بدون مجهود يدوي مرهق." }
        ]
    }
};

function initFieldTabs() {
    const tabs = document.querySelectorAll(".field-tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const fieldKey = tab.getAttribute("data-field");
            renderFieldContent(fieldKey);
        });
    });
}

function renderFieldContent(key) {
    const data = fieldsData[key];
    if (!data) return;

    const titleEl = document.getElementById("fieldTitle");
    const subEl = document.getElementById("fieldSubtitle");
    const pointsContainer = document.getElementById("fieldPoints");
    const iconWrapper = document.querySelector(".field-icon-wrapper");

    if (titleEl) titleEl.textContent = data.title;
    if (subEl) subEl.textContent = data.subtitle;
    if (iconWrapper) iconWrapper.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;

    if (pointsContainer) {
        pointsContainer.innerHTML = data.points.map(p => `
            <div class="point-box">
                <i class="fa-solid ${p.icon}"></i>
                <strong>${p.title}</strong>
                <span>${p.desc}</span>
            </div>
        `).join("");
    }
}

// ==========================================
// 5. FORM HANDLING & SMART HR WHATSAPP ROUTING
// ==========================================
function toggleOtherField(value) {
    const group = document.getElementById("otherFieldGroup");
    const input = document.getElementById("otherField");
    if (value === "أخرى") {
        group.style.display = "flex";
        input.required = true;
    } else {
        group.style.display = "none";
        input.required = false;
        input.value = "";
    }
}

function setFormGoal(type) {
    const formSec = document.getElementById("register-section");
    if (formSec) {
        formSec.scrollIntoView({ behavior: "smooth" });
    }

    if (type === "free_friday") {
        const radios = document.getElementsByName("bookingType");
        radios.forEach(r => {
            if (r.value.includes("محاضرة الجمعة المجانية")) {
                r.checked = true;
            }
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    const btnText = submitBtn.querySelector(".btn-text");
    const btnSpinner = submitBtn.querySelector(".btn-spinner");

    // UI Loading state
    btnText.style.display = "none";
    btnSpinner.style.display = "inline-flex";
    submitBtn.disabled = true;

    // Retrieve form values
    const fullName = document.getElementById("fullName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const whatsappNumber = document.getElementById("whatsappNumber").value.trim();
    const location = document.getElementById("location").value.trim();
    
    let field = document.getElementById("fieldSelect").value;
    if (field === "أخرى") {
        const otherVal = document.getElementById("otherField").value.trim();
        field = otherVal ? `أخرى: ${otherVal}` : "أخرى (غير محدد)";
    }

    const bookingTypeEl = document.querySelector('input[name="bookingType"]:checked');
    const bookingType = bookingTypeEl ? bookingTypeEl.value : "محاضرة الجمعة المجانية";
    const hasDevice = document.getElementById("hasDevice").value;
    const notes = document.getElementById("notes").value.trim() || "غير محدد";

    const leadObject = {
        id: Date.now(),
        fullName,
        phoneNumber,
        whatsappNumber,
        location,
        field,
        bookingType,
        hasDevice,
        notes,
        createdAt: new Date().toLocaleString("ar-EG")
    };

    // Save lead to local storage
    saveLead(leadObject);
    currentLeadData = leadObject;

    // Simulate short processing for feedback
    setTimeout(() => {
        btnText.style.display = "inline-flex";
        btnSpinner.style.display = "none";
        submitBtn.disabled = false;

        // Fire celebration confetti
        if (typeof confetti === "function") {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        // Show Success Modal
        showSuccessModal(leadObject);

        // Reset form
        document.getElementById("aiBookingForm").reset();
        document.getElementById("otherFieldGroup").style.display = "none";
    }, 600);
}

function saveLead(lead) {
    try {
        let leads = JSON.parse(localStorage.getItem("ai_course_leads") || "[]");
        leads.unshift(lead);
        localStorage.setItem("ai_course_leads", JSON.stringify(leads));
        updateAdminBadge();
    } catch (err) {
        console.error("Local storage error:", err);
    }
}

function showSuccessModal(lead) {
    const modal = document.getElementById("successModal");
    const summaryBox = document.getElementById("modalSummaryBox");

    summaryBox.innerHTML = `
        <div class="modal-summary-item">
            <span>الاسم:</span>
            <strong>${lead.fullName}</strong>
        </div>
        <div class="modal-summary-item">
            <span>رقم الواتساب:</span>
            <strong dir="ltr">${lead.whatsappNumber}</strong>
        </div>
        <div class="modal-summary-item">
            <span>التخصص:</span>
            <strong>${lead.field}</strong>
        </div>
        <div class="modal-summary-item">
            <span>نوع الحجز:</span>
            <strong style="color: var(--neon-cyan);">${lead.bookingType}</strong>
        </div>
        <div class="modal-summary-item">
            <span>مسؤولة الـ HR المتابعة:</span>
            <strong style="color: #25d366;">01012668128</strong>
        </div>
    `;

    modal.classList.add("active");
}

function closeModal() {
    const modal = document.getElementById("successModal");
    modal.classList.remove("active");
}

// Redirects to HR WhatsApp with the pre-formatted structured message
function sendToHRWhatsApp() {
    if (!currentLeadData) return;

    const lead = currentLeadData;
    const message = 
`🌟 *طلب انضمام وحجز في برنامج الذكاء الاصطناعي* 🌟
(مع المدرب: م. أمير عادل عيد)
--------------------------------------
👤 *الاسم الكريم:* ${lead.fullName}
📱 *رقم الهاتف:* ${lead.phoneNumber}
💬 *رقم الواتساب:* ${lead.whatsappNumber}
📍 *المحافظة / الدولة:* ${lead.location}
💼 *التخصص والمجال:* ${lead.field}
🎫 *نوع الحجز المطلوب:* ${lead.bookingType}
💻 *توفر جهاز كمبيوتر:* ${lead.hasDevice}
🎯 *الهدف من التدريب:* ${lead.notes}
--------------------------------------
يرجى تأكيد تسجيل مقعدي وإرسال رابط قاعة المحاضرة وتفاصيل المتابعة. شكراً جزيلاً مسؤولة الموارد البشرية!`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${HR_PHONE}?text=${encodedMsg}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");
    closeModal();
}

function openDirectWhatsApp() {
    const defaultMsg = 
`مرحباً مسؤولة الموارد البشرية (HR)، أود الاستفسار وحجز مقعدي في برنامج احتراف الذكاء الاصطناعي مع المهندس أمير عادل عيد (ومحاضرة الجمعة المجانية).`;
    const waUrl = `https://wa.me/${HR_PHONE}?text=${encodeURIComponent(defaultMsg)}`;
    window.open(waUrl, "_blank");
}

// ==========================================
// 6. AI INTERACTIVE ASSISTANT (CHATBOT)
// ==========================================
function toggleAIChat() {
    const chatWindow = document.getElementById("aiChatWindow");
    chatWindow.classList.toggle("active");
    if (chatWindow.classList.contains("active")) {
        const input = document.getElementById("aiUserInput");
        if (input) input.focus();
    }
}

function sendQuickQuestion(questionText) {
    addMessageToChat(questionText, "user");
    processAIResponse(questionText);
}

function handleChatKeyPress(e) {
    if (e.key === "Enter") {
        sendUserChatMessage();
    }
}

function sendUserChatMessage() {
    const input = document.getElementById("aiUserInput");
    const text = input.value.trim();
    if (!text) return;

    addMessageToChat(text, "user");
    input.value = "";
    processAIResponse(text);
}

function addMessageToChat(text, sender) {
    const body = document.getElementById("aiChatBody");
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-message ${sender === "user" ? "user-msg" : "bot-msg"}`;
    msgDiv.innerHTML = `<div class="bubble">${text}</div>`;
    body.appendChild(msgDiv);
    body.scrollTop = body.scrollHeight;
}

function processAIResponse(userInput) {
    const lower = userInput.toLowerCase();
    let reply = "";

    if (lower.includes("جمعة") || lower.includes("مجاني") || lower.includes("موعد") || lower.includes("محاضرة")) {
        reply = `📅 <strong>محاضرة الجمعة المجانية</strong> هي جلسة تفاعلية أونلاين 100% مجانية، الهدف منها إنك تشوف أسلوب التدريب العملي بنفسك وتتعرف على إمكانيات الذكاء الاصطناعي في تخصصك قبل ما تاخد قرارك. 
        <br><br>👉 تقدر تسجل اسمك فيها فوراً من خلال استمارة الحجز بالموقع أو التواصل مع مسؤولة الـ HR على <strong>01012668128</strong>.`;
    } 
    else if (lower.includes("أدوات") || lower.includes("ادوات") || lower.includes("بريميوم") || lower.includes("اشتراك") || lower.includes("premium")) {
        reply = `🔥 <strong>الأدوات مش مجرد شرح نظري!</strong><br>
        المتدربون بيتاح لهم اشتراكات وأدوات Premium حقيقية (زي أقوى نماذج الذكاء التوليدي، أدوات التصميم والصوت والفيديو والأتمتة) يشتغلوا ويطبقوا بيها أثناء التدريب عملياً مش مجرد مشاهدة محاضرات.`;
    } 
    else if (lower.includes("شهادة") || lower.includes("مشروع") || lower.includes("تكريم") || lower.includes("شخصين")) {
        reply = `🏆 <strong>الشهادات والتميز:</strong><br>
        1. كل متدرب بيحصل على شهادة باسم التخصص والمجال اللي تدرب وطبق عليه.<br>
        2. كمان هيتم اختيار <strong>شخصين مميزين</strong> سلموا Real Project وطبقوا بجدية، وهيكون ليهم <strong>تكريم خاص ودعم ومساندة حقيقية في تطوير مشروعهم</strong> من البرنامج والمدرب!`;
    } 
    else if (lower.includes("hr") || lower.includes("تواصل") || lower.includes("واتساب") || lower.includes("رقم")) {
        reply = `📞 مسؤولة الموارد البشرية والقبول جاهزة للرد عليك على مدار اليوم:<br>
        📱 رقم الواتساب: <strong>01012668128</strong><br><br>
        <button class="chip-btn" style="background: #25d366; color: #fff; margin-top:5px;" onclick="openDirectWhatsApp()">اضغط هنا لفتح واتساب الـ HR مباشرة</button>`;
    } 
    else if (lower.includes("تخصص") || lower.includes("مناسب") || lower.includes("مجال") || lower.includes("قانون") || lower.includes("تسويق") || lower.includes("برمجة")) {
        reply = `🎯 البرنامج مصمم خصيصاً علشان يربط الـ AI بمجالك أياً كان (تسويق، قانون، برمجة، تصميم، إدارة وHR، محتوى، تعليم...). ومش محتاج أي خلفية برمجية مسبقة، لأن المرحلة الأولى بتبدأ معاك بالتأسيس من الصفر!`;
    } 
    else if (lower.includes("دخل") || lower.includes("فلوس") || lower.includes("ارباح") || lower.includes("شغل")) {
        reply = `💼 <strong>المرحلة الثالثة في البرنامج</strong> مخصصة تماماً لـ: "تحقيق دخل من الـ AI"، إزاي تقدم خدمات فريلانس حقيقية، تطور شغلك ووظيفتك، وتخلق فرص دخل حقيقية من الأدوات اللي اتقنتها!`;
    } 
    else {
        reply = `أهلاً بك! برنامج الذكاء الاصطناعي مع <strong>م. أمير عادل عيد</strong> مبني على منهجية (Ideas • Design • Automate • Grow). 
        تقدر تسجل حضورك في <strong>محاضرة الجمعة المجانية</strong> من استمارة الحجز في الصفحة، أو تتواصل مباشرة مع مسؤولة الـ HR على <strong>01012668128</strong> للاستفسار عن أي تفاصيل خاصة بمجالك!`;
    }

    setTimeout(() => {
        addMessageToChat(reply, "bot");
    }, 450);
}

