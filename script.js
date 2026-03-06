const header = document.getElementById("header");
const darkToggle = document.getElementById("darkToggle");

// Navbar scroll effect
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Dark Mode
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Slider
const slides = document.getElementById("slides");
const images = slides.children;
const total = images.length;
let index = 0;

const dotsContainer = document.getElementById("dots");

for(let i=0;i<total;i++){
  const dot = document.createElement("span");
  dot.addEventListener("click", ()=>moveToSlide(i));
  dotsContainer.appendChild(dot);
}
updateDots();

function moveToSlide(i){
  index = i;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots(){
  [...dotsContainer.children].forEach(dot=>dot.classList.remove("active"));
  dotsContainer.children[index].classList.add("active");
}

document.querySelector(".next").onclick = ()=>{
  index = (index+1)%total;
  moveToSlide(index);
}

document.querySelector(".prev").onclick = ()=>{
  index = (index-1+total)%total;
  moveToSlide(index);
}

// Auto slide
setInterval(()=>{
  index = (index+1)%total;
  moveToSlide(index);
},4000);

// Scroll reveal
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// Loader
window.onload = ()=>{
  document.querySelector(".loader").style.display="none";
};