"use strict";

/* ============================================================
   Seeed for SDGs — interactions + i18n (EN / 中文)
   ============================================================ */

(function () {
  /* ---------- i18n dictionary ---------- */
  var I18N = {
    "nav.challenges": { en: "Challenges", cn: "挑战领域" },
    "nav.stories": { en: "Stories", cn: "案例故事" },
    "nav.enable": { en: "How We Enable", cn: "赋能方式" },
    "nav.field": { en: "Field Innovation", cn: "现场创新" },
    "nav.responsibility": { en: "Responsibility", cn: "责任承诺" },
    "nav.collaborate": { en: "Collaborate", cn: "合作" },

    "hero.eyebrow": { en: "SEEED FOR SDGs", cn: "矽递 · 助力 SDGs" },
    "hero.title1": { en: "Open technology for", cn: "开放技术，驱动" },
    "hero.title2": { en: "sustainable actions.", cn: "可持续行动。" },
    "hero.lead": { en: "From open hardware and sensing to edge AI and real-world deployment, Seeed works with researchers, organizations, and communities to turn sustainability ideas into working solutions.", cn: "从开源硬件与传感，到边缘 AI 与现实世界部署，Seeed 与研究者、组织和社区携手，把可持续发展的想法转化为可落地的解决方案。" },
    "hero.tag1": { en: "Field Research", cn: "实地调研" },
    "hero.tag2": { en: "Edge AI", cn: "边缘 AI" },
    "hero.tag3": { en: "Environmental Sensing", cn: "环境传感" },
    "hero.cta1": { en: "Explore our work", cn: "查看我们的工作" },
    "hero.cta2": { en: "Collaborate with Seeed", cn: "与 Seeed 合作" },
    "hero.featured.tag": { en: "Featured initiative · Interspecies", cn: "精选项目 · 跨物种感知" },
    "hero.featured.copy": { en: "Exploring new ways technology can help us sense, understand, and coexist with other species.", cn: "探索技术如何帮助我们感知、理解并与其他物种共存的新方式。" },
    "hero.featured.cta": { en: "Explore Interspecies", cn: "了解 Interspecies" },
    "hero.signals.label": { en: "Challenge signals", cn: "挑战信号" },
    "hero.s1k": { en: "Water", cn: "水资源" },
    "hero.s1v": { en: "Climate & Resources", cn: "气候与资源" },
    "hero.s2k": { en: "Education", cn: "教育" },
    "hero.s2v": { en: "Learning & Open Knowledge", cn: "学习与开放知识" },
    "hero.s3k": { en: "Local Innovation", cn: "本地创新" },
    "hero.s3v": { en: "Resilient Communities", cn: "韧性社区" },

    "why.eyebrow": { en: "WHY SEEED FOR SDGs", cn: "为什么选择 Seeed 助力 SDGs" },
    "why.title": { en: "Technology as a bridge to sustainable action", cn: "技术，通往可持续行动的桥梁" },
    "why.lede": { en: "Real progress happens when people who understand a challenge can access the tools to act on it. Seeed connects technology, engineering capabilities, and global communities with people working toward a more sustainable future.", cn: "当真正理解挑战的人能够获得行动所需的工具时，真正的进步才会发生。Seeed 将技术、工程能力与全球社区，连接到那些为可持续未来而努力的人。" },
    "why.dg.local": { en: "Local Knowledge", cn: "本地知识" },
    "why.dg.local.sub": { en: "People who understand the challenge", cn: "理解挑战的人" },
    "why.dg.bridge": { en: "Open Technology · Engineering · Ecosystem", cn: "开放技术 · 工程 · 生态" },
    "why.dg.real": { en: "Real-world Action", cn: "现实行动" },
    "why.dg.real.sub": { en: "Solutions shaped by place and evidence", cn: "由在地实践与证据塑造的方案" },
    "why.c1.title": { en: "Technology people can build with", cn: "人们可以构建的技术" },
    "why.c1.text": { en: "Accessible hardware, sensing, and AI tools designed for experimentation.", cn: "可及易用的硬件、传感与 AI 工具，专为实验而设计。" },
    "why.c2.title": { en: "From prototype to field", cn: "从原型到现场" },
    "why.c2.text": { en: "Supporting the path from an early idea to real-world deployment.", cn: "支持从早期想法走向真实部署的路径。" },
    "why.c3.title": { en: "Collaboration across ecosystems", cn: "跨生态协作" },
    "why.c3.text": { en: "Connecting researchers, organizations, and communities around shared challenges.", cn: "围绕共同挑战，连接研究者、组织与社区。" },
    "why.cta": { en: "See how we enable change", cn: "了解我们如何推动变革" },

    "ch.eyebrow": { en: "CHALLENGE AREAS", cn: "挑战领域" },
    "ch.title": { en: "Explore real-world challenges", cn: "探索真实世界的挑战" },
    "ch.lede": { en: "Aligned with the UN Sustainable Development Goals, we organize our work around four real-world challenges where technology can make a practical difference.", cn: "我们围绕联合国可持续发展目标，将工作聚焦于四个技术能够发挥实际作用的真实挑战。" },
    "ch.c1.tag": { en: "Featured · Interspecies", cn: "精选 · 跨物种感知" },
    "ch.c1.title": { en: "Life & Ecosystems", cn: "生命与生态" },
    "ch.c1.text": { en: "Biodiversity, wildlife, oceans, forests, and new ways to understand other species.", cn: "生物多样性、野生动植物、海洋、森林，以及理解其他物种的新方式。" },
    "ch.c1.cta": { en: "Explore stories", cn: "查看案例故事" },
    "ch.c2.tag": { en: "Water · Energy · Agriculture", cn: "水资源 · 能源 · 农业" },
    "ch.c2.title": { en: "Climate & Resources", cn: "气候与资源" },
    "ch.c2.text": { en: "Practical approaches to sensing, resource efficiency, and resilient infrastructure.", cn: "传感、资源效率与韧性基础设施的实用方法。" },
    "ch.c2.cta": { en: "Explore stories", cn: "查看案例故事" },
    "ch.c3.tag": { en: "Education · Citizen Science", cn: "教育 · 公民科学" },
    "ch.c3.title": { en: "Learning & Open Knowledge", cn: "学习与开放知识" },
    "ch.c3.text": { en: "Tools and shared knowledge that help more people learn, make, and participate.", cn: "让更多人学习、创造并参与的工具与共享知识。" },
    "ch.c3.cta": { en: "Explore stories", cn: "查看案例故事" },
    "ch.c4.tag": { en: "Local Innovation · Inclusion", cn: "本地创新 · 包容性" },
    "ch.c4.title": { en: "Resilient Communities", cn: "韧性社区" },
    "ch.c4.text": { en: "Technology shaped around local needs, from communication to community infrastructure.", cn: "围绕本地需求打造的技术，从通信到社区基础设施。" },
    "ch.c4.cta": { en: "Explore stories", cn: "查看案例故事" },

    "st.eyebrow": { en: "PROOF IN PRACTICE", cn: "实践印证" },
    "st.title": { en: "Stories from the Field", cn: "来自一线的故事" },
    "st.lede": { en: "A closer look at how researchers, organizations, and communities are putting technology to work in the real world.", cn: "近距离了解研究者、组织与社区如何把技术应用到真实世界。" },
    "st.f.tag": { en: "Climate & Resources", cn: "气候与资源" },
    "st.f.title": { en: "Featured field story to be selected", cn: "精选一线故事（待选）" },
    "st.f.text": { en: "Reserved for a proven story that shows the challenge, the technology in use, and what was learned in the field.", cn: "预留给一个已验证的故事，呈现挑战、所用技术以及现场获得的经验。" },
    "st.f.meta": { en: "Location / partner to be confirmed", cn: "地点 / 合作伙伴待确认" },
    "st.read": { en: "Read the story", cn: "阅读故事" },
    "st.s1.tag": { en: "Learning & Open Knowledge", cn: "学习与开放知识" },
    "st.s1.title": { en: "Open learning story slot", cn: "开放学习故事位" },
    "st.s1.text": { en: "A future case about tools, workshops, or shared technical knowledge.", cn: "关于工具、工作坊或共享技术知识的未来案例。" },
    "st.s2.tag": { en: "Climate & Resources", cn: "气候与资源" },
    "st.s2.title": { en: "Resource sensing story slot", cn: "资源传感故事位" },
    "st.s2.text": { en: "A future case grounded in real measurement, deployment, or infrastructure.", cn: "基于真实测量、部署或基础设施的未来案例。" },
    "st.s3.tag": { en: "Resilient Communities", cn: "韧性社区" },
    "st.s3.title": { en: "Community innovation story slot", cn: "社区创新故事位" },
    "st.s3.text": { en: "A future case led by local context and a clearly evidenced technology role.", cn: "以本地背景为主导、技术作用有据可循的未来案例。" },
    "st.s4.tag": { en: "Resilient Communities", cn: "韧性社区" },
    "st.s4.title": { en: "Inclusive technology story slot", cn: "包容性技术故事位" },
    "st.s4.text": { en: "A future case showing how collaboration helped a practical solution move forward.", cn: "展现协作如何推动实用方案向前发展的未来案例。" },
    "st.cta": { en: "View all stories", cn: "查看全部故事" },

    "en.eyebrow": { en: "TECHNOLOGY IN SERVICE OF IMPACT", cn: "以技术赋能影响力" },
    "en.title": { en: "How We Enable Change", cn: "我们如何推动变革" },
    "en.lede": { en: "Sustainable ideas need more than inspiration. Seeed brings together technology, platforms, engineering capabilities, and open resources to help promising solutions move forward.", cn: "可持续的想法需要的不仅是灵感。Seeed 汇集技术、平台、工程能力与开放资源，帮助有前景的方案向前推进。" },
    "en.i1.title": { en: "Open Technology Toolkit", cn: "开放技术工具包" },
    "en.i1.text": { en: "Hardware, sensors, edge devices, and open-source building blocks that make ideas testable.", cn: "让想法可被验证的硬件、传感器、边缘设备与开源构件。" },
    "en.i1.cta": { en: "Explore the toolkit", cn: "探索工具包" },
    "en.i2.title": { en: "Platforms & Technical Capabilities", cn: "平台与技术能力" },
    "en.i2.text": { en: "Environmental sensing, connectivity, edge AI, and data workflows working as a system.", cn: "环境传感、连接、边缘 AI 与数据工作流，作为一个系统协同运作。" },
    "en.i2.cta": { en: "Explore our technologies", cn: "探索我们的技术" },
    "en.flow1": { en: "Sense", cn: "感知" },
    "en.flow2": { en: "Connect", cn: "连接" },
    "en.flow3": { en: "Compute", cn: "计算" },
    "en.flow4": { en: "Understand", cn: "理解" },
    "en.i3.title": { en: "From Prototype to Field", cn: "从原型到现场" },
    "en.i3.text": { en: "Selected collaborations can access technical guidance, prototyping support, engineering resources, and pathways toward deployment or manufacturing.", cn: "入选的合作可以获得技术指导、原型支持、工程资源，以及通往部署或量产的道路。" },
    "en.i3.tag": { en: "Selective · Case by case", cn: "案例式 · 择优支持" },
    "en.i3.cta": { en: "Talk to us about a project", cn: "与我们聊聊你的项目" },
    "en.i4.title": { en: "Tutorials & Learning Resources", cn: "教程与学习资源" },
    "en.i4.text": { en: "Product guides, tutorials, and application examples to help you build, configure, and deploy with Seeed hardware.", cn: "产品指南、教程和应用示例，帮助您使用 Seeed 硬件进行构建、配置与部署。" },
    "en.i4.tag": { en: "Learn · Share · Deploy", cn: "学习 · 分享 · 部署" },
    "en.i4.cta": { en: "Browse Wiki", cn: "浏览 Wiki" },

    "mcv.eyebrow": { en: "SIGNATURE FIELD CAPABILITY", cn: "标志性现场能力" },
    "mcv.title": { en: "Take Innovation to the Field", cn: "把创新带到现场" },
    "mcv.lede": { en: "Some challenges cannot be solved from behind a desk. Chaihuo MCV is a mobile innovation platform designed to bring tools, people, and experimentation directly into the field.", cn: "有些挑战无法在桌后解决。柴火 MCV 是一个移动创新平台，旨在把工具、人与实验直接带到现场。" },
    "mcv.sub": { en: "From workshops and prototyping to environmental sensing and community deployment, the mobile lab creates space for technology to meet local realities.", cn: "从工作坊与原型到环境传感与社区部署，移动实验室为技术与在地现实的相遇创造了空间。" },
    "mcv.t1": { en: "Workshops", cn: "工作坊" },
    "mcv.t2": { en: "Rapid Prototyping", cn: "快速原型" },
    "mcv.t3": { en: "Environmental Sensing", cn: "环境传感" },
    "mcv.t4": { en: "Community Deployment", cn: "社区部署" },
    "mcv.cta": { en: "Explore Chaihuo MCV", cn: "了解柴火 MCV" },

    "res.eyebrow": { en: "HOW WE OPERATE", cn: "我们的运营方式" },
    "res.title": { en: "Responsible from Within", cn: "由内而外的责任" },
    "res.lede": { en: "Our commitment to sustainability also begins with how we work — how we care for people, respect responsible practices, and reduce the impact of our own operations.", cn: "我们对可持续的承诺，也始于我们自身的工作方式——我们如何关心员工、践行负责任的实践，并降低自身运营的影响。" },
    "res.outside": { en: "Outside", cn: "对外" },
    "res.outside.sub": { en: "Technology enabling sustainability action", cn: "技术赋能可持续行动" },
    "res.within": { en: "Within", cn: "对内" },
    "res.within.sub": { en: "How Seeed operates as a company", cn: "Seeed 作为企业的运营方式" },
    "res.r1.title": { en: "People & Well-being", cn: "员工与福祉" },
    "res.r1.text": { en: "Employee well-being, safety, learning, growth, and inclusion.", cn: "员工福祉、安全、学习、成长与包容性。" },
    "res.r2.title": { en: "Human Rights & Responsible Practices", cn: "人权与负责任实践" },
    "res.r2.text": { en: "Human rights, labor practices, responsible supply chain, and ethics.", cn: "人权、劳工实践、负责任的供应链与伦理。" },
    "res.r3.title": { en: "Lower-impact Operations", cn: "低影响运营" },
    "res.r3.text": { en: "Energy, waste, recycling, resource efficiency, and lower-carbon operations.", cn: "能源、废弃物、回收、资源效率与低碳运营。" },

    "col.eyebrow": { en: "COLLABORATE WITH SEEED", cn: "与 Seeed 合作" },
    "col.title": { en: "Build what matters, together.", cn: "一起，构建真正重要的事。" },
    "col.lede": { en: "Working on a meaningful sustainability challenge? We collaborate with researchers, organizations, and communities exploring how technology can create practical, scalable impact.", cn: "正在应对一个有意义的可持续挑战吗？我们与研究者、组织和社区合作，探索技术如何创造实际、可规模化的影响。" },
    "col.support.label": { en: "Selective Support", cn: "择优支持" },
    "col.support.text": { en: "Selected projects may receive hardware sponsorship, technical guidance, engineering resources, or ecosystem connections, depending on project fit, feasibility, and potential impact.", cn: "入选项目可能获得硬件赞助、技术指导、工程资源或生态连接，视项目契合度、可行性与潜在影响而定。" },
    "col.cta1": { en: "Tell us about your project", cn: "介绍你的项目" },
    "col.cta2": { en: "Explore our work", cn: "查看我们的工作" },
    "col.a1.who": { en: "For Researchers", cn: "致研究者" },
    "col.a1.q": { en: "Taking research beyond the lab?", cn: "想让研究走出实验室？" },
    "col.a2.who": { en: "For Organizations", cn: "致组织" },
    "col.a2.q": { en: "Looking for a technology partner for an SDG initiative?", cn: "在为 SDG 项目寻找技术伙伴？" },
    "col.a3.who": { en: "For Communities", cn: "致社区" },
    "col.a3.q": { en: "Building solutions rooted in local needs?", cn: "在构建扎根于本地需求的方案？" },

    "form.eyebrow": { en: "PROJECT INTRODUCTION", cn: "项目介绍" },
    "form.title": { en: "Tell us what you are working on.", cn: "告诉我们你在做什么。" },
    "form.lede": { en: 'Completing this form opens a draft in your email app. Review the message, then select Send to contact <a class="inline-link" href="mailto:sustainability@seeed.cc">sustainability@seeed.cc</a>.', cn: '填写本表单将在你的邮件应用中打开一份草稿。请检查内容后选择「发送」，以联系 <a class="inline-link" href="mailto:sustainability@seeed.cc">sustainability@seeed.cc</a>。' },
    "form.f1": { en: "Project / Organization", cn: "项目 / 组织" },
    "form.f2": { en: "Challenge", cn: "挑战领域" },
    "form.f2.opt": { en: "Select a challenge", cn: "选择挑战领域" },
    "form.ch1": { en: "Life & Ecosystems", cn: "生命与生态" },
    "form.ch2": { en: "Climate & Resources", cn: "气候与资源" },
    "form.ch3": { en: "Learning & Open Knowledge", cn: "学习与开放知识" },
    "form.ch4": { en: "Resilient Communities", cn: "韧性社区" },
    "form.f3": { en: "Stage", cn: "阶段" },
    "form.f3.opt": { en: "Select a stage", cn: "选择阶段" },
    "form.st1": { en: "Research", cn: "研究" },
    "form.st2": { en: "Early prototype", cn: "早期原型" },
    "form.st3": { en: "Field pilot", cn: "现场试点" },
    "form.st4": { en: "Scaling", cn: "规模化" },
    "form.f4": { en: "Location", cn: "地点" },
    "form.f5": { en: "Technology needs", cn: "技术需求" },
    "form.f6": { en: "Expected impact", cn: "预期影响" },
    "form.f7": { en: "Type of support requested", cn: "希望获得的支持类型" },
    "form.f8": { en: "Website / materials", cn: "网站 / 资料" },
    "form.f9": { en: "Contact email", cn: "联系邮箱" },
    "form.submit": { en: "Open email draft", cn: "打开邮件草稿" },

    "partners.label": { en: "Partners", cn: "合作伙伴" },
    "footer.line": { en: "Technology, collaboration, and open innovation for a more sustainable world.", cn: "以技术、协作与开放创新，共创更可持续的世界。" },
    "footer.c.seeed": { en: "Seeed Studio", cn: "Seeed Studio" },
    "footer.c.chaihuo": { en: "Chaihuo", cn: "柴火创客空间" },
    "footer.c.contact": { en: "Contact", cn: "联系我们" },
    "footer.privacy": { en: "Privacy Policy", cn: "隐私政策" },
    "footer.export": { en: "Export Compliance", cn: "出口合规" }
  };

  var DEFAULT_LANG = "en";
  var currentLang = DEFAULT_LANG;

  function applyLang(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var t = I18N[el.getAttribute("data-i18n")];
      if (!t) return;
      if (el.children.length) el.innerHTML = t[lang];
      else el.textContent = t[lang];
    });
    var btn = document.getElementById("lang-btn");
    if (btn) btn.textContent = lang === "cn" ? "中文 ▾" : "EN ▾";
    document.documentElement.lang = lang === "cn" ? "zh-CN" : "en";
    document.querySelectorAll(".lang__opt").forEach(function (o) {
      o.classList.toggle("is-active", o.getAttribute("data-lang") === lang);
    });
  }

  /* ---------- 0. Language dropdown ---------- */
  var langBtn = document.getElementById("lang-btn");
  var langMenu = document.getElementById("lang-menu");
  if (langBtn && langMenu) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = langMenu.classList.toggle("is-open");
      langBtn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", function () {
      langMenu.classList.remove("is-open");
      langBtn.setAttribute("aria-expanded", "false");
    });
    langMenu.querySelectorAll(".lang__opt").forEach(function (opt) {
      opt.addEventListener("click", function () {
        applyLang(opt.getAttribute("data-lang"));
        langMenu.classList.remove("is-open");
        langBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 1. Header state on scroll ---------- */
  var head = document.getElementById("site-head");
  var onScroll = function () { head.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Mobile nav ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");
  navToggle.addEventListener("click", function () {
    var open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a") && !e.target.closest(".lang")) {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });

  /* ---------- 3. Scroll-spy ---------- */
  var linkFor = {};
  document.querySelectorAll(".nav__link").forEach(function (a) {
    linkFor[a.getAttribute("href")] = a;
  });
  var sections = Array.from(document.querySelectorAll("main section[id]"));
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var active = linkFor["#" + entry.target.id];
      if (!active) return;
      document.querySelectorAll(".nav__link").forEach(function (a) { a.classList.remove("is-active"); });
      active.classList.add("is-active");
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
  sections.forEach(function (s) { spy.observe(s); });

  /* ---------- 4. Reveal on scroll ---------- */
  var revealSel =
    ".hero__copy, .feature, .challenge, .map-callout__copy, .map-guide, .story--featured, .enable__item, " +
    ".mcv__copy, .resp__frame, .resp, .audience, .form, .footer__grid";
  var revealEls = Array.from(document.querySelectorAll(revealSel));
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealEls.forEach(function (el) { el.classList.add("reveal"); });
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { reveal.observe(el); });
  }

  /* ---------- 5. Pending links (placeholders) ---------- */
  document.querySelectorAll("a[data-pending]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
    a.setAttribute("aria-disabled", "true");
    a.title = a.dataset.pending || "Pending";
  });

  /* ---------- 6. Project introduction → mailto draft ---------- */
  var form = document.getElementById("project-form");
  var status = document.getElementById("form-status");
  var CONTACT = "branding@seeed.cc";
  function read(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var project = read("f-project");
    var email = read("f-email");
    var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!project || !validEmail) {
      status.textContent = currentLang === "cn"
        ? "请输入项目 / 组织名称和有效的联系邮箱。"
        : "Please enter your project / organization name and a valid contact email.";
      (project ? document.getElementById("f-email") : document.getElementById("f-project")).focus();
      return;
    }
    var subject = "Seeed for SDGs project inquiry — " + project;
    var body =
      "Hello Seeed for SDGs team,\n\n" +
      "Please review the project information below:\n\n" +
      "Project / Organization: " + project + "\n" +
      "Challenge: " + (read("f-challenge") || "Not specified") + "\n" +
      "Stage: " + (read("f-stage") || "Not specified") + "\n" +
      "Location: " + (read("f-location") || "Not specified") + "\n" +
      "Technology needs: " + (read("f-needs") || "Not specified") + "\n" +
      "Expected impact: " + (read("f-impact") || "Not specified") + "\n" +
      "Type of support requested: " + (read("f-support") || "Not specified") + "\n" +
      "Website / materials: " + (read("f-site") || "Not provided") + "\n" +
      "Contact email: " + email + "\n\n" +
      "Sent from the Seeed for SDGs collaboration form.";
    window.location.href =
      "mailto:" + CONTACT +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    status.textContent = currentLang === "cn"
      ? "正在打开发送到 " + CONTACT + " 的邮件草稿，请检查后选择「发送」。"
      : "Opening an email draft to " + CONTACT + ". Please review it and select Send in your email app.";
  });

  /* ---------- 7. Stories marquee: duplicate the track for a seamless loop ---------- */
  var track = document.querySelector(".stories__track");
  if (track) {
    var clones = Array.from(track.children).map(function (it) {
      var c = it.cloneNode(true);
      c.setAttribute("aria-hidden", "true");
      return c;
    });
    clones.forEach(function (c) { track.appendChild(c); });
  }

  /* ---------- 7b. Partners marquee: duplicate track for a seamless loop ---------- */
  var partnersTrack = document.querySelector(".partners__track");
  if (partnersTrack) {
    var pClones = Array.from(partnersTrack.children).map(function (it) {
      var c = it.cloneNode(true);
      c.setAttribute("aria-hidden", "true");
      return c;
    });
    pClones.forEach(function (c) { partnersTrack.appendChild(c); });
  }

  /* ---------- 8. How We Enable slider ---------- */
  var enableSlider = document.getElementById("enable-slider");
  var enableTrack = document.getElementById("enable-track");
  if (enableSlider && enableTrack) {
    var slides = Array.from(enableTrack.children);
    var enableDots = Array.from(enableSlider.querySelectorAll(".enable__dot"));
    var prevBtn = enableSlider.querySelector(".enable__nav--prev");
    var nextBtn = enableSlider.querySelector(".enable__nav--next");
    var cur = 0;
    var goTo = function (i) {
      cur = ((i % slides.length) + slides.length) % slides.length;
      enableTrack.style.transform = "translateX(-" + (cur * 100) + "%)";
      enableDots.forEach(function (d, idx) { d.classList.toggle("is-active", idx === cur); });
    };
    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(cur - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(cur + 1); });
    enableDots.forEach(function (d, idx) { d.addEventListener("click", function () { goTo(idx); }); });

    /* autoplay — right-to-left loop, 7s pause per slide */
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var autoplay = setInterval(function () { goTo((cur + 1) % slides.length); }, 7000);
      enableSlider.addEventListener("mouseenter", function () { clearInterval(autoplay); });
      enableSlider.addEventListener("mouseleave", function () {
        clearInterval(autoplay);
        autoplay = setInterval(function () { goTo((cur + 1) % slides.length); }, 7000);
      });
    }
  }
})();
