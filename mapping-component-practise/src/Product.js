import React from 'react';

function Product(props){
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <h3>{props.description}</h3>
            <hr></hr>
        </div>
    )
}

export default Product