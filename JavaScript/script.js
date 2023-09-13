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
        soundButton.textContent = '🔊';
    } else {
        video.muted = true;
        soundButton.textContent = '🔇';
    }
}

// JavaScript to handle the settings button click
const settingsButton = document.getElementById('settingsButton');
settingsButton.addEventListener('click', openSettings);

function openSettings() {
    // Templat HTML untuk dialog pengaturan
    const settingsDialog = `
        <div id="settingsOverlay" class="settings-overlay">
            <div class="settings-dialog">
                <h2>Pengaturan</h2>
                <label for="headerBackgroundColor">Warna Latar Belakang Header:</label>
                <input type="color" id="headerBackgroundColor">
                <button id="closeSettingsButton">Tutup</button>
            </div>
        </div>
    `;

    // Menambahkan templat dialog pengaturan ke dalam body
    document.body.insertAdjacentHTML('beforeend', settingsDialog);

    // Mendapatkan elemen-elemen dalam dialog pengaturan
    const settingsOverlay = document.getElementById('settingsOverlay');
    const closeSettingsButton = document.getElementById('closeSettingsButton');
    const headerBackgroundColorInput = document.getElementById('headerBackgroundColor');
    const header = document.querySelector('header');

    // Mengatur warna latar belakang header berdasarkan input pengguna
    headerBackgroundColorInput.addEventListener('input', () => {
        header.style.backgroundColor = headerBackgroundColorInput.value;
    });

    // Menutup dialog pengaturan saat tombol Tutup diklik
    closeSettingsButton.addEventListener('click', () => {
        settingsOverlay.remove();
    });
}

// JavaScript to disable horizontal scrolling
window.addEventListener('DOMContentLoaded', () => {
    const scrollableElements = document.querySelectorAll('.scrollable');
    
    for (const element of scrollableElements) {
        element.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
            }
        });
    }
});
