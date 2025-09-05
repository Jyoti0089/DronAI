// Simple JS for interactivity (hover effect log)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    console.log(`${card.querySelector("h3").innerText} hovered!`);
  });
});
