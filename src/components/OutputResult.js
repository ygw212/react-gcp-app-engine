import React, { useContext } from "react";
import { ContentContext } from "../App";

function OutputResult(){
    const formvalue = useContext(ContentContext);
    return(
        <div>
            <h2 class = 'h4'>The output result</h2>
            <div>{formvalue}</div>
        </div>
    )
}

export default OutputResult;