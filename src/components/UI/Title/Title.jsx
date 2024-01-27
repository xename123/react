import React from "react";

import s from "./Title.module.scss";

const Title = ({ children, ...props }) => {
    return <h2 className={s.title}>{children}</h2>;
};

export default Title;
