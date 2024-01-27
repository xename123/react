import React from "react";

import s from "./Review.module.scss";

import quote from "../../img/decor/quote.svg";

const Review = ({ review }) => {
    return (
        <div className={s.review}>
            <div className={s.review__image}>
                <img
                    className={s.review__user}
                    src={review.userIcon}
                    alt="user"
                />
                <img className={s.review__quote} src={quote} alt="quote" />
            </div>
            <p className={s.review__text}>— {review.text}</p>
            <h6 className={s.review__about}>
                {review.userName} <span className={s.review__split}> / </span>
                <span className={s.review__category}>{review.category}</span>
            </h6>
        </div>
    );
};

export default Review;
