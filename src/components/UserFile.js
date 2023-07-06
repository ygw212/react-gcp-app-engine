
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
           
            {/* <DisplayThumbnailExample fileUrl={userFile.file} pageIndex={0} /> */}
            
            <li class="list-group-item" onClick={selectHandler}>{userFile.pdfName}<button onClick={onTrash}>-</button></li>
            
        </div>
    )

}

export default UserFile;