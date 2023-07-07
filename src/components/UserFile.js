
import { Document, Page, pdfjs } from "react-pdf";
import { Tree } from "@geist-ui/core";
import { Trash2 } from '@geist-ui/icons'
import axios from "axios";

function UserFile({userFile,setAdvice,setPdfFile,onTrash}){

    function selectHandler(e){
        
        setAdvice(userFile.analysisResult);
        setPdfFile("data:application/pdf;base64,"+userFile.data);
    }

    return(
        <div class="" > 
            <li class="list-group-item border-0" onClick={selectHandler}>{userFile.pdfName}
            <button type="button" class="btn btn-light" onClick={onTrash}><Trash2 size={22}/></button>
            </li>
        </div>
    )
}

export default UserFile;