// Project Data based on Joya Sabry's CV
const projectsData = [
  {
    id: "bank-marketing",
    title: "Bank Marketing Classification",
    category: "ml",
    categoryLabel: "Machine Learning",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    icon: "fa-solid fa-chart-pie",
    shortDesc: "Built an end-to-end classification pipeline for a large bank marketing dataset using advanced resampling & feature selection.",
    fullDesc: "Developed a comprehensive machine learning classification pipeline to predict customer conversion on bank marketing campaigns. Handled class imbalance using SMOTENC (Synthetic Minority Over-sampling Technique for Nominal and Continuous features). Performed rigorous data preprocessing, feature engineering, and model optimization using Scikit-learn algorithms including Decision Tree and Random Forest classifiers.",
    highlights: [
      "Mitigated dataset class imbalance using SMOTENC",
      "Applied feature selection techniques to identify high-impact customer drivers",
      "Evaluated models using Precision, Recall, F1-Score, and ROC-AUC metrics",
      "Built with Python, Pandas, NumPy, Scikit-learn"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "SMOTENC", "Decision Tree", "Random Forest"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: "sms-spam",
    title: "SMS Spam Detection",
    category: "nlp",
    categoryLabel: "NLP / ML",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    icon: "fa-solid fa-comment-slash",
    shortDesc: "Text-classification NLP pipeline converting raw message data into actionable spam predictions.",
    fullDesc: "Designed and implemented an automated text-classification pipeline to detect spam in SMS text messages. Processed unstructured text data using tokenization, stop-word removal, and TF-IDF (Term Frequency-Inverse Document Frequency) vectorization. Benchmarked and evaluated multiple classification algorithms including Naive Bayes, Logistic Regression, Support Vector Machines (SVM), Decision Trees, and Random Forests.",
    highlights: [
      "Extracted feature vectors from text corpus using TF-IDF",
      "Benchmarked 5 distinct Machine Learning classifiers",
      "Optimized text preprocessing for high accuracy text filtering",
      "Leveraged NLTK and Scikit-learn NLP toolkits"
    ],
    techStack: ["Python", "NLP", "TF-IDF", "NLTK", "Logistic Regression", "Naive Bayes", "SVM", "Random Forest"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: "padel-ai",
    title: "Padel / Ping Pong AI Game",
    category: "ai",
    categoryLabel: "Python / AI",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    icon: "fa-solid fa-gamepad",
    shortDesc: "Interactive Pygame implementation powered by Minimax adversarial search with configurable AI difficulty.",
    fullDesc: "Created an interactive Padel / Ping Pong game in Python featuring a responsive user interface and an intelligent AI opponent. Implemented the Minimax adversarial search algorithm with customizable search depth, enabling dynamic difficulty adjustments ranging from novice to unbeatable AI strategies based on game physics.",
    highlights: [
      "Engineered game loop and collision physics using Pygame",
      "Implemented Minimax algorithm for optimal decision-making in real-time",
      "Added customizable search depth for adjustable AI difficulty",
      "Clean object-oriented architecture in Python"
    ],
    techStack: ["Python", "Pygame", "Minimax Algorithm", "Adversarial Search", "Game Mechanics"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: "chat-system",
    title: "Multithreaded GUI Chat System",
    category: "ai",
    categoryLabel: "C/C++ & Systems",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    icon: "fa-solid fa-network-wired",
    shortDesc: "High-performance chat application featuring socket programming, multithreading, and shared memory IPC.",
    fullDesc: "Built concurrent chat system implementations in C/C++ exploring both network socket communication and shared memory Inter-Process Communication (IPC) with mutex synchronization. Developed multithreaded architecture for handling simultaneous client connections and built a graphical user interface for seamless message exchange.",
    highlights: [
      "Implemented client-server socket architecture using TCP/IP",
      "Utilized POSIX threads (pthreads) for concurrent message handling",
      "Incorporated shared memory and mutex synchronization for secure IPC",
      "Designed graphical user interface for user interaction"
    ],
    techStack: ["C/C++", "Sockets", "Multithreading", "Shared Memory", "Mutex Synchronization", "GUI"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: "pattern-recognition",
    title: "Pattern Recognition & Feature Selection",
    category: "ml",
    categoryLabel: "Data Science & Stats",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    icon: "fa-solid fa-brain",
    shortDesc: "Dimensionality reduction & feature analysis workflow using PCA, LDA, and covariance analysis.",
    fullDesc: "Engineered robust pattern recognition and dimensionality reduction workflows for high-dimensional datasets. Applied Principal Component Analysis (PCA) and Linear Discriminant Analysis (LDA) alongside statistical normalization, covariance analysis, and SelectKBest feature selection to optimize computational efficiency and model predictive accuracy.",
    highlights: [
      "Reduced feature dimensions while retaining maximum variance via PCA",
      "Applied supervised Linear Discriminant Analysis (LDA) for class separability",
      "Utilized SelectKBest for univariate feature selection",
      "Conducted covariance and statistical normalization analysis"
    ],
    techStack: ["Python", "PCA", "LDA", "SelectKBest", "Scikit-learn", "Covariance Analysis", "Normalization"],
    githubUrl: "#",
    demoUrl: "#"
  }
];

// DOM Load Event
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  setupFilterButtons();
  setupMobileMenu();
  setupNavbarScroll();
  setupModal();
  setupContactForm();
});

// Render Projects Cards
function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "glass-card rounded-2xl p-6 flex flex-col justify-between h-full group border border-slate-800 hover:border-blue-500/40 transition-all duration-300";
    
    const techBadges = project.techStack.slice(0, 4).map(t => 
      `<span class="text-xs px-2.5 py-1 rounded-md skill-tag font-mono-code">${t}</span>`
    ).join("");

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
            <i class="${project.icon} text-xl"></i>
          </div>
          <span class="text-xs px-3 py-1 rounded-full border ${project.badgeColor} font-medium">
            ${project.categoryLabel}
          </span>
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">${project.title}</h3>
        <p class="text-slate-400 text-sm mb-4 leading-relaxed">${project.shortDesc}</p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${techBadges}
          ${project.techStack.length > 4 ? `<span class="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-400 font-mono-code">+${project.techStack.length - 4}</span>` : ''}
        </div>
        <button 
          onclick="openProjectModal('${project.id}')"
          class="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-200 hover:text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 border border-slate-700/60 hover:border-blue-500/50">
          <span>View Details & Specs</span>
          <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Setup Project Filter Buttons
function setupFilterButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-blue-600", "text-white", "shadow-lg", "shadow-blue-500/20");
        b.classList.add("bg-slate-800/60", "text-slate-400", "hover:text-white");
      });
      btn.classList.remove("bg-slate-800/60", "text-slate-400", "hover:text-white");
      btn.classList.add("bg-blue-600", "text-white", "shadow-lg", "shadow-blue-500/20");

      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });
}

// Navbar Scroll Glass Effect
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("bg-slate-950/85", "backdrop-blur-md", "border-b", "border-slate-800/80", "shadow-xl");
    } else {
      navbar.classList.remove("bg-slate-950/85", "backdrop-blur-md", "border-b", "border-slate-800/80", "shadow-xl");
    }
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// Modal Handlers
function setupModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body-content");
  if (!modal || !modalBody) return;

  const highlightsList = project.highlights.map(h => 
    `<li class="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
      <i class="fa-solid fa-circle-check text-emerald-400 mt-1 text-xs shrink-0"></i>
      <span>${h}</span>
    </li>`
  ).join("");

  const techBadges = project.techStack.map(t => 
    `<span class="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono-code font-medium">${t}</span>`
  ).join("");

  modalBody.innerHTML = `
    <div class="flex items-center gap-3 mb-4">
      <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
        <i class="${project.icon} text-xl"></i>
      </div>
      <div>
        <span class="text-xs px-2.5 py-0.5 rounded-full border ${project.badgeColor} font-medium">${project.categoryLabel}</span>
        <h2 class="text-2xl font-bold text-white mt-1">${project.title}</h2>
      </div>
    </div>

    <div class="my-5">
      <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Overview</h4>
      <p class="text-slate-300 text-sm leading-relaxed">${project.fullDesc}</p>
    </div>

    <div class="my-5">
      <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Highlights & Architecture</h4>
      <ul class="space-y-2">
        ${highlightsList}
      </ul>
    </div>

    <div class="my-5">
      <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies & Libraries</h4>
      <div class="flex flex-wrap gap-2">
        ${techBadges}
      </div>
    </div>

    <div class="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
      <a href="${project.githubUrl}" target="_blank" class="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-slate-700 transition">
        <i class="fa-brands fa-github text-lg"></i>
        <span>View Code Repository</span>
      </a>
      <a href="${project.demoUrl}" target="_blank" class="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/30">
        <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
        <span>Project Demo</span>
      </a>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("contact-toast");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Display feedback toast
    if (toast) {
      toast.classList.remove("hidden");
      toast.classList.add("flex");
      setTimeout(() => {
        toast.classList.add("hidden");
        toast.classList.remove("flex");
      }, 4000);
    }

    form.reset();
  });
}
