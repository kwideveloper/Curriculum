// Selectors
const language = document.getElementById("language");
const es = document.querySelector("#language .es");
const en = document.querySelector("#language .en");

// Animating Language button
language.addEventListener("mousemove", () => {
    language.style.transform = "translateX(0)";
});

language.addEventListener("mouseleave", () => {
    language.style.transform = "translateX(80px)";
});

// Language data object (should be defined elsewhere)
const languageData = {
    0: { 
        nav: { home: "Home", about: "About", proyects: "Projects" },
        age: "Age",
        skills: "Skills",
        name: "Name",
        about: { h2: "About Me", p1: "Text 1", p2: "Text 2", p3: "Text 3", see_certificates: "Certificates", go_back: "Back", download_certificate: "Download" },
        experience: "Experience",
        proyects: { title: "My Projects" }
    },
    1: { 
        nav: { home: "Inicio", about: "Acerca", proyects: "Proyectos" },
        age: "Edad",
        skills: "Habilidades",
        name: "Nombre",
        about: { h2: "Sobre Mí", p1: "Texto 1", p2: "Texto 2", p3: "Texto 3", see_certificates: "Certificados", go_back: "Volver", download_certificate: "Descargar" },
        experience: "Experiencia",
        proyects: { title: "Mis Proyectos" }
    }
};

// Get saved language
let languageSelected = parseInt(localStorage.getItem("language")) || 0;

// Function to update text content
const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);

    const data = languageData[lang];

    // Elements
    const navParagraphs = document.querySelectorAll("nav a");
    const skillParagraph = document.querySelector(".skills h2");
    const aboutH2 = document.querySelector("#about h2");
    const aboutParagraphs = document.querySelectorAll("#about div p");
    const aboutGoBack = document.querySelector("#about .go-back");
    const aboutDownload = document.querySelector("#about .download");
    const proyectsTitle = document.querySelector("#proyects .title");
    const paragraphs = document.querySelectorAll(".some-selector"); //

    // Update text content
    navParagraphs[0].textContent = data.nav.home;
    navParagraphs[1].textContent = data.nav.about;
    navParagraphs[2].textContent = data.nav.proyects;

    paragraphs[0].childNodes[1].textContent = data.name;
    paragraphs[1].childNodes[1].textContent = data.age;
    paragraphs[2].textContent = data.experience;

    skillParagraph.style.fontSize = "32px";
    skillParagraph.textContent = data.skills;

    aboutH2.textContent = data.about.h2;
    aboutParagraphs[0].textContent = data.about.p1;
    aboutParagraphs[1].textContent = data.about.p2;
    aboutParagraphs[2].textContent = data.about.p3;
    aboutParagraphs[3].textContent = data.about.see_certificates;
    aboutGoBack.textContent = data.about.go_back;
    aboutDownload.textContent = data.about.download_certificate;

    proyectsTitle.textContent = data.proyects.title;

    // Toggle active class
    es.classList.toggle("active", lang === 1);
    en.classList.toggle("active", lang === 0);
};

// Event listeners for language switch
document.querySelectorAll("#language .es, #language .en").forEach(btn => {
    btn.addEventListener("click", () => {
        changeLanguage(parseInt(btn.dataset.lang));
    });
});

// Initialize language on load
changeLanguage(languageSelected);