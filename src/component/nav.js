import React from "react";
import { Link, Route } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl"

  
const unityContext = new UnityContext({
    loaderUrl: "build/BGRMain.loader.js",
    dataUrl: "build/BGRMain.data",
    frameworkUrl: "build/BGRMain.framework.js",
    codeUrl: "build/BGRMain.wasm"
});

function Nav () {  
    
    return <>
    <div class="background">
        
        <div class="container">
        
            <div id="unity">
            <Unity unityContext={unityContext} style={{ width: 1500, height: 1500 }}/>
            </div>
            <div id="logout-button">
            <Link to= "/"><button className="button3" >Back</button></Link>
            </div>
        </div>
       
    </div>
    </>;
}
export default Nav;