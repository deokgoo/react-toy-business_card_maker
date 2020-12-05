import axios from 'axios';

const { REACT_APP_CLOUD_ID, REACT_APP_CLOUD_PRESET } = process.env;

class ImageStore {
  async upload(file) {
    const url = `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_ID}/image/upload`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', REACT_APP_CLOUD_PRESET);
    return axios({
      method: 'POST',
      url,
      data: formData,
    });
  }
}

export default ImageStore;
