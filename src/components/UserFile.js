import axios from "axios";
import { useToken } from "./TokenContext";

function UserFile({
  userFile,
  setAdvice,
  setPdfFile,
  curIndex,
  setUserPreFiles,
  apiURI,
}) {
  const curToken = useToken();
  function selectHandler(e) {
    setAdvice(userFile.analysisResult);
    setPdfFile("data:application/pdf;base64," + userFile.data);
  }

  function removeHandler(e) {
    setAdvice(null);
    setPdfFile(null);
    setUserPreFiles((pre) => {
      return pre.filter((taskObject, index) => index !== curIndex);
    });
    axios
      .delete(`${apiURI}/resume/${userFile.id}`, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
          Authorization: `Bearer ${curToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        const result = res.data;
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div class="d-flex">

      <li class="list-group-item" onClick={selectHandler}>
        {userFile.pdfName}
        
      </li>
      <button  class="btn btn-primary" onClick={removeHandler}>-</button>
    </div>
  );
}

export default UserFile;
