// JavaScript to create and move bubble text
const bubbleContainer = document.getElementById('bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = 'Teks Gelembung';
    bubble.style.top = `${Math.random() * 80 + 10}%`; // Posisi vertikal acak
    bubbleContainer.appendChild(bubble);

    // Hapus gelembung setelah animasi selesai
    bubble.addEventListener('animationiteration', () => {
        bubble.remove();
    });
}

setInterval(createBubble, 3000); // Buat gelembung baru setiap 3 detik

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
