import React, { useRef, useState } from 'react';
import styles from './image-file-input.module.css';

const ImageFileInput = ({ imageStore, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onButtonClick = (evt) => {
    evt.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (evt) => {
    setLoading(true);
    const response = await imageStore.upload(evt.target.files[0]);
    const uploaded = response.data;
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onChange}
        name="file"/>
      {
        !loading
          ? <button className={`${styles.button} ${name ? styles.pink : styles.gray}`}
                    onClick={onButtonClick}>{name || 'No file'}</button>
          : <div className={styles.loading}></div>
      }
    </div>
  );
};

export default ImageFileInput;
