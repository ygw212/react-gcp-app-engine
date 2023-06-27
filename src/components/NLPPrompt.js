import React, { useContext, useState } from "react";
import axios from "axios";
import { ContentContext } from "../App";



function NLPPrompt({ setFormValue }) {
  const [summary, setSummery] = useState("");
  const API_ENDPOINT = "us-central1-aiplatform.googleapis.com";
  const PROJECT_ID = "hackathon-yjij";
  const MODEL_ID = "text-bison@001";
  const [isLoading, setIsLoading] = useState(false);

  const apiTOKEN = process.env.REACT_APP_API_TOKEN;
  console.log(apiTOKEN);
  let currentContent = useContext(ContentContext);


  function tokenHandler() {
    
  }

  function nlpHanddler() {
    setIsLoading(true);
    axios
      .post(
        `https://${API_ENDPOINT}/v1/projects/${PROJECT_ID}/locations/us-central1/publishers/google/models/${MODEL_ID}:predict`,
        {
          instances: [
            {
              content: `Provide a brief summary for the following article:   
              
              ${currentContent}`,
            },
          ],
          parameters: {
            temperature: 0.2,
            maxOutputTokens: 1024,
            topP: 0.8,
            topK: 40,
          },
        },
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiTOKEN}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const result = res.data.predictions[0];
        setSummery(result.content);
        setFormValue(result.content);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  return (
    <div>
      
      <button type="submit" class="btn btn-primary" disabled={isLoading} onClick={nlpHanddler}>
            {isLoading ? (
              <span>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                Loading...
              </span>
            ) : (
              <span>generate</span>
            )}
          </button>
      <button class="btn btn-primary" onClick={tokenHandler}>
        token
      </button>

      {summary}
    </div>
  );
}

export default NLPPrompt;
