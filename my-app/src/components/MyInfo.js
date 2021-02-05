import React from 'react';

function MyInfo(){
    //Two ways to change font size in jsx
    return (
        <ul>
            <h1>Name: Abishek</h1>            
            <p style={{color:"red", fontSize:80}}>Software engineer</p>
            <p style={{color:"red", fontSize:'80px'}}>Software engineer</p>
            <ol>
                <li>Kashmir</li>
                <li>Puri</li>
                <li>Goa</li>
            </ol>
        </ul>
    )
}

export default MyInfo;