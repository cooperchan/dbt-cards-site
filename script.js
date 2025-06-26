


let inputMethod = null;
let hasTouched = false;

window.addEventListener('touchstart', () => {
  if (!inputMethod) {
    inputMethod = 'touch';
    console.log('User is using touch');
  }
  hasTouched = true;
}, { once: false });

window.addEventListener('mousemove', () => {
  if (!inputMethod) {
    inputMethod = 'mouse';
    console.log('User is using mouse - INPUT SWITCH: touch → mouse');
  }
}, { once: false });


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
      //studyFront: "<img src='assets/images/accumulatepeicon.png' alt='Accumulate Positive Experiences Icon' style='max-width:100%; height:auto; display:block;'>",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-wand-magic-sparkles magic-icon trail-icon"></i>
          <i class="fa-solid fa-icons magic-icon revealed-icon"></i>
          </div>
          <p>\n actively engaging in positive activities</p>
          `,
      quizBack: "🕒 Start now\n💡 Identify values\n🎯 Choose one goal\n🪜 Break into small steps\n✅ Take action and follow through",
studyBack: `
  <div class="activity-wrapper">
    <p class="activity-heading">This skill helps you feel better by doing small, enjoyable things on purpose. Over time, these positive moments can boost your mood, build resilience, and make life feel more balanced and meaningful.
    \n✨ Try these to help you feel:</p>
    <ul class="suggestion-list">
      <li>🌿 <strong>Calm</strong> – light a candle, do deep breathing</li>
      <li>🎧 <strong>Engaged</strong> – listen to a podcast or music</li>
      <li>🎨 <strong>Creative</strong> – draw, color, or craft</li>
      <li>📞 <strong>Connected</strong> – text a friend, hug a pet</li>
      <li>🌞 <strong>Energized</strong> – take a walk, dance to music</li>
    </ul>
  </div>
`,
    },
        {
      quizFront: `<div class="card-content quiz-card" style="font-size: 1.2rem;">
Which of the following best describes the purpose of the Build Mastery skill in DBT?\n A. To avoid difficult tasks until you're fully ready\n B. To strengthen your emotional responses by expressing them openly\n C. To grow confidence and competence by doing meaningful tasks regularly\n D. To distract yourself from emotions with fun activities
</div>`,
      quizTitle: "Build Mastery Quiz",
      studyTitle: "Build Mastery",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-trowel-bricks magic-icon trail-icon"></i>
          <i class="fa-solid fa-medal magic-icon revealed-icon"></i>
          </div>
          <p>\n master what matters and feel more in control</p>
          `,      
          quizBack: "✅ Correct Answer:\n C. To grow confidence and competence by doing meaningful tasks regularly",
      studyBack: `<div class="activity-wrapper">
  <p class="activity-heading"> Build Mastery means doing things that help you feel capable, skilled, and in control of your life\n
  💪 Try these to build confidence in:</p>
  <ul class="suggestion-list">
    <li>💼 <strong>Productivity</strong> – organize your space, complete a small task, make a to-do list</li>
    <li>🧠 <strong>Learning</strong> – watch a tutorial, practice a new skill, read something meaningful</li>
    <li>🎨 <strong>Creativity</strong> – sketch, write, start a mini project, try a new medium</li>
    <li>🧘‍♀️ <strong>Self-Care</strong> – prep a healthy meal, follow your routine, keep appointments</li>
    <li>🏃 <strong>Physical Mastery</strong> – stretch, try gentle exercise, learn a movement skill</li>
  </ul>
</div>
`
    },
        {
      quizFront: "Check the Facts is used when your emotional reaction feels intense, but you’re unsure if it matches the __________ or if it's based on __________.",
      quizTitle: "Check the Facts Quiz",
      studyTitle: "Check the Facts",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-magnifying-glass magic-icon trail-icon"></i>
          <i class="fa-solid fa-list-check magic-icon revealed-icon"></i>
          </div>
          <p>\n strong feelings deserve solid reflection</p>
          `,      quizBack: `situation / assumptions\n
(Other acceptable answers: facts / interpretations)`,
      studyBack: `<div class="card-content quiz-card" style="font-size: 0.95rem;">This skill helps you slow down and question whether your emotions match what’s really going on. 
      When feelings get intense, it’s easy to jump to conclusions or react based on assumptions, not facts. 
      Check the Facts teaches you to look at the situation like a detective, to separate what you know from what you think, 
      and asking if your emotional response fits the actual facts. 
      It's not about denying your feelings, but about making sure they’re rooted in reality, not just habit, fear, or misinterpretation</div>`
    },
        {
      quizFront: `<div>What are the key steps of the Cope Ahead skill?<br>
    Hint: It helps you plan for emotional situations <em>before</em> they happen.</div>`,
      quizTitle: "Cope Ahead Quiz",
      studyTitle: "Cope Ahead",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-shield-heart magic-icon trail-icon"></i>
          <i class="fa-solid fa-calendar-check magic-icon revealed-icon"></i>
          </div>
          <p>\n mentally rehearse, emotionally prepare</p>
          `,      quizBack: `<div>🎯 <strong>Pick a future situation</strong> that might trigger stress or strong emotions
  🧠 <strong>Visualize the challenge</strong> and how it might feel
  🛠️ <strong>Plan out coping responses</strong> you can use to handle it ahead of time 
          </div>`,
      studyBack: `<div class="card-content quiz-card" style="font-size: 1rem;">
      Cope Ahead helps you prepare for future stressful situations by imagining them before they happen. 
      You picture the scenario, how you might feel, and what coping strategies you could use. 
      This mental rehearsal can lower anxiety and give you more control in the moment. 
      Instead of reacting out of panic, you walk in already knowing how to take care of yourself.
      </div>`
    },
        {
      quizFront: `<div class="card-content quiz-card" style="font-size: 1.2rem;">
Which of the following best reflects the steps of Mindfulness of Current Emotions?\n 
A. Distract yourself, avoid the feeling, focus on something else
B. Name the emotion, feel it in your body, accept it with kindness
C. Question the emotion, fix it quickly, move on
D. Think positive, replace the thought, smile through it\n
</div>`,
      quizTitle: "Mindfulness of Current Emotions Quiz",
      studyTitle: "Mindfulness of Current Emotions",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-peace magic-icon trail-icon"></i>
          <i class="fa-solid fa-heart-pulse magic-icon revealed-icon"></i>
          </div>
          <p>\n name it, feel it, let it be</p>
          `,      
          quizBack: "✅ Correct Answer:\n B. Name the emotion, feel it in your body, accept it with kindness",
      studyBack: ` <div class="card-content quiz-card" style="font-size: 1.3rem;"> Mindfulness of Current Emotions means noticing your feelings without trying to push them away, fix them, or judge them. 
      You identify what you are feeling, pay attention to how it shows up in your body, and allow the emotion to be there, 
      even if it is uncomfortable. The goal is not to change the feeling, but to understand and accept it as it is.</div>`
    },
    {
      quizFront: `<div class="activity-wrapper" style="font-size: 1rem;">
  <ul class="activity-list" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
    <li><strong>When you're feeling</strong></li>
    <li><strong>Instead of</strong></li>
    <li><strong>Do this</strong></li>

    <li>😳 Ashamed</li>
    <li>Hiding or avoiding</li>
    <li>__________</li>

    <li>😠 Angry</li>
    <li>Yelling or acting on it</li>
    <li>__________</li>

    <li>😨 Afraid</li>
    <li>Avoiding or freezing</li>
    <li>__________</li>
  </ul>
</div>`
,
      quizTitle: "Opposite Action Quiz",
      studyTitle: "Opposite Action",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-arrow-right-arrow-left magic-icon trail-icon"></i>
          <i class="fa-solid fa-masks-theater magic-icon revealed-icon"></i>
          </div>
          <p>\n acting against the inital urge to help shift the feeling</p>
          `,      
          quizBack: `<div class="activity-wrapper" style="font-size: 1rem;">
  <ul class="activity-list" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
    <li><strong>When you're feeling</strong></li>
    <li><strong>Instead of</strong></li>
    <li><strong>Do this</strong></li>

    <li>😳 Ashamed</li>
    <li>Hiding or avoiding</li>
    <li>Show up, act with confidence</li>

    <li>😠 Angry</li>
    <li>Yelling or acting on it</li>
    <li>Speak gently, relax your body</li>

    <li>😨 Afraid</li>
    <li>Avoiding or freezing</li>
    <li>Approach the situation (if safe)</li>
  </ul>
</div>`,
      studyBack: `<div class="card-content quiz-card" style="font-size: 1rem;">
    Opposite Action helps you change an emotion by doing the opposite of what that emotion urges you to do, 
    but only when the emotion doesn't fit the facts or isn’t helpful. 
    Instead of avoiding, hiding, or lashing out, you choose actions that counter the emotion and support your values. 
    Acting opposite can help reduce emotional intensity and shift your mood over time.
      </div>`
    },
       {
      quizFront: "What does PLEASE stand for?",
      quizTitle: "PLEASE Quiz",
      studyTitle: "PLEASE",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-person-circle-plus magic-icon trail-icon"></i>
          <i class="fa-solid fa-heart-circle-plus magic-icon revealed-icon"></i>
          </div>
          <p>\n take care of your body to take care of your emotions</p>
          `,
quizBack: `<div class="activity-wrapper">
  <p class="activity-heading"><strong>PLEASE Skill Breakdown</strong></p>
  <ul style="display: grid; grid-template-columns: 1fr 3fr; gap: 0.5rem; font-size: 1rem;" >
    <li><strong>P L</strong></li><li>🤒 Treat <strong>P</strong>hysical i<strong>l</strong>lness</li>
    <li><strong>E</strong></li><li>🍽️ <strong>E</strong>at balanced meals</li>
    <li><strong>A</strong></li><li>🚫 <strong>A</strong>void mood-altering substances</li>
    <li><strong>S</strong></li><li>😴 Get enough <strong>s</strong>leep</li>
    <li><strong>E</strong></li><li>🏃‍♀️ Get regular <strong>e</strong>xercise</li>
  </ul>
</div>`,
      studyBack: `<div class="card-content quiz-card" style="font-size: 1rem;">
 PLEASE is about taking care of your body so your emotions stay more balanced. 
 This skill asks you to check in on things like eating regularly, getting enough sleep, managing pain or illness, and avoiding substance use. 
 When your body is out of sync, your emotions often follow. 
 Taking care of your physical health can help you feel more emotionally stable.
      </div>`
    },
    {
      quizFront: `<div class="activity-wrapper">
  <p class="activity-heading">🧩 Problem Solving – What comes next?</p>
  <ul class="suggestion-list" >
    <li>1. Identify the problem</li>
    <li>2. _______________</li>
    <li>3. _______________</li>
    <li>4. _______________</li>
    <li>5. Take action</li>
  </ul>
</div>`
,
      quizTitle: "Problem Solving Quiz",
      studyTitle: "Problem Solving",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-question magic-icon trail-icon"></i>
          <i class="fa-solid fa-check magic-icon revealed-icon"></i>
          </div>
          <p>\n if the problem can be solved, take a step toward solving it</p>
          `,
      quizBack: `<div class="activity-wrapper">
  <p class="activity-heading">✅ Steps to Problem Solving</p>
  <ul class="suggestion-list" style="font-size: 1rem;">
    <li>1. Identify the problem</li>
    <li>2. Brainstorm potential solutions</li>
    <li>3. Evaluate the pros and cons</li>
    <li>4. Decide on a solution</li>
    <li>5. Take action</li>
  </ul>
</div>`
,
      studyBack: `<div class="card-content quiz-card" style="font-size: 1rem;">
    Problem Solving helps you understand what is causing your distress and figure out what you can do about it. 
    Instead of staying stuck in overwhelming emotions, you break the situation into parts, 
    explore what is in your control, and take small steps toward solutions. 
    Even one clear action can reduce stress and build a sense of direction.
      </div>`
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


function attachTopCardListeners(card, inner) {
  // Initialize both states if not already set
  card.clickState = 0;
  card.tapState = 0;

  card.addEventListener('mouseenter', () => {
    if (!card.classList.contains('no-hover') && inputMethod === 'mouse') {
      card.classList.add('flipped');

      // Only set clickState if user has never touched the screen
      if (!hasTouched) {
        card.clickState = 1;
      }
    }
  });


  card.addEventListener('mouseleave', () => {
    if (!card.classList.contains('no-hover') && inputMethod === 'mouse') {
      card.classList.remove('flipped');
    }
  });

  // Click/tap handler
  inner.addEventListener('click', (e) => {
    e.stopPropagation();

    if (inputMethod === 'touch') {
      console.log(`TOUCH CLICK → tapState: ${card.tapState}`);
      if (card.tapState === 0) {
        card.classList.add('flipped');
        card.tapState = 1;
      } else if (card.tapState === 1) {
        card.classList.remove('flipped');
        card.tapState = 2;
      } else if (card.tapState === 2) {
        const cat = card.closest('.card-stack')?.id.replace('-stack', '');
        shuffleCard(cat);
        card.tapState = 0;
      }
    } else if (inputMethod === 'mouse') {
      console.log(`MOUSE CLICK → clickState: ${card.clickState}`);
      if (card.clickState === 0) {
        card.classList.add('flipped');
        card.clickState = 1;
      } else if (card.clickState === 1) {
        card.classList.remove('flipped');
        card.clickState = 2;
      } else if (card.clickState === 2) {
        const cat = card.closest('.card-stack')?.id.replace('-stack', '');
        shuffleCard(cat);
        card.clickState = 0;
      }
    }
  });
}



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
    if (currentMode === 'study') {
      card.classList.add('float');
    } else if (currentMode === 'quiz') {
      card.classList.add('quiz-wiggle');
    }

    if (inputMethod) {
      attachTopCardListeners(card, inner);
    } else {
      const waitForInput = setInterval(() => {
        if (inputMethod) {
          clearInterval(waitForInput);
          attachTopCardListeners(card, inner);
        }
      }, 50);
    }
  }

  // Reset flip and click state on new card creation
  card.classList.remove('flipped');
  card.clickState = 0;
  card.tapState = 0;


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


    // Add no-hover only to the new top card (index 0)
    if (index === 0) {
      card.clickState = 0;
      card.tapState = 0;
      card.classList.add('no-hover');

      // Remove no-hover after short delay to prevent instant auto-flip
      setTimeout(() => {
        card.classList.remove('no-hover');
      }, 300);
    }

    stack.appendChild(card);
  });
  renderDropdown(category);

  attachIconRevealListeners();
}




function shuffleCard(category) {
  currentIndices[category] = (currentIndices[category] + 1) % cardsByCategory[category].length;
  renderDeck(category);
}



function generateStackedCardContent(iconPath, titleText) {
  return "<div style='display:flex; flex-direction:column; align-items:center; justify-content:center; max-height:100%; width:100%; box-sizing:border-box; gap:16px'>    <img src='" + iconPath + "' alt='icon top' style='height:80px; width:auto'>    <div style='font-size:1.8rem; font-weight:700; text-align:center; line-height:1.2; word-break:break-word'>" + titleText.replace(" ", "<br>") + "</div>    <img src='" + iconPath + "' alt='icon bottom flipped' style='height:80px; width:auto; transform:scaleY(-1)'>  </div>";
}


function renderDropdown(category) {
  const dropdownContainer = document.getElementById(`${category}-dropdown`);
  if (!dropdownContainer) return;

  const select = document.createElement('select');
  select.innerHTML = `<option value="">Go to a specific skill…</option>`;
  select.className = "w-[250px] px-4 py-2 rounded-lg shadow-sm border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 truncate";



  cardsByCategory[category].forEach((card, index) => {
    const title = currentMode === 'quiz' ? card.quizTitle : card.studyTitle || 'Untitled';
    const option = document.createElement('option');
    option.value = index;
    option.textContent = title;
    select.appendChild(option);
  });


  // Prevent click from triggering card advancement
  select.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Handle selection
  select.addEventListener('change', (e) => {
    const selectedIndex = parseInt(e.target.value);
    if (!isNaN(selectedIndex)) {
      currentIndices[category] = selectedIndex;
      renderDeck(category);
    }
  });


  dropdownContainer.innerHTML = ''; // Clear existing
  dropdownContainer.appendChild(select);
}

function attachIconRevealListeners() {
  document.querySelectorAll('.icon-transform-container').forEach(container => {
    if (!container.dataset.bound) {
      container.dataset.bound = 'true'; // prevent duplicate listeners
      container.addEventListener('mouseenter', () => {
        container.classList.add('revealed');
      });
    }
  });
}


window.onload = () => {
  Object.keys(cardsByCategory).forEach(renderDeck);
};
