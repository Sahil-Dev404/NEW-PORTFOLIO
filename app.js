//acessing elements by their id and classes 

let Btn1= document.querySelector("#instagram");
let Btn2= document.querySelector("#linkdein");
let Btn3= document.querySelector("#git");
let Btn4= document.querySelector("#resume");
let game= document.querySelector("#game");
let livegame= document.querySelector("#livegame");
let basecode= document.querySelector("#basecode");
let liveport= document.querySelector("#liveport");

Btn1.innerHTML = '<i class="fab fa-instagram fa-2x"></i>'
Btn2.innerHTML = '<i class="fab fa-linkedin fa-2x"></i>'
Btn3.innerHTML = '<i class="fab fa-github fa-2x"></i>'

Btn1.addEventListener("click",()=>{
    window.open("https://www.instagram.com/sahil._.9310/");
})

Btn2.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/sahil-saini-a47b40324");
})

Btn3.addEventListener("click",()=>{
    window.open("https://github.com/Sahil-Dev404");
})

Btn4.addEventListener("click",()=>{
    window.open("resume/resume.pdf","_blank");
})

game.addEventListener("click",()=>{
    window.open("https://github.com/Sahil-Dev404/TIC-TAC-TOE-Game");
})

livegame.addEventListener("click",()=>{
    window.open("https://sahil-dev404.github.io/TIC-TAC-TOE-Game/");
})

basecode.addEventListener("click",()=>{
    window.open("https://github.com/Sahil-Dev404/Portfolio");
})

liveport.addEventListener("click",()=>{
    window.open("https://sahil-dev404.github.io/Portfolio/");
})


const aboutBtn = document.querySelector('nav button:nth-child(1)');
const projectsBtn = document.querySelector('nav button:nth-child(2)');
const contactBtn = document.querySelector('nav button:nth-child(3)');
const resumeBtn = document.querySelector('nav button:nth-child(4)');

const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const resumeSection = document.getElementById('resume');

// Add smooth scroll behavior
aboutBtn.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

projectsBtn.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

contactBtn.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

resumeBtn.addEventListener("click",()=>{
    aboutSection.scrollIntoView({behavior: "smooth"});
});

//gasp 
gsap.from("#about", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out"
});
gsap.from("#projects", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%", // when section enters viewport
  },
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out"
});
const socialBtns = document.querySelectorAll("#instagram, #linkdein, #git");

socialBtns.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.2, duration: 0.3, ease: "bounce.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3 });
  });
});



// app.js
const heroBg = document.getElementById("hero-bg");

// Create 30 particles
for (let i = 0; i < 30; i++) {
    const dot = document.createElement("div");
    dot.classList.add("particle");
    heroBg.appendChild(dot);

    gsap.set(dot, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * 300, // height of hero section
        width: Math.random() * 8 + 4,
        height: Math.random() * 8 + 4,
        backgroundColor: "#00bfff",
        borderRadius: "50%",
        position: "absolute",
        opacity: Math.random() * 0.5 + 0.3,
    });

    gsap.to(dot, {
        y: "+=" + (Math.random() * 200 + 100),
        x: "+=" + (Math.random() * 200 - 100),
        duration: Math.random() * 8 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}


const aboutBg = document.getElementById("about-bg");

// Create 20 particles
for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div");
    dot.classList.add("particle");
    aboutBg.appendChild(dot);
    const sectionHeight = aboutSection.offsetHeight;

    gsap.set(dot, {
        x: Math.random() * aboutSection.offsetWidth,  
        y: Math.random() * sectionHeight, 
        width: Math.random() * 6 + 3,
        height: Math.random() * 6 + 3,
        backgroundColor: "#0ff",
        borderRadius: "50%",
        position: "absolute",
        opacity: Math.random() * 0.4 + 0.2,
    });

    gsap.to(dot, {
        y: "+=" + (Math.random() * 150 + 50),
        x: "+=" + (Math.random() * 100 - 50),
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}
