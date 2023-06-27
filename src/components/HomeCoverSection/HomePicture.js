import React from 'react';
import homCoverPic from "/Users/bazi/Documents/GitHub/react-gcp-app-engine/src/images/homCoverPic.png";

function HomePicture() {
    return (
        <img src={homCoverPic} style={{marginLeft: 20 + 'px'}} width="540px" height="500px"/>
    );
}

export default HomePicture;