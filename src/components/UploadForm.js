import React, { useEffect, useState } from "react";

function UploadForm({formValue, setFormValue}) {
  const [fileInput, setFileInput] = useState(false);

  const [textValue, setTextValue] = useState("");
  const token ="ya29.a0AWY7Ckmop0n2UXpxq7Y2maHpKbnEJGItA94DzXcItQp6taAbD70Jat87p45YzY4ubg1g0G8L0yzuTf81N2q6nUfL0ilwSYYVHQdG7tjvzg8Hpo0hJqY9w_eFozCGI14jYpNplkvM1aI0AH6KnyRyyerOPCxsWxbiNX9lFQaCgYKAZASARMSFQG1tDrpzkr-lJixd6C5cvxQJA87SA0173";
 
   function gcpHandler(e) {
    e.preventDefault();
    // async function runApi(){
    // const gcpAPI = await fetch(
    //   "https://us-central1-aiplatform.googleapis.com/v1/projects/my-project-nlp-23/locations/us-central1/publishers/google/models/text-bison@001:predict",
    //   {
    //     body: JSON.stringify({
    //       instances: [
    //         {
    //           content:
    //             "Provide a brief summary for the following article: " +
    //             { formValue },
    //         },
    //       ],
    //       parameters: {
    //         temperature: 0.2,
    //         maxOutputTokens: 768,
    //         topP: 0.8,
    //         topK: 40,
    //       },
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     method: "POST",
    //   }
    // );
    // console.log(gcpAPI.url);
    // console.log(gcpAPI.response);
    // console.log(gcpAPI);
    // }
    setFormValue(textValue);
    setTextValue("");
    console.log(formValue);
  }

  function formHandler(text) {
    setTextValue(text);
  }
  function textInputHandler() {
    setFileInput(true);
  }

  function fileInputHandler() {
    setFileInput(false);
  }


  return (
    <div>
      <button onClick={fileInputHandler}>text input</button>
      <button onClick={textInputHandler}>file input</button>
      <form onSubmit={gcpHandler}>
        {fileInput ? (
          <input type="file"></input>
        ) : (
          <textarea
            value={textValue}
            onChange={(e) => formHandler(e.target.value)}
          ></textarea>
        )}
        <button>submit</button>
      </form>
    </div>
  );
}

export default UploadForm;
