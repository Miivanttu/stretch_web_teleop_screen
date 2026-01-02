import React from "react";
import "robot/css/text.css";

type TextProps = {
    text: string;
    style?: React.CSSProperties;
};

export const TextShowen = (props: TextProps) => {
    return (
        <div className="text-show" style = {props.style}>
            {props.text}
        </div>
    );
};