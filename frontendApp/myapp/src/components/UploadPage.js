import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes } from '@fortawesome/free-solid-svg-icons';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData);
        console.log(response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <label htmlFor="file-upload" style={{ cursor: 'pointer'}}>
        <FontAwesomeIcon icon={faUpload} size="5x" />
      </label>
      <input id="file-upload" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <span>{selectedFile.name}</span>
          <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer' }} onClick={handleClearFile} />
        </div>
      )}
      <button onClick={handleFileUpload} style={{ backgroundColor: 'white', color: '#ff7f7f', marginTop: '20px' }}>Upload</button>
    </div>
  );
}

export default UploadPage;
