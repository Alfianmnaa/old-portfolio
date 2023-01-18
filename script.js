// active navbar
var nav = document.getElementById("#nav-link");

if (nav) {
  nav.addEventListener("click", () => {
    nav.addClass("active");
  });
}
// paralax
let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let btncv = document.getElementById("btn-cv");
let rocks = document.getElementById("rocks");
let forest = document.getElementById("forest");
let water = document.getElementById("water");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.top = 50 + value * -0.5 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * 2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -5 + "px";
  btncv.style.marginTop = value * 1.5 + "px";
  rocks.style.top = value * -0.13 + "px";
  forest.style.top = value * 0.26 + "px";
});

// typing animation
var typed = new Typed(".typing", {
  strings: [" ", "Fullstack Developer", " ", "Web Designer", " "],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
});

// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbzce1zetXXQi-s_2q4Q0x99ni_DSkYp5jNGJ3I-njvVfuYW_CdXdDD_odkjpN1hMOGndQ/exec";
const form = document.forms["portfolio-contact"];
const btnKirim = document.querySelector(".btnkirim");
const btnLoading = document.querySelector(".btnloading");
const myAlert = document.querySelector(".myalert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   when submit clicked
  // add btn load remove btn kirim
  btnKirim.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // shows alert
      myAlert.classList.toggle("d-none");
      // reset text after success
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
