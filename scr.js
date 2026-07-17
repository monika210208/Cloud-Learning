document.addEventListener('DOMContentLoaded', () => {

    // --- SUB-SYSTEM 1: ACCORDION INTERACTION CONTROLLER ---
    const accHeaders = document.querySelectorAll('.acc-header');

    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentWrapper = header.parentElement;
            const isCurrentlyOpen = currentWrapper.classList.contains('active');
            
            // Structural Reset: Wipe active classes across panels
            document.querySelectorAll('.acc-wrapper').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle logic execution block
            if (!isCurrentlyOpen) {
                currentWrapper.classList.add('active');
            }
        });
    });


    // --- SUB-SYSTEM 2: MULTI-TAB VIEW INTERACTION ---
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-tab');

            // Standardize triggers
            tabTriggers.forEach(t => t.classList.remove('active'));
            trigger.classList.add('active');

            // Standardize display window layers
            tabPanels.forEach(panel => panel.classList.remove('active'));
            const matchingPanel = document.getElementById(targetId);
            if (matchingPanel) {
                matchingPanel.classList.add('active');
            }
        });
    });


    // --- SUB-SYSTEM 3: SIDEBAR SELECTION ON WINDOW SCROLL ---
    const sections = document.querySelectorAll('.content-segment');
    const navNodes = document.querySelectorAll('.nav-node');
    const scrollViewport = document.querySelector('.viewport-main');

    scrollViewport.addEventListener('scroll', () => {
        let visibleSectionId = '';
        
        sections.forEach(section => {
            const boundaryTop = section.offsetTop;
            // Set programmatic trigger buffer offset at 220 pixels
            if (scrollViewport.scrollTop >= (boundaryTop - 220)) {
                visibleSectionId = section.getAttribute('id');
            }
        });

        navNodes.forEach(node => {
            node.classList.remove('active');
            if (node.getAttribute('href') === `#${visibleSectionId}`) {
                node.classList.add('active');
            }
        });
    });
});
