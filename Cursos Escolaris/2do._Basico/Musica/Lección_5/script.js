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

    // Visibilidad de flechas
    document.querySelector('.nav-arrow.prev').style.visibility = currentSlide === 0 ? 'hidden' : 'visible';
    document.querySelector('.nav-arrow.next').style.visibility = currentSlide === totalSlides - 1 ? 'hidden' : 'visible';
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

// Lógica de Actividades
function checkMultipleChoice(btn, isCorrect, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    const options = btn.parentElement.querySelectorAll('.option-btn');

    options.forEach(opt => opt.classList.remove('correct', 'incorrect'));

    if (isCorrect) {
        btn.classList.add('correct');
        feedback.innerText = "¡Correcto! La música de cámara es íntima y no requiere director.";
        feedback.className = "feedback success";
    } else {
        btn.classList.add('incorrect');
        feedback.innerText = "Incorrecto. Recuerda que es para grupos pequeños. ¡Inténtalo de nuevo!";
        feedback.className = "feedback error";
    }
}

function checkEnsemble(type, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    if (type === 'duo') {
        feedback.innerText = "¡Bien! Un Dúo son 2 músicos.";
        feedback.className = "feedback success";
    } else if (type === 'trio') {
        feedback.innerText = "¡Excelente! Un Trío son 3 músicos.";
        feedback.className = "feedback success";
    } else if (type === 'cuarteto') {
        feedback.innerText = "¡Perfecto! Un Cuarteto son 4 músicos.";
        feedback.className = "feedback success";
    }
}

function checkTandF(isCorrect, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    if (isCorrect) {
        feedback.innerText = "¡Exacto! El Cuarteto de Cuerdas es el rey de la Música de Cámara.";
        feedback.className = "feedback success";
    } else {
        feedback.innerText = "No es correcto. Históricamente, estas obras se tocaban en salones privados muy elegantes. ¡Prueba otra vez!";
        feedback.className = "feedback error";
    }
}

function showInfo(pointId, text) {
    const infoBox = document.getElementById('map-info-box');
    infoBox.innerText = text;
    infoBox.style.display = 'block';

    document.querySelectorAll('.map-point').forEach(p => p.style.backgroundColor = 'var(--primary-red)');
    document.getElementById(pointId).style.backgroundColor = 'var(--primary-yellow)';
}

// Navegación teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Inicializar
updateSlide();
