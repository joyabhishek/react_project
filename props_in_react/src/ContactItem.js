import React from 'react';

function Contactitem(props) {
    console.log(props)
    return (
        <div>
            <img src={props.imageUrl}></img>
            <h1>{props.name}</h1>
            <p>{props.Phone} </p>
            <p>{props.Email}</p>
        </div>
    )
}

export default Contactitem