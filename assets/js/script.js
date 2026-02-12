document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (themeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
      body.setAttribute('data-theme', 'dark');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// Dynamic Modal Logic
function openGame(title) {
  const modalTitle = document.getElementById('gameModalLabel');
  const modalBody = document.getElementById('gameModalBody');
  if (modalTitle && modalBody) {
    modalTitle.textContent = title;
    // Simulate game loading
    modalBody.innerHTML = `
      <div class="text-center">
        <div class="spinner-border text-primary mb-3" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p>Loading ${title}...</p>
        <div class="ratio ratio-16x9 mt-3">
           <iframe src="https://www.example.com" title="Game Placeholder" allowfullscreen></iframe>
        </div>
      </div>
    `;
    const gameModal = new bootstrap.Modal(document.getElementById('gameModal'));
    gameModal.show();
  }
}

function openStory(title) {
  const modalTitle = document.getElementById('storyModalLabel');
  const modalBody = document.getElementById('storyModalBody');
  if (modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
      <p class="lead">Once upon a time...</p>
      <p>This is where the full content of <strong>${title}</strong> would go. Imagine a beautiful illustration and text here!</p>
      <p>The End.</p>
    `;
    const storyModal = new bootstrap.Modal(document.getElementById('storyModal'));
    storyModal.show();
  }
}

function openLesson(title) {
  const modalTitle = document.getElementById('learnModalLabel');
  const modalBody = document.getElementById('learnModalBody');
  if (modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
      <h5>Let's Learn about ${title}!</h5>
      <p>Here is a quick lesson content placeholder.</p>
      <ul>
        <li>Step 1: Introduction</li>
        <li>Step 2: Core Concept</li>
        <li>Step 3: Practice</li>
      </ul>
      <button class="btn btn-success btn-sm">Start Quiz</button>
    `;
    const learnModal = new bootstrap.Modal(document.getElementById('learnModal'));
    learnModal.show();
  }
}
