import React, { useState } from "react";
import Title from "./Components/Title";
import Form from "./Components/UploadForm";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal.jsx";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Form />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
