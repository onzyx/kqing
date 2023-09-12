const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const bgVideo = document.getElementById("bgVideo");

startButton.addEventListener("click", function() {
  bgVideo.play();
});

stopButton.addEventListener("click", function() {
  bgVideo.pause();
});
