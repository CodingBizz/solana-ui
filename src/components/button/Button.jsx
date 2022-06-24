import * as React from "react";
import "./Button.css";

/*
    This button receives a link OR a function.
*/

// interface buttonProps {
//     label: string,
//     clickFunction: any
// }

const Button = (props) => {
    return (
        <div onClick={props.clickFunction} className="roundedButton">
            <div className="label">{props.label}</div>
        </div>
    );
}

export default Button;

