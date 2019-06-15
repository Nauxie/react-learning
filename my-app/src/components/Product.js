import React, { Component } from 'react';


function Product(props) {
    return (
        <div className="prod">
            <h1>{props.name}</h1>
            <span style={{background: '61dafb',display:'inlineBlock'}}>{props.price}</span>
            <h3>{props.desc}</h3>
            <hr/>

        </div>
    )
}
export default Product