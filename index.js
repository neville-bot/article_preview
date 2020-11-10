let activeSocial = document.querySelector(".active-social-container");

function reverseState() {
  if (activeSocial.style.display === "none") {
    activeSocial.style.display = "flex";
  } else {
    activeSocial.style.display = "none";
  }
}
