const bgVideo = document.getElementById("bgVideo");
const bgAudio = document.getElementById("bgAudio");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// Mute audio saat dimulai
bgAudio.muted = true;

// Memulai video dan audio bersamaan
bgVideo.play();
bgAudio.play();

// Tombol untuk mengontrol audio
startButton.addEventListener("click", function() {
  bgAudio.muted = false; // Mengaktifkan audio
});

stopButton.addEventListener("click", function() {
  bgAudio.muted = true; // Menonaktifkan audio
});
