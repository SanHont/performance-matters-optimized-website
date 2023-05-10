let darkToggle = document.getElementById("toggle");
let isLight = localStorage.getItem("isLight") === "true";

if (isLight) {
  document.body.classList.add("light");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("isLight", document.body.classList.contains("light"));
});
