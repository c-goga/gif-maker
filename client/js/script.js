import api from './APIClient.js'

const gifInput = document.getElementById('gif-input');
const uploadForm = document.getElementById('upload-form');
const display = document.getElementById('display');

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevents page from reloading

    // if not file found do nothing
    if (!gifInput.files[0]) return;
    const vid = gifInput.files[0];

    // put into FormData since multer needs that to save the video to 'uploads' folder
    const formData = new FormData();
    formData.append('video', vid);

    const response = await api.upload(formData);
    const video = document.createElement('video');
    video.setAttribute('controls', '');
    video.setAttribute('width', '500');
    const src = document.createElement('source');
    // console.log(response.path);
    src.setAttribute('src', `/server/${response.path}`);
    src.setAttribute('type', vid.type);
    console.log(vid.type);
    video.appendChild(src);
    display.appendChild(video);
    // const result = await response.json();
    // console.log('Upload complete.', result);
});
