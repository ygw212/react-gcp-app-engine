import axios from "axios";
import { useToken } from "./TokenContext";
import { Trash2 } from "@geist-ui/icons";
function UserFile({
  userFile,
  setAdvice,
  setPdfFile,
  curIndex,
  setUserPreFiles,
  apiURI,
}) {
  const curToken = useToken();
  function selectHandler() {
    setAdvice(userFile.analysisResult);
    setPdfFile("data:application/pdf;base64," + userFile.data);
  }

  function removeHandler() {
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
    <div class="d-flex justify-content-between">
      <a class="list-group-item border-0" onClick={selectHandler}>
        {userFile.pdfName}
      </a>
      <button class="btn btn-light" onClick={removeHandler}>
        <Trash2 size={22} />
      </button>
    </div>
  );
}

export default UserFile;
