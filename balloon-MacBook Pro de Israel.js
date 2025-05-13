const createBalloon = () => {
    const balloon = document.querySelector('.balloon').cloneNode(true);
    balloon.style.left = Math.random() * 100 + '%';
    //balloon.style.bottom = Math.random() * 100 + '%';
    balloon.style.animationDelay = Math.random() * 1 + 's';
    document.body.appendChild(balloon);
};

for (let i = 0; i < 9; i++){
    setTimeout(createBalloon, i * 1000);
}

