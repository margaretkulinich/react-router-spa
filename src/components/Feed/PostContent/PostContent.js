import React from "react";
import "./PostContent.css"

export function PostContent({ text, img }) {
    return (
        <div className="post-content">
            {text ? <span className="post-content-text">{text}</span> : null}
            {img ? <img src={img}/> : null}
        </div>
    )       
}