import { useRef, useState } from "react";

function ImageUploader() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("file", URL);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <h3>Image upload with useRef</h3>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <button onClick={handleClick}>Upload Image</button>
      {image && (
        <>
          <img src={image} alt="Uploaded Image" width={100} height={100} />
        </>
      )}
    </div>
  );
}

export default ImageUploader;
