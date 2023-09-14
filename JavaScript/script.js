// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
const guessInput = document.getElementById('guessInput');
const guessSubmit = document.getElementById('guessSubmit');
const message = document.getElementById('message');
let attempts = 0;

// Function to handle a guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Selamat! Anda berhasil menebak angka ${randomNumber} dalam ${attempts} percobaan.`;
        message.style.color = 'green';
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Tebakan terlalu rendah. Coba lagi!';
        message.style.color = 'red';
    } else {
        message.textContent = 'Tebakan terlalu tinggi. Coba lagi!';
        message.style.color = 'red';
    }

    guessInput.value = '';
    guessInput.focus();
}

// Event listener for the guess submit button
guessSubmit.addEventListener('click', checkGuess);
