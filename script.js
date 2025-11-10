document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById('welcomeScreen');
  const nameScreen = document.getElementById('nameScreen');
  const messageScreen = document.getElementById('messageScreen');
  const flowerScreen = document.getElementById('flowerScreen');
  const greet = document.getElementById('greet');
  const nextBtn = document.getElementById('nextBtn');
  const proceedBtn = document.getElementById('proceedBtn');
  const nextToFlowers = document.getElementById('nextToFlowers');
  const nameInput = document.getElementById('nameInput');
  const flowers = document.getElementById('flowers');

  nextBtn.addEventListener('click', () => {
    welcomeScreen.classList.remove('active');
    nameScreen.classList.add('active');
  });

  proceedBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name === "") {
      alert("Please enter your name first 💬");
      return;
    }

    const confirmMsg = confirm(`Hi ${name}! Do you want to proceed? 💖`);
    if (confirmMsg) {
      nameScreen.classList.remove('active');
      messageScreen.classList.add('active');
      greet.textContent = `Hi ${name}! 💕`;
      startHearts();
    }
  });

  nextToFlowers.addEventListener('click', () => {
    messageScreen.classList.remove('active');
    flowerScreen.classList.add('active');
    startFlowers();
  });

  function startHearts() {
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (2 + Math.random() * 3) + 's';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, 500);
  }

  function startFlowers() {
    let flowerEmojis = ['🌸','🌼','🌻','🌺','🌷','💐'];
    let count = 0;
    const interval = setInterval(() => {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.top = Math.random() * 100 + 'vh';
      flowers.appendChild(flower);
      count++;
      if (count > 30) clearInterval(interval);
    }, 300);
  }
});
    