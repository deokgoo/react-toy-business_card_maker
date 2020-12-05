import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ImageFileInput from './components/image-file-input/image-file-input';
import AuthService from './services/firebase/authService';
import ImageStore from './services/cloudinary/image-store';

const authService = new AuthService();
const imageStore = new ImageStore();

const FileInput = props => <ImageFileInput {...props} imageStore={imageStore}/>;

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);
