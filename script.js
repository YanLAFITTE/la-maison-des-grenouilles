document.addEventListener("DOMContentLoaded", () => {
  const featuresContainer = document.querySelector(".features");
  const rearrangeButton = document.querySelector(".rearrange-button");
  const numberOfBoxes = 60;

  let featureBoxes = [];

  const audio1 = new Audio("audio/frogs.mp3");
  const audio2 = new Audio("audio/frog.mp3");

  function addBoxes(numberOfBoxes) {
    for (let i = 0; i < numberOfBoxes; i++) {
      const featureBox = document.createElement("div");
      featureBox.classList.add("feature-box");

      const image = document.createElement("img");
      image.src = "images/frog.png";
      image.alt = `Image ${i + 1}`;

      featureBox.appendChild(image);

      featureBox.style.animationDelay = `${i * 0.1}s`;

      const maxLeft = window.innerWidth;
      const maxTop = window.innerHeight;
      const randomLeft = Math.random() * maxLeft;
      const randomTop = Math.random() * maxTop;
      featureBox.style.left = `${randomLeft}px`;
      featureBox.style.top = `${randomTop}px`;

      document.body.appendChild(featureBox);
      featureBoxes.push(featureBox);
    }
  }

  function rearrangeBoxes() {
    featureBoxes.forEach((box, index) => {
      const newLeft = (index % 10) * 160 ;
      const newTop = Math.floor(index / 10) * 100 + 240;
      audio1.pause();
      setTimeout(() => {
        audio2.play();
        box.style.left = `${newLeft}px`;
        box.style.top = `${newTop}px`;
      }, index * 200);
    });
  }

  featuresContainer.addEventListener("click", () => {
    addBoxes(numberOfBoxes);
    audio1.currentTime = 40;
    audio1.play();
    featureBoxes.forEach((box, index) => {
      setTimeout(() => {
        if (index + 1 === numberOfBoxes) {
          rearrangeButton.style.visibility = "visible";
        }
      }, index * 100);
    });
  });

  rearrangeButton.addEventListener("click", () => {
    rearrangeBoxes();
  });
});
