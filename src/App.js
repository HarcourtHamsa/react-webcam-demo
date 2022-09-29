import "./App.css";
import Webcam from "react-webcam";
import { useRef, useState } from "react";

function App() {
  const webcamRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const capture = () => {
    const sc = webcamRef.current.getScreenshot();
    setImagePreview(sc);
  };

  const removePhoto = () => {
    setImagePreview(null);
  };

  return (
    <div className="App">
      <main>
        <Webcam width={400} audio={false} ref={webcamRef} />
        <div className="btn-container">
          <button className="captureBtn" onClick={capture}>
            Take Photo
          </button>

          {imagePreview && (
            <button className="removeBtn" onClick={removePhoto}>
              Remove Photo
            </button>
          )}
        </div>
      </main>

      <aside>
        <div className="image-preview">
          {imagePreview && <img src={imagePreview} alt="preview" />}
        </div>
      </aside>
    </div>
  );
}

export default App;
