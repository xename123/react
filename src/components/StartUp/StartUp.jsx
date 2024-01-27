import React from "react";

import Button from "../UI/button/Button";
import Video from "../UI/Video/Video";

import cover from "../../img/main.jpg";
import mainVideo from "../../videos/interstellar.mp4";
import shape from "../../img/decor/shape2.svg";

import s from "./StartUp.module.scss";
import Text from "../UI/Text/Text";

const StartUp = () => {
    return (
        <div className={s.startUp}>
            <div className="_container">
                <h1 className={s.title}>Landing template for startups</h1>
                <Text>
                    Our landing page template works on all devices, so you only
                    have to set it up once, and get beautiful results forever.
                </Text>
                <div className={s.buttons}>
                    <Button>Start free trial</Button>
                    <Button classNames={["gray"]}>Learn more</Button>
                </div>
                <Video cover={cover} mainVideo={mainVideo} />
                <img src={shape} className={s.shape} alt="shape" />
            </div>
        </div>
    );
};

export default StartUp;
