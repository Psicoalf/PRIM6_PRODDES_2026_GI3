const slides = [
    {
        id: 'portada',
        title: 'LOS TRABAJOS DEL FUTURO',
        subtitle: 'Lección 4 | Productividad y Desarrollo',
        grade: '6° Primaria',
        type: 'cover',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
        content: '¡Prepárate para el mañana! Hoy exploraremos cómo cambiará el mundo del trabajo y cómo puedes prepararte desde ahora.'
    },
    {
        id: 'objetivos',
        title: 'Nuestros Objetivos',
        type: 'list',
        items: [
            'Interpretar información sobre las profesiones del futuro.',
            'Entender cómo las decisiones de hoy afectan nuestro futuro.',
            'Identificar habilidades necesarias para los nuevos trabajos.'
        ]
    },
    {
        id: 'activacion',
        title: '¿Qué quieres ser de grande?',
        type: 'activation',
        question: '¿Sabías que muchos de los trabajos que existirán cuando te gradúes aún no han sido inventados?',
        content: 'El mundo cambia rápido gracias a la tecnología. ¡Imagina las posibilidades!'
    },
    {
        id: 'palabras-clave',
        title: ' Conceptos del Mañana',
        type: 'keywords',
        keywords: [
            { term: 'Automatización', def: 'Uso de máquinas o robots para realizar tareas que antes hacían personas.' },
            { term: 'Sostenibilidad', def: 'Trabajos que cuidan el planeta y sus recursos para el futuro.' },
            { term: 'Habilidades Blandas', def: 'Capacidades como la creatividad, el trabajo en equipo y la empatía.' }
        ]
    },
    {
        id: 'contenido-1',
        title: 'El Cambio Tecnológico',
        type: 'content',
        content: 'La inteligencia artificial y los robots están transformando las industrias. Esto no significa que no habrá trabajo, sino que los trabajos requerirán que sepamos usar estas herramientas y que aportemos lo que las máquinas no pueden: **creatividad y juicio humano**.'
    },
    {
        id: 'contenido-2',
        title: 'Trabajos Verdes y Digitales',
        type: 'content',
        content: 'El futuro tendrá muchas oportunidades en: <br>• **Energía Renovable**: Expertos en sol y viento.<br>• **Salud**: Médicos apoyados por tecnología.<br>• **Ciberseguridad**: Protectores de la información digital.'
    },
    {
        id: 'exploracion',
        title: 'Explora el Futuro',
        type: 'exploration',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        hotspots: [
            { text: 'Robótica: Máquinas que nos ayudan en tareas pesadas o precisas.', top: '30%', left: '20%' },
            { text: 'Diseño 3D: Creación de objetos y casas con impresoras gigantes.', top: '60%', left: '75%' },
            { text: 'Programación: El lenguaje para hablar con las máquinas del futuro.', top: '15%', left: '60%' }
        ]
    },
    {
        id: 'actividad-1',
        title: '¿Qué habilidad es más importante?',
        type: 'quiz',
        question: 'Un robot puede calcular muy rápido, pero ¿qué NO puede hacer bien todavía?',
        options: [
            { text: 'Sumar números grandes.', correct: false, feedback: '¡Eso lo hacen muy fácil! Busca algo que requiera sentimientos humanos.' },
            { text: 'Tener empatía y entender las emociones.', correct: true, feedback: '¡Exacto! Las habilidades sociales son clave para el futuro.' },
            { text: 'Seguir instrucciones.', correct: false, feedback: 'Los robots son expertos en seguir órdenes. ¡Intenta de nuevo!' }
        ]
    },
    {
        id: 'juego',
        title: '¡Ruta al Futuro!',
        type: 'sorting',
        question: 'Ordena estos pasos para prepararte para el futuro:',
        steps: [
            { id: 1, text: 'Ser curioso y leer mucho' },
            { id: 2, text: 'Aprender a usar la tecnología' },
            { id: 3, text: 'Practicar el trabajo en equipo' },
            { id: 4, text: 'Tomar decisiones informadas' }
        ],
        currentOrder: [],
        correctOrder: [1, 2, 3, 4]
    },
    {
        id: 'aplicacion',
        title: 'Toma de Decisiones',
        type: 'scenario',
        scenario: 'Si te ofrecen un curso gratuito de "Cuidado del Medio Ambiente" o uno de "Cómo usar redes sociales para jugar", ¿cuál te sirve más para un trabajo del futuro?',
        options: [
            { text: 'El de Medio Ambiente (Sostenibilidad).', correct: true, feedback: '¡Excelente! Los trabajos verdes son una de las áreas con más crecimiento.' },
            { text: 'El de juegos en redes sociales.', correct: false, feedback: 'Puede ser divertido, pero la sostenibilidad es una decisión más estratégica. ¡Reintenta!' }
        ]
    },
    {
        id: 'repaso',
        title: 'Repaso Final',
        type: 'quiz',
        question: '¿Por qué es importante interpretar la información del futuro hoy?',
        options: [
            { text: 'Para asustarme por los robots.', correct: false, feedback: '¡No hay que temer! Hay que prepararse. ¡Prueba otra!' },
            { text: 'Para tomar mejores decisiones en mis estudios y metas.', correct: true, feedback: '¡Así es! Estar informado nos da poder sobre nuestro futuro.' },
            { text: 'Para no tener que estudiar nada.', correct: false, feedback: 'Al contrario, ¡el futuro nos pide aprender siempre! ¡Reintenta!' }
        ]
    },
    {
        id: 'metacognicion',
        title: 'Reflexiona',
        type: 'reflection',
        questions: [
            '¿Qué trabajo del futuro te parece más interesante?',
            '¿Qué habilidad humana crees que debes practicar más?',
            '¿Cómo te imaginas trabajando en el año 2040?'
        ]
    },
    {
        id: 'cierre',
        title: '¡Listo para el Mañana!',
        type: 'closing',
        message: 'Has terminado la Lección 4. El futuro no se espera, ¡se construye! Sigue explorando tus talentos.'
    }
];

let currentSlideIndex = 0;
let isTransitioning = false;

const slideContainer = document.getElementById('slide-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackCard = document.getElementById('feedback-card');

function init() {
    renderSlide();
    updateNav();

    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0 && !isTransitioning) {
            currentSlideIndex--;
            renderSlide();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1 && !isTransitioning) {
            currentSlideIndex++;
            renderSlide();
        }
    });

    document.getElementById('feedback-btn').addEventListener('click', hideFeedback);
}

function renderSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    updateNav();

    const slideData = slides[currentSlideIndex];

    // Header update
    document.getElementById('lesson-topic').innerText = slideData.title;

    // Transition logic
    const oldSlide = slideContainer.querySelector('.slide');
    if (oldSlide) {
        oldSlide.classList.remove('active');
        oldSlide.classList.add('exit');
        setTimeout(() => oldSlide.remove(), 500);
    }

    const slideEl = document.createElement('div');
    slideEl.className = 'slide';
    slideEl.id = `slide-${slideData.id}`;

    let html = '';

    switch (slideData.type) {
        case 'cover':
            html = `
                <div class="badge">${slideData.subtitle}</div>
                <h1 style="color: var(--primary-orange)">${slideData.title}</h1>
                <p style="font-weight: bold; color: var(--primary-blue)">${slideData.grade}</p>
                <img src="${slideData.image}" class="slide-img" alt="Cover">
                <div class="accent-box" style="text-align: center">${slideData.content}</div>
            `;
            break;

        case 'list':
            html = `
                <h2>${slideData.title}</h2>
                <div style="text-align: left; width: 100%; max-width: 600px;">
                    ${slideData.items.map(item => `
                        <div class="accent-box">
                            <strong>•</strong> ${item}
                        </div>
                    `).join('')}
                </div>
            `;
            break;

        case 'activation':
            html = `
                <h2>${slideData.title}</h2>
                <p class="accent-box" style="font-size: 1.3rem; border-left-color: var(--primary-gold)">${slideData.question}</p>
                <p>${slideData.content}</p>
                <div style="font-size: 3rem">🚀</div>
            `;
            break;

        case 'keywords':
            html = `
                <h2>${slideData.title}</h2>
                <div class="options-grid" style="grid-template-columns: 1fr; max-width: 800px;">
                    ${slideData.keywords.map(k => `
                        <div class="accent-box" style="margin: 5px 0">
                            <strong style="color: var(--primary-orange)">${k.term}:</strong> ${k.def}
                        </div>
                    `).join('')}
                </div>
            `;
            break;

        case 'content':
            html = `
                <h2>${slideData.title}</h2>
                <div class="accent-box" style="font-size: 1.2rem; line-height: 1.8;">
                    ${slideData.content.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}
                </div>
                <div style="font-size: 4rem">🤖</div>
            `;
            break;

        case 'exploration':
            html = `
                <h2>${slideData.title}</h2>
                <p>Haz clic en los puntos para explorar</p>
                <div style="position: relative; width: 100%; max-width: 500px;">
                    <img src="${slideData.image}" class="slide-img" style="width: 100%; margin: 0">
                    ${slideData.hotspots.map((h, i) => `
                        <div class="hotspot" style="top: ${h.top}; left: ${h.left};" onclick="showFeedback('¡Explorado!', '${h.text}', 'Genial')">
                            ${i + 1}
                        </div>
                    `).join('')}
                </div>
            `;
            break;

        case 'quiz':
        case 'scenario':
            const gridStyle = slideData.options.length === 3 ? 'grid-template-columns: 1fr; max-width: 500px;' : '';
            html = `
                <h2>${slideData.title}</h2>
                <p style="font-weight: 600">${slideData.question || slideData.scenario}</p>
                <div class="options-grid" style="${gridStyle}">
                    ${slideData.options.map(opt => `
                        <button class="option-btn" onclick="checkAnswer(${opt.correct}, '${opt.feedback.replace(/'/g, "\\'")}')">
                            ${opt.text}
                        </button>
                    `).join('')}
                </div>
            `;
            break;

        case 'sorting':
            html = `
                <h2>${slideData.title}</h2>
                <p>${slideData.question}</p>
                <div id="sorting-area" style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 500px;">
                    ${slideData.steps.map(step => `
                        <button class="option-btn step-btn" data-id="${step.id}" onclick="handleSort(${step.id})">
                            ${step.text}
                        </button>
                    `).join('')}
                </div>
                <p id="sort-hint" style="margin-top: 15px; font-size: 0.9rem; color: var(--primary-orange)">Haz clic en los pasos en el orden correcto</p>
                <button class="option-btn" style="margin-top: 10px; border-color: var(--primary-gold)" onclick="resetSort()">Reiniciar Orden</button>
            `;
            break;

        case 'reflection':
            html = `
                <h2>${slideData.title}</h2>
                <div style="text-align: left; width: 100%; max-width: 600px;">
                    ${slideData.questions.map(q => `<p class="accent-box" style="background: white; border: 1px solid #ccc;">${q}</p>`).join('')}
                </div>
                <div style="font-size: 3rem">🌟</div>
            `;
            break;

        case 'closing':
            html = `
                <div style="font-size: 5rem">🏆</div>
                <h1 style="color: var(--primary-gold)">${slideData.title}</h1>
                <p style="font-size: 1.5rem">${slideData.message}</p>
                <div class="badge" style="background: var(--primary-orange); color: white; padding: 10px 30px; font-size: 1.2rem">¡Futuro Líder Escolaries!</div>
            `;
            break;
    }

    slideEl.innerHTML = html;
    slideContainer.appendChild(slideEl);

    setTimeout(() => {
        slideEl.classList.add('active');
        setTimeout(() => {
            isTransitioning = false;
            updateNav();
        }, 500);
    }, 50);

    progressBar.style.width = `${((currentSlideIndex + 1) / slides.length) * 100}%`;
}

function updateNav() {
    prevBtn.disabled = currentSlideIndex === 0 || isTransitioning;
    nextBtn.disabled = currentSlideIndex === slides.length - 1 || isTransitioning;
}

window.checkAnswer = function (isCorrect, feedback) {
    if (isTransitioning) return;
    if (isCorrect) {
        showFeedback('¡Correcto!', feedback, 'Continuar');
    } else {
        showFeedback('¡Inténtalo de nuevo!', feedback, 'Reintentar');
    }
};

let currentSortOrder = [];
window.handleSort = function (id) {
    if (isTransitioning) return;
    const slideData = slides[currentSlideIndex];
    if (currentSortOrder.includes(id)) return;

    currentSortOrder.push(id);
    const btn = document.querySelector(`.step-btn[data-id="${id}"]`);
    btn.style.opacity = '0.5';
    btn.innerHTML = `${currentSortOrder.length}. ${btn.innerText}`;

    if (currentSortOrder.length === slideData.correctOrder.length) {
        const isCorrect = currentSortOrder.every((val, index) => val === slideData.correctOrder[index]);
        if (isCorrect) {
            showFeedback('¡Bien hecho!', 'Has ordenado los pasos correctamente para tu éxito futuro.', 'Continuar');
        } else {
            showFeedback('Orden incorrecto', 'La curiosidad y el aprendizaje constante son los primeros pasos. ¡Pruébale de nuevo!', 'Reintentar');
            resetSort();
        }
    }
};

window.resetSort = function () {
    currentSortOrder = [];
    renderSlide();
};

window.showFeedback = function (title, text, btnText) {
    document.getElementById('feedback-title').innerText = title;
    document.getElementById('feedback-text').innerText = text;
    document.getElementById('feedback-btn').innerText = btnText;

    const icon = document.getElementById('feedback-icon');
    if (title.includes('Correcto') || title.includes('Bien')) {
        icon.innerHTML = '<div style="font-size: 4rem">🌟</div>';
    } else {
        icon.innerHTML = '<div style="font-size: 4rem">🤔</div>';
    }

    feedbackOverlay.classList.remove('hidden');
};

function hideFeedback() {
    if (isTransitioning) return;
    const btnText = document.getElementById('feedback-btn').innerText;
    feedbackOverlay.classList.add('hidden');

    if (btnText === 'Continuar') {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            renderSlide();
        }
    }
}

init();
