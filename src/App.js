import OutputResult from "./components/OutputResult";
import UploadForm from "./components/UploadForm";
import React, { useMemo, useState } from "react";
import { tokenizeWords } from "./hooks/nlp";
import WordCloud from "react-d3-cloud";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formValue, setFormValue] = useState(" ");

  const words = useMemo(() => tokenizeWords(formValue), [formValue]);
  console.log(words);

  const fontSizeMapper = (word) => Math.log2(word.value) / 10;

  return (
    <div>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Title</a>
    <form class="d-flex" role="search">
    <button class="btn btn-outline-success me-2" type="button">Register</button>
      <button class="btn btn-outline-success me-2" >Login</button>
    </form>
  </div>
</nav>
      <Container>
      
        
        <Row class="pt-4">
          <UploadForm formValue={formValue} setFormValue={setFormValue} />
        </Row>
        <OutputResult />

        {words.length != 0 && (
          <div class="card">
            <div class="card-body">
              <WordCloud
                data={words}
                rotate={0}
                height={100}
                width={100}
                padding={0}
                font="Helvetica, sans-serif"
              />
            </div>
          </div>
        )}

        <h2>The files & text the user has uploaded</h2>
        <div>{formValue} </div>
      </Container>
    </div>
  );
}

export default App;
