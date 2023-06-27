import React, { Component } from 'react';
import image from "/Users/bazi/Documents/GitHub/react-gcp-app-engine/src/images/logo.png";  

class Logo extends Component {
    render() {
        return (
            <>
                <img src={image} alt="logo" />
                <h2><b>ResumeDebugger</b></h2>
                </>
            )
        }
    }
    
   export default Logo;