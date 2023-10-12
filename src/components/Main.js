import React from "react";



export default function Main() {
    
    const first = () => {
        
        return(
            "/노량.mp4"
        );
        
    };

    const second = () => {
        const video = document.querySelector(".moviePlay");
        const videoLog1= "http://localhost:3000/%EB%AF%B8%EC%85%98%EC%9E%84%ED%8C%8C%EC%84%9C%EB%B8%94.mp4";
        const videoLog2 = "http://localhost:3000/%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B0.mp4";

        if(video.src !== videoLog2 && video.src !== videoLog1) {
            return (
                video.src="/해리포터.mp4"
            );
        } else if(video.src == videoLog2) {
            return (
                video.src="/미션임파서블.mp4"
            );
        } else {
            return (
                video.src="/노량.mp4"
            );
        };
        
        
    }

    return (
        <>
            <div className="movieVIdeoCover">
                    {/* <ReactPlayer className="ReactPlayer" src="/aa.mp4" muted={true} playing={true} loop={true} width={"100%"}/> */}
                    <video className="moviePlay" onEnded={(second)} src={(first)(second)} autoPlay muted={true} playing={true}/>
            </div>
        </>
        
    )
}