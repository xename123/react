import React from "react";
import Title from "../UI/Title/Title";

import ico1 from "../../img/icons/star.svg";
import ico2 from "../../img/icons/features.svg";
import ico3 from "../../img/icons/global.svg";
import ico4 from "../../img/icons/mind.svg";
import ico5 from "../../img/icons/like.svg";
import ico6 from "../../img/icons/chat.svg";

import s from "./Feature.module.scss";

const Features = () => {
    const features = [
        {
            id: 1,
            icon: ico1,
            title: "Instant Features",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        },
        {
            id: 2,
            icon: ico2,
            title: "Instant Features",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        },
        {
            id: 3,
            icon: ico3,
            title: "Instant Features",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        },
        {
            id: 4,
            icon: ico4,
            title: "Instant Features",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        },
        {
            id: 5,
            icon: ico5,
            title: "Instant Features",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        },
        {
            id: 6,
            icon: ico6,
            title: "Instant Features",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        },
    ];
    return (
        <div className={s.features}>
            <div className="_container">
                <Title>
                    The majority our customers do not understand their
                    workflows.
                </Title>
                <div className={s.features__body}>
                    {features.map((feature) => (
                        <div className={s.feature} key={feature.id}>
                            <div className={s.feature__icon}>
                                <img src={feature.icon} alt="icon" />
                            </div>
                            <h4 className={s.feature__title}>
                                {feature.title}
                            </h4>
                            <p className={s.feature__text}>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
