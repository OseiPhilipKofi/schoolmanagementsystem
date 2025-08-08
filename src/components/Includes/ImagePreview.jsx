import React, { useState } from 'react';

const ImagePreview = (event) => {
  const [imageSrc, setImageSrc] = useState(null);

  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    setImageSrc(null);
  }

  return (
    <div>
      {imageSrc && (
        <div>
          <img
            src={imageSrc}
            alt="Preview"
          />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
