let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const progressBar = document.querySelector('.progress-bar');

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    // Update progress bar
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;

    // Disable arrows at start/end
    document.querySelector('.nav-arrow.prev').disabled = currentSlide === 0;
    document.querySelector('.nav-arrow.next').disabled = currentSlide === totalSlides - 1;
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
    const parent = btn.parentElement;
    
    // Reset buttons in this container
    parent.querySelectorAll('.option-btn').forEach(b => {
        b.style.borderColor = '#244b5a';
        b.style.background = 'white';
    });

    if (isCorrect) {
        btn.style.borderColor = '#28a745';
        btn.style.background = '#d4edda';
        feedback.innerText = "¡Excelente! Has comprendido el concepto correctamente.";
        feedback.className = "feedback success";
    } else {
        btn.style.borderColor = '#dc3545';
        btn.style.background = '#f8d7da';
        feedback.innerText = "No es correcto. Recuerda que este tipo de fuerza se aplica en un solo esfuerzo máximo. ¡Inténtalo de nuevo!";
        feedback.className = "feedback error";
    }
}

function checkTandF(isCorrect, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    if (isCorrect) {
        feedback.innerText = "¡Muy bien! El estiramiento es clave para prevenir lesiones.";
        feedback.className = "feedback success";
    } else {
        feedback.innerText = "Cuidado. El estiramiento NUNCA debe omitirse, especialmente después de un gran esfuerzo. ¡Prueba otra vez!";
        feedback.className = "feedback error";
    }
}

function checkOrder(step, expected, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    if (step === expected) {
        feedback.innerText = "¡Correcto! Ese es el orden lógico para cuidar tu cuerpo.";
        feedback.className = "feedback success";
    } else {
        feedback.innerText = "Ese paso no va ahí. Piensa en qué debemos hacer antes de esforzarnos al máximo. ¡Reintenta!";
        feedback.className = "feedback error";
    }
}

// Mouseover info logic (for visual exploration) - touch friendly logic
function showInfo(id, text) {
    const infoBox = document.getElementById('map-info-box');
    const point = document.getElementById(id);
    infoBox.innerText = text;
    infoBox.style.display = 'block';
    infoBox.style.left = (point.offsetLeft + 25) + 'px';
    infoBox.style.top = (point.offsetTop - 40) + 'px';
}

function hideInfo() {
    // We can keep it visible or hide on click elsewhere
}

// Initialize
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

updateSlide();
