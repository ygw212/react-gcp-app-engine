import axios from "axios";
import { useToken } from "../components/TokenContext";

export function useSubmitPDF(
  file,
  apiURI,
  setAdvice,
  setErrorMsg,
  setIsLoading,
  setUserFiles
) {
  const curToken = useToken();
  let pdfFile = {};
  function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      console.log(e.target.result);
      pdfFile = {
        file: e.target.result,
        fileName: file.name,
      };
    };

    axios
      .post(`${apiURI}`, pdfFile, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
          Authorization: `Bearer ${curToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        const result = res.data;
        setAdvice(result);
        setUserFiles((pre) => {
          return [
            ...pre,
            {
              file: pdfFile.file,
              fileName: pdfFile.name,
              advice: result,
            },
          ];
        });
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setErrorMsg(error.response.data.message);
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
        setIsLoading(false);
      });
  }

  return submitHandler;
}
