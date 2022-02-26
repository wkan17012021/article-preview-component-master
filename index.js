const toggleBtn = document.querySelector(".share-icon");
const shareLinks = document.querySelector(".share-links");

// set the parent element node of the div containing the hidden social media content, to toggle to active
toggleBtn.addEventListener("click", function () {
  shareLinks.parentElement.classList.toggle("active");
});
