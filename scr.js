document.addEventListener('DOMContentLoaded', () => {

    const scrollViewport = document.querySelector('.viewport-main');
    const sections = document.querySelectorAll('.content-segment');
    const navNodes = document.querySelectorAll('.nav-node');

    // Smooth scroll function for internal hash layout jumps
    function scrollToSection(targetId, updateHistory = true) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            scrollViewport.scrollTo({
                top: targetSection.offsetTop - 30,
                behavior: 'smooth'
            });

            if (updateHistory) {
                history.pushState(null, null, targetId);
            }
        }
    }

    // Handle initial load with deep link hash
    if (window.location.hash) {
        setTimeout(() => {
            scrollToSection(window.location.hash, false);
        }, 150);
    }

    // Intercept clicks on sidebar nodes for smooth internal viewport scrolling
    navNodes.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const targetId = link.getAttribute('href');
            scrollToSection(targetId, true);
        });
    });

    // Sync active sidebar state with the current scroll position
    let scrollTimeout;
    scrollViewport.addEventListener('scroll', () => {
        let visibleSectionId = '';
        
        sections.forEach(section => {
            const boundaryTop = section.offsetTop;
            if (scrollViewport.scrollTop >= (boundaryTop - 180)) {
                visibleSectionId = section.getAttribute('id');
            }
        });

        navNodes.forEach(node => {
            node.classList.remove('active');
            if (node.getAttribute('href') === `#${visibleSectionId}`) {
                node.classList.add('active');
            }
        });

        // Throttle dynamic hash changes in URL search history bar
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (visibleSectionId && window.location.hash !== `#${visibleSectionId}`) {
                history.replaceState(null, null, `#${visibleSectionId}`);
            }
        }, 200);
    });

    // Tabbed interface click handling (IaaS, PaaS, SaaS layers)
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-tab');
            tabTriggers.forEach(t => t.classList.remove('active'));
            trigger.classList.add('active');

            tabPanels.forEach(panel => panel.classList.remove('active'));
            const matchingPanel = document.getElementById(targetId);
            if (matchingPanel) {
                matchingPanel.classList.add('active');
            }
        });
    });

    // Single-activation Interactive Accordion Stack logic
    const accHeaders = document.querySelectorAll('.acc-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentWrapper = header.parentElement;
            const isCurrentlyOpen = currentWrapper.classList.contains('active');
            
            // Collapse existing open drawers smoothly first
            document.querySelectorAll('.acc-wrapper').forEach(item => {
                item.classList.remove('active');
            });

            // Expand chosen section if it wasn't already active
            if (!isCurrentlyOpen) {
                currentWrapper.classList.add('active');
            }
        });
    });
});
