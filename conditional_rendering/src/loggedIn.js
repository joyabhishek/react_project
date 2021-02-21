import React from 'react';

function LoggedIn(props){
    if(props.isLoggedIn){
        return(
            <div>
                <h1>Logged IN</h1>
                <button onClick={props.onLogEvent}>Log OUT</button>
            </div>
            )
    }else{
        return(
            <div>
                <h1>Logged OUT</h1>
                <button onClick={props.onLogEvent}>Log IN</button>
            </div>
        )
    }
}

export default LoggedIn