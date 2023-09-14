// Logika permainan tebak angka
const angkaRandom = Math.floor(Math.random() * 100) + 1;
let tebakanCount = 0;

function tebakAngka() {
   const tebakan = parseInt(document.getElementById('tebakan').value);

   if (isNaN(tebakan) || tebakan < 1 || tebakan > 100) {
       alert('Masukkan angka dari 1 hingga 100.');
   } else {
       tebakanCount++;

       if (tebakan === angkaRandom) {
           document.getElementById('hasil-tebakan').innerHTML = `Selamat! Anda menebak angka ${angkaRandom} dengan ${tebakanCount} percobaan.`;
       } else if (tebakan < angkaRandom) {
           document.getElementById('hasil-tebakan').innerHTML = 'Coba angka yang lebih besar.';
       } else {
           document.getElementById('hasil-tebakan').innerHTML = 'Coba angka yang lebih kecil.';
       }
   }
}

// Fungsi untuk mengunggah file
function uploadFile() {
   const fileInput = document.getElementById('fileInput');
   fileInput.click();

   fileInput.addEventListener('change', (event) => {
       const file = event.target.files[0];
       if (!file) return;

       const formData = new FormData();
       formData.append('file', file);

       // Kirim file ke server untuk diunggah
       fetch('/upload', {
           method: 'POST',
           body: formData,
       })
       .then((response) => {
           if (response.ok) {
               console.log('File berhasil diunggah.');
           } else {
               console.error('Gagal mengunggah file.');
           }
       })
       .catch((error) => {
           console.error('Terjadi kesalahan:', error);
       });
   });
             }
     
