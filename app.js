const slides = document.querySelectorAll('.slide');
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
    clearActiveClasses();
});

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    });
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}
