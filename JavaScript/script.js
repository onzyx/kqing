// JavaScript to handle the mute/unmute functionality
const video = document.getElementById('myVideo');
const soundButton = document.getElementById('soundButton');
let isMuted = true;

soundButton.addEventListener('click', toggleSound);

function toggleSound() {
    if (isMuted) {
        video.muted = false;
        soundButton.textContent = '🔊';
    } else {
        video.muted = true;
        soundButton.textContent = '🔇';
    }
    isMuted = !isMuted;
}
