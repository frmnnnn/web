window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const video = document.querySelector('video');
  const slider = document.getElementById('slider');

  // Buat tombol toggle musik
  const toggleMusic = document.createElement('button');
  toggleMusic.className = 'music-toggle';
  toggleMusic.innerHTML = '<span id="music-icon">🔈</span> Music On';
  toggleMusic.title = 'Toggle Music';
  document.body.appendChild(toggleMusic);

  // Fungsi untuk update tampilan tombol
  function updateMusicButton() {
    if (music.paused) {
      toggleMusic.innerHTML = '<span id="music-icon">🔇</span> Music Off';
      toggleMusic.classList.add('music-off');
    } else {
      toggleMusic.innerHTML = '<span id="music-icon">🔈</span> Music On';
      toggleMusic.classList.remove('music-off');
    }
  }

  // Event klik tombol musik
  toggleMusic.addEventListener('click', () => {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
    updateMusicButton();
  });

  // Galeri otomatis 10 foto
  for (let i = 1; i <= 10; i++) {
    const img = document.createElement('img');
    img.src = `images/photo${i}.jpg`;
    img.alt = `Memory ${i}`;
    slider.appendChild(img);
  }

  // Tombol scroll ke atas
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scrollTopBtn';
  scrollBtn.innerText = '↑';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Matikan musik saat video mulai
  if (video) {
    video.addEventListener('play', () => {
      if (!music.paused) {
        music.pause();
        updateMusicButton();
      }
    });

    // Hidupkan musik lagi setelah video selesai
    video.addEventListener('ended', () => {
      music.play();
      updateMusicButton();
    });
  }

  // Update tombol saat pertama load
  updateMusicButton();
});
