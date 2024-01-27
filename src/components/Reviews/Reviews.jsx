import React from "react";

import s from "./Reviews.module.scss";
import Title from "../UI/Title/Title";
import Text from "../UI/Text/Text";

import user1 from "../../img/users/1.png";
import user2 from "../../img/users/2.png";
import user3 from "../../img/users/3.png";
import Review from "../Review/Review";

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            userIcon: user1,
            text: " Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
            userName: "Anastasia Dan  ",
            category: "UX Board",
        },
        {
            id: 2,
            userIcon: user2,
            text: " Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
            userName: "Roman Level",
            category: "AppName",
        },
        {
            id: 3,
            userIcon: user3,
            text: " Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
            userName: "Akex Sackett",
            category: "Reform Layouts",
        },
    ];

    return (
        <div className={s.reviews}>
            <div className="_container">
                <Title>Don't take our word for it</Title>
                <Text>
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis semper quis lectus nulla at volutpat diam ut venenatis
                    tellus—in ornare.
                </Text>
                <div className={s.reviews__body}>
                    {reviews.map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
