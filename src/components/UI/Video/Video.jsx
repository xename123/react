import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

import play from "../../../img/icons/play.svg";
import volumeIcon from "../../../img/icons/volume.png";
import fullscreen from "../../../img/icons/fullscreen.png";

import s from "./Video.module.scss";
import { convertTime } from "../../../utils/time";
import VideoBar from "../Bar/VideoBar";

import screenfull from "screenfull";

const Video = ({ cover, mainVideo }) => {
    const slider = useRef();
    const video = useRef();
    const videoContainer = useRef();

    const [duration, setDuration] = useState(0.1);
    const [playingSeconds, setPlayingSeconds] = useState(0);
    const [volume, setVolume] = useState(0.3);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isOnce, setIsOnce] = useState(false);

    useEffect(() => {
        const current = slider.current;
        if (current) {
            noUiSlider.create(current, {
                start: [0, 0.3],
                connect: true,
                range: {
                    min: 0,
                    max: 1,
                },
            });

            current.noUiSlider.disable(0);
            current.noUiSlider.on("slide", (e) => setVolume(+e[1]));
        }

        return () => {
            if (current && current.noUiSlider) {
                current.noUiSlider.destroy();
            }
        };
    }, [duration]);

    function playVideo() {
        if (!isOnce) setIsOnce(true);
        setIsPlaying(!isPlaying);
        const duration = video.current.getDuration();

        setDuration(duration);
    }

    function setTime(time) {
        video.current.seekTo(time);
        setPlayingSeconds(time);
    }
    function onProgress() {
        setPlayingSeconds(Math.floor(video.current.getCurrentTime()));
    }

    function setFullscreen() {
        if (screenfull.isEnabled) {
            screenfull.toggle(videoContainer.current);
        }
    }

    return (
        <div ref={videoContainer} className={s.video}>
            <div>
                <ReactPlayer
                    playing={isPlaying}
                    ref={video}
                    url={mainVideo}
                    width={"100%"}
                    onProgress={onProgress}
                    volume={volume}
                />
                {isOnce || (
                    <img className={s.cover} src={cover} alt="preview" />
                )}
            </div>
            {isOnce ? (
                <div className={s.controls}>
                    <button onClick={playVideo} className={s.play}></button>
                    <p>{convertTime(playingSeconds, duration)}</p>
                    <VideoBar
                        duration={duration}
                        playingSeconds={playingSeconds}
                        setTime={setTime}
                    />
                    <div className={s.controls__bottom}>
                        <button className={s.play_second} onClick={playVideo}>
                            Play
                        </button>
                        <button id={s.volume}>
                            <img src={volumeIcon} alt="volume" />
                            <div ref={slider}></div>
                        </button>
                        <div className={s.fullscreen}>
                            <button onClick={setFullscreen}>
                                <img src={fullscreen} alt="fullscreen" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={s.controls}>
                    <button onClick={playVideo} className={s.play}>
                        <img src={play} alt="play" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Video;
