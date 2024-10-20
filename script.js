// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add modal functionality (if needed later)
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

