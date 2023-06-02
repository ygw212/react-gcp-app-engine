import OutputResult from './components/OutputResult';
import UploadForm from './components/UploadForm';
import React, {  useState } from "react";

function App() {
  const [formValue, setFormValue] = useState(null);
  return (
    <div className="App">
      <h1>Title</h1>
      <h2>注册/登录</h2>
      <UploadForm formValue={formValue} setFormValue={setFormValue} />
      <OutputResult/>
      <h2>
        The files & text the user has uploaded
      </h2>
      <div>{formValue} </div>
    </div>
  );
}

export default App;
