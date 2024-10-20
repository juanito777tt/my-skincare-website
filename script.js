// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Product Modal Popup
const products = document.querySelectorAll('.product');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

products.forEach((product, index) => {
    product.addEventListener('click', function () {
        const productTitle = product.querySelector('h3').innerText;
        const productImageSrc = product.querySelector('img').src;

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${productImageSrc}" alt="${productTitle}">
                <h3>${productTitle}</h3>
                <p>More information about ${productTitle}...</p>
            </div>
        `;
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('close') || e.target === modal) {
        modal.style.display = 'none';
    }
});

// Carousel Slider for Hero Section
let currentSlide = 0;
const slides = [
    'images/nature-background.jpg',
    'images/cosrx-advanced-snail-92-all-in-one-cream.jpg',
    'images/somebymi-aha-bha-pha-30-days-cream.jpg'
];
const hero = document.querySelector('.hero');

function showSlide(slideIndex) {
    hero.style.backgroundImage = `url(${slides[slideIndex]})`;
}

setInterval(function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);  // Change slide every 5 seconds

// Initial Slide Display
showSlide(currentSlide);

// Console Feedback for Debugging
console.log('JavaScript Loaded Successfully');
