document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("hide");
        content.classList.toggle("shifted");
    });
    // Get the modal elements
const modalHome = document.getElementById("modal-home");
const modalAbout = document.getElementById("modal-about");
const modalHow = document.getElementById("modal-how");

// Get the button/link that opens the modal
const homeLink = document.querySelector('#sidebar a[href="#home"]');
const aboutLink = document.querySelector('#sidebar a[href="#about"]');
const HowLink = document.querySelector('#sidebar a[href="#how"]');

// Get the <span> element that closes the modal
const closeBtns = document.querySelectorAll(".modal .close");

// Function to open modal
function openModal(modal) {
    modal.style.display = "block";
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Event listeners for opening modals
homeLink.addEventListener("click", function(event) {
    event.preventDefault();
    openModal(modalHome);
});

aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
    openModal(modalAbout);
});

HowLink.addEventListener("click", function(event) {
    event.preventDefault();
    openModal(modalHow);
});

// Event listeners for closing modals
closeBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const modal = btn.closest(".modal");
        closeModal(modal);
    });
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target);
    }
});
});