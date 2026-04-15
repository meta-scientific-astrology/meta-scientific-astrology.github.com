(function () {
  'use strict';

  var STORAGE_KEY = 'alfi_lang';

  var translations = {
    en: {
      /* --- Index Page --- */
      'page.title': 'MSA - Meta-Scientific Astrology | Astrology Without Myths',
      'nav.philosophy': 'Philosophy',
      'nav.pillars': 'Framework',
      'nav.app': 'ALFI App',
      'nav.theory': 'White Paper',
      'nav.support': 'Support',

      'hero.badge': 'Meta-Scientific Astrology',
      'hero.title': 'Meta-Scientific Astrology:<br><span class="gradient-text">Synchronization with Reality.</span>',
      'hero.subtitle': 'Time is not just numbers on a clock. It is a fundamental process that creates our reality. We study its patterns through planetary cycles, discarding myths and leaving the pure logic of synchronism.',
      'hero.cta.study': 'STUDY THE MSA FRAMEWORK',
      'hero.cta.open': 'Open ALFI',

      'section.philosophy.badge': 'The Essence of the System',
      'section.philosophy.title': 'Reality is a Process',
      'section.philosophy.text': 'Without the passage of time, the world is static and dead. Everything living in our reality is built into cycles. Millions of years of evolution have created in us mechanisms of Synchrony and Resonance with the rhythms of the Solar System.',
      'section.philosophy.patterns.title': 'Patterns',
      'section.philosophy.patterns.text': 'Time cycles, repeating for millions of years, have formed stable laws of system development.',
      'section.philosophy.markers.title': 'Planets-Markers',
      'section.philosophy.markers.text': 'Planets do not "influence" us. They are visible and stable pointers on the hands of the Universe\'s clock, allowing us to track the rhythms of Time.',
      'section.philosophy.sync.title': 'Synchronism',
      'section.philosophy.sync.text': 'The ability of living systems to act in step with the universal cycles of reality.',

      'section.pillars.label': 'Local Zodiacs',
      'section.pillars.title': 'Why are Traditional Systems Flawed?',
      'section.pillars.tropical.title': 'Tropical Zodiac:',
      'section.pillars.tropical.text': 'Tied to the Earth\'s seasons. It stops working as soon as you leave the planet\'s orbit or are born in space.',
      'section.pillars.sidereal.title': 'Sidereal Zodiac:',
      'section.pillars.sidereal.text': 'Based on the visible shift of stars, which is only a consequence of the wobbling of the Earth\'s axis (precession). It is just as local and tied to the Earth observer.',
      'section.pillars.msa_solution.title': 'The MSA Solution - Solar Zodiac:',
      'section.pillars.msa_solution.text': 'The Zodiac is the path of the Sun, not the Earth observer. Our star moves around the Galactic Center, which serves as the only stable "anchor" and pole for the entire Solar System. In MSA, 0° Capricorn is the vector to this center. We were historically "lucky" that this vector almost coincides with tropical Capricorn, but MSA replaces this luck with mathematical precision.',

      'section.empirical.badge': 'Empirical Data',
      'section.empirical.title': 'Return to the Roots without Fairytales',
      'section.empirical.text1': 'Ancient observers accumulated an enormous amount of true empirical data on planetary cycles. But, lacking modern knowledge of physics and time, they dressed these patterns in the form of myths and legends.',
      'section.empirical.mission.title': 'The MSA Mission:',
      'section.empirical.mission.text': 'We take this real data and translate it into the language of modern knowledge about time, cycles, and resonance. No gods - only patterns of reality that we can finally explain logically.',

      'section.alfi.label': 'Navigation Instrument',
      'section.alfi.title': 'ALFI Astro-processor',
      'section.alfi.text': 'The MSA theory is implemented in the ALFI app - the world\'s first instrument created to work with synchrony and resonance. It is your personal navigator in the flow of time cycles, adapted for the modern social context.',
      'section.alfi.btn': 'Go to ALFI',

      /* --- Index App Page --- */
      'app.page.title': 'ALFI - Biorhythm & Cycle Tracker | Navigate Reality',
      'app.nav.compatibility': 'Compatibility',
      'app.nav.archetype': 'Archetype',
      'app.nav.radar': 'Radar',
      'app.nav.pricing': 'Pricing',

      'app.hero.badge': 'Meta Scientific Astrology',
      'app.hero.title': 'Navigate Reality<br>with <span class="gradient-text">ALFI</span>',
      'app.hero.subtitle': 'Discover your archetype, decode relationship dynamics, and track natural cycles with precision algorithms.',

      'app.section.compatibility.label': 'Compatibility',
      'app.section.compatibility.title': 'Decode Any Relationship',
      'app.section.compatibility.subtitle': 'Go beyond surface-level assessments. ALFI analyzes the deep architecture of any bond - from synchronicity and resonance to hidden vulnerabilities.',
      'app.section.compatibility.scenario.title': 'Bond Scenario',
      'app.section.compatibility.scenario.text': 'Get a complete picture of how two people interact. ALFI calculates <strong>Synchronicity</strong> and <strong>Resonance</strong> scores, assigns a relationship archetype, and generates a narrative scenario that captures the dynamic of your connection.',
      'app.section.compatibility.tags.sync': 'Synchronicity Score',
      'app.section.compatibility.tags.res': 'Resonance Score',
      'app.section.compatibility.tags.arch': 'Relationship Archetype',
      'app.section.compatibility.tags.narr': 'Narrative Scenario',
      'app.section.compatibility.deep.title': 'Deep Analysis',
      'app.section.compatibility.deep.text': 'Dive into the <strong>Relationship Architecture</strong> - Soul Resonance, Couple Attraction, Emotional Safety, Chemistry, and more. Identify <strong>Vulnerabilities</strong> like Love Asymmetry, Tension, Friction points before they become real problems.',
      'app.section.compatibility.tags.soul': 'Soul Resonance',
      'app.section.compatibility.tags.attr': 'Attraction',
      'app.section.compatibility.tags.red': 'Red Flags',
      'app.section.compatibility.tags.tens': 'Tension Analysis',

      'app.section.archetype.label': 'Archetype',
      'app.section.archetype.title': 'Know Your Blueprint',
      'app.section.archetype.subtitle': 'Every person has a unique energy signature. ALFI decodes it into an actionable archetype with a personal success strategy.',
      'app.section.archetype.personal.title': 'Personal Archetype',
      'app.section.archetype.personal.text': 'Discover your archetype name, success strategy, and core traits. ALFI evaluates <strong>Personal Influence</strong>, <strong>Adaptability</strong>, and <strong>Power of Mastery</strong> - giving you a clear blueprint for making the most of your unique strengths.',
      'app.section.archetype.tags.name': 'Archetype Name',
      'app.section.archetype.tags.strategy': 'Success Strategy',
      'app.section.archetype.tags.influence': 'Personal Influence',
      'app.section.archetype.tags.mastery': 'Power of Mastery',
      'app.section.archetype.tags.adapt': 'Adaptability',

      'app.section.radar.label': 'Radar',
      'app.section.radar.title': 'Daily Navigation',
      'app.section.radar.subtitle': 'Track the rhythm of each day. Know when to act and when to hold back.',
      'app.section.radar.flow.title': 'Flow & Tension Map',
      'app.section.radar.flow.text': 'ALFI\'s Radar tracks the real-time energy landscape - detecting windows of <strong>Flow</strong>, <strong>Friction</strong>, and <strong>Tension</strong>. See your active window, danger level, and hourly timeline so you can time your actions with precision.',
      'app.section.radar.tags.flow': 'Flow States',
      'app.section.radar.tags.tens': 'Tension Windows',
      'app.section.radar.tags.active': 'Active Window',
      'app.section.radar.tags.danger': 'Danger Level',
      'app.section.radar.tags.hourly': 'Hourly Timeline',

      'app.section.pricing.label': 'Pricing',
      'app.section.pricing.title': 'Simple, Transparent Pricing',
      'app.section.pricing.subtitle': 'Start free. Upgrade when you\'re ready for the full picture.',
      'app.section.pricing.basic.title': 'Basic',
      'app.section.pricing.basic.amount': 'Free',
      'app.section.pricing.basic.desc': 'Get started',
      'app.section.pricing.basic.feature1': 'Personal Archetype',
      'app.section.pricing.basic.feature2': 'Radar - today only',
      'app.section.pricing.basic.feature3': '2 Bond Analyses',
      'app.section.pricing.basic.feature4': 'Deep Analysis & Red Flags',
      'app.section.pricing.basic.feature5': 'Priority Support',
      'app.section.pricing.premium.title': 'Premium',
      'app.section.pricing.premium.amount': '$4.90',
      'app.section.pricing.premium.period': '/ month',
      'app.section.pricing.premium.desc': 'Full Access',
      'app.section.pricing.premium.feature1': 'Personal Archetype',
      'app.section.pricing.premium.feature2': 'Radar - any date & time',
      'app.section.pricing.premium.feature3': 'Unlimited Bonds',
      'app.section.pricing.premium.feature4': 'Deep Analysis & Red Flags',
      'app.section.pricing.premium.feature5': 'Priority Support',

      'app.section.download.label': 'Get Started',
      'app.section.download.title': 'Available Everywhere',
      'app.section.download.subtitle': 'One account. All platforms. Your data syncs seamlessly.',

      /* --- Common --- */
      'footer.links.theory': 'Theory (White Paper)',
      'footer.links.terms': 'Terms of Service',
      'footer.links.privacy': 'Privacy Policy',
      'footer.links.refund': 'Refund Policy',
      'footer.links.support': 'Support',
      'footer.links.deletion': 'Delete Account',
      'footer.copy': '© 2024 Ruslan Dzhansakov. All rights reserved.',

      'start.path.label': 'Get Started',
      'start.path.title': 'Choose Your Path',
      'start.path.subtitle': 'Dive deep into the theory, or open the processor and navigate right now. Both paths lead to the same destination.',
      'start.path.theory.title': 'Study the Theory',
      'start.path.theory.text': 'Read the full White Paper - 9 chapters covering the complete philosophical and technical foundation of MSA. Proto-Reality, Resonance, Galactic Zodiac, Synastry, and more.',
      'start.path.theory.btn': 'READ WHITE PAPER',
      'start.path.app.title': 'Open the Processor',
      'start.path.app.text': 'Launch ALFI - your personal MSA navigation instrument. Compute your Archetype, map a relationship, or check today\'s Radar window. Available on all platforms.',
      'start.path.app.btn': 'OPEN WEB APP',

      'label.test': 'test',
      'label.slow': 'slow',

      /* --- Privacy Policy --- */
      'policy.privacy.title': 'Privacy Policy',
      'policy.privacy.updated': 'Last updated: 2026-01-11',
      'policy.privacy.1.title': '1. Introduction',
      'policy.privacy.1.p': 'Thank you for using ALFI. We respect your privacy and are committed to protecting your personal data regarding your usage of our natural cycle tracking utility.',
      'policy.privacy.2.title': '2. Data We Collect',
      'policy.privacy.2.p': 'To calculate precise astronomical positions and personal biorhythm models, we may collect the following information:',
      'policy.privacy.2.l1': '<strong>Calculation Data:</strong> Date of birth, time of birth, and place of birth.',
      'policy.privacy.2.p2': 'This data is strictly required to generate deterministic astronomical coordinates (ephemerides) necessary for the MSA Framework algorithms.',
      'policy.privacy.3.title': '3. How We Use Your Data',
      'policy.privacy.3.p': 'Your data is used solely for mathematical calculations, cycle modeling, and generating analytical insights within the app. Specifically:',
      'policy.privacy.3.l1': 'We use this data to calculate planetary positions and visualize interaction dynamics.',
      'policy.privacy.3.l2': 'We <strong>do not</strong> sell, rent, or share your personal data with third parties.',
      'policy.privacy.3.l3': 'All calculations are performed securely according to platform requirements.',
      'policy.privacy.4.title': '4. In-App Purchases',
      'policy.privacy.4.p': 'Payment information for subscriptions (ALFI Premium) is processed exclusively by the App Stores. We do not have access to your payment details or credit card information.',
      'policy.privacy.5.title': '5. Data Deletion',
      'policy.privacy.5.p': 'You have full control over your data. You may delete your account and all associated information at any time using the option provided in the app (Settings > Delete Account). Upon deletion, your personal profile is permanently removed.',
      'policy.privacy.6.title': '6. Children\'s Privacy',
      'policy.privacy.6.p': 'ALFI is not intended for children under the age specified in local laws. We do not knowingly collect data from minors.',
      'policy.privacy.7.title': '7. Contact Us',
      'policy.privacy.7.p': 'If you have questions about this Privacy Policy, please contact our support team at:',

      /* --- Theory --- */
      'theory.title': 'MSA Theory | White Paper',
      'theory.nav.title': 'Quick Navigation',
      'theory.main.title': 'The Fundamental Theory of [MSA]',
      'theory.author': 'By Ruslan Dzhansakov',
      'theory.ch1.title': 'Chapter 1. The Astrological Worldview !',
      'theory.ch2.title': 'Chapter 2. ASTROLOGICAL MECHANICS',
      'policy.terms.title': 'Terms of Service',
      'policy.terms.updated': 'Last updated: 2026-01-11',
      'policy.terms.1.title': '1. Introduction',
      'policy.terms.1.p': 'By downloading, installing, or using the ALFI app and this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the application.',
      'policy.terms.2.title': '2. Use of License',
      'policy.terms.2.p': 'Permission is granted to use ALFI for personal, non-commercial viewing and usage only. This is the grant of a limited, revocable license, not a transfer of title or ownership.',
      'policy.terms.3.title': '3. Disclaimer & No Advice',
      'policy.terms.3.p': 'The content, data models, and analytical insights generated by ALFI, including materials related to the <strong>MSA Framework (Meta-Systemic Analysis)</strong>, are for <strong>informational and self-reflection purposes only</strong>.',
      'policy.terms.3.p2': 'The materials are provided on an \'as is\' basis. They must not be considered psychological, financial, medical, or professional advice. The app relies on astronomical algorithms and theoretical models; we make no warranties regarding predictive accuracy.',
      'policy.terms.4.title': '4. Payments and Subscriptions',
      'policy.terms.4.1.title': '4.1 In-App Purchases (App Stores)',
      'policy.terms.4.1.p': 'For purchases made within the ALFI applications distributed via App Stores (Apple App Store for iOS/macOS, Google Play Store for Android and Microsoft Store for Windows):',
      'policy.terms.4.1.l1': 'Payments are processed securely by the respective platform provider.',
      'policy.terms.4.1.l2': '<strong>Subscriptions automatically renew</strong> unless auto-renew is turned off at least 24-hours before the end of the current period.',
      'policy.terms.4.1.l3': 'You can manage your subscriptions and turn off auto-renewal by going to your Account Settings on the App Store, Google Play, Microsoft Store after purchase.',
      'policy.terms.4.1.l4': 'We do not handle billing or refunds directly; please contact the Store support for any payment issues.',
      'policy.terms.5.title': '5. Intellectual Property',
      'policy.terms.5.p': 'All algorithms, texts related to the MSA Framework, app logic, visuals, and source code are the intellectual property of <strong>Ruslan Dzhansakov</strong>.',
      'policy.terms.5.p2': 'No part of the app may be copied, redistributed, or reverse-engineered without prior written consent.',
      'policy.terms.6.title': '6. Changes to Terms',
      'policy.terms.6.p': 'We may update these Terms from time to time. Continued use of ALFI after changes are published constitutes acceptance of the updated Terms.',
      'policy.terms.7.title': '7. Contact Information',
      'policy.terms.7.p': 'Service Provider: <strong>Ruslan Dzhansakov</strong>',
      'policy.terms.7.p2': 'If you have questions about these Terms, please contact us at:',

      /* --- Deletion --- */
      'policy.deletion.title': 'Delete Your Account',
      'policy.deletion.intro': 'We respect your right to control your personal data. You can delete your ALFI account and all associated data at any time using one of the methods described below.',
      'policy.deletion.opt1.title': 'Option 1: Delete from the App',
      'policy.deletion.opt1.p': 'The fastest way to delete your account is directly within the ALFI app:',
      'policy.deletion.opt1.l1': 'Open the app and navigate to <strong>Hub</strong>',
      'policy.deletion.opt1.l2': 'Tap on <strong>Profile</strong>',
      'policy.deletion.opt1.l3': 'Tap <strong>Delete Account</strong>',
      'policy.deletion.opt1.l4': 'Confirm deletion when prompted',
      'policy.deletion.opt1.out': 'Your account and all associated data will be permanently removed immediately.',
      'policy.deletion.opt2.title': 'Option 2: Request via Email',
      'policy.deletion.opt2.p': 'If you are unable to delete your account through the app, you can request deletion by emailing us. Please include the email address associated with your ALFI account.',
      'policy.deletion.opt2.out': 'We will process your request and confirm deletion within <strong>48 hours</strong>.',
      'policy.deletion.what.title': 'What Data Is Deleted?',
      'policy.deletion.what.intro': 'Upon account deletion, the following data is permanently removed:',
      'policy.deletion.what.l1': 'Your user profile and authentication credentials',
      'policy.deletion.what.l2': 'All personal birth data and saved contacts',
      'policy.deletion.what.l3': 'Bond analyses and compatibility records',
      'policy.deletion.what.l4': 'Subscription and payment history references',
      'policy.deletion.what.l5': 'All app preferences and settings',
      'policy.deletion.what.out': '<strong>This action is irreversible.</strong> Once your account is deleted, it cannot be recovered.',

      /* --- Refund --- */
      'policy.refund.title': 'Refund Policy',
      'policy.refund.updated': 'Last updated: 2026-01-11',
      'policy.refund.1.title': '1. Digital Products',
      'policy.refund.1.p': 'Since ALFI provides non-tangible, irrevocable digital goods (software and content), we generally do not issue refunds once the order is accomplished and the product is sent/accessed.',
      'policy.refund.2.title': '2. Subscriptions',
      'policy.refund.2.p': 'You may cancel your subscription at any time. If you cancel, your subscription will remain active until the end of the current billing period. We do not offer refunds for partially used billing periods.',
      'policy.refund.3.title': '3. Exceptional Circumstances',
      'policy.refund.3.p': 'We honor requests for the refund on the following reasons:',
      'policy.refund.3.l1': '<strong>Non-delivery of the product:</strong> due to some mailing issues or technical failure.',
      'policy.refund.3.l2': '<strong>Major defects:</strong> although all the products are thoroughly tested before release, unexpected errors may occur.',
      'policy.refund.4.title': '4. Contact Us',
      'policy.refund.4.p': 'If you believe you qualify for a refund, please contact us at:',

      /* --- Support --- */
      'policy.support.title': 'Support',
      'policy.support.intro': 'Need help with ALFI? We are here to support you. You can reach out to us via email or join our community.',
      'policy.support.email.title': 'Email Support',
      'policy.support.email.p': 'For technical issues, account inquiries, or bug reports, please email us at:',
      'policy.support.community.title': 'Community',
      'policy.support.community.p': 'Join our official subreddit for discussions and updates:',
      'policy.support.community.btn': 'Visit MSA Subreddit'
    },
    ru: {
      /* --- Index Page --- */
      'page.title': 'MSA - Метанаучная Астрология | Астрология без мифов',
      'nav.philosophy': 'Философия',
      'nav.pillars': 'Система',
      'nav.app': 'Приложение ALFI',
      'nav.theory': 'Теория MSA',
      'nav.support': 'Поддержка',

      'hero.badge': 'Метанаучная Астрология',
      'hero.title': 'Метанаучная Астрология:<br><span class="gradient-text">Синхронизация с Реальностью.</span>',
      'hero.subtitle': 'Время - это не просто цифры на циферблате. Это фундаментальный процесс, создающий нашу реальность. Мы изучаем его паттерны через планетарные циклы, отбросив мифы и оставив чистую логику синхронизма.',
      'hero.cta.study': 'ИЗУЧИТЬ СИСТЕМУ MSA',
      'hero.cta.open': 'Открыть ALFI',

      'section.philosophy.badge': 'Суть системы',
      'section.philosophy.title': 'Реальность - это процесс',
      'section.philosophy.text': 'Без течения времени мир статичен и мертв. Всё живое в нашей реальности встроено в циклы. Миллионы лет эволюции создали в нас механизмы Синхронии и Резонанса с ритмами Солнечной системы.',
      'section.philosophy.patterns.title': 'Паттерны',
      'section.philosophy.patterns.text': 'Временные циклы, повторяющиеся миллионы лет, сформировали устойчивые законы развития систем.',
      'section.philosophy.markers.title': 'Планеты-Маркеры',
      'section.philosophy.markers.text': 'Планеты не «влияют» на нас. Они - видимые и стабильные стрелки на часах Вселенной, позволяющие отслеживать ритмы Времени.',
      'section.philosophy.sync.title': 'Синхронизм',
      'section.philosophy.sync.text': 'Способность живых систем действовать в такт с универсальными циклами реальности.',

      'section.pillars.label': 'Локальные зодиаки',
      'section.pillars.title': 'Почему традиционные системы ошибочны?',
      'section.pillars.tropical.title': 'Тропический зодиак:',
      'section.pillars.tropical.text': 'Привязан к сезонам Земли. Он перестает работать, как только вы покидаете орбиту планеты или рождаетесь в космосе.',
      'section.pillars.sidereal.title': 'Сидерический зодиак:',
      'section.pillars.sidereal.text': 'Основан на видимом сдвиге звезд, который является лишь следствием колебания земной оси (прецессии). Он так же локален и привязан к земному наблюдателю.',
      'section.pillars.msa_solution.title': 'Решение MSA - Солнечный Зодиак:',
      'section.pillars.msa_solution.text': 'Зодиак - это путь Солнца, а не земного наблюдателя. Наша звезда движется вокруг Центра Галактики, который служит единственным стабильным «якорем» и полюсом для всей Солнечной системы. В MSA точка 0° Козерога - это вектор на этот центр. Нам исторически «повезло», что этот вектор почти совпадает с тропическим Козерогом, но MSA заменяет это везение математической точностью.',

      'section.empirical.badge': 'Эмпирические данные',
      'section.empirical.title': 'Возвращение к истокам без сказок',
      'section.empirical.text1': 'Древние наблюдатели накопили колоссальный объем верных эмпирических данных о планетарных циклах. Но, не имея современных знаний о физике и времени, они облекли эти закономерности в форму мифов и легенд.',
      'section.empirical.mission.title': 'Миссия MSA:',
      'section.empirical.mission.text': 'Мы берем эти реальные данные и переводим их на язык современных знаний о времени, циклах и резонансе. Никаких богов - только закономерности реальности, которые мы наконец-то можем объяснить логически.',

      'section.alfi.label': 'Инструмент навигации',
      'section.alfi.title': 'Астропроцессор ALFI',
      'section.alfi.text': 'Теория MSA реализована в приложении ALFI - первом в мире инструменте, созданном для работы с синхронией и резонансом. Это ваш персональный навигатор в потоке временных циклов, адаптированный под современный социальный контекст.',
      'section.alfi.btn': 'Перейти к использованию ALFI',

      /* --- Index App Page --- */
      'app.page.title': 'ALFI - Трекер биоритмов и циклов | Навигатор реальности',
      'app.nav.compatibility': 'Совместимость',
      'app.nav.archetype': 'Архетип',
      'app.nav.radar': 'Радар',
      'app.nav.pricing': 'Цены',

      'app.hero.badge': 'Метанаучная астрология',
      'app.hero.title': 'Навигация в реальности<br>с <span class="gradient-text">ALFI</span>',
      'app.hero.subtitle': 'Узнайте свой архетип, расшифруйте динамику отношений и отслеживайте природные циклы с помощью точных алгоритмов.',

      'app.section.compatibility.label': 'Совместимость',
      'app.section.compatibility.title': 'Расшифровка любых отношений',
      'app.section.compatibility.subtitle': 'Выйдите за рамки поверхностных оценок. ALFI анализирует глубокую архитектуру любой связи - от синхронности и резонанса до скрытых уязвимостей.',
      'app.section.compatibility.scenario.title': 'Сценарий связи',
      'app.section.compatibility.scenario.text': 'Получите полную картину взаимодействия двух людей. ALFI рассчитывает показатели <strong>Синхронности</strong> и <strong>Резонанса</strong>, присваивает архетип отношений и создает текстовый сценарий, отражающий динамику вашей связи.',
      'app.section.compatibility.tags.sync': 'Показатель синхронности',
      'app.section.compatibility.tags.res': 'Показатель резонанса',
      'app.section.compatibility.tags.arch': 'Архетип отношений',
      'app.section.compatibility.tags.narr': 'Сюжетный сценарий',
      'app.section.compatibility.deep.title': 'Глубокий анализ',
      'app.section.compatibility.deep.text': 'Погрузитесь в <strong>Архитектуру отношений</strong> - резонанс душ, притяжение пары, эмоциональная безопасность, химия и многое другое. Выявите <strong>Уязвимости</strong>, такие как асимметрия любви, напряжение, точки трения, прежде чем они станут реальными проблемами.',
      'app.section.compatibility.tags.soul': 'Резонанс душ',
      'app.section.compatibility.tags.attr': 'Притяжение',
      'app.section.compatibility.tags.red': 'Красные флаги',
      'app.section.compatibility.tags.tens': 'Анализ напряженности',

      'app.section.archetype.label': 'Архетип',
      'app.section.archetype.title': 'Знайте свой чертеж',
      'app.section.archetype.subtitle': 'У каждого человека есть уникальный энергетический почерк. ALFI расшифровывает его в понятный архетип с персональной стратегией успеха.',
      'app.section.archetype.personal.title': 'Персональный архетип',
      'app.section.archetype.personal.text': 'Узнайте название своего архетипа, стратегию успеха и основные черты. ALFI оценивает <strong>Личное влияние</strong>, <strong>Адаптивность</strong> и <strong>Силу мастерства</strong>, давая вам четкий план того, как максимально использовать свои уникальные преимущества.',
      'app.section.archetype.tags.name': 'Название архетипа',
      'app.section.archetype.tags.strategy': 'Стратегия успеха',
      'app.section.archetype.tags.influence': 'Личное влияние',
      'app.section.archetype.tags.mastery': 'Сила мастерства',
      'app.section.archetype.tags.adapt': 'Адаптивность',

      'app.section.radar.label': 'Радар',
      'app.section.radar.title': 'Ежедневная навигация',
      'app.section.radar.subtitle': 'Отслеживайте ритм каждого дня. Знайте, когда действовать, а когда лучше подождать.',
      'app.section.radar.flow.title': 'Карта потока и напряжения',
      'app.section.radar.flow.text': 'Радар ALFI отслеживает энергетический ландшафт в реальном времени, выявляя окна <strong>Потока</strong>, <strong>Трения</strong> и <strong>Напряжения</strong>. Видьте активное окно, уровень опасности и почасовую шкалу, чтобы планировать действия с ювелирной точностью.',
      'app.section.radar.tags.flow': 'Состояния потока',
      'app.section.radar.tags.tens': 'Окна напряжения',
      'app.section.radar.tags.active': 'Активное окно',
      'app.section.radar.tags.danger': 'Уровень опасности',
      'app.section.radar.tags.hourly': 'Почасовая шкала',

      'app.section.pricing.label': 'Цены',
      'app.section.pricing.title': 'Простая и прозрачная цена',
      'app.section.pricing.subtitle': 'Начните бесплатно. Перейдите на Premium, когда будете готовы к полной картине.',
      'app.section.pricing.basic.title': 'Базовый',
      'app.section.pricing.basic.amount': 'Бесплатно',
      'app.section.pricing.basic.desc': 'Начните работу',
      'app.section.pricing.basic.feature1': 'Личный архетип',
      'app.section.pricing.basic.feature2': 'Радар - только на сегодня',
      'app.section.pricing.basic.feature3': '2 анализа связей',
      'app.section.pricing.basic.feature4': 'Глубокий анализ и флаги',
      'app.section.pricing.basic.feature5': 'Приоритетная поддержка',
      'app.section.pricing.premium.title': 'Премиум',
      'app.section.pricing.premium.amount': '$4.90',
      'app.section.pricing.premium.period': '/ месяц',
      'app.section.pricing.premium.desc': 'Полный доступ',
      'app.section.pricing.premium.feature1': 'Личный архетип',
      'app.section.pricing.premium.feature2': 'Радар - на любую дату',
      'app.section.pricing.premium.feature3': 'Неограниченно связей',
      'app.section.pricing.premium.feature4': 'Глубокий анализ и флаги',
      'app.section.pricing.premium.feature5': 'Приоритетная поддержка',

      'app.section.download.label': 'Начать работу',
      'app.section.download.title': 'Доступно везде',
      'app.section.download.subtitle': 'Один аккаунт. Все платформы. Синхронизация данных.',

      /* --- Common --- */
      'footer.links.theory': 'Теория MSA',
      'footer.links.terms': 'Условия использования',
      'footer.links.privacy': 'Конфиденциальность',
      'footer.links.refund': 'Возврат средств',
      'footer.links.support': 'Поддержка',
      'footer.links.deletion': 'Удалить аккаунт',
      'footer.copy': '© 2024 Руслан Джансаков. Все права защищены.',

      'start.path.label': 'Начать работу',
      'start.path.title': 'Выберите свой путь',
      'start.path.subtitle': 'Погрузитесь в теорию или откройте процессор и начните навигацию прямо сейчас. Оба пути ведут к одной цели.',
      'start.path.theory.title': 'Изучить теорию',
      'start.path.theory.text': 'Прочтите 9 глав, охватывающих философский и технический фундамент MSA. Прото-реальность, Резонанс, Галактический Зодиак, Синастрия и многое другое.',
      'start.path.theory.btn': 'ЧИТАТЬ КНИГУ',
      'start.path.app.title': 'Астропроцессор',
      'start.path.app.text': 'ALFI - это ваш персональный инструмент навигации. Рассчитайте свой архетип, проанализируйте отношения или проверьте окно Радара на сегодня. Доступно на всех платформах.',
      'start.path.app.btn': 'ПЕРЕЙТИ В ПРИЛОЖЕНИЕ ALFI',

      'label.test': 'тест',
      'label.slow': 'slow',

      /* --- Политике конфиденциальности --- */
      'policy.privacy.title': 'Политика конфиденциальности',
      'policy.privacy.updated': 'Последнее обновление: 2026-01-11',
      'policy.privacy.1.title': '1. Введение',
      'policy.privacy.1.p': 'Благодарим вас за использование ALFI. Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные, касающиеся использования нашей утилиты для отслеживания природных циклов.',
      'policy.privacy.2.title': '2. Данные, которые мы собираем',
      'policy.privacy.2.p': 'Для расчета точных астрономических положений и персональных моделей биоритмов мы можем собирать следующую информацию:',
      'policy.privacy.2.l1': '<strong>Данные для расчета:</strong> Дата рождения, время рождения и место рождения.',
      'policy.privacy.2.p2': 'Эти данные строго необходимы для генерации детерминированных астрономических координат (эфемерид), необходимых для алгоритмов MSA Framework.',
      'policy.privacy.3.title': '3. Как мы используем ваши данные',
      'policy.privacy.3.p': 'Ваши данные используются исключительно для математических расчетов, моделирования циклов и генерации аналитических выводов внутри приложения. В частности:',
      'policy.privacy.3.l1': 'Мы используем эти данные для расчета положений планет и визуализации динамики взаимодействия.',
      'policy.privacy.3.l2': 'Мы <strong>не</strong> продаем, не сдаем в аренду и не передаем ваши персональные данные третьим лицам.',
      'policy.privacy.3.l3': 'Все расчеты выполняются безопасно в соответствии с требованиями платформ.',
      'policy.privacy.4.title': '4. Внутриигровые покупки',
      'policy.privacy.4.p': 'Информация об оплате подписок (ALFI Premium) обрабатывается исключительно магазинами приложений. У нас нет доступа к вашим платежным реквизитам или информации о кредитной карте.',
      'policy.privacy.5.title': '5. Удаление данных',
      'policy.privacy.5.p': 'У вас есть полный контроль над вашими данными. Вы можете удалить свою учетную запись и всю связанную с ней информацию в любое время, используя опцию, предусмотренную в приложении (Настройки > Удалить учетную запись). После удаления ваш личный профиль будет безвозвратно удален.',
      'policy.privacy.6.title': '6. Конфиденциальность детей',
      'policy.privacy.6.p': 'ALFI не предназначен для детей младше возраста, указанного в местном законодательстве. Мы не собираем намеренно данные несовершеннолетних.',
      'policy.privacy.7.title': '7. Свяжитесь с нами',
      'policy.privacy.7.p': 'Если у вас есть вопросы по поводу настоящей Политики конфиденциальности, пожалуйста, свяжитесь с нашей службой поддержки по адресу:',

      /* --- Теория --- */
      'theory.title': 'Теория MSA',
      'theory.nav.title': 'Быстрая навигация',
      'theory.main.title': 'Фундаментальная Теория [MSA]',
      'theory.author': 'Руслан Джансаков',
      'theory.ch1.title': 'Глава 1. Астрологическое мировоззрение !',
      'theory.ch2.title': 'Глава 2. АСТРОЛОГИЧЕСКАЯ МЕХАНИКА',
      'policy.terms.title': 'Условия использования',
      'policy.terms.updated': 'Последнее обновление: 2026-01-11',
      'policy.terms.1.title': '1. Введение',
      'policy.terms.1.p': 'Загружая, устанавливая или используя приложение ALFI и этот веб-сайт, вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны, пожалуйста, не используйте приложение.',
      'policy.terms.2.title': '2. Использование лицензии',
      'policy.terms.2.p': 'Разрешается использовать ALFI только для личного, некоммерческого просмотра и использования. Это предоставление ограниченной, отзывной лицензии, а не передача прав собственности.',
      'policy.terms.3.title': '3. Отказ от ответственности и отсутствие рекомендаций',
      'policy.terms.3.p': 'Контент, модели данных и аналитические выводы, генерируемые ALFI, включая материалы, связанные с <strong>MSA Framework (Мета-Системный Анализ)</strong>, предназначены исключительно для <strong>информационных целей и саморефлексии</strong>.',
      'policy.terms.3.p2': 'Материалы предоставляются на условиях «как есть». Они не должны рассматриваться как психологические, финансовые, медицинские или профессиональные советы. Приложение опирается на астрономические алгоритмы и теоретические модели; мы не даем никаких гарантий относительно точности прогнозов.',
      'policy.terms.4.title': '4. Платежи и подписки',
      'policy.terms.4.1.title': '4.1 Покупки в приложении (Магазины приложений)',
      'policy.terms.4.1.p': 'Для покупок, совершенных в приложениях ALFI, распространяемых через Магазины приложений (Apple App Store для iOS/macOS, Google Play Store для Android и Microsoft Store для Windows):',
      'policy.terms.4.1.l1': 'Платежи безопасно обрабатываются соответствующим поставщиком платформы.',
      'policy.terms.4.1.l2': '<strong>Подписки продлеваются автоматически</strong>, если автоматическое продление не отключено по крайней мере за 24 часа до окончания текущего периода.',
      'policy.terms.4.1.l3': 'Вы можете управлять своими подписками и отключить автоматическое продление, перейдя в настройки своей учетной записи в App Store, Google Play, Microsoft Store после покупки.',
      'policy.terms.4.1.l4': 'Мы не обрабатываем счета или возврат средств напрямую; пожалуйста, свяжитесь со службой поддержки Магазина по любым вопросам оплаты.',
      'policy.terms.5.title': '5. Интеллектуальная собственность',
      'policy.terms.5.p': 'Все алгоритмы, тексты, связанные с MSA Framework, логика приложения, визуальные эффекты и исходный код являются интеллектуальной собственностью <strong>Руслана Джансакова</strong>.',
      'policy.terms.5.p2': 'Никакая часть приложения не может быть скопирована, перераспределена или подвергнута реверс-инжинирингу без предварительного письменного согласия.',
      'policy.terms.6.title': '6. Изменения условий',
      'policy.terms.6.p': 'Мы можем время от времени обновлять настоящие Условия. Продолжение использования ALFI после публикации изменений означает принятие обновленных Условий.',
      'policy.terms.7.title': '7. Контактная информация',
      'policy.terms.7.p': 'Поставщик услуг: <strong>Руслан Джансаков</strong>',
      'policy.terms.7.p2': 'Если у вас есть вопросы по поводу настоящих Условий, пожалуйста, свяжитесь с нами по адресу:',

      /* --- Удаление --- */
      'policy.deletion.title': 'Удалить учетную запись',
      'policy.deletion.intro': 'Мы уважаем ваше право на контроль своих персональных данных. Вы можете удалить свою учетную запись ALFI и все связанные с ней данные в любое время, используя один из методов, описанных ниже.',
      'policy.deletion.opt1.title': 'Вариант 1: Удалить из приложения',
      'policy.deletion.opt1.p': ' Самый быстрый способ удалить вашу учетную запись - непосредственно в приложении ALFI:',
      'policy.deletion.opt1.l1': 'Откройте приложение и перейдите в <strong>Хаб</strong>',
      'policy.deletion.opt1.l2': 'Нажмите <strong>Профиль</strong>',
      'policy.deletion.opt1.l3': 'Нажмите <strong>Удалить учетную запись</strong>',
      'policy.deletion.opt1.l4': 'Подтвердите удаление при появлении запроса',
      'policy.deletion.opt1.out': 'Ваша учетная запись и все связанные с ней данные будут немедленно и навсегда удалены.',
      'policy.deletion.opt2.title': 'Вариант 2: Запрос по электронной почте',
      'policy.deletion.opt2.p': ' Если вы не можете удалить свою учетную запись через приложение, вы можете запросить удаление, отправив нам электронное письмо. Пожалуйста, укажите адрес электронной почты, связанный с вашей учетной записью ALFI.',
      'policy.deletion.opt2.out': 'Мы обработаем ваш запрос и подтвердим удаление в течение <strong>48 часов</strong>.',
      'policy.deletion.what.title': ' Какие данные удаляются?',
      'policy.deletion.what.intro': 'При удалении учетной записи следующие данные удаляются безвозвратно:',
      'policy.deletion.what.l1': 'Ваш профиль пользователя и учетные данные для аутентификации',
      'policy.deletion.what.l2': 'Все личные данные о рождении и сохраненные контакты',
      'policy.deletion.what.l3': 'Аналызы связей и записи о совместимости',
      'policy.deletion.what.l4': 'Ссылки на историю подписок и платежей',
      'policy.deletion.what.l5': 'Все предпочтения и настройки приложения',
      'policy.deletion.what.out': '<strong>Это действие необратимо.</strong> После удаления учетную запись невозможно восстановить.',

      /* --- Возврат средств --- */
      'policy.refund.title': 'Политика возврата денежных средств',
      'policy.refund.updated': 'Последнее обновление: 2026-01-11',
      'policy.refund.1.title': '1. Цифровые продукты',
      'policy.refund.1.p': 'Поскольку ALFI предоставляет нематериальные, безотзывные цифровые товары (программное обеспечение и контент), мы обычно не осуществляем возврат средств после выполнения заказа и отправки/предоставления доступа к продукту.',
      'policy.refund.2.title': '2. Подписки',
      'policy.refund.2.p': 'Вы можете отменить подписку в любое время. В случае отмены ваша подписка будет оставаться активной до конца текущего расчетного периода. Мы не предлагаем возврат средств за частично использованные расчетные периоды.',
      'policy.refund.3.title': '3. Исключительные обстоятельства',
      'policy.refund.3.p': 'Мы удовлетворяем запросы на возврат средств по следующим причинам:',
      'policy.refund.3.l1': '<strong>Недоступность приложения:</strong> из-за проблем с почтой или технических сбоев.',
      'policy.refund.3.l2': '<strong>Программные баги:</strong> хотя все продукты проходят тщательное тестирование перед выпуском, могут возникнуть непредвиденные ошибки.',
      'policy.refund.4.title': '4. Свяжитесь с нами',
      'policy.refund.4.p': 'Если вы считаете, что имеете право на возврат средств, свяжитесь с нами по адресу:',

      /* --- Поддержка --- */
      'policy.support.title': 'Поддержка',
      'policy.support.intro': 'Нужна помощь с ALFI? Мы здесь, чтобы поддержать вас. Вы можете связаться с нами по электронной почте или присоединиться к нашему сообществу.',
      'policy.support.email.title': 'Поддержка по электронной почте',
      'policy.support.email.p': 'По техническим вопросам, запросам по учетной записи или сообщениям об ошибках, пожалуйста, напишите нам по адресу:',
      'policy.support.community.title': 'Сообщество',
      'policy.support.community.p': 'Присоединяйтесь к нашему официальному сабреддиту для обсуждений и обновлений:',
      'policy.support.community.btn': 'Посетить сабреддит MSA'
    }
  };

  /* ---- Detect language ---- */
  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ru' || stored === 'en') return stored;

    var langs = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < langs.length; i++) {
      var l = langs[i].toLowerCase();
      if (l.startsWith('ru')) return 'ru';
    }
    return 'en';
  }

  /* ---- Apply translations ---- */
  function applyLang(lang) {
    var t = translations[lang] || translations.en;

    /* page title */
    if (t['page.title'] || t['app.page.title']) {
      // logic to pick the right title based on meta? 
      // For now just check if we are in index_app.html
      if (window.location.pathname.includes('index_app.html')) {
        document.title = t['app.page.title'];
      } else {
        document.title = t['page.title'];
      }
    }

    /* html lang attr */
    document.documentElement.lang = lang;

    /* all data-i18n elements */
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    /* data-i18n-html */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    htmlEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    /* Specific logic for toggle buttons if any */
  }

  /* ---- Init ---- */
  var currentLang = detectLang();
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);
  });

  /* expose for manual use */
  window.alfiI18n = { apply: applyLang, detect: detectLang };
})();
