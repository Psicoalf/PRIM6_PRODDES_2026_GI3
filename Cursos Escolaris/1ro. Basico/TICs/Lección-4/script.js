let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// --- Navigation ---

function updateNavigation() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    // Hide/Show arrows based on slide index
    prevBtn.style.display = currentSlide === 0 ? 'none' : 'flex';
    nextBtn.style.display = currentSlide === slides.length - 1 ? 'none' : 'flex';
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateNavigation();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateNavigation();
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateNavigation();
    if (index === 0) resetGame();
}

// --- Feedbacks & Popups ---

function showFeedback(id, message) {
    const box = document.getElementById('feedback-' + id);
    if (box) {
        box.textContent = message;
        box.style.display = 'block';
        box.className = 'feedback-box feedback-info';
    }
}

function showPopup(message) {
    const box = document.getElementById('explorer-popup');
    box.textContent = message;
    box.style.display = 'block';
    box.className = 'feedback-box feedback-info';
}

function checkAnswer(id, isCorrect, message, customBoxId = null) {
    const boxId = customBoxId || 'feedback-' + id;
    const box = document.getElementById(boxId);
    if (!box) return;

    box.textContent = message;
    box.style.display = 'block';

    if (isCorrect) {
        box.className = 'feedback-box feedback-correct';
    } else {
        box.className = 'feedback-box feedback-wrong';
    }
}

// --- Matching Game Logic ---

let selectedType = null;
let selectedBtn = null;

const matchBtns = document.querySelectorAll('.match-btn');
matchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('matched')) return;

        // If it's a "source" button (A, B, C)
        if (btn.dataset.type) {
            if (selectedBtn) selectedBtn.classList.remove('selected');
            selectedType = btn.dataset.type;
            selectedBtn = btn;
            btn.classList.add('selected');
        }
        // If it's a "target" button
        else if (btn.dataset.target) {
            if (!selectedType) {
                showGameFeedback('Primero selecciona un formato de la izquierda.', false);
                return;
            }

            if (btn.dataset.target === selectedType) {
                btn.classList.add('matched');
                selectedBtn.classList.add('matched');
                selectedBtn.classList.remove('selected');
                selectedType = null;
                selectedBtn = null;
                showGameFeedback('¡Excelente! Conocimiento sólido.', true);
                checkGameComplete();
            } else {
                showGameFeedback('Esa no es su característica principal. ¡Prueba otra vez!', false);
                selectedBtn.classList.remove('selected');
                selectedType = null;
                selectedBtn = null;
            }
        }
    });
});

function showGameFeedback(msg, isCorrect) {
    const fb = document.getElementById('feedback-game');
    fb.textContent = msg;
    fb.style.display = 'block';
    fb.className = isCorrect ? 'feedback-box feedback-correct' : 'feedback-box feedback-wrong';
}

function checkGameComplete() {
    const matchedCount = document.querySelectorAll('.match-btn.matched').length;
    if (matchedCount === matchBtns.length) {
        showGameFeedback('¡Eres un experto en formatos de video! 🎬🏆', true);
        document.getElementById('retry-game').style.display = 'inline-block';
    }
}

function resetGame() {
    matchBtns.forEach(btn => {
        btn.classList.remove('matched', 'selected');
    });
    document.getElementById('feedback-game').style.display = 'none';
    document.getElementById('retry-game').style.display = 'none';
    selectedType = null;
    selectedBtn = null;
}

// Initialize
updateNavigation();
