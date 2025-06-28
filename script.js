


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
          <i class="fa-solid fa-check-to-slot magic-icon revealed-icon"></i>
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
quizFront: `
<div class="text-[0.8rem] leading-[1.05] flex justify-center">
  <div class="w-full max-w-md">
<p class="mb-0 text-center font-medium text-[0.7rem] leading-snug">
  <strong>Match each example to the correct ACCEPTS skill:</strong>
</p>
    <ul class="space-y-0 mt-[-0.25rem]">
      <li class="grid grid-cols-2 gap-x-2">
        <span>Going for a walk</span>
        <span class="border-l border-zinc-300 pl-3">Comparisons</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2">
        <span>Volunteering at a food pantry</span>
        <span class="border-l border-zinc-300 pl-3">Emotions</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2">
        <span>Thinking about how you’ve grown</span>
        <span class="border-l border-zinc-300 pl-3">Sensations</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2">
        <span>Watching a funny video</span>
        <span class="border-l border-zinc-300 pl-3">Pushing Away</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2">
        <span>Imagining putting the problem in a box</span>
        <span class="border-l border-zinc-300 pl-3">Thoughts</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2">
        <span>Counting backward from 100</span>
        <span class="border-l border-zinc-300 pl-3">Activities</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2">
        <span>Holding an ice cube</span>
        <span class="border-l border-zinc-300 pl-3">Contributing</span>
      </li>
    </ul>
  </div>
</div>
`
,
      quizTitle: "Distract Quiz",
      studyTitle: "Distract",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-brain magic-icon trail-icon"></i>
          <i class="fa-solid fa-hands-holding-circle magic-icon revealed-icon"></i>
          </div>
          <p>\n the Wise Mind "ACCEPTS"</p>
          `,
      quizBack: `<div class="card-content quiz-card" style="font-size: 1rem;"> 
Answer Key:

1. Activities – Going for a walk  
2. Contributing – Volunteering at a food pantry  
3. Comparisons – Thinking about how you’ve grown  
4. Emotions – Watching a funny video  
5. Pushing Away – Imagining putting the problem in a box  
6. Thoughts – Counting backward from 100  
7. Sensations – Holding an ice cube
</div>
`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 1.2rem;"> 
      Distract, a skill that helps reduce emotional intensity by shifting focus, 
      uses the ACCEPTS acronym to redirect attention away from distress. 
      Each letter stands for a healthy distraction strategy:
      Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, and Sensations,
      all which give your mind space to calm without avoiding reality.
      </div>`
    },
        {
      quizFront: `<div class="text-[0.8rem] leading-[1.05] flex justify-center">
  <div class="w-full max-w-md">
    <p class="mb-0 text-center font-medium text-[0.7rem] leading-snug">
      <strong>Match each icon to the correct IMPROVE strategy:</strong>
    </p>
    <ul class="space-y-0 mt-[-0.25rem]">
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span><i class="fa-solid fa-hand-holding-heart"></i></span>
        <span class="border-l border-zinc-300 pl-3">Encouragement</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span><i class="fa-solid fa-panorama"></i></span>
        <span class="border-l border-zinc-300 pl-3">Vacation</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span><i class="fa-solid fa-hands-praying"></i></span>
        <span class="border-l border-zinc-300 pl-3">Relaxation</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span><i class="fa-solid fa-plane-departure"></i></span>
        <span class="border-l border-zinc-300 pl-3">One Thing In The Moment</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span><i class="fa-solid fa-thumbs-up"></i></span>
        <span class="border-l border-zinc-300 pl-3">Meaning</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span><i class="fa-solid fa-spa"></i></span>
        <span class="border-l border-zinc-300 pl-3">Imagery</span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span><i class="fa-solid fa-bullseye"></i></span>
        <span class="border-l border-zinc-300 pl-3">Prayer</span>
      </li>
    </ul>
  </div>
</div>
`,
      quizTitle: "IMPROVE Quiz",
      studyTitle: "IMPROVE",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-arrow-trend-up magic-icon trail-icon"></i>
          <i class="fa-solid fa-ranking-star magic-icon revealed-icon"></i>
          </div>
          <p>\n IMPROVE the moment</p>
          `,
      quizBack: `<div class="text-[0.8rem] leading-[1.05] flex justify-center">
  <div class="w-full max-w-md">
    <p class="mb-0 text-center font-medium text-[0.7rem] leading-snug">
      <strong>Answer Key: Each IMPROVE strategy matched to its icon</strong>
    </p>
    <ul class="space-y-0 mt-[-0.25rem]">
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span>Imagery</span>
        <span class="border-l border-zinc-300 pl-3"><i class="fa-solid fa-panorama"></i></span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span>Meaning</span>
        <span class="border-l border-zinc-300 pl-3"><i class="fa-solid fa-hand-holding-heart"></i></span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span>Prayer</span>
        <span class="border-l border-zinc-300 pl-3"><i class="fa-solid fa-hands-praying"></i></span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span>Relaxation</span>
        <span class="border-l border-zinc-300 pl-3"><i class="fa-solid fa-spa"></i></span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span>One Thing In The Moment</span>
        <span class="border-l border-zinc-300 pl-3"><i class="fa-solid fa-bullseye"></i></span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span>Vacation</span>
        <span class="border-l border-zinc-300 pl-3"><i class="fa-solid fa-plane-departure"></i></span>
      </li>
      <li class="grid grid-cols-2 gap-x-2 items-center">
        <span>Encouragement</span>
        <span class="border-l border-zinc-300 pl-3"><i class="fa-solid fa-thumbs-up"></i></span>
      </li>
    </ul>
  </div>
</div>
`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 0.95rem;"> 
The IMPROVE skill helps make distressing situations more manageable by encouraging you to take intentional, 
positive actions that enhance your experience of the present moment. 
Each letter in IMPROVE stands for a strategy to shift your mindset or environment in a helpful way, 
from using imagery, to finding meaning, to turning to prayer, taking a brief break, 
focusing on one thing at a time, imagining a vacation, or offering yourself encouragement.
</div>`
    },
            {
      quizFront: `<div class="text-[1rem] leading-[1.05] flex justify-center">
  <div class="w-full max-w-md pt-0 mt-[-1.75rem]">
    <ul class="space-y-0 mt-[-0.25rem]">
     <p class="mb-0 text-center font-medium text-[1rem] leading-snug mt-[-0.75rem]">
      <strong>True or False:</strong>
    </p>
      <li>Half Smile means forcing a big, cheerful grin.</li>
      <li>Willing Hands involves turning your palms upward.</li>
      <li>You can use these skills even if you don’t feel calm yet.</li>
      <li>These skills are used to signal openness and reduce resistance.</li>
    </ul>
  </div>
</div>
`,
      quizTitle: "Half Smile and Willing Hands Quiz",
      studyTitle: "Half Smile and Willing Hands",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-face-smile magic-icon trail-icon"></i>
          <i class="fa-solid fa-hands-holding magic-icon revealed-icon"></i>
          </div>
          <p>\n shift your body, soothe your mind.</p>
          `,
      quizBack: `<div class="text-[1rem] leading-[1.05] flex justify-center">
  <div class="w-full max-w-md">
    <ul class="space-y-1 mt-[-0.25rem]">
        <p class="mb-0 text-center font-medium text-[1rem] leading-snug">
      <strong>Answers:</strong>
    </p>
      <li>❌ False – Half Smile means a subtle, relaxed expression.</li>
      <li>✅ True – Willing Hands involves open palms facing up or outward.</li>
      <li>✅ True – You don’t have to feel calm to begin using these skills.</li>
      <li>✅ True – These skills help reduce resistance by shifting posture.</li>
    </ul>
  </div>
</div>
`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 1.5rem;"> 
Half Smile and Willing Hands use small physical gestures, like softening your face or opening your palms, 
to help calm intense emotions and signal openness to your brain and body.
</div>`
    },
     {
      quizFront: "What are four possible steps to observe your thoughts mindfully?",
      quizTitle: "Mindful of current thoughts Quiz",
      studyTitle: "Mindful of current thoughts",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-eye magic-icon trail-icon"></i>
          <i class="fa-solid fa-comment-dots magic-icon revealed-icon"></i>
          </div>
          <p>\n see it for what it is, just a thought</p>
          `,
      quizBack: `<div class="card-content quiz-card" style="font-size: 0.95rem;"> 
1.) Relax your mind and body with a deep inhale

2.) Notice what thoughts are currently on your mind

3.) Observe the thoughts and ask questions like:
 • When did this thought arise?
 • What was I thinking or doing when I had it?

4.) Allow the thoughts to pass through without reacting
</div>
`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 1.5rem;"> 
Mindful of Current Thoughts is the practice of observing your thoughts as they come and go,
without judgment, avoidance, or over-identifying with them.
You learn to notice them, explore them, and let them pass through your mind.
</div>`
    },   
       {
      quizFront: "What are the potential pros and cons of acting *and* not acting on an urge?",
      quizTitle: "Pros and Cons Quiz",
      studyTitle: "Pros and Cons",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-scale-unbalanced magic-icon trail-icon"></i>
          <i class="fa-solid fa-list-check magic-icon revealed-icon"></i>
          </div>
          <p>\n weigh the outcomes, check your choices</p>
          `,
      quizBack: `<div class="text-[1rem] leading-tight">
  <ol class="list-decimal list-inside space-y-1">
    <li><strong>Pros of acting:</strong> Immediate relief or satisfaction</li>
    <li><strong>Cons of acting:</strong> Long-term regret or harm</li>
    <li><strong>Pros of not acting:</strong> Builds self-control and reduces damage</li>
    <li><strong>Cons of not acting:</strong> Discomfort or distress in the moment</li>
  </ol>
</div>`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 1.5rem;"> 
The Pros and Cons skill helps you slow down and make thoughtful choices 
by weighing the benefits and drawbacks of acting on an urge versus not acting. 
It can prevent impulsive decisions and keep you focused on long-term goals.
</div>`
    },
        {
      quizFront: `<div class="text-[1.2rem] leading-[1.3] text-center">
  Sort each statement as either <strong>Acceptance</strong> or <strong>Denial</strong>:<br><br>
   “This shouldn’t be happening to me.”<br>
   “I don’t like this, but I can’t change it right now.”<br>
   “If I ignore it, maybe it’ll go away.”<br>
   “This is painful, but it’s happening.”
</div>
`,
      quizTitle: "Radical Acceptance Quiz",
      studyTitle: "Radical Acceptance",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-square-root-variable magic-icon trail-icon"></i>
          <i class="fa-solid fa-dove magic-icon revealed-icon"></i>
          </div>
          <p>\n root into truth, rise into peace</p>
          `,
      quizBack: `Acceptance:
  “I don’t like this, but I can’t change it right now.”
  “This is painful, but it’s happening.”

Denial:
  “This shouldn’t be happening to me.”
  “If I ignore it, maybe it’ll go away.”

`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 1.5rem;"> 
Radical Acceptance means fully accepting reality as it is, 
including all thoughts, feelings, and experiences, even when they are painful or uncomfortable. 
It’s about letting go of resistance and choosing to face the moment without judgment or denial.
</div>`
    },
        {
      quizFront: `<div class="text-[1rem] leading-[1.05] flex justify-center">
  <div class="w-full max-w-md text-center">
    <p class="mb-3 font-medium text-[0.9rem] leading-snug">
      <strong>Match each sense to a soothing item:</strong>
    </p>
    <div class="grid grid-cols-2 gap-4 text-3xl">
      <!-- Left Column: Senses -->
      <div class="flex flex-col items-center gap-3">
        <span>👃</span>
        <span>👂</span>
        <span>👅</span>
        <span>👁️</span>
        <span>🤲</span>
      </div>

      <!-- Right Column: Soothing items (jumbled) -->
      <div class="flex flex-col items-center gap-3">
        <span>🎧</span>   <!-- Hearing -->
        <span>🧸</span>   <!-- Touch -->
        <span>🕯️</span>   <!-- Smell -->
        <span>🖼️</span>   <!-- Sight -->
        <span>🍬</span>   <!-- Taste -->
      </div>
    </div>
  </div>
</div>
`,
      quizTitle: "Self-soothe Quiz",
      studyTitle: "Self-soothe",
      studyFront:  `
          <div class="icon-transform-container">
          <i class="fa-solid fa-person-walking-arrow-loop-left magic-icon trail-icon"></i>
          <i class="fa-solid fa-mug-hot magic-icon revealed-icon"></i>
          </div>
          <p>\n circle back to calm, one sense at a time</p>
          `,
      quizBack: `<div class="text-[1rem] leading-[1.05] flex justify-center">
  <div class="w-full max-w-md text-center">
    <p class="mb-3 font-medium text-[0.9rem] leading-snug">
      <strong>Answer Key:</strong>
    </p>
    <div class="grid grid-cols-2 gap-4 text-3xl">
      <!-- Left Column: Senses -->
      <div class="flex flex-col items-center gap-3">
        <span>👃</span>
        <span>👂</span>
        <span>👅</span>
        <span>👁️</span>
        <span>🤲</span>
      </div>

      <!-- Right Column: Matched items -->
      <div class="flex flex-col items-center gap-3">
        <span>🕯️</span>   <!-- Smell -->
        <span>🎧</span>   <!-- Hearing -->
        <span>🍬</span>   <!-- Taste -->
        <span>🖼️</span>   <!-- Sight -->
        <span>🧸</span>   <!-- Touch -->
      </div>
    </div>
  </div>
</div>
`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 1.5rem;"> 
The Self-soothe skill helps you manage intense emotions by engaging your five senses. 
By focusing on comforting sights, sounds, smells, tastes, or textures, 
you can ground yourself in the present and create moments of calm during distress.
</div>`
    },
    {
      quizFront: `<div class="text-[1.3rem] leading-[1.2] flex justify-center">
  <div class="w-full max-w-md">
    <ul class="mt-0 space-y-0">
        <p class="mb-0 text-center font-medium text-[0.95rem] leading-snug">
      <strong>Put the STOP steps in the correct order:</strong>
    </p>
      <li>🚶 Take a step back</li>
      <li>🎯 Proceed Mindfully</li>
      <li>🛑 Stop</li>
      <li>👀 Observe\n</li>
    </ul>
  </div>
</div>
`,
      quizTitle: "STOP Skill Quiz",
      studyTitle: "STOP Skill",
      studyFront:  `
          <div class="icon-transform-container">
          <i class="fa-solid fa-person-circle-exclamation magic-icon trail-icon"></i>
          <i class="fa-solid fa-person-walking magic-icon revealed-icon"></i>
          </div>
          <p>\n pause, then proceed with purpose</p>
          `,
      quizBack: `<div class="text-[1rem] leading-[1.2] flex justify-center">
  <div class="w-full max-w-md">
    <p class="text-center font-medium text-[1.2rem] leading-snug">
      ✅ Correct order: 
      Stop → 
      Take a step back → 
      Observe → 
      Proceed mindfully
    </p>
  </div>
</div>
`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 0.9rem;"> 
The STOP skill helps you interrupt impulsive or emotion-driven reactions in moments of distress.
S – Stop what you're doing. Freeze your body. Don’t react.
T – Take a step back—breathe, leave the situation if needed.
O – Observe what’s happening inside and around you. What are your thoughts, feelings, and urges?
P – Proceed mindfully by choosing a response that aligns with your goals and values, not just your emotions.

Use this skill when you're about to act on strong feelings and need to regain control before making things worse.
</div>`
    },
    {
      quizFront: `<div class="card-content quiz-card" style="font-size: 1rem;">
     💡 Which situation is the best match for using the TIPP skill?

      1.) You feel overwhelmed and panicked after receiving upsetting news.

      2.) You’re unsure whether to take a new job offer or stay in your current one.

      3.) You’re sad because your friend forgot your birthday.

      4.) You’re bored and restless at home.
      </div>`,
      quizTitle: "TIPP Quiz",
      studyTitle: "TIPP",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-temperature-half magic-icon trail-icon"></i>
          <i class="fa-solid fa-lungs magic-icon revealed-icon"></i>
          </div>
          <p>\n regulate first, respond next</p>
          `,
      quizBack: ` <div class="card-content quiz-card" style="font-size: 1.5rem;"> 
✅ Correct Answer: #1
TIPP is used to regulate intense physiological activation (like panic, anxiety, or emotional flooding).
</div>`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 0.7rem;"> 
The TIPP skills are designed to help you quickly reduce overwhelming emotions by targeting your body’s physical response. When your emotions are intense, your nervous system is often in overdrive. TIPP helps regulate that through:

Temperature: Using cold (like ice packs or cold water) to lower your heart rate and shock your system into the present moment.

Intense Exercise: Brief bursts of movement (like running in place or jumping jacks) can release adrenaline and restore balance.

Paced Breathing: Slowing your breath helps calm the body and signals safety to your brain.

Progressive Muscle Relaxation: Tensing and releasing muscles helps discharge physical tension and promote a sense of calm.

These techniques work by shifting your body out of a state of alarm and into one where you can think more clearly and act with intention.
</div>`
    },
        {
      quizFront: `<div class="card-content quiz-card" style="font-size: 1rem;">

     🔄 One of these does NOT reflect the Turning the Mind skill:

      A) Noticing internal resistance

      B) Making an internal commitment to accept

      C) Changing the situation as quickly as possible

      D) Repeating your decision to accept, even if feelings return

      </div>`,
      quizTitle: "Turning the mind Quiz",
      studyTitle: "Turning the mind",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-arrows-spin magic-icon trail-icon"></i>
          <i class="fa-solid fa-lightbulb magic-icon revealed-icon"></i>
          </div>
          <p>\n turn back to insight, again and again</p>
          `,
      quizBack: ` <div class="card-content quiz-card" style="font-size: 1.5rem;"> 
✅ Correct Answer: C
Turning the Mind isn’t about changing the situation,
it’s about repeatedly choosing to accept what’s already happening, even when it’s hard.
</div>`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 0.9rem;"> 
Turning the Mind is a skill that helps individuals accept reality by making an intentional and repeated commitment to acceptance.
It begins with noticing the internal conflict between rejecting reality and choosing to accept it. 
Once aware, you make an inner commitment to accept what is, even if you do not like it. 
This decision often has to be made again and again, like turning the mind toward a different road each time you start to veer off. 
Over time, by recognizing your resistance and gently redirecting yourself back to acceptance, you reduce suffering and regain a sense of peace.
</div>`
    },
        {
      quizFront: `<div class="card-content quiz-card" style="font-size: 1.3rem;">

Fill in the blank:
Willfulness is often driven by ____, while willingness is guided by ____.

A) control · resistance
B) fear · anger
C) resentment · rigidity
D) resistance · openness


      </div>`,
      quizTitle: "Willingness Quiz",
      studyTitle: "Willingness",
      studyFront: `
          <div class="icon-transform-container">
          <i class="fa-solid fa-arrows-to-eye magic-icon trail-icon"></i>
          <i class="fa-solid fa-person-rays magic-icon revealed-icon"></i>
          </div>
          <p>\n notice what is, open to what comes</p>
          `,
      quizBack: ` <div class="card-content quiz-card" style="font-size: 1.5rem;"> 
✅ Correct Answer: D)
resistance · openness
</div>`,
      studyBack: ` <div class="card-content quiz-card" style="font-size: 1.2rem;"> 
The Willingness skill is about approaching life with openness, flexibility, and acceptance. 
It is the opposite of willfulness, which is a rigid and resistant mindset that clings to control and rejects change. 
Willingness means choosing to work with reality, especially when you'd rather push it away.
</div>`
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
