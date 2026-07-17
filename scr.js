// ============================================================
// CLOUD DECK — navigation, progress tracking, quiz engine
// ============================================================

const CHAPTERS = [
  { id: "hero", num: "00", label: "Welcome" },
  { id: "ch01", num: "01", label: "What Is Cloud Computing" },
  { id: "ch02", num: "02", label: "Deployment Models" },
  { id: "ch03", num: "03", label: "IaaS / PaaS / SaaS" },
  { id: "ch04", num: "04", label: "Virtualization" },
  { id: "ch05", num: "05", label: "Containers & Docker" },
  { id: "ch06", num: "06", label: "Kubernetes" },
  { id: "ch07", num: "07", label: "Storage & Databases" },
  { id: "ch08", num: "08", label: "Networking" },
  { id: "ch09", num: "09", label: "Serverless" },
  { id: "ch10", num: "10", label: "Security & IAM" },
  { id: "ch11", num: "11", label: "DevOps & IaC" },
  { id: "ch12", num: "12", label: "Cost & Monitoring" },
  { id: "quiz", num: "13", label: "Assessment" },
];

const STORAGE_KEY = "cloud-deck-progress";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    /* storage unavailable — fail silently, nav still works */
  }
}

let progress = loadProgress();

// ---------- build sidebar ----------
const rackUnits = document.getElementById("rackUnits");
CHAPTERS.forEach((ch) => {
  const btn = document.createElement("button");
  btn.className = "rack-unit";
  btn.dataset.target = ch.id;
  btn.innerHTML = `<span class="unit-num">${ch.num}</span><span>${ch.label}</span><span class="unit-led"></span>`;
  btn.addEventListener("click", () => goTo(ch.id));
  rackUnits.appendChild(btn);
});

function refreshRackState(activeId) {
  document.querySelectorAll(".rack-unit").forEach((btn) => {
    const id = btn.dataset.target;
    btn.classList.toggle("active", id === activeId);
    btn.classList.toggle("visited", !!progress[id]);
  });
  const total = CHAPTERS.length;
  const done = CHAPTERS.filter((c) => progress[c.id]).length;
  document.getElementById("progressCount").textContent = done;
  document.getElementById("progressTotal").textContent = total;
  document.getElementById("progressFill").style.width = `${(done / total) * 100}%`;
}

// ---------- panel navigation ----------
function goTo(id) {
  document.querySelectorAll(".panel").forEach((p) => {
    const match = p.dataset.panel === id;
    if (p.classList.contains("hero")) {
      p.style.display = match || id === "hero" ? "grid" : "none";
    } else {
      p.classList.toggle("is-visible", match);
    }
  });

  progress[id] = true;
  saveProgress(progress);
  refreshRackState(id);

  const el = document.getElementById(id) || document.querySelector(`[data-panel="${id}"]`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

document.querySelectorAll("[data-goto]").forEach((el) => {
  el.addEventListener("click", () => goTo(el.dataset.goto));
});

// initial state: hash, else hero
const startId = window.location.hash ? window.location.hash.slice(1) : "hero";
goTo(CHAPTERS.some((c) => c.id === startId) ? startId : "hero");

// remove boot screen from tab order once hidden
setTimeout(() => {
  const boot = document.getElementById("bootScreen");
  if (boot) boot.style.pointerEvents = "none";
}, 1600);

// ============================================================
// QUIZ ENGINE
// ============================================================

const QUIZ = [
  {
    q: "What does 'rapid elasticity' mean in cloud computing?",
    options: [
      "Resources can scale up or down quickly based on demand",
      "The provider guarantees zero downtime forever",
      "Servers are physically portable",
      "Prices never change",
    ],
    correct: 0,
  },
  {
    q: "Which deployment model links a private data center to a public cloud provider?",
    options: ["Community cloud", "Hybrid cloud", "Public cloud", "Private cloud"],
    correct: 1,
  },
  {
    q: "In PaaS, which of these do YOU still manage?",
    options: ["The operating system", "The physical hardware", "Your application code and data", "Patching the runtime"],
    correct: 2,
  },
  {
    q: "What is the main job of a hypervisor?",
    options: [
      "Compress files for storage",
      "Run multiple isolated virtual machines on one physical host",
      "Encrypt network traffic",
      "Balance load across regions",
    ],
    correct: 1,
  },
  {
    q: "Why do containers start faster than virtual machines?",
    options: [
      "They use faster disks",
      "They share the host OS kernel instead of booting their own",
      "They don't use CPU",
      "They are always smaller than 1MB",
    ],
    correct: 1,
  },
  {
    q: "What does a Kubernetes Deployment with replicas: 3 guarantee?",
    options: [
      "Exactly 3 nodes in the cluster",
      "3 running copies of the pod, recreated automatically if one dies",
      "3 load balancers",
      "3 separate namespaces",
    ],
    correct: 1,
  },
  {
    q: "Which storage type would you use for a database's raw disk volume?",
    options: ["Object storage", "File storage", "Block storage", "CDN cache"],
    correct: 2,
  },
  {
    q: "What problem does a CDN solve?",
    options: [
      "It encrypts passwords",
      "It reduces latency by caching content closer to users",
      "It replaces the need for a database",
      "It manages IAM permissions",
    ],
    correct: 1,
  },
  {
    q: "In serverless computing, what are you typically billed for?",
    options: [
      "A fixed monthly server rental",
      "The number of employees using the app",
      "Actual execution time/invocations of your function",
      "Total disk size of the provider's data center",
    ],
    correct: 2,
  },
  {
    q: "What does the 'shared responsibility model' describe?",
    options: [
      "Multiple companies sharing one AWS account",
      "The split between what the provider secures and what the customer secures",
      "A pricing discount for shared workloads",
      "A rule requiring open-source code",
    ],
    correct: 1,
  },
];

const quizContainer = document.getElementById("quizContainer");
const quizResult = document.getElementById("quizResult");
const quizScoreEl = document.getElementById("quizScore");
const quizMaxEl = document.getElementById("quizMax");
let score = 0;
let answered = 0;

function renderQuiz() {
  quizContainer.innerHTML = "";
  quizResult.hidden = true;
  score = 0;
  answered = 0;
  quizMaxEl.textContent = QUIZ.length;

  QUIZ.forEach((item, qIndex) => {
    const qEl = document.createElement("div");
    qEl.className = "quiz-q";

    const qText = document.createElement("p");
    qText.textContent = `${qIndex + 1}. ${item.q}`;
    qEl.appendChild(qText);

    const optsEl = document.createElement("div");
    optsEl.className = "quiz-options";

    item.options.forEach((optText, optIndex) => {
      const optBtn = document.createElement("button");
      optBtn.className = "quiz-option";
      optBtn.textContent = optText;
      optBtn.addEventListener("click", () => handleAnswer(qEl, optIndex, item.correct, optBtn));
      optsEl.appendChild(optBtn);
    });

    qEl.appendChild(optsEl);
    quizContainer.appendChild(qEl);
  });
}

function handleAnswer(qEl, chosenIndex, correctIndex, chosenBtn) {
  const buttons = qEl.querySelectorAll(".quiz-option");
  if (buttons[0].disabled) return; // already answered

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === correctIndex) b.classList.add("correct");
  });
  if (chosenIndex !== correctIndex) chosenBtn.classList.add("incorrect");
  else score += 1;

  answered += 1;
  if (answered === QUIZ.length) {
    quizScoreEl.textContent = score;
    quizResult.hidden = false;
  }
}

document.getElementById("quizRetry").addEventListener("click", renderQuiz);

renderQuiz();