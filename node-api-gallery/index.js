const express = require('express');
const app = express();

const multer = require('multer');
const upload = multer({ dest: 'public/uploads'});

const fs = require('fs')

app.use(express.static('public/'))
app.use(express.static('../dist/'))

app.get('/', (req, res) => {
  res.sendFile('public/index.html', {"root": __dirname});
});

app.post('/upload', upload.array('gallery[]'), (req, res) => {
	var gallery = []
	req.files.map(image => {
		gallery.push({ 'url': `http://localhost:3442/${image.filename}` })
	})
	res.status(200).json(gallery)
})

app.listen(3442, () => {
  console.log('Listening on port 3442!')
})
