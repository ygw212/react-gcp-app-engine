import axios from "axios";
import { useToken } from "../components/TokenContext";

export function useSubmitPDF(
  file,
  apiURI,
  setAdvice,
  setErrorMsg,
  setIsLoading,
  setUserFiles,
  setPdfFile
) {
  const curToken = useToken();
  
  function submitHandler(e) {
   
    e.preventDefault();
    if(!file){
      setErrorMsg("Please choose a PDF file")
      return;
    }
    setErrorMsg("")
    setIsLoading(true);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend =  (e) => {

      let pdfFile= e.target.result;
      const base64string = pdfFile.replace(/^data:\w+\/\w+;base64,/, '');
      setPdfFile(pdfFile);
      axios
      .post(`${apiURI}`, {
        file:base64string,
        fileName:file.name,
      }, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
          Authorization: `Bearer ${curToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        const result = res.data;
        setAdvice(result.analysisResult);
        setUserFiles((pre) => {
          return [
            ...pre,
            {
              data: result.data,
              pdfName: file.name,
              analysisResult: result.analysisResult,
              id:result.analysisResult.id
            },
          ];
        });
        setIsLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setErrorMsg(error.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        setIsLoading(false);
      });

    };
    
    
  }

  return submitHandler;
}
