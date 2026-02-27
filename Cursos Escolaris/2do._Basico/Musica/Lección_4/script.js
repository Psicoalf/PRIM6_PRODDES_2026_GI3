let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.querySelector('.progress-bar');
const totalSlides = slides.length;

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev-exit');
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index < currentSlide) {
            slide.classList.add('prev-exit');
        }
    });

    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;

    // Hide/show arrows at start and end
    document.querySelector('.nav-arrow.prev').style.display = currentSlide === 0 ? 'none' : 'flex';
    document.querySelector('.nav-arrow.next').style.display = currentSlide === totalSlides - 1 ? 'none' : 'flex';
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

// Activity logic
function checkMultipleChoice(btn, isCorrect, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    const options = btn.parentElement.querySelectorAll('.option-btn');

    // Reset options
    options.forEach(opt => opt.classList.remove('correct', 'incorrect'));

    if (isCorrect) {
        btn.classList.add('correct');
        feedback.innerText = "¡Excelente! El Romanticismo se centra en la libertad y las emociones.";
        feedback.className = "feedback success";
    } else {
        btn.classList.add('incorrect');
        feedback.innerText = "No es correcto. El siglo XIX estuvo marcado por la explosión de sentimientos del Romanticismo. ¡Inténtalo de nuevo!";
        feedback.className = "feedback error";
    }
}

function checkOrder(step, totalSteps, feedbackId) {
    const feedback = document.getElementById(feedbackId);

    if (step === 1) {
        feedback.innerText = "¡Muy bien! Chopin fue el 'Poeta del Piano'.";
        feedback.className = "feedback success";
    } else if (step === 2) {
        feedback.innerText = "¡Correcto! Verdi fue el maestro de la Ópera Italiana.";
        feedback.className = "feedback success";
    } else if (step === 3) {
        feedback.innerText = "¡Exacto! Tchaikovsky cerró el siglo con el gran ballet ruso.";
        feedback.className = "feedback success";
    }
}

function checkTandF(isCorrect, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    if (isCorrect) {
        feedback.innerText = "¡Correcto! La orquesta romántica creció enormemente para expresar grandes emociones.";
        feedback.className = "feedback success";
    } else {
        feedback.innerText = "Incorrecto. De hecho, los artistas románticos valoraban la originalidad personal sobre las reglas estrictas. ¡Prueba otra vez!";
        feedback.className = "feedback error";
    }
}

function showInfo(pointId, text) {
    const infoBox = document.getElementById('map-info-box');
    infoBox.innerText = text;
    infoBox.style.display = 'block';

    // Highlight active point
    document.querySelectorAll('.map-point').forEach(p => p.style.backgroundColor = 'var(--primary-red)');
    document.getElementById(pointId).style.backgroundColor = 'var(--primary-yellow)';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Initialize
updateSlide();
