// Add interactivity for dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("click", function() {
        var dropdownContent = this.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("show");
    });
});

