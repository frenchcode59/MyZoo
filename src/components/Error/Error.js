import React from "react";
import TitresH1 from "../UI/Titres/TitresH1";


const error = (props) => (
    <>
        <TitresH1 bgColor={"bg-danger"} >{props.type}</TitresH1>
        <div>
            {props.children}
        </div>
    </>
);

export default error;
