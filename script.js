<script>
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for product display
const modal = document.createElement("div");
modal.id = "productModal";
modal.style.cssText = "display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.9);";
document.body.appendChild(modal);

const modalImg = document.createElement("img");
modalImg.id = "modal-img";
modalImg.style.cssText = "margin:auto;display:block;width:80%;max-width:700px;";
modal.appendChild(modalImg);

const span = document.createElement("span");
span.className = "close";
span.innerHTML = "&times;";
span.style.cssText = "position:absolute;top:15px;right:35px;color:white;font-size:40px;font-weight:bold;cursor:pointer;";
modal.appendChild(span);

span.onclick = function() { 
    modal.style.display = "none";
};

document.querySelectorAll(".product img").forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Parallax effect for a background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    document.querySelector('.parallax').style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
});
</script>

