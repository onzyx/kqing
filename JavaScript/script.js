const bgVideo = document.getElementById("bgVideo");
const bgAudio = document.getElementById("bgAudio");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// Memulai video dan audio bersamaan
bgVideo.play();
bgAudio.play();

// Tombol untuk mengontrol audio
startButton.addEventListener("click", function() {
  bgAudio.play();
});

stopButton.addEventListener("click", function() {
  bgAudio.pause();
});
