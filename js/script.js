console.log('Welcome to Brigadier Sanskrit School Website!');
let currentIndex = 0;
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;
let autoSlideInterval; // Store interval reference

function showSlide(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Start auto slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000);
}

// Stop auto slide when user interacts
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Add event listeners to buttons
document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
});
document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
});

// Show first image initially and start auto-slide
showSlide(currentIndex);
startAutoSlide();

function toggleMenu() {
    document.getElementById("sideNav").classList.toggle("open");
}
