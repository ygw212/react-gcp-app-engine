import React, {useRef, useState} from 'react';

function FileUploadButton() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);
  
  const[isSelected, setIsSelected] = useState(false);

  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setIsSelected(true);
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    setIsSelected(true);
  };
  
  // triggers the input when the button is clicked
    const onButtonClick = () => {
    inputRef.current.click();
  };

    return (
      <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <div>
            <img src="uploadicon.png" width="145" height="130"/>
            {isSelected ? (
              <p><b>Successfully uploaded!</b></p>
             ) : (
              <button className="upload-button" onClick={onButtonClick}>Drag and drop your file here or Upload a file</button>
            )}
            <p class="text-muted font-weight-light"><small>**We are still in Phase 1. Only .pdf is accepted</small></p>
            
          </div> 
        </label>
        {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      </form>
    );
  };

  export default FileUploadButton;