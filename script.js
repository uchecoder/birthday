const imageContainerEl = document.querySelector(".image-container")

const prevEl = document.getElementById("prev")

const nextEl = document.getElementById("next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer)
    updateGallery();
});

nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer)
    updateGallery();
});

function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
   timer = setTimeout(()=> {
        x = x - 45
        updateGallery()
    }, 2000)
}

updateGallery()




const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("header");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});