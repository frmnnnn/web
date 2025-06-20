document.addEventListener("DOMContentLoaded", function () {
  const createFlower = () => {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = 3 + Math.random() * 5 + 's';
    flower.style.opacity = Math.random();
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 8000);
  };

  setInterval(createFlower, 300);
});

const style = document.createElement('style');
style.innerHTML = `
  .flower {
    position: fixed;
    top: -20px;
    width: 20px;
    height: 20px;
    background-image: url('bunga3.png');
    background-size: cover;
    z-index: 999;
    animation: fall linear infinite;
    pointer-events: none;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);
