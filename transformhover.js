const box = document.getElementById('magicBox');

box.addEventListener('mouseenter', () => {
    box.textContent = 'Let me GO!';
});

box.addEventListener('mouseleave', () => {
    box.textContent = 'Hover me!';
});
