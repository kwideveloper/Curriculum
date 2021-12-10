// Initializing AOS
AOS.init();
// ---


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
const paragraphs = document.querySelectorAll("#self-card>p");
const description = document.querySelector(".skills");
const selfImage = document.querySelector("#self-card img");
const skills = document.querySelector(".skills h2");
const skillsParagraphs = document.querySelectorAll(".skills .skill");

home.addEventListener("mousemove", (e) => {

    const xAxis = (window.innerWidth/2 - e.screenX) / 25;
    const yAxis = (window.innerHeight/2 - e.screenY) / 25;
    
    selfCard.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg) translateX(-50%) translateZ(300px)`;
    description.classList.add("skills-description");

    
})
//---

// On mouse In & mouse Out

// Mouse In
home.addEventListener("mouseenter", () => {
    
    // Timeout To leave the card open
    setTimeout(() =>{
        
        selfCard.style.transition = "none";
        selfCard.classList.add("self-card-hover");

        selfImage.style.borderTopRightRadius = "0";
        selfImage.style.borderBottomRightRadius = "0";
        selfCard.style.borderTopRightRadius = "0";
        selfCard.style.borderBottomRightRadius = "0";

        skills.style.transform = "translateZ(80px)";
        
        paragraphs.forEach((paragraph,i) => {

            setTimeout(() =>{
                paragraph.style.transform = "translateZ(50px)"; 
                
                if(i===1) {
                    paragraph.style.transform = "translateZ(40px)"; 
                }

                if(i===2) {
                    executeParagraphAnimation();
                }
            },`${i}00`);

            const executeParagraphAnimation = () => {
                setTimeout(() =>{
                    paragraph.style.animation = "bouncing .5s ease-in-out infinite alternate";
                },700);
            }

        })

        skillsParagraphs.forEach((paragraph,i) => {

            setTimeout(() =>{
                paragraph.style.transform = "translateZ(50px)"; 
            },`${i}00`)
        })

        

    },700);
    //---

})

// Mouse Out
home.addEventListener("mouseleave", () => {

    selfCard.style.transition = "all .7s ease-in-out";
    selfCard.classList.remove("self-card-hover");

    selfImage.style.borderTopRightRadius = "10px";
    selfImage.style.borderBottomRightRadius = "10px";
    selfCard.style.borderTopRightRadius = "10px";
    selfCard.style.borderBottomRightRadius = "10px";

    skills.style.transform = "translateZ(0)";
    
    paragraphs.forEach((paragraph,i) => {
        
        if(i === 1) {
            paragraph.style.borderBottomLeftRadius = "10px";
        } 
        
        if(i === 2){
            paragraph.style.borderTopRightRadius = "10px";
            paragraph.style.animation = "none";
        } 
        
        paragraphs.forEach((paragraph,i) => {
            setTimeout(() =>{
                paragraph.style.transform = "translateZ(0px)";
            },`${i}00`);
        })
        
    })

    skillsParagraphs.forEach((paragraph,i) => {
        paragraph.style.transform = "translateZ(10px)"; 
    })

    setTimeout(() => {
        selfCard.style.transform = "translateX(0) translateY(0) translateZ(300px)";
        description.classList.remove("skills-description");  
    }, 700);

    skillsParagraphs.forEach((paragraph) => {
        paragraph.style.transform = "translateZ(10px)"; 
    })


})
//---




// Creating custom cursor
const cursor = document.createElement("div");
cursor.setAttribute("id","cursor");

const point = document.createElement("div");
point.classList.add("point");

cursor.appendChild(point);

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
})

document.addEventListener("click", () => {
    cursor.classList.add("click");
    
    setTimeout(() =>{
        cursor.classList.remove("click");
    },200);
    
})
// ---



// Intersection observer for the navbar
    // FUNCTION
    const observerFunction = (observer) => {

        const navItems = document.querySelectorAll("nav a");

        observer.forEach((element) => {

            const {id} = element.target
            const {isIntersecting} = element
            // console.log(element.isIntersecting)
            const removeClass = () => {
                navItems.forEach(e => {
                    e.classList.remove("nav-active");
                })
            }
            
            if(isIntersecting && id === "home") {
                removeClass();
                navItems[0].classList.add("nav-active");
            } else if(isIntersecting && id === "about") {
                removeClass();
                navItems[1].classList.add("nav-active");
            } else if(isIntersecting && id === "proyects") {
                removeClass();
                navItems[2].classList.add("nav-active");
            } 

          
        })
      
    }
    
    // OBSERVER
    const observer = new IntersectionObserver(observerFunction,{
        root: null,
        rootMargin: "0px",
        threshold: .7
    })

    observer.observe(document.getElementById("home"));
    observer.observe(document.getElementById("about"));
    observer.observe(document.getElementById("proyects"));
//---

// Certificate animation
const about = document.querySelector("#about div:first-of-type");
const certificate = document.querySelector("#about .certificates");
const seeCertificates = document.querySelector("#about .see-certificates");
const hiddeCertificates = document.querySelector("#about .go-back");

seeCertificates.addEventListener("click", () => {
    certificate.style.opacity = "1";
    certificate.style.pointerEvents = "initial";
    about.style.opacity = 0;
   
})

hiddeCertificates.addEventListener("click", () => {
    certificate.style.opacity = "0";
    certificate.style.pointerEvents = "none";
    about.style.opacity = 1;
})
// ---