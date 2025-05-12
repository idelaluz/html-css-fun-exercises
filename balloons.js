const createBalloon = () => {
    const balloon = document.querySelection('.balloon').cloneNode(true);
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDelay = Math.random() * 1 + 's';
    document.body.appendChild(balloon);
};

for (let i = 0; i < 5; )