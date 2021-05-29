import React from 'react';
import "./Button.css";

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'blue', 'red', 'green'];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
})=> {

    let checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    let checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    let checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];

    return (
        <>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
            onClick={onClick} type={type}> {children} </button>
        </>
    )
}

export default Button;