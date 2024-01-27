import React, { useEffect, useMemo, useRef, useState } from "react";
import s from "./VideoBar.module.scss";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

function VideoBar({ duration = 0.1, playingSeconds, setTime, ...props }) {
    const sliderRef = useRef(null);
    const [slide, setSlide] = useState(false);

    useMemo(() => {
        if (sliderRef.current && !slide) {
            sliderRef.current.noUiSlider.set([null, playingSeconds]);
        }
    }, [playingSeconds, slide]);

    useEffect(() => {
        const current = sliderRef.current;
        if (current) {
            noUiSlider.create(current, {
                start: [0, 0.0001],
                connect: true,
                range: {
                    min: 0,
                    max: duration,
                },
            });

            current.noUiSlider.disable(0);

            current.noUiSlider.on("change", (e) => setTime(Math.round(e[1])));
            current.noUiSlider.on("slide", (e) => setSlide(true));
            current.noUiSlider.on("set", (e) => setSlide(false));
            current.noUiSlider.on("end", (e) => setSlide(false));
        }

        return () => {
            if (current && current.noUiSlider) {
                current.noUiSlider.destroy();
            }
        };
    }, [duration]);

    return (
        <div className={s.bar}>
            <div id={s.playedId} ref={sliderRef}></div>
        </div>
    );
}

export default VideoBar;
