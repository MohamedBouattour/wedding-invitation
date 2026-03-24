const translations = {
  ar: {
    dir: "rtl",
    header: "الحمد لله والصلاة والسلام",
    subHeader: "بعد تقديم أحر التهاني،",
    invitation:
      "يتشرف السيد جمال بوعتور وحرمه السيدة أميرة اللوز بدعوتكم لحضور حفل زفاف ابنهما",
    groom: "محمد",
    with: "مع الآنسة",
    bride: "عبير دريرة",
    details:
      "وذلك بعون الله يوم السبت 28 مارس 2026 على الساعة الثالثة بعد الزوال، بقاعة الأفراح شهرزاد، طريق قرمدة كلم 4.5 - صفاقس.",
    footer: "نتمنى لكم مزيداً من الأفراح والمسرات. دامت الأفراح.",
    countdownTitle: "العد التنازلي للحفل",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثوانٍ",
    location: "قاعة الأفراح شهرزاد - صفاقس",
  },
  en: {
    dir: "ltr",
    header: "Praise be to God, prayers and peace be upon Him.",
    subHeader: "With our warmest greetings,",
    invitation:
      "Mr. Jamel Bouattour and his wife Mrs. Amira Ellouze have the honor of inviting you to the wedding ceremony of their son",
    groom: "Mohamed",
    with: "with Miss",
    bride: "Abir Drira",
    details:
      "By the grace of God, on Saturday, March 28, 2026, at 3:00 PM (15h00), at the Shahrazad Wedding Hall, Gremda Road Km 4.5 - Sfax.",
    footer:
      "Wishing you countless joys and happiness. May the celebrations continue.",
    countdownTitle: "COMMENCING IN",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    location: "Shahrazad Wedding Hall - Sfax",
  },
  fr: {
    dir: "ltr",
    header: "Louanges, prières et paix.",
    subHeader: "Après l'expression de nos salutations les plus chaleureuses,",
    invitation:
      "Monsieur Jamel Bouattour et son épouse Madame Amira Ellouze ont l'honneur de vous inviter à assister à la cérémonie de mariage de leur fils",
    groom: "Mohamed",
    with: "avec Mademoiselle",
    bride: "Abir Drira",
    details:
      "Et ce, par la grâce de Dieu, le samedi 28 mars 2026 à 15h00 (3 heures de l'après-midi), à la salle des fêtes Shahrazad, Route de Gremda Km 4.5 - Sfax.",
    footer:
      "En vous souhaitant à votre tour joies et bonheurs. Que la joie soit constante.",
    countdownTitle: "LE COMPTE À REBOURS",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    location: "Salle des fêtes Shahrazad - Sfax",
  },
};

let currentLang = "ar";

function switchLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.documentElement.lang = lang;
  document.body.dir = t.dir;

  // Update content
  document.getElementById("header").innerText = t.header;
  document.getElementById("sub-header").innerText = t.subHeader;
  document.getElementById("invitation-text").innerText = t.invitation;
  document.getElementById("groom-name").innerText = t.groom;
  document.getElementById("with-text").innerText = t.with;
  document.getElementById("bride-name").innerText = t.bride;
  document.getElementById("details-text").innerText = t.details;
  document.getElementById("footer-text").innerText = t.footer;
  document.getElementById("countdown-title").innerText = t.countdownTitle;
  document.getElementById("location-text").innerText = t.location;

  // Update timer labels
  document.getElementById("label-days").innerText = t.days;
  document.getElementById("label-hours").innerText = t.hours;
  document.getElementById("label-minutes").innerText = t.minutes;
  document.getElementById("label-seconds").innerText = t.seconds;

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// Countdown Timer Logic
const targetDate = new Date("2026-03-28T15:00:00+01:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown-timer").innerHTML =
      "<h3>Just Married!</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Event listeners for buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  // Initial switch
  switchLanguage("ar");

  // Start timer
  setInterval(updateTimer, 1000);
  updateTimer();
});
