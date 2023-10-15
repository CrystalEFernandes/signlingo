import React, { useRef, useEffect } from 'react';
import './cameraStyles.css';

function CustomCamera() {
  const videoRef = useRef();

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => console.error('Error accessing camera:', error));
    }
  }, []);

  return (
    <div className="custom-camera">
      <video ref={videoRef} autoPlay playsInline className="custom-camera-video" />
    </div>
  );
  
}

export default CustomCamera;
