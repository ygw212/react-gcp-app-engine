import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import OutputResult from './OutputResult';


function Summarizer({formValue, setFormValue}) {
    const [textValue, setTextValue] = useState("");
    const [fileInput, setFileInput] = useState(false);
    const [file, setFile] = useState(null);

    function gcpHandler(e) {
      e.preventDefault();
  
      if (file) {
        setFormValue(file.name);
        setFile(null);
      } else {
        setFormValue(textValue);
        setTextValue("");
      }
    }

    function textValueHandler(e) {
      console.log(e.target.value);
      setTextValue(e.target.value);
    }

    function fileValueHandler(e) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }

    function textInputHandler() {
      setFileInput(true);
    }
  
    function fileInputHandler() {
      setFileInput(false);
    }

  
    return (
        <div >
          <CardGroup>
            <Card border="secondary" style={{ width: '38rem' }}>
            <Card.Header class="fs-3"><center><h4>Summarizer</h4></center></Card.Header>
            <Card.Body style={{ height: '35rem' }}>
                <textarea
                  class="form-control"
                  rows='20'cols='70'
                  placeholder='Enter your text here'
                  id="exampleFormControlTextarea1"
                  className="border border-white"
                  value={textValue}
                  onClick={fileInputHandler}
                  onChange={textValueHandler}
                  checked={!fileInput}
                />
            
                <input type="file" name="file" onClick={textInputHandler} onChange={fileValueHandler} checked={fileInput} />
                
                <button onClick={gcpHandler} type="button" class="btn btn-primary position-absolute bottom-0 end-0 mb-3 me-4">Submit</button>
                
            </Card.Body>
          </Card>
          <br />
          <Card border="secondary" style={{ width: '38rem' }}>
            <Card.Header><center><h4>Result</h4></center></Card.Header>
            <Card.Body>
              <OutputResult />
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
     
    );
}

export default Summarizer;