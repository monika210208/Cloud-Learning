document.addEventListener('DOMContentLoaded', () => {
    
    // --- PART 1: SPA SINGLE-PAGE-ROUTING ENGINE ---
    const menuItems = document.querySelectorAll('.menu-item');
    const viewPanels = document.querySelectorAll('.view-panel');
    const viewTitle = document.getElementById('current-view-title');

    function switchView(targetId, activeMenuElement) {
        viewPanels.forEach(panel => panel.classList.remove('active'));
        menuItems.forEach(item => item.classList.remove('active'));

        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
        
        if (activeMenuElement) {
            activeMenuElement.classList.add('active');
            viewTitle.textContent = activeMenuElement.textContent;
        }
    }

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            switchView(targetId, item);
            window.location.hash = item.getAttribute('href');
        });
    });

    // Handle incoming direct links or browser refreshes
    if (window.location.hash) {
        const matchingMenu = document.querySelector(`.menu-item[href="${window.location.hash}"]`);
        if (matchingMenu) {
            switchView(matchingMenu.getAttribute('data-target'), matchingMenu);
        }
    }


    // --- PART 2: INTERACTIVE ASSESSMENT LOGIC ---
    const quizData = {
        question: "Which cloud service delivery model provides user access to infrastructure components such as virtual computing layers, firewalls, and network configurations?",
        options: [
            "Software as a Service (SaaS)",
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)",
            "Function as a Service (FaaS)"
        ],
        answer: 2
    };

    const questionElement = document.getElementById('quiz-question');
    const optionButtons = document.querySelectorAll('.option-btn');
    const feedbackBox = document.getElementById('quiz-feedback');

    function loadQuiz() {
        questionElement.textContent = quizData.question;
        optionButtons.forEach((btn, idx) => {
            btn.textContent = quizData.options[idx];
            btn.disabled = false;
            btn.addEventListener('click', () => verifyQuizAnswer(idx));
        });
    }

    function verifyQuizAnswer(selectedIndex) {
        optionButtons.forEach(btn => btn.disabled = true);
        feedbackBox.classList.remove('hidden', 'correct', 'wrong');

        if (selectedIndex === quizData.answer) {
            feedbackBox.textContent = "Verification success: Correct option validated.";
            feedbackBox.classList.add('correct');
        } else {
            feedbackBox.textContent = "Verification failure: Invalid selection.";
            feedbackBox.classList.add('wrong');
        }
    }

    loadQuiz();
});
