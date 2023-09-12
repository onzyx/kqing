// JavaScript to set the video width to match the title width
window.addEventListener('load', () => {
    const title = document.getElementById('pageTitle');
    const video = document.getElementById('myVideo');
    video.style.width = getComputedStyle(title).width;
});

// JavaScript to handle the mute/unmute functionality
const video = document.getElementById('myVideo');
const soundButton = document.getElementById('soundButton');

soundButton.addEventListener('click', toggleSound);

function toggleSound() {
    if (video.muted) {
        video.muted = false;
        soundButton.textContent = 'Matikan Suara';
    } else {
        video.muted = true;
        soundButton.textContent = 'Nyalakan Suara';
    }
}
