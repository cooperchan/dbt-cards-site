//console.log("📱 isMobile:", window.matchMedia('(hover: none)').matches);


// Mode toggle logic
let currentMode = 'study';

document.getElementById('modeToggle').addEventListener('click', () => {
  currentMode = currentMode === 'quiz' ? 'study' : 'quiz';
  document.getElementById('modeToggle').textContent = `Mode: ${currentMode.charAt(0).toUpperCase() + currentMode.slice(1)}`;
  Object.keys(cardsByCategory).forEach(renderDeck);
});

// Card structure
const cardsByCategory = {
  emotion: [
    {
      quizFront: "What is Emotional Regulation and why is it important?",
      quizTitle: "Emotional Regulation Quiz",
      studyTitle: "",
      studyFront: generateStackedCardContent('assets/images/emotionalregulation.png', 'Emotional Regulation'),
      quizBack: "It’s the ability to manage your emotions instead of being controlled by them.\nIt matters because it helps you stay calm, think clearly, and act in ways you won’t regret.",
      studyBack: "the process of identifying and managing emotions in a constructive and healthy way"
    },
    {
      quizFront: "What are the steps to accumulate positive experiences?",
      quizTitle: "Accumulate Positive Experiences Quiz",
      studyTitle: "Accumulate Positive Experiences",
      studyFront: "<img src='assets/images/accumulatepeicon.png' alt='Accumulate Positive Experiences Icon' style='max-width:100%; height:auto; display:block;'>",
      quizBack: "🕒 Start now\n💡 Identify values\n🎯 Choose one goal\n🪜 Break into small steps\n✅ Take action and follow through",
      studyBack: "actively engaging in positive activities "
    },
    {
      quizFront: "What is the purpose of opposite action?",
      quizTitle: "Opposite Action Quiz",
      studyTitle: "Opposite Action",
      studyFront: "<img src='assets/images/emotionalregulation.png' alt='Opposite Action Icon' style='max-width:100%; height:auto; display:block;'>",
      quizBack: "Act opposite to the urge\n💡 Example: Smile when sad",
      studyBack: "A strategy to change unhelpful emotions by changing your behavior"
    },
    {
      quizFront: "How do you build positive emotions?",
      quizTitle: "Positive Emotions Quiz",
      studyTitle: "Building Positive Emotions",
      studyFront: "",
      quizBack: "🌱 Short term: Do pleasant activities\n📈 Long term: Work toward goals",
      studyBack: "Practice short and long-term actions that increase happiness"
    }
  ],
  distress: [
    {
      quizFront: "What is Distress Tolerance and why is it important?",
      quizTitle: "Distress Tolerance Quiz",
      studyTitle: "",
      studyFront: generateStackedCardContent('assets/images/distresstolerance.png', 'Distress Tolerance'),
      quizBack: "It helps you survive emotional crises without making things worse.\nIt’s important for staying safe and grounded when emotions feel overwhelming.",
      studyBack: "calmly and successfully navigate difficult or stressful situations without resorting to destructive or self-defeating behaviors"
    },
    {
      quizFront: "What does STOP stand for?",
      quizTitle: "STOP Skill Quiz",
      studyTitle: "STOP Skill",
      studyFront: "",
      quizBack: "🛑 Stop\n🚶 Take a step back\n👀 Observe\n🎯 Proceed mindfully",
      studyBack: "Crisis survival skill to pause and respond mindfully"
    },
    {
      quizFront: "What does TIP stand for?",
      quizTitle: "TIP Skill Quiz",
      studyTitle: "TIP Skill",
      studyFront: "",
      quizBack: "🌡️ Temperature\n🏃 Intense Exercise\n🧘 Paced Breathing",
      studyBack: "Skill to quickly calm down intense emotions"
    }
  ],
  interpersonal: [
    {
      quizFront: "What is Interpersonal Effectiveness and why is it important?",
      quizTitle: "Interpersonal Effectiveness Quiz",
      studyTitle: "",
      studyFront: generateStackedCardContent('assets/images/interpersonaleffectiveness.png', 'Interpersonal Effectiveness'),
      quizBack: "It means getting your needs met while keeping relationships healthy. \nIt’s important for setting boundaries, asking for help, and maintaining mutual respect.",
      studyBack: "improve the way we communicate with others by emphasizing empathy, kindness, setting boundaries, assertiveness, active listening, mutual respect, understanding, and emotional expression"
    },
    {
      quizFront: "What does DEAR MAN stand for?",
      quizTitle: "DEAR MAN Quiz",
      studyTitle: "DEAR MAN",
      studyFront: "",
      quizBack: "📣 Describe\n❤️ Express\n✅ Assert\n🎁 Reinforce\n🧘 Mindful\n🧍 Appear Confident\n🤝 Negotiate",
      studyBack: "Skill to ask for what you want or say no effectively"
    },
    {
      quizFront: "What is GIVE used for?",
      quizTitle: "GIVE Quiz",
      studyTitle: "GIVE",
      studyFront: "",
      quizBack: "G: Gentle\nI: Interested\nV: Validate\nE: Easy manner",
      studyBack: "Skill for maintaining relationships with kindness and presence"
    }
  ],
  mindfulness: [
    {
      quizFront: "What is Mindfulness and why is it important?",
      quizTitle: "Mindfulness Quiz",
      studyTitle: "",
      studyFront: generateStackedCardContent('assets/images/mindfulness.png', 'Mindfulness'),
      quizBack: "It means being fully present in the moment without judgment. \nIt helps reduce stress, improve focus, and manage emotions more effectively.",
      studyBack: "intentionally attentive to the present moment"
    },
    {
      quizFront: "What is Wise Mind a combination of?",
      quizTitle: "Wise Mind Quiz",
      studyTitle: "Wise Mind",
      studyFront: "",
      quizBack: "Emotion Mind + Reasonable Mind\n🧠 Your inner balance",
      studyBack: "The balanced state between emotion and logic"
    },
    {
      quizFront: "What are the three 'What' skills?",
      quizTitle: "What Skills Quiz",
      studyTitle: "What Skills",
      studyFront: "",
      quizBack: "🔹 Observe\n🔹 Describe\n🔹 Participate",
      studyBack: "Skills that teach you how to practice mindfulness"
    }
  ]
};

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
    if (currentMode === 'study') card.classList.add('float');
    else if (currentMode === 'quiz') card.classList.add('quiz-wiggle');

    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    let tappedOnce = false;

    if (isMobile) {
      card.addEventListener('click', (e) => {
        e.stopPropagation();

        if (!tappedOnce) {
          card.classList.add('flipped');
          tappedOnce = true;
        } else {
          card.classList.remove('flipped');
          tappedOnce = false;

          setTimeout(() => {
            const cat = card.closest('.card-stack')?.id.replace('-stack', '');
            shuffleCard(cat);
          }, 300);
        }
      });
    } else {
      // Desktop hover flip
      card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('flipped')) {
          card.classList.add('flipped');
        }
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
      });

      // Desktop single click to advance
      card.addEventListener('click', (e) => {
        e.stopPropagation();

        // Force unflip and then advance after short delay
        card.classList.remove('flipped');

        setTimeout(() => {
          const cat = card.closest('.card-stack')?.id.replace('-stack', '');
          shuffleCard(cat);
        }, 150); // slightly shorter for smoother effect
      });
    }

    setTimeout(() => {
      card.classList.remove('flipped');
    }, 0);
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

function generateStackedCardContent(iconPath, titleText) {
  return "<div style='display:flex; flex-direction:column; align-items:center; justify-content:center; max-height:100%; width:100%; box-sizing:border-box; gap:16px'>\
    <img src='" + iconPath + "' alt='icon top' style='height:80px; width:auto'>\
    <div style='font-size:1.8rem; font-weight:700; text-align:center; line-height:1.2; word-break:break-word'>" + titleText.replace(" ", "<br>") + "</div>\
    <img src='" + iconPath + "' alt='icon bottom flipped' style='height:80px; width:auto; transform:scaleY(-1)'>\
  </div>";
}

window.onload = () => {
  Object.keys(cardsByCategory).forEach(renderDeck);
};
