import React from 'react';

function CondRender(props){
    return(
        <div>
            {props.isLoading? <h1>Is loading ..</h1> : <h1>Loaded finally</h1>}
        </div>
    )
}

export default CondRender