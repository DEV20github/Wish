setInterval(() => {

    const heart = document.createElement('div');
    heart.classList.add('hearts');
    heart.innerText = "🎉";
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    setTimeout(() => {
        heart.remove();
    }, 5000);

    const hat = document.createElement('div');
    hat.classList.add('hats');
    hat.innerText = "🥳";
    document.body.appendChild(hat);
    hat.style.right = Math.random() * 100 + "vw";
    hat.style.animationDuration = Math.random() * 1 + 2 + 's';
    setTimeout(() => {
        hat.remove();
    }, 5000);

    const gift = document.createElement('div');
    gift.classList.add('gifts');
    gift.innerText = '🎁';
    document.body.appendChild(gift);
    gift.style.left = Math.random() * 100 + "vw";
    gift.style.animationDuration = Math.random() * 2 + 2 + 's';
    setTimeout(() => {
        gift.remove();
    }, 5000);

    const flower = document.createElement('div');
    flower.classList.add('flowers');
    flower.innerText = '💖';
    document.body.appendChild(flower);
    flower.style.right = Math.random() * 100 + "vw";
    flower.style.animationDuration = Math.random() * 2 + 4 + 's';
    setTimeout(() => {
        flower.remove();
    }, 5000);

}, 300);