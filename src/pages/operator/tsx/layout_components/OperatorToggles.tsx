import React from "react";

interface operStreamProps{
    operStream: MediaStream;
}

export const OperatorToggles = (props: operStreamProps) => {
    const [isVideo, setIsVideo] = React.useState(true);
    const [isAudio, setIsAudio] = React.useState(true);

    const ToggleVideo = () => {
        if(!props.operStream) return;
        const videoTrack = props.operStream.getVideoTracks()[0];
        if(videoTrack){
            const newState = !videoTrack.enabled;
            videoTrack.enabled = newState;
            setIsVideo(newState);
        }
    };

    const ToggleAudio = () => {
        if(!props.operStream) return;
        const audioTrack = props.operStream.getAudioTracks()[0];
        if(audioTrack){
            const newState = !audioTrack.enabled;
            audioTrack.enabled = newState;
            setIsAudio(newState);
        }
    };

    return(
        <div className="operatorToggles">
            <button className="ToggleVideo"
            onClick={ToggleVideo}>
                Video: {isVideo ? "On" : "Off"}
            </button>
            <button className="ToggleAudio"
            onClick={ToggleAudio}>
                Audio: {isAudio ? "On" : "Off"}
            </button>
        </div>
    )
}
