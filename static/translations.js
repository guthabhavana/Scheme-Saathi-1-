const translations = {
    en: {
        welcome: "Welcome",
        yourDegree: "Your degree:",
        matchingScholarships: "Scholarships matching your details",
        searchPlaceholder: "🔍 Search scholarships by name...",
        allCategories: "All Categories",
        education: "Education",
        agriculture: "Agriculture",
        women: "Women",
        other: "Other",
        officialWebsite: "Visit Official Website",
        noMatches: "No matching schemes found",
        backHome: "← Back to Home"
    },

    te: {
        welcome: "స్వాగతం",
        yourDegree: "మీ విద్యార్హత:",
        matchingScholarships: "మీ వివరాలకు సరిపోయే స్కాలర్‌షిప్‌లు",
        searchPlaceholder: "🔍 స్కాలర్‌షిప్‌ల కోసం వెతకండి...",
        allCategories: "అన్ని వర్గాలు",
        education: "విద్య",
        agriculture: "వ్యవసాయం",
        women: "మహిళలు",
        other: "ఇతర",
        officialWebsite: "అధికారిక వెబ్‌సైట్‌ను సందర్శించండి",
        noMatches: "సరిపోలే పథకాలు కనుగొనబడలేదు",
        backHome: "← హోమ్‌కు తిరిగి వెళ్లండి"
    },

    hi: {
        welcome: "स्वागत है",
        yourDegree: "आपकी शैक्षणिक योग्यता:",
        matchingScholarships: "आपकी जानकारी के अनुसार छात्रवृत्तियाँ",
        searchPlaceholder: "🔍 छात्रवृत्तियाँ खोजें...",
        allCategories: "सभी श्रेणियाँ",
        education: "शिक्षा",
        agriculture: "कृषि",
        women: "महिलाएँ",
        other: "अन्य",
        officialWebsite: "आधिकारिक वेबसाइट देखें",
        noMatches: "कोई मिलती-जुलती योजना नहीं मिली",
        backHome: "← होम पर वापस जाएँ"
    }
};
function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en";
    dropdown.value = translations[savedLanguage] ? savedLanguage : "en";
    setLanguage(dropdown.value);

    dropdown.addEventListener("change", () => {
        setLanguage(dropdown.value);
    });
});