import React from "react";

import s from "./Text.module.scss";

const Text = ({ children, classNames = [] }) => {
    return (
        <p className={`${s.text} ${classNames.map((c) => s[c])}`}>{children}</p>
    );
};

export default Text;
