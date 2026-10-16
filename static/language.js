const translations = {
  en: {
    home: "Home",
    findSchemes: "Find Schemes",
    features: "Features",
    guide: "Your Guide to Opportunities",
    heading: "Discover Government Schemes Made Easy",
    results: "Scholarship Results"
  },

  te: {
    home: "హోమ్",
    findSchemes: "పథకాలను వెతకండి",
    features: "ఫీచర్లు",
    guide: "అవకాశాలకు మీ మార్గదర్శి",
    heading: "ప్రభుత్వ పథకాలను సులభంగా కనుగొనండి",
    results: "స్కాలర్‌షిప్ ఫలితాలు"
  },

  hi: {
    home: "होम",
    findSchemes: "योजनाएँ खोजें",
    features: "विशेषताएँ",
    guide: "अवसरों के लिए आपका मार्गदर्शक",
    heading: "सरकारी योजनाएँ आसानी से खोजें",
    results: "छात्रवृत्ति परिणाम"
  }
};

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });
}

// Restore the saved language on every page.
const savedLanguage =
  localStorage.getItem("Language") || "en";

applyLanguage(savedLanguage);

// Only the homepage needs the dropdown.
const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  languageSelect.value = savedLanguage;

  languageSelect.addEventListener("change", function () {
    localStorage.setItem("Language", this.value);
    applyLanguage(this.value);
  });
}