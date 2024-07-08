const body = document.body;
const projectElements = document.querySelectorAll("project-cont");
const Home = document.querySelector(".Home");
const About = document.querySelector(".About");
const Service = document.querySelector(".Service");
const Project = document.querySelector(".Project");
const Contact = document.querySelector(".Contact");
const LightMode = document.querySelector(".light");
const DarkMode = document.querySelector(".dark");
const MenuBar = document.querySelector(".menu");

const time = new Date();
if (time.getHours() < 19 && time.getHours() >= 7) {
  body.classList.add("light");
  let Mode = localStorage.setItem("mode", "True");
} else {
  body.classList.remove("light");
  let Mode = localStorage.setItem("mode", "False");
}
DarkMode.addEventListener("click", (e) => {
  e.preventDefault()
  body.classList.remove("light");
  localStorage.setItem("mode", "False");
  updateButtons();
});
LightMode.addEventListener("click", (e) => {
  e.preventDefault()
  body.classList.add("light");
  localStorage.setItem("mode", "True");
  updateButtons();
});
let Mode = localStorage.getItem("mode");
console.log(Mode);

const updateButtons = () => {
  const Mode = localStorage.getItem("mode");
  console.log("Current mode:", Mode);
  if (Mode === "True") {
    DarkMode.classList.remove("off");
    LightMode.classList.add("off");
  } else if (Mode === "False") {
    DarkMode.classList.add("off");
    LightMode.classList.remove("off");
  }
};

updateButtons();

for (i = 0; i > projectElements.length; i++) {
  projectElements.querySelector("a").addEventListener("click", function () {
    window.location.href = this.getAttribute("href");
  });
}

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 0 && top < 813) {
    Home.classList.add("active");
    About.classList.remove("active");
    Service.classList.remove("active");
    Project.classList.remove("active");
    Contact.querySelector(".contact-btn").classList.remove("active");
  } else if (top >= 813 && top < 1626) {
    Home.classList.remove("active");
    About.classList.add("active");
    Service.classList.remove("active");
    Project.classList.remove("active");
    Contact.querySelector(".contact-btn").classList.remove("active");
  } else if (top >= 1626 && top < 2439) {
    Home.classList.remove("active");
    About.classList.remove("active");
    Service.classList.add("active");
    Project.classList.remove("active");
    Contact.querySelector(".contact-btn").classList.remove("active");
  } else if (top >= 2439 && top < 3252) {
    Home.classList.remove("active");
    About.classList.remove("active");
    Service.classList.remove("active");
    Project.classList.add("active");
    Contact.querySelector(".contact-btn").classList.remove("active");
  } else if (top >= 3252) {
    Home.classList.remove("active");
    About.classList.remove("active");
    Service.classList.remove("active");
    Project.classList.remove("active");
    Contact.querySelector(".contact-btn").classList.add("active");
  }
};
