const zoomCat = document.querySelector("#cat");
const zoomCafe = document.querySelector("#cafe");
const zoomCute = document.querySelector("#cute");

function zoomIn(event) {
  event.target.style.transform = "scale(1.2)";
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.5s";
}

zoomCat.addEventListener("mouseenter", zoomIn);
zoomCat.addEventListener("mouseleave", zoomOut);

zoomCafe.addEventListener("mouseenter", zoomIn);
zoomCafe.addEventListener("mouseleave", zoomOut);

zoomCute.addEventListener("mouseenter", zoomIn);
zoomCute.addEventListener("mouseleave", zoomOut);
