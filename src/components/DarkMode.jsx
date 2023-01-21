import React, { useState } from "react";

function DarkMode(){
    const [isDark,setDark]=useState(false)
    function setBGColor(){

    }
    return 
        <button onClick={setBGColor}>
            DarkMode
        </button>
    
}

export default DarkMode;