import React from "react";

import check from "../../img/icons/check.svg";

const Solution = ({ solution, ...props }) => {
    return (
        <div {...props}>
            <div className="solution__body">
                <h4>{solution.subtitle}</h4>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <ul>
                    {solution.options.map((option, index) => (
                        <li key={index}>
                            <img src={check} alt="check" />
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="solution__image">
                <img src={solution.image} alt="solution" />
            </div>
        </div>
    );
};

export default Solution;
