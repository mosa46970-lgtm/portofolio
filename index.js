const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

    nav.classList.toggle("active");

    menu.innerHTML=nav.classList.contains("active") ? "✖" : "☰";

}
const progress=document.querySelector(".progress");
const fill=document.querySelector(".fill");
const percent=document.querySelector(".percent");
const loader=document.getElementById("loader");

const circumference=314;

let value=0;

const timer=setInterval(()=>{

    value++;

    percent.innerHTML=value+"%";

    progress.style.strokeDashoffset=
    circumference-(circumference*value/100);

    fill.style.width=value+"%";

    if(value>=100){

        clearInterval(timer);

        setTimeout(()=>{

            loader.style.opacity="0";
            loader.style.transition="opacity .8s ease";

            setTimeout(()=>{
                loader.remove();
            },800);

        },300);

    }

},25);

const words = [

    "Front-End Developer",

    "UI Engineer",

    "Creative Developer",

    "Web Designer"

];

const typing = document.getElementById("typing");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if(letterIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    }else{

        typing.textContent = currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if(letterIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();
const dot = document.querySelector(".cursor-dot");
const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

const header = document.querySelector("header");

let scrollTicking = false;
let sectionBreaks = [300, 900, 1800, 2700];

function calcBreaks() {
    const sections = ["#about", "#skills", "#experience", "#projects"];
    const breaks = sections.map(sel => {
        const el = document.querySelector(sel);
        return el ? el.offsetTop - 100 : 99999;
    });
    sectionBreaks = breaks;
}

function updateHeader() {
    const y = window.scrollY;
    const [b1, b2, b3, b4] = sectionBreaks;

    if (y > b4) {
        header.className = "scrolled-4";
    } else if (y > b3) {
        header.className = "scrolled-3";
    } else if (y > b2) {
        header.className = "scrolled-2";
    } else if (y > b1) {
        header.className = "scrolled";
    } else {
        header.className = "";
    }

    scrollTicking = false;
}

window.addEventListener("load", () => {
    setTimeout(calcBreaks, 100);
});
window.addEventListener("resize", calcBreaks);

window.addEventListener("scroll", () => {
    if (!scrollTicking) {
        requestAnimationFrame(updateHeader);
        scrollTicking = true;
    }
});