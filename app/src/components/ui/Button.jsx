import React from "react";
import "./Button.css";

function Button({
    id,
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    confirm = false,
    confirmMessage = "Ви впевнені?"
}) {
    const handleClick = (e) => {
        if (disabled) return;

        if (confirm) {
            const approved = window.confirm(confirmMessage);
            if (!approved) return;
        }

        if (onClick) onClick(e);
    };

    return (
        <button
            id={id}
            type={type}
            className={`btn btn-${variant} btn-${size}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;