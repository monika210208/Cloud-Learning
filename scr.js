document.addEventListener('DOMContentLoaded', () => {

    // --- PART 1: ACCORDION INTERACTIVITY ---
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const currentItem = trigger.parentElement;
            const isOpen = currentItem.classList.contains('active');
            
            // Close all items in this section
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle selected element
            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });


    // --- PART 2: SIDEBAR INTERACTIVE ACTIVE STATES ON SCROLL ---
    const sections = document.querySelectorAll('.content-section');
    const tocItems = document.querySelectorAll('.toc-item');
    const scrollContainer = document.querySelector('.main-content');

    scrollContainer.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Evaluates visibility when item crosses 200px threshold from frame top
            if (scrollContainer.scrollTop >= (sectionTop - 200)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        tocItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });
});
