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
    let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-slideIndex * 100}%)`;
}, 3000);

};

