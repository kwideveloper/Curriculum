
// Animating Language button
const language = document.getElementById("language");
const es = document.querySelector("#language .es");
const en = document.querySelector("#language .en");

language.addEventListener("mousemove", () => {
    language.style.transform = "translateX(0)";
})

language.addEventListener("mouseleave", () => {
    language.style.transform = "translateX(80px)";
})
//---

// Changing language on click

const changeLanguage = () => {
    
    const languageSelected = parseInt(localStorage.getItem("language")|0);
    // Fetch the Json
    fetch("./json/data.json")
    .then(response => response.json())
    .then(data => {

        // Variables
        const navParagraphs = document.querySelectorAll("nav a");
        const skillParagraph = document.querySelector(".skills h2");
        const aboutDiv = document.querySelector("#about");
        const aboutH2 = document.querySelector("#about h2");
        const aboutP1 = document.querySelector("#about div p");
        const aboutP2 = document.querySelector("#about div p:nth-of-type(2)"); 
        const aboutP3 = document.querySelector("#about div p:nth-of-type(3)"); 
        const aboutP4 = document.querySelector("#about div p:nth-of-type(4)"); 
        const aboutGoBack = document.querySelector("#about .go-back"); 
        const aboutDownload = document.querySelector("#about .download"); 
        const proyectsTitle = document.querySelector("#proyects .title");
        // ---
        
        // Function who writes the text
        const writeText = (languageSelected) => {

            const {nav,age,skills,name,about,experience,proyects} = data.language[languageSelected];

             //Nav Paragraphs
             navParagraphs[0].innerHTML = nav.home;
             navParagraphs[1].innerHTML = nav.about;
             navParagraphs[2].innerHTML = nav.proyects;
 
             // Card/Image Paragraphs
             paragraphs[0].childNodes[1].innerHTML = name;
             paragraphs[1].childNodes[1].innerHTML = age;
             paragraphs[2].innerHTML = experience;
 
             skillParagraph.style.fontSize = "32px";
             skillParagraph.innerHTML = skills;
 
             // About
             aboutH2.innerHTML = about.h2;
             aboutP1.innerHTML = about.p1;
             aboutP2.innerHTML = about.p2;
             aboutP3.innerHTML = about.p3
             aboutP4.innerHTML = about.see_certificates;
             aboutGoBack.innerHTML = about.go_back;
             aboutDownload.innerHTML = about.download_certificate;

            //  Proyects
             proyectsTitle.innerHTML = proyects.title

        }
        
        if(languageSelected === 0){
            writeText(0);
        } else {
            writeText(1);
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


let languageSelected = parseInt(localStorage.getItem("language")|0);
if(languageSelected === 0) {
    en.classList.add("active");
} else {
    es.classList.add("active");
}

changeLanguage();

