const icoContainer = document.querySelector(".react-icon");
const reactIco = document.querySelector("nav a i");


// Animating React icon on hover

var value = 0;
var interval;

const functionInterval = () => {

    interval = setInterval(() => {
        reactIco.style.transform = `rotate(${value}deg)`;
        value++;
    },0)
    

}

icoContainer.addEventListener("mouseover", functionInterval);
icoContainer.addEventListener("mouseout", () => {clearInterval(interval)});
//---

// Adding 3D effect to the home 
const home = document.getElementById("home");
const selfCard = document.getElementById("self-card");

home.addEventListener("mousemove", (e) => {

    const xAxis = (window.innerWidth/2 - e.screenX) / 10;
    const yAxis = (window.innerHeight/2 - e.screenY) / 10;

    selfCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

})
//---

// On mouse In & mouse Out
const paragraphs = document.querySelectorAll("#self-card p");

home.addEventListener("mouseenter", () => {

    selfCard.style.transition = "none";
    selfCard.style.background = "linear-gradient(45deg, transparent, orange)";
    selfCard.classList.add("box-3d");
    
    paragraphs.forEach((paragraph,i) => {
        paragraph.style.transform = "translateZ(50px)";
    })
    
})

home.addEventListener("mouseleave", () => {

    selfCard.style.transform = "translateX(0) translateY(0)";
    
    selfCard.style.transition = "all .5s ease-in-out";
    selfCard.style.background = "linear-gradient(45deg, transparent, red)";
    selfCard.classList.remove("box-3d");


    paragraphs.forEach((paragraph,i) => {
        paragraph.style.transform = "translateZ(0px)";
    })
})
//---




