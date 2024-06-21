import React from "react";
import Nav from '../navbar/navbar'

function Homepage({signName}) {
    return (
        <div>
            <Nav logName={signName}/>
            <h1>Homepage</h1>
        </div>
    )
}


export default Homepage