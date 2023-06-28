import DisplayThumbnailExample from "./PdfThumbnail.tsx";

function UserFile({userFile,setAdvice,setPdfFile,onTrash}){

    function selectHandler(e){
        
        setAdvice(userFile.advice);
        setPdfFile(userFile.file);
    }

    return(
        <div class="card my-3 p-2" onClick={selectHandler}>
            <button type="button" class="btn-close" aria-label="Close" onClick={onTrash}></button>
            <DisplayThumbnailExample fileUrl={userFile.file} pageIndex={0} />
        </div>
    )

}

export default UserFile;