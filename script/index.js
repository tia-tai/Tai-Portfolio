const text = "Tai Yu Lin.";
const speed = 250;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

const projectBtns = document.querySelectorAll(".project-btn");
const projectCards = document.querySelectorAll(".project-card");

projectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons and cards
    projectBtns.forEach((b) => b.classList.remove("active"));
    projectCards.forEach((card) => card.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Show corresponding project card
    const projectId = btn.getAttribute("data-project");
    const targetCard = document.getElementById(projectId);
    if (targetCard) {
      targetCard.classList.add("active");
    }
  });
});
