let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function updateNavigation() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index < currentSlide) {
            slide.classList.add('prev');
        } else {
            slide.classList.add('next');
        }
    });

    // Hide arrows on first/last slide if desired, but request says "only large side arrows"
    // We'll keep them but maybe disable them or keep them for wrapping?
    // Let's implement wrap-around for a "book" feel or stop at boundaries.
    document.getElementById('prev-btn').style.visibility = currentSlide === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').style.visibility = currentSlide === slides.length - 1 ? 'hidden' : 'visible';
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

function goToSlide(n) {
    currentSlide = n;
    updateNavigation();
}

// Logic for Multiple Choice
function checkAnswer(btn, isCorrect, feedbackText, feedbackId, retryId) {
    const container = btn.parentElement;
    const buttons = container.querySelectorAll('.option-btn');
    const feedbackBox = document.getElementById(feedbackId);
    const retryBox = document.getElementById(retryId);

    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add('correct');
        feedbackBox.innerHTML = `✅ ${feedbackText}`;
        feedbackBox.className = 'feedback-overlay show success';
        if (retryBox) retryBox.style.display = 'none';
    } else {
        btn.classList.add('incorrect');
        feedbackBox.innerHTML = `❌ ${feedbackText}`;
        feedbackBox.className = 'feedback-overlay show error';
        if (retryBox) retryBox.style.display = 'block';
    }
}

function resetQuestion(containerId, feedbackId, retryId) {
    const container = document.getElementById(containerId);
    const buttons = container.querySelectorAll('.option-btn');
    const feedbackBox = document.getElementById(feedbackId);
    const retryBox = document.getElementById(retryId);

    buttons.forEach(b => {
        b.disabled = false;
        b.classList.remove('correct', 'incorrect');
    });

    feedbackBox.className = 'feedback-overlay';
    if (retryBox) retryBox.style.display = 'none';
}

// Logic for Explorer Visual
function explore(elementId, content) {
    const display = document.getElementById('explorer-info-box');
    const buttons = document.querySelectorAll('.explorer-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick*="${elementId}"]`).classList.add('active');

    display.innerHTML = content;
    display.style.animation = 'none';
    display.offsetHeight; // trigger reflow
    display.style.animation = 'fadeIn 0.5s ease-out';
}

// Logic for Matching Game
let selectedItem = null;
function handleMatch(element) {
    if (element.classList.contains('matched')) return;

    if (!selectedItem) {
        selectedItem = element;
        element.classList.add('selected');
    } else {
        const type1 = selectedItem.getAttribute('data-match');
        const type2 = element.getAttribute('data-match');
        const col1 = selectedItem.parentElement.id;
        const col2 = element.parentElement.id;

        if (col1 !== col2 && type1 === type2) {
            // Match found
            selectedItem.classList.remove('selected');
            selectedItem.classList.add('matched');
            element.classList.add('matched');
            selectedItem = null;
            checkGameCompletion();
        } else {
            // No match
            selectedItem.classList.remove('selected');
            element.classList.add('incorrect'); // temporary flash
            setTimeout(() => element.classList.remove('incorrect'), 500);
            selectedItem = null;
        }
    }
}

function checkGameCompletion() {
    const totalItems = document.querySelectorAll('.match-item').length;
    const matchedItems = document.querySelectorAll('.match-item.matched').length;
    if (totalItems === matchedItems) {
        const feedback = document.getElementById('match-feedback');
        feedback.innerHTML = "¡Excelente! Has relacionado todos los conceptos correctamente. 🌟";
        feedback.className = 'feedback-overlay show success';
    }
}

function resetMatchGame() {
    const items = document.querySelectorAll('.match-item');
    items.forEach(item => {
        item.classList.remove('selected', 'matched', 'incorrect');
    });
    document.getElementById('match-feedback').className = 'feedback-overlay';
    selectedItem = null;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
});

// Keyboard support for convenience during testing (optional but good)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});
