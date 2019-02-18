var sideDots = document.querySelector(".side-dots").querySelectorAll("p");
var sideDotsArray = Array.from(sideDots);
var sections = document.querySelector("main").children;
var images = document.querySelectorAll("img");
var id = 0;
sideDotsArray[0].focus();
var body = document.querySelector("body");
body.addEventListener("keydown", trapTabKey);

function trapTabKey(e) {
  if (e.keyCode === 9) {
    if (document.activeElement == sideDotsArray[3]) {
      if (e.shiftKey) {
        e.preventDefault();
        sideDotsArray[2].focus();
      } else {
        e.preventDefault();
        sideDotsArray[0].focus();
      }
    } else if (document.activeElement == sideDotsArray[0]) {
      if (e.shiftKey) {
        e.preventDefault();
        sideDotsArray[3].focus();
      }
    }
  }
}

for (let i = 0; i < sideDotsArray.length; i++) {
  sideDotsArray[i].addEventListener("focus", e => {
    var active = document.getElementsByClassName("active");
    Array.from(active).forEach(a => {
      a.textContent = "";
      a.classList.remove("active");
    });
    Array.from(sections).forEach(section => {
      if (section.style.display == "block") {
        section.style.display = "none";
        id = section.getAttribute("id");
        section.className = "";
      }
    });
    Array.from(images).forEach(img => {
      if (img.style.display == "block") {
        img.style.display = "none";
        img.className = "";
      }
    });
    if (sections[i].getAttribute("id") > id) {
      sections[i].style.display = "block";
      images[i].style.display = "block";
      sections[i].classList.add("show-down");
      images[i].classList.add("show-down");
    } else {
      sections[i].style.display = "block";
      images[i].style.display = "block";
      sections[i].classList.add("show-up");
      images[i].classList.add("show-up");
    }
    sideDotsArray[i].textContent = i + 1;
    sideDotsArray[i].classList.add("active");
  });
}

var submit = document.getElementById("submit");
var overlay = document.getElementById("overlay");

submit.addEventListener("click", () => {
  overlay.style.display = "block";
  overlay.classList.add("fadein");
});

var closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
  location.reload();
});
