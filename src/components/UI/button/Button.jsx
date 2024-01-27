import React from "react";
import s from "./Button.module.scss";

const Button = ({ children, classNames = [], ...props }) => {
    return (
        <button
            className={s.button + " " + classNames.map((c) => s[c]).join(" ")}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
