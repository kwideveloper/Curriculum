const languageSelected = 0|parseInt(localStorage.getItem("language"));

// Animating Language button
const language = document.getElementById("language");
const es = document.querySelector("#language .es");
const en = document.querySelector("#language .en");

language.addEventListener("mousemove", () => {
    language.style.transform = "translateX(0)";
})

language.addEventListener("mouseleave", () => {
    language.style.transform = "translateX(79px)";
})
//---

// Changing language on click

const changeLanguage = () => {
    
    // Fetch the Json
    fetch("./json/data.json")
    .then(response => response.json())
    .then(data => {
        
        let languageSelected = parseInt(localStorage.getItem("language"));

        // Variables
        const navParagraphs = document.querySelectorAll("nav a");
        const skillParagraph = document.querySelector(".skills h2");
        // ---
        
        if(languageSelected === 0){
            const {age,skills,name,home,about,proyects} = data.language[languageSelected];

            //Nav Paragraphs
            navParagraphs[0].innerHTML = home;
            navParagraphs[1].innerHTML = about;
            navParagraphs[2].innerHTML = proyects;

            // Card/Image Paragraphs
            paragraphs[0].childNodes[1].innerHTML = name;
            paragraphs[1].childNodes[1].innerHTML = age;
            paragraphs[2].innerHTML = "<span>Experiencie</span>: 3 Years";

            skillParagraph.style.fontSize = "32px";
            skillParagraph.innerHTML = skills;
            
            
        } else {
            const {age,skills,name,home,about,proyects} = data.language[languageSelected];
            
            //Nav Paragraphs
            navParagraphs[0].innerHTML = home;
            navParagraphs[1].innerHTML = about;
            navParagraphs[2].innerHTML = proyects;
            // Card/Image Paragraphs
            paragraphs[0].childNodes[1].innerHTML = name;
            paragraphs[1].childNodes[1].innerHTML = age;
            paragraphs[2].innerHTML = "<span>Experiencia</span>: 3 Años";

            skillParagraph.style.fontSize = "25px";
            skillParagraph.innerHTML = skills;
        }

    })
    //---

  

}

en.addEventListener("click", () => {

    en.classList.add("active");
    es.classList.remove("active");

    localStorage.setItem("language",0);
    changeLanguage(0);
    
}); 

es.addEventListener("click",() => {

    es.classList.add("active");
    en.classList.remove("active");

    localStorage.setItem("language",1);
    changeLanguage(1);
}); 

//---

window.onload = () => {
    let languageSelected = parseInt(localStorage.getItem("language"));
    if(languageSelected === 0) {
        en.classList.add("active");
    } else {
        es.classList.add("active");
    }

    changeLanguage()

}