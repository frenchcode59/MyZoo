import React from "react";

const bouton = (props) =>{
    let btnCss = `btn ${props.typeBtn} ${props.css}`;
    return <button className={btnCss} >{props.children}</button>
};

export default bouton;
