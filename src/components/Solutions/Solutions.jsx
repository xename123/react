import React from "react";

import s from "./Solutions.module.scss";
import Tag from "../UI/Tag/Tag";
import Title from "../UI/Title/Title";
import Text from "../UI/Text/Text";

import solution1 from "../../img/shedule/1.jpg";
import solution2 from "../../img/shedule/2.jpg";
import solution3 from "../../img/shedule/3.jpg";
import Solution from "../Solution/Solution";

const Solutions = () => {
    const solutions = [
        {
            id: 1,
            subtitle: "More speed. Less spend",
            title: "Keep projects on schedule",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            options: [
                "Duis aute irure dolor in reprehenderit",
                "Excepteur sint occaecat ",
                "Amet consectetur adipiscing elit",
            ],
            image: solution1,
        },
        {
            id: 2,
            subtitle: "More speed. Less spend",
            title: "Keep projects on schedule",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            options: [
                "Duis aute irure dolor in reprehenderit",
                "Excepteur sint occaecat ",
                "Amet consectetur adipiscing elit",
            ],
            image: solution2,
        },
        {
            id: 3,
            subtitle: "More speed. Less spend",
            title: "Keep projects on schedule",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            options: [
                "Duis aute irure dolor in reprehenderit",
                "Excepteur sint occaecat ",
                "Amet consectetur adipiscing elit",
            ],
            image: solution3,
        },
    ];

    return (
        <div className={s.solutions}>
            <div className="_container">
                <Tag classNames={["green"]}>Reach goals that matter</Tag>
                <Title>One product, unlimited solutions</Title>
                <Text>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit laborum — semper quis
                    lectus nulla.
                </Text>
                <div className={s.solution__body}>
                    {solutions.map((solution) => (
                        <Solution
                            key={solution.id}
                            className={s.solution}
                            solution={solution}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
