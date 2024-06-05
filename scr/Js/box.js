document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.tree a');
    const boxes = document.querySelectorAll('.box');
    const iconExits = document.querySelectorAll('.iconexit');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const className = link.className;
            boxes.forEach(box => {
                if (box.classList.contains(`box-${className}`)) {
                    box.style.display = 'block';
                }
            });
        });
    });

    iconExits.forEach(iconExit => {
        iconExit.addEventListener('click', () => {
            iconExit.parentElement.style.display = 'none';
        });
    });
});