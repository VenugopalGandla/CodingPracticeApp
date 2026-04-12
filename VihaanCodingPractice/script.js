const phases = [
  {
    number: "Phase 1",
    tool: "Scratch",
    title: "Playful Foundations",
    goal: "Learn that code is a set of instructions by making moving, talking, clicking characters.",
    concepts: ["sequence", "events", "movement", "repeat", "sounds"],
    projects: ["Animated hello story", "Mini maze", "Clicker game", "Pet simulator"],
    showcase: "Build a tiny pet game, dance story, or morning routine helper."
  },
  {
    number: "Phase 2",
    tool: "Scratch",
    title: "Logic and Interactivity",
    goal: "Use choices, timers, score, and memory boxes to make projects feel smart and alive.",
    concepts: ["choice", "variables", "score", "timers", "bug hunting"],
    projects: ["Catching game", "Quiz game", "Reaction game", "Chore tracker"],
    showcase: "Make a game or helper that keeps score and reacts to what the player does."
  },
  {
    number: "Phase 3",
    tool: "p5.js or App Lab",
    title: "Tiny Typed Code",
    goal: "Bridge from blocks to typed code by changing small parts of starter code with confidence.",
    concepts: ["values", "colors", "typed variables", "tiny ifs", "inputs"],
    projects: ["Bouncing ball", "Drawing toy", "Name art generator", "Random choice picker"],
    showcase: "Remix a typed-code starter into something that feels personal and useful."
  },
  {
    number: "Phase 4",
    tool: "Child's Choice",
    title: "Create and Invent",
    goal: "Plan, build, test, and polish a bigger project that solves a real problem or tells a fun story.",
    concepts: ["planning", "testing", "feedback", "polish", "ownership"],
    projects: ["Adventure game", "Study helper", "Habit tracker", "Allowance tracker"],
    showcase: "Finish a mostly original final project and share how it works."
  }
];

const projectSets = {
  games: [
    {
      icon: "🎮",
      title: "Maze Game",
      description: "Guide a character through a path and practice movement, planning, and testing."
    },
    {
      icon: "🖱️",
      title: "Clicker Game",
      description: "Tap to collect points and learn how score and events work together."
    },
    {
      icon: "🐾",
      title: "Pet Simulator",
      description: "Make a pet react to clicks, sounds, and simple choices."
    },
    {
      icon: "⚡",
      title: "Reaction Game",
      description: "Race the timer and see how fast you can respond."
    },
    {
      icon: "🏀",
      title: "Catching Game",
      description: "Catch falling objects, track points, and level up the challenge."
    },
    {
      icon: "🧭",
      title: "Adventure Quest",
      description: "Build a bigger story game with goals, rules, and a finish screen."
    }
  ],
  tools: [
    {
      icon: "🌞",
      title: "Morning Routine Helper",
      description: "Create a cheerful guide for getting ready for school step by step."
    },
    {
      icon: "✅",
      title: "Chore Tracker",
      description: "Use points or checkmarks to remember jobs and celebrate progress."
    },
    {
      icon: "📚",
      title: "Reading Log",
      description: "Track books, minutes, or pages with a simple friendly screen."
    },
    {
      icon: "💛",
      title: "Feelings Check-In",
      description: "Build buttons that help a child name how they feel today."
    },
    {
      icon: "🎲",
      title: "Random Choice Picker",
      description: "Let the computer choose between snacks, games, chores, or fun activities."
    },
    {
      icon: "🐶",
      title: "Pet Care Helper",
      description: "Make a tool that reminds you what your pet needs and when."
    }
  ]
};

const phaseGrid = document.querySelector("#phase-grid");
const phaseTemplate = document.querySelector("#phase-card-template");
const projectList = document.querySelector("#project-list");
const projectTemplate = document.querySelector("#project-card-template");
const tabButtons = document.querySelectorAll(".tab-button");

function renderPhases() {
  phases.forEach((phase) => {
    const node = phaseTemplate.content.cloneNode(true);
    node.querySelector(".phase-number").textContent = phase.number;
    node.querySelector(".phase-tool").textContent = phase.tool;
    node.querySelector(".phase-title").textContent = phase.title;
    node.querySelector(".phase-goal").textContent = phase.goal;
    node.querySelector(".phase-showcase").textContent = phase.showcase;

    const concepts = node.querySelector(".concepts");
    phase.concepts.forEach((concept) => {
      const pill = document.createElement("span");
      pill.textContent = concept;
      concepts.appendChild(pill);
    });

    const projects = node.querySelector(".phase-projects");
    phase.projects.forEach((project) => {
      const item = document.createElement("li");
      item.textContent = project;
      projects.appendChild(item);
    });

    phaseGrid.appendChild(node);
  });
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

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((otherButton) => {
      otherButton.classList.toggle("is-active", otherButton === button);
      otherButton.setAttribute("aria-selected", String(otherButton === button));
    });

    renderProjects(button.dataset.tab);
  });
});

renderPhases();
renderProjects("games");
