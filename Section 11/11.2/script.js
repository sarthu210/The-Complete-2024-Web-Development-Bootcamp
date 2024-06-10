// Get references to the info button and the popup
const infoButton = document.getElementById("info-button");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

// Function to open the popup
infoButton.addEventListener("click", () => {
    popup.style.display = "block";
});

// Function to close the popup
closeButton.addEventListener("click", () => {
    popup.style.display = "none";
});
