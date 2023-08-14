const slidesContainer = document.getElementById("photos");
const nextButton = document.getElementById("next");
const width = slidesContainer.offsetWidth;
const widthImages = document.querySelector(".slide").offsetWidth;
const numberSlides = width > 650 ? (width > 1000 ? 1 : 2) : 3;
let count = 0;

nextButton.addEventListener("click", () => {
  if (count <= numberSlides) {
    slidesContainer.scrollLeft += widthImages;
    count++;
  } else {
    slidesContainer.scrollLeft = 0;
    count = 0;
  }
});

console.log(nextButton);
