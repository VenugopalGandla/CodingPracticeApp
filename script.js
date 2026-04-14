const lessons = [
  {
    id: "week-1",
    week: "Week 1",
    title: "Meet Scratch",
    concept: "Event",
    tool: "Scratch",
    goal: "Learn that the green flag is a start signal and that code tells the computer what to do.",
    learn: "A project starts when an event happens. In Scratch, the green flag is one kind of event.",
    kidWords: "Event means a start signal. Sequence means steps in order.",
    project: "Make one character appear, move a little, and say hello.",
    link: "https://scratch.mit.edu/",
    steps: [
      "Open Scratch and choose a sprite you like.",
      "Drag in a green flag block.",
      "Add a move block under it.",
      "Add a say block so your sprite says hello.",
      "Press the green flag and watch what happens.",
      "Change one thing by yourself, like the words or the number of steps."
    ],
    challenge: "Add a sound or costume change when the green flag is clicked.",
    share: "Show how the green flag starts your project and explain what happens first.",
    debug: "If nothing happens, did you connect your blocks under the green flag block?",
    adultNote: "Read block names aloud if needed, but let the child decide what the sprite says or does."
  },
  {
    id: "week-2",
    week: "Week 2",
    title: "Steps in Order",
    concept: "Sequence",
    tool: "Scratch",
    goal: "Practice putting actions in the right order so the project makes sense.",
    learn: "Sequence means the computer follows steps from top to bottom.",
    kidWords: "Sequence means steps in order.",
    project: "Make a dance party where a character moves, turns, talks, and changes costume.",
    link: "https://scratch.mit.edu/",
    steps: [
      "Start with the green flag block.",
      "Add three or four action blocks in a row.",
      "Test the project and notice the exact order.",
      "Swap two blocks and test again.",
      "Decide which order feels best."
    ],
    challenge: "Add a second sprite that joins the dance after the first one starts.",
    share: "Tell a grown-up why the order of blocks matters.",
    debug: "If the dance feels strange, which two blocks should switch places?",
    adultNote: "Ask the child to predict what will happen before pressing run."
  },
  {
    id: "week-3",
    week: "Week 3",
    title: "Repeat Saves Time",
    concept: "Repeat",
    tool: "Scratch",
    goal: "Learn that repeat blocks help the computer do something again and again.",
    learn: "Loops help us avoid repeating the same blocks many times by hand.",
    kidWords: "Loop means repeat.",
    project: "Make a character bounce or dance the same move several times.",
    link: "https://scratch.mit.edu/",
    steps: [
      "Build a simple move and turn pattern.",
      "Wrap the pattern in a repeat block.",
      "Test it with a small repeat number.",
      "Change the repeat number and compare.",
      "Pick the version that looks best."
    ],
    challenge: "Try two different repeat patterns and decide which one is funnier or cooler.",
    share: "Show how repeat saves time instead of stacking the same blocks many times.",
    debug: "If the sprite only moves once, are the action blocks inside the repeat block?",
    adultNote: "This is a good week to praise efficiency: 'You taught the computer a shortcut.'"
  },
  {
    id: "week-4",
    week: "Week 4",
    title: "Move on a Map",
    concept: "Coordinates",
    tool: "Scratch",
    goal: "Understand that sprites live in places on the screen and can move to specific spots.",
    learn: "The stage is like a map. Sprites can go to places using x and y positions.",
    kidWords: "Coordinates are places on the screen.",
    project: "Make a mini maze or path-following game.",
    link: "https://scratch.mit.edu/",
    steps: [
      "Choose a background that looks like a path or map.",
      "Place your sprite at a start spot.",
      "Use motion blocks to move to a new place.",
      "Test whether the sprite ends up where you expected.",
      "Add a finish spot."
    ],
    challenge: "Create a school map or treasure path instead of a maze.",
    share: "Explain where your sprite starts and where it is trying to go.",
    debug: "If the sprite lands in the wrong place, which move number should change?",
    adultNote: "Do not over-explain x and y. Treat them as spots on a map first."
  },
  {
    id: "week-5",
    week: "Week 5",
    title: "Click to Play",
    concept: "Click Events",
    tool: "Scratch",
    goal: "Learn that projects can start when the child clicks a sprite.",
    learn: "An event can be a click, not just the green flag.",
    kidWords: "Event means something that starts the code.",
    project: "Make a clicker game where points come from clicking the sprite.",
    link: "https://scratch.mit.edu/",
    steps: [
      "Choose a fun sprite to click.",
      "Use the block for when this sprite clicked.",
      "Make the sprite react with a sound, move, or message.",
      "Test clicking many times.",
      "Add something that makes the clicks feel more exciting."
    ],
    challenge: "Make the sprite change costume each time it is clicked.",
    share: "Show that clicking the sprite starts the action without the green flag.",
    debug: "If clicking does nothing, did you use the sprite-clicked block on the correct sprite?",
    adultNote: "Keep the goal playful this week. Confidence matters more than polish."
  },
  {
    id: "week-6",
    week: "Week 6",
    title: "Make It Feel Alive",
    concept: "Looks and Sound",
    tool: "Scratch",
    goal: "Use messages, costume changes, and sounds to give a project personality.",
    learn: "Coding is not only logic. It also helps stories, characters, and feelings come alive.",
    kidWords: "A costume is how the sprite looks. Sound helps tell the story.",
    project: "Build a pet simulator starter where the pet reacts when clicked.",
    link: "https://scratch.mit.edu/",
    steps: [
      "Pick a pet sprite or any favorite character.",
      "Make it say something friendly.",
      "Add a sound or costume change when clicked.",
      "Test whether it feels alive.",
      "Add one extra reaction, like jumping or spinning."
    ],
    challenge: "Give your pet two moods, like happy and sleepy.",
    share: "Show what makes your character feel alive and not just still.",
    debug: "If the pet changes too fast, should one action wait a moment before the next one?",
    adultNote: "Let the child lead the theme and personality choices."
  },
  {
    id: "week-7",
    week: "Week 7",
    title: "Remix Your Favorite",
    concept: "Remixing",
    tool: "Scratch",
    goal: "Build confidence by improving an older project instead of starting over.",
    learn: "Real coders often improve something that already works.",
    kidWords: "Remix means change and improve something you already built.",
    project: "Pick your favorite earlier project and make it better.",
    link: "https://scratch.mit.edu/",
    steps: [
      "Choose one project from weeks 1 to 6.",
      "Decide one thing to add and one thing to improve.",
      "Test after each small change.",
      "Keep only the changes you like.",
      "Give the project a new title."
    ],
    challenge: "Add a new background or second character to your remix.",
    share: "Explain what the old version did and what your new version does better.",
    debug: "If the project broke after a change, what was the last thing you added?",
    adultNote: "This week is about ownership. Improvement is the learning goal."
  },
  {
    id: "week-8",
    week: "Week 8",
    title: "Showcase Project",
    concept: "Putting Ideas Together",
    tool: "Scratch",
    goal: "Use events, sequence, repeat, and creativity in one small project the child is proud to share.",
    learn: "Big projects are really small ideas combined together.",
    kidWords: "Showcase means a project you are proud to show.",
    project: "Make a small final Phase 1 project like a pet game, dance story, or routine helper.",
    link: "https://scratch.mit.edu/",
    steps: [
      "Choose one idea you care about.",
      "Plan the beginning, middle, and ending.",
      "Build the simplest working version first.",
      "Add one fun extra touch.",
      "Practice showing it to someone."
    ],
    challenge: "Add one thing the project does on its own, like repeating movement or a sound pattern.",
    share: "Tell a grown-up what coding ideas you used in your project.",
    debug: "If one part works and one part does not, which tiny section should you test by itself?",
    adultNote: "Celebrate completion. A finished small project is a big win."
  }
];

const projectSets = {
  games: [
    {
      icon: "🎮",
      title: "Maze Game",
      description: "Move through a path and practice following steps in order."
    },
    {
      icon: "🖱️",
      title: "Clicker Game",
      description: "Click a sprite to make something happen and build event confidence."
    },
    {
      icon: "🐾",
      title: "Pet Simulator",
      description: "Make a pet feel alive with sounds, movement, and reactions."
    },
    {
      icon: "💃",
      title: "Dance Party",
      description: "Use sequence and repeat to make a silly or cool dance."
    }
  ],
  tools: [
    {
      icon: "🌞",
      title: "Morning Routine Helper",
      description: "Turn everyday steps into a friendly animation that helps at home."
    },
    {
      icon: "📚",
      title: "Homework Reminder",
      description: "Create a project that says what to do first, next, and last."
    },
    {
      icon: "🌱",
      title: "Water-the-Plant Helper",
      description: "Click to remind a child to take care of something important."
    },
    {
      icon: "🏫",
      title: "School Day Helper",
      description: "Build a simple helper about packing, routines, or getting ready."
    }
  ]
};

const storageKey = "code-quest-progress";

const lessonList = document.querySelector("#lesson-list");
const lessonItemTemplate = document.querySelector("#lesson-item-template");
const projectList = document.querySelector("#project-list");
const projectTemplate = document.querySelector("#project-card-template");
const tabButtons = document.querySelectorAll(".tab-button");
const completeButton = document.querySelector("#complete-button");

const lessonWeek = document.querySelector("#lesson-week");
const lessonTitle = document.querySelector("#lesson-title");
const lessonConcept = document.querySelector("#lesson-concept");
const lessonTool = document.querySelector("#lesson-tool");
const lessonGoal = document.querySelector("#lesson-goal");
const lessonLearn = document.querySelector("#lesson-learn");
const lessonKidWords = document.querySelector("#lesson-kid-words");
const lessonProject = document.querySelector("#lesson-project");
const lessonLink = document.querySelector("#lesson-link");
const lessonSteps = document.querySelector("#lesson-steps");
const lessonChallenge = document.querySelector("#lesson-challenge");
const lessonShare = document.querySelector("#lesson-share");
const lessonDebug = document.querySelector("#lesson-debug");
const lessonAdultNote = document.querySelector("#lesson-adult-note");

const progressSummary = document.querySelector("#progress-summary");
const progressDetail = document.querySelector("#progress-detail");
const progressFill = document.querySelector("#progress-fill");

let selectedLessonId = lessons[0].id;
let progress = loadProgress();

function loadProgress() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function isComplete(lessonId) {
  return Boolean(progress[lessonId]);
}

function renderLessonList() {
  lessonList.innerHTML = "";

  lessons.forEach((lesson) => {
    const node = lessonItemTemplate.content.cloneNode(true);
    const button = node.querySelector(".lesson-item");
    const isSelected = lesson.id === selectedLessonId;
    const done = isComplete(lesson.id);

    button.dataset.lessonId = lesson.id;
    button.classList.toggle("is-active", isSelected);
    button.classList.toggle("is-complete", done);
    button.querySelector(".lesson-item-week").textContent = lesson.week;
    button.querySelector(".lesson-item-title").textContent = lesson.title;
    button.querySelector(".lesson-item-concept").textContent = lesson.concept;
    button.querySelector(".lesson-item-check").textContent = done ? "✓" : "○";

    button.addEventListener("click", () => {
      selectedLessonId = lesson.id;
      renderLessonList();
      renderSelectedLesson();
    });

    lessonList.appendChild(node);
  });
}

function renderSelectedLesson() {
  const lesson = lessons.find((item) => item.id === selectedLessonId);
  if (!lesson) {
    return;
  }

  lessonWeek.textContent = lesson.week;
  lessonTitle.textContent = lesson.title;
  lessonConcept.textContent = lesson.concept;
  lessonTool.textContent = lesson.tool;
  lessonGoal.textContent = lesson.goal;
  lessonLearn.textContent = lesson.learn;
  lessonKidWords.textContent = lesson.kidWords;
  lessonProject.textContent = lesson.project;
  lessonLink.href = lesson.link;
  lessonSteps.innerHTML = "";
  lesson.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    lessonSteps.appendChild(item);
  });
  lessonChallenge.textContent = lesson.challenge;
  lessonShare.textContent = lesson.share;
  lessonDebug.textContent = lesson.debug;
  lessonAdultNote.textContent = lesson.adultNote;
  completeButton.textContent = isComplete(lesson.id)
    ? "Lesson Complete ✓"
    : "Mark Lesson Complete";
  completeButton.classList.toggle("is-done", isComplete(lesson.id));
}

function renderProjects(category) {
  projectList.innerHTML = "";

  projectSets[category].forEach((project) => {
    const node = projectTemplate.content.cloneNode(true);
    node.querySelector(".project-icon").textContent = project.icon;
    node.querySelector(".project-title").textContent = project.title;
    node.querySelector(".project-description").textContent = project.description;
    projectList.appendChild(node);
  });
}

function renderProgress() {
  const doneCount = lessons.filter((lesson) => isComplete(lesson.id)).length;
  const percent = Math.round((doneCount / lessons.length) * 100);

  progressSummary.textContent = `${doneCount} of ${lessons.length} lessons finished`;
  progressDetail.textContent =
    doneCount === lessons.length
      ? "Amazing work. Phase 1 is complete and ready to celebrate."
      : "Finish one lesson at a time. Slow and steady is the goal.";
  progressFill.style.width = `${percent}%`;
}

completeButton.addEventListener("click", () => {
  progress[selectedLessonId] = true;
  saveProgress();
  renderLessonList();
  renderSelectedLesson();
  renderProgress();
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((otherButton) => {
      otherButton.classList.toggle("is-active", otherButton === button);
      otherButton.setAttribute("aria-selected", String(otherButton === button));
    });

    renderProjects(button.dataset.tab);
  });
});

renderLessonList();
renderSelectedLesson();
renderProjects("games");
renderProgress();
