import React from "react";

const SubmitButton = ({type, text, className, onClick}) => {
    return(
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
        {text}
        </button>
    )
}

export default SubmitButton;