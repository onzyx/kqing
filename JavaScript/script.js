const bgVideo = document.getElementById("bgVideo");
const bgAudio = document.getElementById("bgAudio");
const toggleAudioButton = document.getElementById("toggleAudioButton");

// Mute audio saat dimulai
bgAudio.muted = true;

// Memulai video dan audio bersamaan
bgVideo.play();
bgAudio.play();

// Tombol untuk mengontrol audio (mute/unmute)
toggleAudioButton.addEventListener("click", function() {
  if (bgAudio.muted) {
    bgAudio.muted = false; // Mengaktifkan audio (unmute)
    toggleAudioButton.textContent = "Mematikan"; // Mengubah teks tombol
  } else {
    bgAudio.muted = true; // Menonaktifkan audio (mute)
    toggleAudioButton.textContent = "Menyalakan"; // Mengubah teks tombol
  }
});
