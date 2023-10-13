import React, { useRef, useState } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";


export default function Main() {
    const onVideoEnded = () => {
        const videoLog1 = "http://localhost:3000/%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%94.mp4";
        const videoLog2 = "http://localhost:3000/%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B0.mp4";

        if (!videoRef.current) return;

        if (videoRef.current.src !== videoLog2 && videoRef.current.src !== videoLog1) {
            return (
                videoRef.current.src = "/해리포터.mp4"
            );
        } else if (videoRef.current.src == videoLog2) {
            return (
                videoRef.current.src = "/미션임파서블.mp4"
            );
        } else {
            return (
                videoRef.current.src = "/노량.mp4"
            );
        };
    };

    

    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <>
            <div className="movieVideoCover">
                <video ref={videoRef} className="moviePlay" onEnded={onVideoEnded} src="/노량.mp4" autoPlay muted />
                <button className="movieBtn"><a href="#down"><FontAwesomeIcon icon={faAnglesDown} className="movieBtnIcon" /></a></button>
                <div className="down" id="down"></div>
            </div>
        </>

    )
}