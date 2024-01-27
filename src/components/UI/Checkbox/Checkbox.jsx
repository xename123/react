import React, { useId } from "react";

import s from "./Checkbox.module.scss";

const Checkbox = ({ children, ...props }) => {
    const id = useId();
    return (
        <div className={s.checkbox}>
            <input {...props} id={id} type="checkbox" />
            <label htmlFor={id} className="label">
                Keep me signed in
            </label>
        </div>
    );
};

export default Checkbox;
