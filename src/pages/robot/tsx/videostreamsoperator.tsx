import React from "react";
import {
    RemoteStream,
} from "shared/util";

export const CameraView = (props: {
    id: string;
    remoteStreams: Map<string, RemoteStream>;
}) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const [stream, setStream] = React.useState<MediaStream | null>(null);

    React.useEffect(() => {
        const newStream = getStream(props.id, props.remoteStreams);

        if (newStream && newStream !== stream) {
            setStream(newStream);
        }
    }, [props.remoteStreams, props.id, stream]);

    React.useEffect(() => {
        if (!videoRef?.current) return;
        videoRef.current.srcObject = stream;
    }, [stream]);

const videoComponent =
            <div className=".video-container" >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted={true}
                        disablePictureInPicture={true}
                        playsInline={true}
                        style={{
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            backgroundColor: "black",
                            marginBottom: "20%",
                        }}
                    />
            </div>
        return (
            <div className="simple-video-container" draggable={false}>
                {videoComponent}
            </div>
        );
};

/**
 * Gets the stream based on the identifier
 *
 * @param id identifier for the video stream
 * @param remoteStreams map of {@link RemoteStream}
 * @returns the corresponding stream
 */
function getStream(
    id: string,
    remoteStreams: Map<string, RemoteStream>,
): MediaStream {
    let streamName: string;
    switch (id) {
        case "operStream":
            streamName = "operStream";
            break;
        default:
            throw Error(`unknow video stream id: ${id}`);
    }
    return remoteStreams.get(streamName)!.stream;
}
