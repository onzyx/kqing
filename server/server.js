const express = require('express');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');

const app = express();
const port = process.env.PORT || 3000;
const upload = multer({ dest: 'uploads/' });

// Konfigurasi Google Cloud Storage
const storage = new Storage({
   projectId: 'your-project-id',
   keyFilename: 'path-to-your-service-account-key.json',
});

const bucketName = 'your-bucket-name'; // Ganti dengan nama bucket Anda

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
   if (!req.file) {
       return res.status(400).send('Tidak ada file yang diunggah.');
   }

   const fileName = req.file.originalname;

   const bucket = storage.bucket(bucketName);
   const file = bucket.file(fileName);

   // Mengunggah file ke Google Cloud Storage
   file.createWriteStream()
       .end(req.file.buffer)
       .on('finish', () => {
           res.status(200).send('File berhasil diunggah ke Google Cloud Storage.');
       })
       .on('error', (err) => {
           console.error(err);
           res.status(500).send('Terjadi kesalahan saat mengunggah file.');
       });
});

app.listen(port, () => {
   console.log(`Server berjalan di http://localhost:${port}`);
});
         
