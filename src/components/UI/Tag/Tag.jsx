import React from "react";

import s from "./Tag.module.scss";

const Tag = ({ children, classNames, ...props }) => {
    return (
        <h6 className={s.tag + " " + classNames.map((c) => s[c]).join(" ")}>
            {children}
        </h6>
    );
};

export default Tag;
