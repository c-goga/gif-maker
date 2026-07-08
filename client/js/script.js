import api from './APIClient.js'

const gifInput = document.getElementById('gif-input');
const upload = document.getElementById('upload');
const uploadForm = document.getElementById('upload-form');

upload.addEventListener('click', () => {
    
})

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!gifInput.files[0]) return;
    const vid = gifInput.files[0];

    const formData = new FormData();
    formData.append('video', vid);

    api.upload(formData);
});