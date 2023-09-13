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
        soundButton.textContent = '🔊 Matikan Suara';
    } else {
        video.muted = true;
        soundButton.textContent = '🔇 Nyalakan Suara';
    }
}

// JavaScript to create and move bubble text
const bubbleContainer = document.getElementById('bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = 'Teks Gelembung';
    
    const randomPosition = Math.random() * (window.innerHeight - 100); // Posisi vertikal acak di dalam viewport
    const randomDelay = Math.random() * 10 + 2; // Waktu muncul acak (2-12 detik)
    
    bubble.style.top = `${randomPosition}px`;
    bubble.style.animationDelay = `${randomDelay}s`; // Set waktu muncul acak
    bubbleContainer.appendChild(bubble);

    // Hapus gelembung setelah animasi selesai
    bubble.addEventListener('animationiteration', () => {
        bubble.remove();
    });
}

setInterval(createBubble, 5000); // Buat gelembung baru setiap 5 detik
