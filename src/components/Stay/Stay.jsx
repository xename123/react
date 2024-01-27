import React from "react";
import Button from "../UI/button/Button";

import s from "./Stay.module.scss";
import Input from "../UI/Input/Input";

import shape from "../../img/decor/shape3.svg";

const Stay = () => {
    return (
        <div className={s.stay}>
            <div className="_container">
                <div className={s.stay__body}>
                    <div className={s.stay__content}>
                        <h4 className={s.stay__title}>Stay in the loop</h4>
                        <p className={s.stay__text}>
                            Join our newsletter to get top news before anyone
                            else.
                        </p>
                    </div>
                    <form action="#" className={s.form}>
                        <div className={s.form__item}>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Your best email…"
                            />
                            <Button classNames={["white"]}>Subscribe</Button>
                        </div>
                    </form>
                    <img className={s.shape} src={shape} alt="shape" />
                </div>
            </div>
        </div>
    );
};

export default Stay;
