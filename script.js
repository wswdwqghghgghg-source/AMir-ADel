/**
 * RANA OSAMA - HR & TALENT MANAGEMENT PORTFOLIO
 * High-Performance Motion Engine, Canvas Constellation, Multilingual Controller & Dynamic Lightbox
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Multilingual Content Dictionary (Arabic & English)
  // -------------------------------------------------------------------------
  const translations = {
    ar: {
      nav: {
        logoSub: "HR SPECIALIST",
        about: "عنّي",
        competencies: "المهارات والكفاءات",
        workshops: "ورش العمل والتطوير",
        experience: "الخبرة التدريبية",
        volunteering: "الخبرات التطوعية",
        courses: "الشهادات والبرامج",
        contact: "تواصل معي"
      },
      hero: {
        badge: "جاهزة لفرص الموارد البشرية وإدارة المواهب",
        greeting: "مرحبًا، أنا",
        name: "رنا أسامة الصردي",
        subtitle: "طالبة بالفرقة الرابعة، كلية التجارة - برنامج المحاسبة والمالية بجامعة طنطا | شغوفة بمجال الموارد البشرية، التوظيف وإدارة المواهب",
        shortSummary: "طالبة طموحة ومتميزة بخبرة تطبيقية وميدانية في التوظيف والاختيار (Recruitment & Selection)، شؤون الموظفين (Personnel)، وأساسيات الرواتب (Payroll)، مع إلمام بقانون العمل رقم 14 لسنة 2025 وقيادة الفرق بكفاءة.",
        ctaWorkshops: "استعراض ورش العمل والمشاركات",
        ctaCertificates: "معاينة الشهادات المعتمدة",
        captionRole: "مسؤولة الموارد البشرية"
      },
      metrics: {
        hrTitle: "الموارد البشرية",
        hrDesc: "تدريب معتمد وتوظيف",
        eduTitle: "جامعة طنطا",
        eduDesc: "المحاسبة والمالية",
        leadTitle: "شهادات معتمدة",
        leadDesc: "مؤسسات جامعية وحكومية"
      },
      badges: {
        recruitmentTitle: "Recruitment & Selection",
        recruitmentSub: "التوظيف والمقابلات",
        hrOperationsTitle: "Personnel & Payroll",
        hrOperationsSub: "شؤون الموظفين والرواتب"
      },
      about: {
        tag: "النبذة الشخصية",
        title: "عن مسيرتي وشغفي المهني",
        sectionSubtitle: "رؤية واضحة نحو التميز في إدارة وتطوير الكفاءات البشرية",
        cardHeading: "رنا أسامة الصردي",
        cardSub: "طالبة في السنة الرابعة | كلية التجارة - برنامج المحاسبة والمالية | جامعة طنطا",
        p1: "طالبة طموحة في السنة الرابعة بكلية التجارة، برنامج المحاسبة والمالية، جامعة طنطا، شغوفة بمجال الموارد البشرية وتسعى باستمرار لتطوير نفسها مهنيًا وشخصيًا. لديّ خبرة في العمل الجماعي والقيادة والتواصل والأنشطة التنظيمية من خلال التدريب الداخلي والأنشطة التطوعية.",
        p2: "اكتسبت خبرة عملية في مجال الموارد البشرية في التوظيف والاختيار، بما في ذلك كتابة إعلانات الوظائف، وإجراء مقابلات الفرز، والمشاركة في المقابلات الشخصية، وأعمل حاليًا على توسيع معرفتي في شؤون الموظفين وقانون العمل والرواتب وعمليات الموارد البشرية.",
        p3: "لديّ خبرة في قيادة وتقييم الفرق، وتنظيم المهام، ومتابعة الأداء، وإعداد التقارير، ودعم تطوير الفريق. مهتمة بالتوظيف، وتطوير الموظفين، وإدارة المواهب، وبناء فرق عمل عالية الأداء.",
        p4: "أحرص دائمًا على اكتساب مهارات جديدة، وخوض التحديات، وتطبيق معارفي في بيئات عملية، مع مواصلة تطوير خبرتي في مجال الموارد البشرية والمساهمة في مشاريع هادفة."
      },
      pillars: {
        p1Title: "التوظيف والاختيار (Recruitment & Selection)",
        p1Desc: "إعداد إعلانات الوظائف، الفرز الدقيق للمرشحين، إجراء مقابلات الفرز والمقابلات الفردية.",
        p2Title: "شؤون الموظفين والرواتب (Personnel & Payroll)",
        p2Desc: "ملفات العاملين، الإجراءات الإدارية، أساسيات الرواتب والاستقطاعات والتكامل الوظيفي.",
        p3Title: "القيادة وإدارة الفرق (Leadership & Team Management)",
        p3Desc: "قيادة لجان الموارد البشرية، توزيع المهام، تقييم الأداء، وبناء فرق عمل عالية الأداء والتناغم.",
        p4Title: "المحاسبة ونظم ERP برمجيات أوفيس 365",
        p4Desc: "شهادة خبير أوفيس 365 (90 ساعة)، الحسابات الدائنة، ونظام أوراكل ERP."
      },
      comp: {
        tag: "المهارات والكفاءات",
        title: "مجالات التميز والقدرات المهنية",
        subtitle: "مزيج متكامل من مهارات الموارد البشرية المتخصصة والإدارة المالية والقيادة",
        c1Title: "التوظيف وجذب الكفاءات",
        c1_1: "<i class=\"fa-solid fa-check\"></i> دورة التوظيف الكاملة (End-to-End Cycle)",
        c1_2: "<i class=\"fa-solid fa-check\"></i> تحليل وتوصيف الوظائف (Job Analysis)",
        c1_3: "<i class=\"fa-solid fa-check\"></i> صياغة ونشر إعلانات الوظائف",
        c1_4: "<i class=\"fa-solid fa-check\"></i> فرز وتقييم السير الذاتية (CV Screening)",
        c1_5: "<i class=\"fa-solid fa-check\"></i> إجراء المقابلات الأولية والهاتفية",
        c2Title: "شؤون الموظفين والرواتب",
        c2_1: "<i class=\"fa-solid fa-check\"></i> إدارة ملفات ومستندات الموظفين (Personnel)",
        c2_2: "<i class=\"fa-solid fa-check\"></i> أساسيات إعداد الرواتب (Payroll Process)",
        c2_3: "<i class=\"fa-solid fa-check\"></i> احتساب الحضور والغياب والاستقطاعات",
        c2_4: "<i class=\"fa-solid fa-check\"></i> الترابط بين التوظيف والشؤون والرواتب",
        c2_5: "<i class=\"fa-solid fa-check\"></i> قانون العمل رقم ١٤ لسنة ٢٠٢٥ والتحقيقات",
        c3Title: "القيادة وإدارة الفرق",
        c3_1: "<i class=\"fa-solid fa-check\"></i> قيادة وتوجيه لجان العمل",
        c3_2: "<i class=\"fa-solid fa-check\"></i> تنظيم وتوزيع المهام ومتابعة الالتزام",
        c3_3: "<i class=\"fa-solid fa-check\"></i> تقييم الأداء الدوري وتحديد نقاط القوة",
        c3_4: "<i class=\"fa-solid fa-check\"></i> استقبال وتهيئة الأعضاء الجدد (Onboarding)",
        c3_5: "<i class=\"fa-solid fa-check\"></i> حل المشكلات وإدارة النزاعات",
        c4Title: "البرمجيات والنظم المالية ERP",
        c4_1: "<i class=\"fa-solid fa-check\"></i> Microsoft Office 365 (Word, Excel Expert)",
        c4_2: "<i class=\"fa-solid fa-check\"></i> تحليل البيانات وتنسيق التقارير (Data Analysis)",
        c4_3: "<i class=\"fa-solid fa-check\"></i> نظام أوراكل لتخطيط الموارد (Oracle ERP)",
        c4_4: "<i class=\"fa-solid fa-check\"></i> إدارة الحسابات الدائنة (Accounts Payable)",
        c4_5: "<i class=\"fa-solid fa-check\"></i> التدقيق المالي والتقارير المحاسبية"
      },
      workshops: {
        tag: "التطوير المهني والميداني",
        title: "ورش العمل والتطوير المهني",
        subtitle: "مشاركات تفاعلية وورش عمل تطبيقية مع نخبة من المؤسسات والمراكز المعتمدة",
        filterAll: "جميع الورش",
        filterLaborLaw: "قانون العمل والموارد البشرية",
        filterUccd: "التطوير الوظيفي (UCCD)",
        filterCreativa: "الابتكار وسلاسل الإمداد (Creativa)",
        filterBeReady: "مبادرة كُن مستعداً",
        zoomBtn: "تكبير الصورة",
        keyTakeaways: "أبرز المخرجات والمهارات:",
        w1Title: "التحقيقات والإجراءات التأديبية وإنهاء الخدمة",
        w1LawBadge: "بموجب قانون العمل رقم ١٤ لسنة ٢٠٢٥",
        w1Desc: "اكتساب معرفة عملية متقدمة بضوابط التحقيقات في بيئة العمل، والإجراءات والتدابير التأديبية القانونية، ولوائح إنهاء الخدمة بما يتوافق بدقة مع أحكام قانون العمل المصري الحديث.",
        w1_1: "إدارة التحقيقات المهنية وتوثيق المحاضر الرسمية",
        w1_2: "تطبيق لائحة الجزاءات والتدابير التأديبية القانونية",
        w1_3: "لوائح وضوابط إنهاء الخدمة وتفادي النزاعات العمالية",
        w2Title: "حزمة برامج التطوير المهني والجاهزية الوظيفية",
        w2Desc: "برامج وورش عمل متخصصة من المركز الجامعي للتطوير المهني بجامعة طنطا لاكتساب أسس الجاهزية لسوق العمل والتميز في التخطيط المهني.",
        w2_m1_t: "كتابة السيرة الذاتية (CV & Resume):",
        w2_m1_d: "إنشاء وتطوير سير ذاتية احترافية تواكب أنظمة ATS.",
        w2_m2_t: "البحث عن الوظائف (Job Research):",
        w2_m2_d: "تحليل متطلبات الوظائف والبحث الفعّال عن الفرص.",
        w2_m3_t: "مهارات المقابلات (Interview Skills):",
        w2_m3_d: "تقنيات المقابلات الفعّالة، الإقناع، والتواصل الاحترافي.",
        w2_m4_t: "العلامة الشخصية (Personal Branding):",
        w2_m4_d: "بناء الهوية المهنية وتقديم النفس بقوة في سوق العمل.",
        w2_m5_t: "التخطيط الوظيفي (Career Planning):",
        w2_m5_d: "رسم المسار المهني وتحديد الأهداف والتطوير المستمر.",
        w3Title: "الابتكار، توليد الأفكار وسلاسل الإمداد",
        w3Desc: "المشاركة في المعسكرات التدريبية المتقدمة لمركز إبداع مصر الرقمية (كرياتيفا طنطا)، والتي عززت مهارات التفكير الابتكاري، العمل الجماعي تحت الضغط، وفهم سلاسل الإمداد واستدامة الوظائف.",
        w3_m1_t: "معسكر توليد الأفكار (Ideation Bootcamp):",
        w3_m1_d: "تطوير العمل الجماعي، والعمل تحت الضغط، وحل المشكلات وابتكار الأفكار والتواصل عبر مشروع عملي متكامل.",
        w3_m2_t: "إدارة سلسلة التوريد (Supply Chain Management):",
        w3_m2_d: "مقدمة شاملة عن عمليات وسلاسل التوريد وكيفية مساهمة العمليات اللوجستية في تحقيق كفاءة الأعمال.",
        w3_m3_t: "وضوح المسار واستدامة الشواغر (Career Clarity):",
        w3_m3_d: "اكتساب رؤى متعمقة حول التوجه الوظيفي، فرص العمل الواعدة، واستدامة التطوير المهني المستقبلي.",
        w4Title: "مهارات التوظيف وجاهزية سوق العمل",
        w4Desc: "برنامج تدريبي متكامل ركّز على صقل وتطوير الحزمة الجوهرية من مهارات التوظيف اللازمة للنجاح والريادة والتعامل مع مختلف تحديات بيئات العمل الحديثة."
      },
      exp: {
        tag: "المسيرة المهنية",
        title: "الخبرة التدريبية والعملية",
        sectionSubtitle: "تطبيقات ميدانية وخبرات مهنية متخصصة في بيئات العمل الحقيقية",
        vbsStatus: "يوليو 2026 - سبتمبر 2026 (3 أشهر)",
        vbsRole: "متدرب في قسم الموارد البشرية (HR Intern)",
        vbsCompany: "شركة Valora Business Solutions (VBS)",
        vbsPeriod: "يوليو ٢٠٢٦ - سبتمبر ٢٠٢٦ (٣ أشهر)",
        vbs1: "تلقيتُ تدريبًا عمليًا في التوظيف والاختيار (Recruitment & Selection)، بما يشمل البحث عن المرشحين (Candidate Sourcing)، فرز السير الذاتية (CV Screening)، إجراء المقابلات الأولية، وفهم دورة التوظيف الكاملة.",
        vbs2: "اكتسبتُ معرفة عملية في شؤون الموظفين (Personnel Operations)، بما يشمل إدارة ملفات الموظفين، المستندات الرسمية، والإجراءات الأساسية الخاصة بالموظفين.",
        vbs3: "تعرّفتُ على أساسيات الرواتب (Payroll Fundamentals)، بما في ذلك مكونات الراتب، احتساب الحضور والغياب، الاستقطاعات، وخطوات إعداد الرواتب.",
        vbs4: "تعرّفتُ على كيفية ترابط وتكامل وظائف التوظيف وشؤون الموظفين والرواتب داخل قسم الموارد البشرية.",
        vbs5: "طوّرتُ قدرتي على تطبيق مفاهيم الموارد البشرية بشكل عملي وفهم طبيعة العمل والمهام اليومية داخل الـ HR.",
        acRole: "متدرب في قسم المحاسبة والمالية (Accounting & Finance Trainee)",
        acCompany: "شركة المقاولون العرب (Arab Contractors Company)",
        acPeriod: "1 سبتمبر 2024 - 24 سبتمبر 2024",
        ac1: "اكتسبتُ فهمًا للهيكل التنظيمي للشركة، وأقسامها، وسير العمل فيها.",
        ac2: "اطلعتُ على وظائف الإدارات المالية الرئيسية، واكتسبتُ خبرة في عملياتها اليومية.",
        ac3: "تعرّفتُ على قسم الحسابات الدائنة، بما في ذلك معالجة الفواتير وإجراءات الدفع باستخدام نظام أوراكل لتخطيط موارد المؤسسات (Oracle ERP).",
        ac4: "اكتسبتُ فهمًا لطبيعة العمليات المحاسبية والمالية في شركة إنشاءات كبيرة.",
        ac5: "لاحظتُ كيفية تنسيق الأقسام المختلفة لدعم مشاريع الشركة وعملياتها اليومية."
      },
      vol: {
        tag: "المبادرات المجتمعية والقيادية",
        title: "الخبرات التطوعية والقيادية",
        sectionSubtitle: "قيادة فرق العمل والمساهمة الفعّالة في تمكين الشباب وتطوير الكوادر",
        orgBadge: "وزارة الشباب والرياضة",
        role: "رئيسة قسم الموارد البشرية",
        org: "رواد التطوير والتنمية الشبابية | وزارة الشباب والرياضة",
        period: "نوفمبر 2024 – سبتمبر 2025",
        photoBadge: "فريق عمل رواد التطوير - وزارة الشباب والرياضة",
        group1Title: "القيادة وإدارة الفريق",
        point1: "قيادة لجنة الموارد البشرية وتنسيق المهام بين أعضاء الفريق.",
        point4: "متابعة أعضاء الفريق ومراقبة مستوى أدائهم والتزامهم بالمهام.",
        point8: "الحفاظ على التواصل الفعّال مع أعضاء الفريق والمساعدة في حل المشكلات المتعلقة بالعمل.",
        group2Title: "التوظيف والتهيئة",
        point2: "المشاركة في عمليات التوظيف، بما في ذلك التواصل مع المتقدمين وإجراء المقابلات.",
        point3: "المساهمة في تقييم المتقدمين واختيار الأعضاء المناسبين للأدوار المختلفة.",
        point7: "المساهمة في عملية استقبال وتهيئة الأعضاء الجدد وتعريفهم بأدوارهم ومسؤولياتهم.",
        group3Title: "التقييم والتطوير والمهارات المكتسبة",
        point5: "إجراء تقييمات دورية لأداء الأعضاء وتحديد نقاط القوة ومجالات التحسين.",
        point6: "دعم أعضاء الفريق في تطوير مهاراتهم من خلال المتابعة المستمرة والتوجيه وتقديم الملاحظات.",
        point9: "تطوير مهارات عملية في إجراء المقابلات، والتواصل، والقيادة، وإدارة الفرق، والتقييم، وحل المشكلات."
      },
      courses: {
        tag: "التعليم المستمر والتطوير",
        title: "الشهادات والدورات التدريبية المعتمدة",
        sectionSubtitle: "شهادات معتمدة رسمياً وبرامج تدريبية متخصصة من الجامعات والمؤسسات الكبرى",
        certZoom: "معاينة الشهادة المعتمدة",
        c1Hours: "15 ساعة تدريبية",
        c1Date: "فبراير 2026 & أغسطس 2026",
        c1Title: "برنامج تدريبي معتمد في أساسيات إدارة الموارد البشرية (HR Fundamentals)",
        c1Provider: "كلية التجارة بجامعة طنطا بالتعاون مع شركة عمار الدلتا (Eamar Al Delta Group)",
        c1Desc: "• إتمام برنامج تدريبي مكثف ومعتمد لمدة 15 ساعة تدريبية في أساسيات إدارة الموارد البشرية.<br>• تغطية كافة وظائف الموارد البشرية الرئيسية: التوظيف، علاقات الموظفين، شؤون الأفراد، وعمليات إدارة الموارد البشرية.",
        c2Title: "كيف تصبح متخصصًا في إدارة الموارد البشرية (How to be HR)",
        c2Provider: "أحمد عقيل (Ahmed Akel)",
        c2Desc: "برنامج تدريبي متخصص يركز على التطبيقات العملية في الموارد البشرية، وتطوير الجدارات المهنية وممارسات رأس المال البشري.",
        c3Title: "برنامج تدريبي في أساسيات إدارة الموارد البشرية (HR Basics)",
        c3Provider: "HR Basics & Operational Essentials",
        c3Desc: "اكتساب المعارف والمهارات الأساسية في تنظيم الموارد البشرية، وشؤون العاملين، والإجراءات الإدارية اليومية."
      },
      contact: {
        tag: "تواصل واكتشف المزيد",
        title: "تواصل معي مباشرة",
        sectionSubtitle: "مستعدة للمساهمة في بيئات عمل احترافية ومشاريع نوعية",
        subHeading: "جاهزة للمساهمة في بيئات عمل احترافية ومشاريع هادفة",
        desc: "أرحب بفرص التدريب، والعمل في مجالات التوظيف، شؤون الموظفين، الرواتب، وإدارة المواهب. يسعدني التواصل المباشر عبر البريد الإلكتروني أو LinkedIn.",
        emailLabel: "البريد الإلكتروني",
        copied: "تم النسخ بنجاح!",
        formTitle: "إرسال رسالة مباشرة",
        nameField: "الاسم الكريم",
        emailField: "البريد الإلكتروني",
        msgField: "الرسالة / الغرض من التواصل",
        sendBtn: "إرسال الرسالة عبر البريد",
        formNote: "* سيتم فتح تطبيق البريد الإلكتروني لإرسال رسالتك مباشرة إلى ranaelsorady@gmail.com"
      },
      footer: {
        copyright: "© 2026 رنا أسامة الصردي | جميع الحقوق محفوظة",
        poweredBy: "Powered by Amir Adel"
      }
    },

    en: {
      nav: {
        logoSub: "HR SPECIALIST",
        about: "About Me",
        competencies: "Competencies",
        workshops: "Workshops & Growth",
        experience: "Training Experience",
        volunteering: "Volunteering",
        courses: "Certifications",
        contact: "Contact"
      },
      hero: {
        badge: "Available for HR & Talent Management Roles",
        greeting: "Hello, I am",
        name: "Rana Osama Elsorady",
        subtitle: "Fourth-year Student at Faculty of Commerce, Accounting & Finance Program, Tanta University | Passionate about HR, Recruitment & Talent Acquisition",
        shortSummary: "Ambitious HR specialist with practical experience in Recruitment & Selection, Personnel Operations, Payroll fundamentals, Labor Law 2025 compliance, and team leadership.",
        ctaWorkshops: "Explore Workshops & Gallery",
        ctaCertificates: "View Accredited Certificates",
        captionRole: "HR & Talent Specialist"
      },
      metrics: {
        hrTitle: "Human Resources",
        hrDesc: "Accredited Training & Sourcing",
        eduTitle: "Tanta University",
        eduDesc: "Accounting & Finance",
        leadTitle: "Verified Certificates",
        leadDesc: "Institutional Accreditation"
      },
      badges: {
        recruitmentTitle: "Recruitment & Selection",
        recruitmentSub: "Sourcing, Screening & Interviews",
        hrOperationsTitle: "Personnel & Payroll",
        hrOperationsSub: "Employee Records & Salary Steps"
      },
      about: {
        tag: "About Me",
        title: "Professional Journey & Vision",
        sectionSubtitle: "A clear vision toward excellence in human capital management and talent development",
        cardHeading: "Rana Osama Elsorady",
        cardSub: "Fourth-year Student | Faculty of Commerce - Accounting & Finance | Tanta University",
        p1: "Ambitious fourth-year student at Faculty of Commerce, Accounting & Finance Program, Tanta University, with a deep passion for Human Resources and continuous personal and professional development. Experienced in teamwork, leadership, communication, and organizational activities through internships, training, and volunteer experiences.",
        p2: "Developed practical HR experience in Recruitment & Selection, including writing job advertisements, conducting candidate sourcing, screening calls, and participating in one-to-one interviews, while expanding my knowledge in Personnel, Payroll, and HR operations.",
        p3: "Experienced in leading and evaluating teams, organizing tasks, monitoring performance, preparing reports, and supporting team development. Interested in Recruitment, Employee Development, Talent Management, and building high-performing teams.",
        p4: "Always eager to learn new skills, take on challenges, and apply my knowledge in practical environments while continuously developing my HR expertise and contributing to meaningful projects."
      },
      pillars: {
        p1Title: "Recruitment & Selection",
        p1Desc: "Candidate sourcing, CV screening, job ad formulation, conducting screening calls and initial interviews.",
        p2Title: "Personnel & Payroll Operations",
        p2Desc: "Employee documentation, personnel routines, salary structure components, attendance, deductions, and payroll steps.",
        p3Title: "Leadership & Team Management",
        p3Desc: "Leading HR committees, task delegation, performance appraisal, and cultivating high-performing teams.",
        p4Title: "Accounting & ERP Systems / Office 365",
        p4Desc: "Microsoft Office 365 Expert (90-Hour Certificate), Accounts Payable, and Oracle ERP enterprise software."
      },
      comp: {
        tag: "Competencies & Skills",
        title: "Areas of Expertise & Capabilities",
        subtitle: "Integrated blend of specialized HR management, financial operations, and leadership",
        c1Title: "Recruitment & Talent Acquisition",
        c1_1: "<i class=\"fa-solid fa-check\"></i> End-to-End Recruitment Cycle",
        c1_2: "<i class=\"fa-solid fa-check\"></i> Job Analysis & Description",
        c1_3: "<i class=\"fa-solid fa-check\"></i> Job Advertisement Formulation",
        c1_4: "<i class=\"fa-solid fa-check\"></i> Candidate Sourcing & CV Screening",
        c1_5: "<i class=\"fa-solid fa-check\"></i> Screening Calls & Initial Interviews",
        c2Title: "Personnel & Payroll Operations",
        c2_1: "<i class=\"fa-solid fa-check\"></i> Employee Records & Documentation",
        c2_2: "<i class=\"fa-solid fa-check\"></i> Payroll Processing & Salary Components",
        c2_3: "<i class=\"fa-solid fa-check\"></i> Attendance Tracking & Deductions",
        c2_4: "<i class=\"fa-solid fa-check\"></i> Synergy between Sourcing, Personnel & Payroll",
        c2_5: "<i class=\"fa-solid fa-check\"></i> Labor Law No. 14 of 2025 Compliance",
        c3Title: "Leadership & Team Management",
        c3_1: "<i class=\"fa-solid fa-check\"></i> Leading & Directing Committees",
        c3_2: "<i class=\"fa-solid fa-check\"></i> Task Coordination & Follow-up",
        c3_3: "<i class=\"fa-solid fa-check\"></i> Performance Appraisal & Evaluation",
        c3_4: "<i class=\"fa-solid fa-check\"></i> Onboarding & New Member Orientation",
        c3_5: "<i class=\"fa-solid fa-check\"></i> Problem Solving & Conflict Management",
        c4Title: "Software & Financial ERP",
        c4_1: "<i class=\"fa-solid fa-check\"></i> Microsoft Office 365 (Word, Excel Expert)",
        c4_2: "<i class=\"fa-solid fa-check\"></i> Data Analysis & Report Formatting",
        c4_3: "<i class=\"fa-solid fa-check\"></i> Oracle ERP Enterprise System",
        c4_4: "<i class=\"fa-solid fa-check\"></i> Accounts Payable Management",
        c4_5: "<i class=\"fa-solid fa-check\"></i> Financial Auditing & Accounting Reports"
      },
      workshops: {
        tag: "Field & Professional Growth",
        title: "Workshops & Professional Development",
        subtitle: "Interactive participation and practical workshops with premier accredited institutions",
        filterAll: "All Workshops",
        filterLaborLaw: "Labor Law & HR",
        filterUccd: "Career Growth (UCCD)",
        filterCreativa: "Innovation & Supply Chain",
        filterBeReady: "Be Ready Initiative",
        zoomBtn: "Zoom Image",
        keyTakeaways: "Key Learnings & Takeaways:",
        w1Title: "Investigations, Disciplinary Actions & Termination",
        w1LawBadge: "Under Labor Law No. 14 of 2025",
        w1Desc: "Gained advanced practical knowledge of workplace investigation protocols, legal disciplinary procedures, and employment termination regulations aligned with Egyptian Labor Law 2025.",
        w1_1: "Conducting professional workplace investigations & formal minutes",
        w1_2: "Applying statutory disciplinary penalty codes and procedures",
        w1_3: "Termination regulations, compliance, and labor dispute avoidance",
        w2Title: "Employability & Career Readiness Modules",
        w2Desc: "Specialized training series by the University Center for Career Development (UCCD), Faculty of Commerce, Tanta University.",
        w2_m1_t: "CV & Resume Writing:",
        w2_m1_d: "Creating high-impact professional CVs aligned with ATS systems.",
        w2_m2_t: "Job Research:",
        w2_m2_d: "Understanding vacancy requirements & strategic job searching.",
        w2_m3_t: "Interview Skills:",
        w2_m3_d: "Mastering job interview techniques and professional communication.",
        w2_m4_t: "Personal Branding:",
        w2_m4_d: "Building and presenting a strong, competitive professional brand.",
        w2_m5_t: "Career Planning:",
        w2_m5_d: "Strategic career pathing, goal setting, and lifelong growth.",
        w3Title: "Ideation, Innovation & Supply Chain Operations",
        w3Desc: "Advanced bootcamp series at Creativa Innovation Hub (Tanta) in collaboration with ITIDA, TIEC, and Kenko.",
        w3_m1_t: "Ideation Bootcamp:",
        w3_m1_d: "Teamwork under pressure, creative problem-solving, and idea generation.",
        w3_m2_t: "Supply Chain Management:",
        w3_m2_d: "Introduction to supply chain workflows and operational business efficiency.",
        w3_m3_t: "Career Clarity & Sustainability:",
        w3_m3_d: "Insights into career trajectory, job market trends, and sustainable growth.",
        w4Title: "Employability Skills & Workplace Readiness",
        w4Desc: "Comprehensive program focusing on essential soft skills for navigating modern corporate workplace challenges."
      },
      exp: {
        tag: "Career Journey",
        title: "Training & Practical Experience",
        sectionSubtitle: "Field applications and practical corporate experience in active environments",
        vbsStatus: "July 2026 – September 2026 (3 months)",
        vbsRole: "HR Intern",
        vbsCompany: "Valora Business Solutions (VBS)",
        vbsPeriod: "July 2026 – September 2026 (3 months)",
        vbs1: "Received practical training in Recruitment & Selection, including candidate sourcing, screening CVs, conducting initial interviews, and understanding the recruitment cycle.",
        vbs2: "Gained practical knowledge of Personnel Operations, including employee records, HR documentation, and basic personnel procedures.",
        vbs3: "Learned the fundamentals of Payroll, including salary components, attendance, deductions, and the basic payroll process.",
        vbs4: "Developed an understanding of the relationship between Recruitment, Personnel, and Payroll functions within HR.",
        vbs5: "Improved my ability to apply HR concepts in practical workplace situations and gained a better understanding of day-to-day HR operations.",
        acRole: "Accounting & Finance Trainee",
        acCompany: "Arab Contractors Company",
        acPeriod: "September 1, 2024 – September 24, 2024",
        ac1: "Gained an understanding of the company’s organizational structure, departments, and workflow.",
        ac2: "Observed the functions of key financial departments and gained exposure to their daily operations.",
        ac3: "Learned about Accounts Payable, including invoice processing and payment procedures using Oracle ERP.",
        ac4: "Gained insight into the nature of accounting and financial operations in a large-scale construction company.",
        ac5: "Observed how different departments coordinate to support the company’s projects and daily operations."
      },
      vol: {
        tag: "Community & Leadership",
        title: "Volunteering & Leadership",
        sectionSubtitle: "Leading teams and making meaningful contributions to youth development",
        orgBadge: "Ministry of Youth & Sports",
        role: "Head of Human Resources Committee",
        org: "Youth Development Pioneers | Ministry of Youth and Sports",
        period: "November 2024 – September 2025",
        photoBadge: "Youth Development Pioneers Team - Ministry of Youth & Sports",
        group1Title: "Leadership & Team Management",
        point1: "Leading the HR committee and coordinating tasks among team members.",
        point4: "Monitoring team members and tracking their performance level and task commitment.",
        point8: "Maintaining effective communication with team members and assisting in resolving work-related challenges.",
        group2Title: "Recruitment & Onboarding",
        point2: "Participating in recruitment operations, communicating with applicants, and conducting interviews.",
        point3: "Contributing to candidate evaluation and selecting suitable members for various roles.",
        point7: "Contributing to onboarding and orientation process for new members, introducing roles & duties.",
        group3Title: "Appraisal, Development & Acquired Skills",
        point5: "Conducting periodic performance evaluations for members and identifying strengths and areas for improvement.",
        point6: "Supporting team members in developing their skills through ongoing follow-up, mentoring, and constructive feedback.",
        point9: "Developed practical skills in interviewing, communication, leadership, team management, evaluation, and problem solving."
      },
      courses: {
        tag: "Continuous Learning",
        title: "Accredited Certifications & Training",
        sectionSubtitle: "Officially accredited certificates and specialized training programs from major institutions",
        certZoom: "View Verified Certificate",
        c1Hours: "15 Hours Accredited",
        c1Date: "Feb 2026 & Aug 2026",
        c1Title: "HR Fundamentals Accredited Training Program",
        c1Provider: "Faculty of Commerce, Tanta University in collaboration with Eamar Al Delta Group",
        c1Desc: "• Completed a 15-hour accredited training program in Human Resources Fundamentals.<br>• Covered key HR functions including recruitment, employee relations, personnel, and operational workflows.",
        c2Title: "How to be HR Specialist",
        c2Provider: "Ahmed Akel",
        c2Desc: "Specialized program focusing on practical HR applications, professional competencies, and human capital practices.",
        c3Title: "HR Basics Training Program",
        c3Provider: "HR Basics & Operational Essentials",
        c3Desc: "Foundational knowledge in Human Resources, personnel workflows, organizational structure, and operational routines."
      },
      contact: {
        tag: "Connect & Inquire",
        title: "Get In Touch Directly",
        sectionSubtitle: "Ready to contribute to professional environments and high-impact projects",
        subHeading: "Ready to contribute to professional environments and meaningful projects",
        desc: "Open to internships, recruitment opportunities, personnel management, payroll, and talent development roles. Feel free to reach out via email or connect on LinkedIn.",
        emailLabel: "Email Address",
        copied: "Copied Successfully!",
        formTitle: "Send a Direct Message",
        nameField: "Full Name",
        emailField: "Email Address",
        msgField: "Message / Purpose of Contact",
        sendBtn: "Send Message via Email",
        formNote: "* This will open your default email client addressed directly to ranaelsorady@gmail.com"
      },
      footer: {
        copyright: "© 2026 Rana Osama Elsorady | All rights reserved.",
        poweredBy: "Powered by Amir Adel"
      }
    }
  };

  // State
  let currentLang = localStorage.getItem('rana_portfolio_lang') || 'ar';
  let currentTheme = localStorage.getItem('rana_portfolio_theme') || 'dark';

  // -------------------------------------------------------------------------
  // 2. Interactive Canvas Constellation Engine (Animated Background)
  // -------------------------------------------------------------------------
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = Math.floor(Math.min(width, 1400) / 18);
    let mouse = { x: width / 2, y: height / 2, active: false };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 0.8;
        this.alpha = Math.random() * 0.45 + 0.15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            this.x += (dx / dist) * 0.35;
            this.y += (dy / dist) * 0.35;
          }
        }
      }

      draw() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(56, 189, 248, ${this.alpha})`
          : `rgba(37, 99, 235, ${this.alpha * 0.7})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const maxDistance = 110;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(37, 99, 235, ${alpha * 0.6})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    }, { passive: true });
  }

  // -------------------------------------------------------------------------
  // 3. Multilingual Engine (AR / EN)
  // -------------------------------------------------------------------------
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('rana_portfolio_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const langLabel = document.getElementById('langLabel');
    if (langLabel) {
      langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const text = getNestedTranslation(translations[lang], keyPath);
      if (text !== undefined) {
        if (text.includes('<') && text.includes('>')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    if (lang === 'ar') {
      document.title = "رنا أسامة الصردي | ملف الموارد البشرية وإدارة المواهب | HR Specialist Portfolio";
    } else {
      document.title = "Rana Osama Elsorady | HR Specialist & Talent Management Portfolio";
    }
  }

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
  }

  // -------------------------------------------------------------------------
  // 4. Theme Engine (Dark / Light)
  // -------------------------------------------------------------------------
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('rana_portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  // -------------------------------------------------------------------------
  // 5. 3D Tilt Card Interaction
  // -------------------------------------------------------------------------
  function init3DTiltCards() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // -------------------------------------------------------------------------
  // 6. Workshops Filter Tabs
  // -------------------------------------------------------------------------
  function initWorkshopFilters() {
    const filterBtns = document.querySelectorAll('.workshops-filter-nav .filter-btn');
    const workshopCards = document.querySelectorAll('.workshops-grid .workshop-card');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        workshopCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'grid';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.96)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // -------------------------------------------------------------------------
  // 7. Fullscreen Lightbox Modal Engine
  // -------------------------------------------------------------------------
  function initLightboxModal() {
    const modal = document.getElementById('lightboxModal');
    const backdrop = document.getElementById('lightboxBackdrop');
    const closeBtn = document.getElementById('lightboxCloseBtn');
    const displayImg = document.getElementById('lightboxImg');
    const titleEl = document.getElementById('lightboxTitle');
    const captionEl = document.getElementById('lightboxCaption');

    if (!modal || !displayImg) return;

    function openLightbox(src, title, caption) {
      displayImg.src = src;
      titleEl.textContent = title || '';
      captionEl.textContent = caption || '';

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        displayImg.src = '';
      }, 300);
    }

    document.addEventListener('click', e => {
      const trigger = e.target.closest('.lightbox-trigger');
      if (trigger) {
        e.preventDefault();
        let src = trigger.getAttribute('data-img');
        if (!src && trigger.tagName === 'IMG') {
          src = trigger.src;
        }
        const title = trigger.getAttribute('data-title') || '';
        const caption = trigger.getAttribute('data-caption') || '';

        if (src) {
          openLightbox(src, title, caption);
        }
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 8. Animated Metrics & Counters
  // -------------------------------------------------------------------------
  function animateMetrics() {
    const numbers = document.querySelectorAll('.metric-number');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          let count = 0;
          const speed = target > 50 ? 20 : 120;
          const step = Math.ceil(target / 25);

          const updateCount = () => {
            count += step;
            if (count >= target) {
              entry.target.textContent = target;
            } else {
              entry.target.textContent = count;
              setTimeout(updateCount, speed);
            }
          };
          updateCount();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    numbers.forEach(num => observer.observe(num));
  }

  // -------------------------------------------------------------------------
  // 9. Scroll Progress & Scrollspy Nav
  // -------------------------------------------------------------------------
  function updateScrollProgress() {
    const scrollBar = document.getElementById('scrollProgressBar');
    const backToTop = document.getElementById('backToTop');
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (scrollBar && scrollHeight > 0) {
      const progress = (scrollTop / scrollHeight) * 100;
      scrollBar.style.width = progress + '%';
    }

    if (backToTop) {
      if (scrollTop > 350) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }
  }

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = (window.pageYOffset || document.documentElement.scrollTop) + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // -------------------------------------------------------------------------
  // 10. Initialization & Event Handlers
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    setTheme(currentTheme);
    setLanguage(currentLang);
    initAmbientCanvas();
    init3DTiltCards();
    initWorkshopFilters();
    initLightboxModal();
    animateMetrics();

    // Language Toggle
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar');
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    // Mobile Hamburger
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        mobileBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
      });

      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
      });
    }

    // Copy Email
    const copyBtn = document.getElementById('copyEmailBtn');
    const copyTooltip = document.getElementById('copyTooltip');
    if (copyBtn && copyTooltip) {
      copyBtn.addEventListener('click', () => {
        const email = 'ranaelsorady@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          copyTooltip.classList.add('show');
          setTimeout(() => {
            copyTooltip.classList.remove('show');
          }, 2200);
        }).catch(() => {
          prompt('Email:', email);
        });
      });
    }

    // Back to Top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Window Scroll listeners
    window.addEventListener('scroll', () => {
      updateScrollProgress();
      updateActiveNavLink();
    }, { passive: true });

    updateScrollProgress();
    updateActiveNavLink();
  });

  // Contact Form Email Mailto Handler
  window.handleContactSubmit = function () {
    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const msg = document.getElementById('senderMessage').value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);

    window.location.href = `mailto:ranaelsorady@gmail.com?subject=${subject}&body=${body}`;
  };

})();
