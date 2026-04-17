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
    link: "https://scratch.mit.edu/projects/editor/",
    starterTip: "Build only these starter blocks first. Once they work, add your own fun changes.",
    starterBlocks: ["when green flag clicked", "move 10 steps", "say Hello! for 2 seconds"],
    activity: {
      type: "quiz",
      title: "Pick the start block",
      question: "Which block should go at the top if you want your project to start when the green flag is clicked?",
      choices: ["when green flag clicked", "move 10 steps", "say Hello!"],
      answerIndex: 0,
      success: "Yes. The green flag block is the start signal.",
      retry: "Try again. Look for the block that tells Scratch when to begin."
    },
    steps: ["Open Scratch and choose a sprite you like.", "Drag in a green flag block.", "Add a move block under it.", "Add a say block so your sprite says hello.", "Press the green flag and watch what happens.", "Change one thing by yourself, like the words or the number of steps."],
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
    link: "https://scratch.mit.edu/projects/editor/",
    starterTip: "Start with a short three-step dance. The order matters.",
    starterBlocks: ["when green flag clicked", "move 20 steps", "turn 15 degrees", "say Dance time! for 2 seconds"],
    activity: {
      type: "reorder",
      title: "Drag the dance into order",
      question: "Drag the blocks into the order that makes the dance start correctly.",
      items: ["say Dance time!", "turn 15 degrees", "when green flag clicked", "move 20 steps"],
      solution: ["when green flag clicked", "move 20 steps", "turn 15 degrees", "say Dance time!"],
      success: "Nice work. You put the steps in order.",
      retry: "Close. The start block should be first, then the action steps follow."
    },
    steps: ["Start with the green flag block.", "Add three or four action blocks in a row.", "Test the project and notice the exact order.", "Swap two blocks and test again.", "Decide which order feels best."],
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
    link: "https://scratch.mit.edu/projects/editor/",
    starterTip: "Put the movement blocks inside the repeat block so they happen again and again.",
    starterBlocks: ["when green flag clicked", "repeat 6", "move 20 steps", "turn 15 degrees"],
    activity: {
      type: "bucket",
      title: "Drag blocks into the repeat loop",
      question: "Drag the actions that should happen again and again into the Repeat zone.",
      zones: [
        { id: "repeat", label: "Inside Repeat" },
        { id: "outside", label: "Outside Repeat" }
      ],
      items: [
        { id: "a", label: "move 20 steps", zone: "repeat" },
        { id: "b", label: "turn 15 degrees", zone: "repeat" },
        { id: "c", label: "when green flag clicked", zone: "outside" },
        { id: "d", label: "repeat 6", zone: "outside" }
      ],
      success: "Yes. Only the action blocks go inside the repeat loop.",
      retry: "Almost. Put the movement actions inside the loop and keep the start and repeat blocks outside."
    },
    steps: ["Build a simple move and turn pattern.", "Wrap the pattern in a repeat block.", "Test it with a small repeat number.", "Change the repeat number and compare.", "Pick the version that looks best."],
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
    link: "https://scratch.mit.edu/projects/editor/",
    starterTip: "Pick a start place and an end place first before adding more movement.",
    starterBlocks: ["when green flag clicked", "go to x: -150 y: 0", "move 30 steps", "turn 15 degrees"],
    activity: {
      type: "grid",
      title: "Tap the right map square",
      question: "Your sprite starts at the center. Tap the treasure square in the top-right corner.",
      size: 3,
      answerIndex: 2,
      labels: ["", "", "Treasure", "", "Start", "", "", "", ""],
      success: "Great. You found the top-right map spot.",
      retry: "Try again. Top-right means the top row and the far-right square."
    },
    steps: ["Choose a background that looks like a path or map.", "Place your sprite at a start spot.", "Use motion blocks to move to a new place.", "Test whether the sprite ends up where you expected.", "Add a finish spot."],
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
    link: "https://scratch.mit.edu/projects/editor/",
    starterTip: "This week, the sprite-clicked block is your start block instead of the green flag.",
    starterBlocks: ["when this sprite clicked", "play sound pop", "change costume", "say Nice click! for 1 second"],
    activity: {
      type: "quiz",
      title: "Choose the click start",
      question: "Which block should be first if you want the action to happen when you tap the sprite?",
      choices: ["when this sprite clicked", "when green flag clicked", "move 10 steps"],
      answerIndex: 0,
      success: "Yes. That block listens for a click on the sprite.",
      retry: "Try again. You want the start block that watches for a click."
    },
    steps: ["Choose a fun sprite to click.", "Use the block for when this sprite clicked.", "Make the sprite react with a sound, move, or message.", "Test clicking many times.", "Add something that makes the clicks feel more exciting."],
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
    link: "https://scratch.mit.edu/projects/editor/",
    starterTip: "Start with one happy reaction. Then add a second reaction if there is time.",
    starterBlocks: ["when this sprite clicked", "switch costume to happy", "play sound meow", "say I am awake! for 2 seconds"],
    activity: {
      type: "match",
      title: "Match the bug to the fix",
      question: "Match each problem with the best fix.",
      pairs: [
        { left: "Pet feels boring", right: "Add a sound and costume change" },
        { left: "Pet changes too fast", right: "Add a short wait" },
        { left: "Pet says nothing", right: "Add a say block" }
      ],
      success: "Nice matching. You found fixes that make the pet feel more alive.",
      retry: "Some matches are off. Try pairing each problem with the fix that helps it most."
    },
    steps: ["Pick a pet sprite or any favorite character.", "Make it say something friendly.", "Add a sound or costume change when clicked.", "Test whether it feels alive.", "Add one extra reaction, like jumping or spinning."],
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
    link: "https://scratch.mit.edu/projects/editor/",
    starterTip: "Start by copying the smallest working version of your favorite project idea.",
    starterBlocks: ["choose your favorite old starter", "keep the main start block", "add one new block", "test after each tiny change"],
    activity: {
      type: "bucket",
      title: "Sort ideas into keep or change",
      question: "Drag each idea into the best remix bucket.",
      zones: [
        { id: "keep", label: "Keep From Old Project" },
        { id: "change", label: "Change or Add" }
      ],
      items: [
        { id: "a", label: "Main start block", zone: "keep" },
        { id: "b", label: "Add a new background", zone: "change" },
        { id: "c", label: "Working movement rule", zone: "keep" },
        { id: "d", label: "Add a second character", zone: "change" }
      ],
      success: "Yes. A remix keeps some good parts and changes others.",
      retry: "Close. Keep the parts that already work, and change the parts you want to improve."
    },
    steps: ["Choose one project from weeks 1 to 6.", "Decide one thing to add and one thing to improve.", "Test after each small change.", "Keep only the changes you like.", "Give the project a new title."],
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
    link: "https://scratch.mit.edu/projects/editor/",
    starterTip: "Begin with the smallest version that works. Then add one sparkle at a time.",
    starterBlocks: ["choose a start block", "add 2 or 3 main action blocks", "test your simple version", "add one extra fun touch"],
    activity: {
      type: "reorder",
      title: "Build the project in calm order",
      question: "Drag the project steps into a smart building order.",
      items: ["Add every idea at once", "Build a simple version first", "Test the project", "Add one extra fun touch"],
      solution: ["Build a simple version first", "Test the project", "Add one extra fun touch", "Add every idea at once"],
      success: "Great planning. Small first, then test, then add sparkle.",
      retry: "Try again. The calmest path is build a small version first, then test, then add more."
    },
    steps: ["Choose one idea you care about.", "Plan the beginning, middle, and ending.", "Build the simplest working version first.", "Add one fun extra touch.", "Practice showing it to someone."],
    challenge: "Add one thing the project does on its own, like repeating movement or a sound pattern.",
    share: "Tell a grown-up what coding ideas you used in your project.",
    debug: "If one part works and one part does not, which tiny section should you test by itself?",
    adultNote: "Celebrate completion. A finished small project is a big win."
  }
];

const projectSets = {
  games: [
    { icon: "🎮", title: "Maze Game", description: "Move through a path and practice following steps in order." },
    { icon: "🖱️", title: "Clicker Game", description: "Click a sprite to make something happen and build event confidence." },
    { icon: "🐾", title: "Pet Simulator", description: "Make a pet feel alive with sounds, movement, and reactions." },
    { icon: "💃", title: "Dance Party", description: "Use sequence and repeat to make a silly or cool dance." }
  ],
  tools: [
    { icon: "🌞", title: "Morning Routine Helper", description: "Turn everyday steps into a friendly animation that helps at home." },
    { icon: "📚", title: "Homework Reminder", description: "Create a project that says what to do first, next, and last." },
    { icon: "🌱", title: "Water-the-Plant Helper", description: "Click to remind a child to take care of something important." },
    { icon: "🏫", title: "School Day Helper", description: "Build a simple helper about packing, routines, or getting ready." }
  ]
};

const storageKey = "code-quest-progress";
const lessonList = document.querySelector("#lesson-list");
const lessonItemTemplate = document.querySelector("#lesson-item-template");
const projectList = document.querySelector("#project-list");
const projectTemplate = document.querySelector("#project-card-template");
const tabButtons = document.querySelectorAll(".tab-button");
const completeButton = document.querySelector("#complete-button");
const starterFocusButton = document.querySelector("#starter-focus-button");
const activityResetButton = document.querySelector("#activity-reset-button");
const activityCheckButton = document.querySelector("#activity-check-button");
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
const starterTip = document.querySelector("#starter-tip");
const starterList = document.querySelector("#starter-list");
const activityTitle = document.querySelector("#activity-title");
const activityQuestion = document.querySelector("#activity-question");
const activityPlayground = document.querySelector("#activity-playground");
const activityChoices = document.querySelector("#activity-choices");
const activityFeedback = document.querySelector("#activity-feedback");
const progressSummary = document.querySelector("#progress-summary");
const progressDetail = document.querySelector("#progress-detail");
const progressFill = document.querySelector("#progress-fill");
let selectedLessonId = lessons[0].id;
let progress = loadProgress();
let activityState = null;
let draggedItemId = null;

function loadProgress() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveProgress() { localStorage.setItem(storageKey, JSON.stringify(progress)); }
function isComplete(lessonId) { return Boolean(progress[lessonId]); }
function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}
function setActivityFeedback(kind, message) {
  activityFeedback.textContent = message;
  activityFeedback.className = `activity-feedback ${kind}`;
}
function resetActivityFeedback() {
  activityFeedback.textContent = "";
  activityFeedback.className = "activity-feedback";
}
function renderLessonList() {
  lessonList.innerHTML = "";
  lessons.forEach((lesson) => {
    const node = lessonItemTemplate.content.cloneNode(true);
    const button = node.querySelector(".lesson-item");
    const done = isComplete(lesson.id);
    button.dataset.lessonId = lesson.id;
    button.classList.toggle("is-active", lesson.id === selectedLessonId);
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
  if (!lesson) return;
  lessonWeek.textContent = lesson.week;
  lessonTitle.textContent = lesson.title;
  lessonConcept.textContent = lesson.concept;
  lessonTool.textContent = lesson.tool;
  lessonGoal.textContent = lesson.goal;
  lessonLearn.textContent = lesson.learn;
  lessonKidWords.textContent = lesson.kidWords;
  lessonProject.textContent = lesson.project;
  lessonLink.href = lesson.link;
  lessonLink.textContent = `Open ${lesson.week} Scratch Starter`;
  lessonSteps.innerHTML = "";
  starterList.innerHTML = "";
  lesson.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    lessonSteps.appendChild(item);
  });
  lesson.starterBlocks.forEach((block) => {
    const item = document.createElement("li");
    item.textContent = block;
    starterList.appendChild(item);
  });
  starterTip.textContent = lesson.starterTip;
  lessonChallenge.textContent = lesson.challenge;
  lessonShare.textContent = lesson.share;
  lessonDebug.textContent = lesson.debug;
  lessonAdultNote.textContent = lesson.adultNote;
  completeButton.textContent = isComplete(lesson.id) ? "Lesson Complete ✓" : "Mark Lesson Complete";
  completeButton.classList.toggle("is-done", isComplete(lesson.id));
  renderActivity(lesson.activity);
}
function renderActivity(activity) {
  activityTitle.textContent = activity.title;
  activityQuestion.textContent = activity.question;
  activityPlayground.innerHTML = "";
  activityChoices.innerHTML = "";
  resetActivityFeedback();
  activityCheckButton.hidden = false;
  activityResetButton.hidden = false;
  if (activity.type === "quiz") {
    activityCheckButton.hidden = true;
    activity.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = choice;
      button.addEventListener("click", () => {
        const correct = index === activity.answerIndex;
        setActivityFeedback(correct ? "success" : "retry", correct ? activity.success : activity.retry);
      });
      activityChoices.appendChild(button);
    });
    activityState = { type: "quiz" };
    return;
  }
  if (activity.type === "reorder") {
    activityState = { type: "reorder", order: shuffle(activity.items) };
    renderReorderPlayground();
    return;
  }
  if (activity.type === "bucket") {
    activityState = { type: "bucket", zones: activity.zones, items: activity.items.map((item) => ({ ...item, currentZone: "bank" })) };
    renderBucketPlayground();
    return;
  }
  if (activity.type === "grid") {
    activityCheckButton.hidden = true;
    activityState = { type: "grid", selectedIndex: null };
    renderGridPlayground(activity);
    return;
  }
  if (activity.type === "match") {
    activityState = { type: "match", selectedLeft: null, matches: {}, rightChoices: shuffle(activity.pairs.map((pair) => pair.right)) };
    renderMatchPlayground(activity);
  }
}
function renderReorderPlayground() {
  const list = document.createElement("div");
  list.className = "reorder-list";
  activityState.order.forEach((label, index) => {
    const card = document.createElement("div");
    card.className = "drag-card";
    card.draggable = true;
    card.textContent = label;
    card.addEventListener("dragstart", () => { draggedItemId = String(index); });
    card.addEventListener("dragover", (event) => event.preventDefault());
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      const from = Number(draggedItemId);
      const to = index;
      if (Number.isNaN(from) || from === to) return;
      const next = [...activityState.order];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      activityState.order = next;
      renderReorderPlayground();
    });
    list.appendChild(card);
  });
  activityPlayground.innerHTML = "";
  activityPlayground.appendChild(list);
}
function renderBucketPlayground() {
  const wrapper = document.createElement("div");
  wrapper.className = "bucket-layout";
  const bank = document.createElement("div");
  bank.className = "drop-zone bank-zone";
  bank.dataset.zone = "bank";
  const bankTitle = document.createElement("strong");
  bankTitle.textContent = "Block Bank";
  bank.appendChild(bankTitle);
  const zoneWrap = document.createElement("div");
  zoneWrap.className = "bucket-zones";
  const zoneMap = { bank };
  activityState.zones.forEach((zone) => {
    const zoneElement = document.createElement("div");
    zoneElement.className = "drop-zone";
    zoneElement.dataset.zone = zone.id;
    const title = document.createElement("strong");
    title.textContent = zone.label;
    zoneElement.appendChild(title);
    zoneMap[zone.id] = zoneElement;
    zoneWrap.appendChild(zoneElement);
  });
  Object.values(zoneMap).forEach((zoneElement) => {
    zoneElement.addEventListener("dragover", (event) => event.preventDefault());
    zoneElement.addEventListener("drop", (event) => {
      event.preventDefault();
      const item = activityState.items.find((entry) => entry.id === draggedItemId);
      if (!item) return;
      item.currentZone = zoneElement.dataset.zone;
      renderBucketPlayground();
    });
  });
  activityState.items.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "drag-chip";
    chip.draggable = true;
    chip.textContent = item.label;
    chip.addEventListener("dragstart", () => { draggedItemId = item.id; });
    (zoneMap[item.currentZone] || bank).appendChild(chip);
  });
  wrapper.appendChild(bank);
  wrapper.appendChild(zoneWrap);
  activityPlayground.innerHTML = "";
  activityPlayground.appendChild(wrapper);
}
function renderGridPlayground(activity) {
  const grid = document.createElement("div");
  grid.className = "map-grid";
  grid.style.setProperty("--grid-size", String(activity.size));
  activity.labels.forEach((label, index) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "map-cell";
    cell.textContent = label || "";
    cell.addEventListener("click", () => {
      const correct = index === activity.answerIndex;
      activityState.selectedIndex = index;
      setActivityFeedback(correct ? "success" : "retry", correct ? activity.success : activity.retry);
      renderGridPlayground(activity);
    });
    if (activityState.selectedIndex === index) cell.classList.add("is-selected");
    grid.appendChild(cell);
  });
  activityPlayground.innerHTML = "";
  activityPlayground.appendChild(grid);
}
function renderMatchPlayground(activity) {
  const wrapper = document.createElement("div");
  wrapper.className = "match-layout";
  const leftColumn = document.createElement("div");
  const rightColumn = document.createElement("div");
  leftColumn.className = "match-column";
  rightColumn.className = "match-column";
  activity.pairs.forEach((pair) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "match-card";
    button.textContent = pair.left;
    button.addEventListener("click", () => {
      activityState.selectedLeft = pair.left;
      renderMatchPlayground(activity);
    });
    if (activityState.selectedLeft === pair.left) button.classList.add("is-selected");
    if (activityState.matches[pair.left]) button.classList.add("is-matched");
    leftColumn.appendChild(button);
  });
  activityState.rightChoices.forEach((right) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "match-card";
    button.textContent = right;
    button.addEventListener("click", () => {
      if (!activityState.selectedLeft) return;
      activityState.matches[activityState.selectedLeft] = right;
      activityState.selectedLeft = null;
      renderMatchPlayground(activity);
    });
    if (Object.values(activityState.matches).includes(right)) button.classList.add("is-matched");
    rightColumn.appendChild(button);
  });
  wrapper.appendChild(leftColumn);
  wrapper.appendChild(rightColumn);
  activityPlayground.innerHTML = "";
  activityPlayground.appendChild(wrapper);
}
function checkActivity() {
  const lesson = lessons.find((item) => item.id === selectedLessonId);
  const activity = lesson?.activity;
  if (!activity) return;
  if (activity.type === "reorder") {
    const correct = JSON.stringify(activityState.order) === JSON.stringify(activity.solution);
    setActivityFeedback(correct ? "success" : "retry", correct ? activity.success : activity.retry);
    return;
  }
  if (activity.type === "bucket") {
    const correct = activityState.items.every((item) => item.currentZone === item.zone);
    setActivityFeedback(correct ? "success" : "retry", correct ? activity.success : activity.retry);
    return;
  }
  if (activity.type === "match") {
    const correct = activity.pairs.every((pair) => activityState.matches[pair.left] === pair.right);
    setActivityFeedback(correct ? "success" : "retry", correct ? activity.success : activity.retry);
  }
}
function resetActivity() {
  const lesson = lessons.find((item) => item.id === selectedLessonId);
  if (!lesson) return;
  renderActivity(lesson.activity);
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
  progressDetail.textContent = doneCount === lessons.length ? "Amazing work. Phase 1 is complete and ready to celebrate." : "Finish one lesson at a time. Slow and steady is the goal.";
  progressFill.style.width = `${percent}%`;
}
completeButton.addEventListener("click", () => {
  progress[selectedLessonId] = true;
  saveProgress();
  renderLessonList();
  renderSelectedLesson();
  renderProgress();
});
starterFocusButton.addEventListener("click", () => {
  starterList.scrollIntoView({ behavior: "smooth", block: "center" });
});
activityResetButton.addEventListener("click", resetActivity);
activityCheckButton.addEventListener("click", checkActivity);
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
