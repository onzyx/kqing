// JavaScript to handle the mute/unmute functionality
const video = document.getElementById('myVideo');
const soundButton = document.getElementById('soundButton');

soundButton.addEventListener('click', toggleSound);

function toggleSound() {
    if (video.muted) {
        video.muted = false;
        soundButton.textContent = '🔊';
    } else {
        video.muted = true;
        soundButton.textContent = '🔇';
    }
}
