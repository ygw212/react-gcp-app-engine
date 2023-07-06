
import { Document, Page, pdfjs } from "react-pdf";
import { Tree } from "@geist-ui/core";
import { Trash2 } from '@geist-ui/icons'

function UserFile({userFile,setAdvice,setPdfFile,onTrash}){

    function selectHandler(e){
        
        setAdvice(userFile.advice);
        setPdfFile(userFile.file);
    }

    return(
        <div class="" >
           
            {/* <DisplayThumbnailExample fileUrl={userFile.file} pageIndex={0} /> */}
            <Tree.File name={userFile.fileName} onClick={selectHandler}><span onClick={onTrash}>-</span></Tree.File>
            
        </div>
    )

}

export default UserFile;