let currentMode = 'study';

document.getElementById('modeToggle').addEventListener('click', () => {
  currentMode = currentMode === 'quiz' ? 'study' : 'quiz';
  document.getElementById('modeToggle').textContent = `Mode: ${currentMode.charAt(0).toUpperCase() + currentMode.slice(1)}`;
  Object.keys(cardsByCategory).forEach(renderDeck);
});

const currentIndices = {
  emotion: 0,
  distress: 0,
  interpersonal: 0,
  mindfulness: 0
};

function createCardElement(frontText, backText, title = '', layerIndex = 0, category = '') {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.setProperty('--i', layerIndex);

  const inner = document.createElement('div');
  inner.classList.add('card-inner');

  const front = document.createElement('div');
  front.classList.add('card-face', 'card-front');

  const frontTitle = document.createElement('div');
  frontTitle.classList.add('card-title');
  frontTitle.innerHTML = currentMode === 'quiz' ? `<i class="fas fa-brain"></i> ${title}` : title;

  const frontContent = document.createElement('div');
  frontContent.classList.add('card-content');
  frontContent.innerHTML = frontText;
  if (currentMode === 'study') frontContent.classList.add('study-layout');

  front.appendChild(frontTitle);
  front.appendChild(frontContent);

  const back = document.createElement('div');
  back.classList.add('card-face', 'card-back');

  const backTitle = document.createElement('div');
  backTitle.classList.add('card-title');
  backTitle.innerHTML = currentMode === 'quiz' ? `<i class="fas fa-lightbulb"></i> Answer` : `Definition`;

  const backContent = document.createElement('div');
  backContent.classList.add('card-content');
  backContent.innerHTML = backText;

  back.appendChild(backTitle);
  back.appendChild(backContent);

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  if (layerIndex === 0) {
    // Hover flip on desktop
    card.addEventListener('mouseenter', () => {
      if (!isTouchDevice()) card.classList.add('flipped');
    });
    card.addEventListener('mouseleave', () => {
      if (!isTouchDevice()) card.classList.remove('flipped');
    });

    // Tap flip & advance on mobile
    let tappedOnce = false;
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isTouchDevice()) {
        if (card.classList.contains('flipped')) {
          shuffleCard(category);
          tappedOnce = false;
        } else {
          card.classList.add('flipped');
          tappedOnce = true;
        }
      } else {
        // Desktop click advances after hover
        shuffleCard(category);
      }
    });

    if (currentMode === 'study') {
      card.classList.add('float');
    } else if (currentMode === 'quiz') {
      card.classList.add('quiz-wiggle');
    }
  }

  return card;
}

function renderDeck(category) {
  const stack = document.getElementById(`${category}-stack`);
  stack.innerHTML = '';

  const deck = cardsByCategory[category];
  const current = currentIndices[category];
  const cardIndices = [
    current,
    (current + 1) % deck.length,
    (current + 2) % deck.length
  ];

  cardIndices.forEach((i, index) => {
    const cardData = deck[i];
    const frontText = currentMode === 'quiz' ? cardData.quizFront : cardData.studyFront;
    const backText = currentMode === 'quiz' ? cardData.quizBack : cardData.studyBack;
    const title = currentMode === 'quiz' ? cardData.quizTitle : cardData.studyTitle || '';
    const card = createCardElement(frontText, backText, title, index, category);
    stack.appendChild(card);
  });
}

function shuffleCard(category) {
  currentIndices[category] = (currentIndices[category] + 1) % cardsByCategory[category].length;
  renderDeck(category);
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function generateStackedCardContent(iconPath, titleText) {
  return "<div style='display:flex; flex-direction:column; align-items:center; justify-content:center; max-height:100%; width:100%; box-sizing:border-box; gap:16px'>\
    <img src='" + iconPath + "' alt='icon top' style='height:80px; width:auto'>\
    <div style='font-size:1.8rem; font-weight:700; text-align:center; line-height:1.2; word-break:break-word'>" + titleText.replace(" ", "<br>") + "</div>\
    <img src='" + iconPath + "' alt='icon bottom flipped' style='height:80px; width:auto; transform:scaleY(-1)'>\
  </div>";
}

// Your existing cardsByCategory object goes here...

window.onload = () => {
  Object.keys(cardsByCategory).forEach(renderDeck);
};
