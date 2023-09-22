const statusElement = document.getElementById('status');
const toggleButton = document.getElementById('toggleButton');
const serialPort = new SerialPort();

toggleButton.addEventListener('click', () => {
  const currentState = toggleButton.innerText.toLowerCase();
  if (currentState === 'nyalakan') {
    serialPort.write('1'); // Mengirim perintah '1' ke Arduino.
  } else if (currentState === 'matikan') {
    serialPort.write('0'); // Mengirim perintah '0' ke Arduino.
  }
});

serialPort.addEventListener('data', (event) => {
  const data = event.data.trim();
  if (data === '1') {
    statusElement.innerText = 'Lampu saat ini: Nyala';
    toggleButton.innerText = 'Matikan';
  } else if (data === '0') {
    statusElement.innerText = 'Lampu saat ini: Mati';
    toggleButton.innerText = 'Nyalakan';
  }
});
