import React from "react";
import "./PostHeader.css";

export function PostHeader(props) {
    const { imageSrc } = props;

    return (
        <div className="post-header">
            <div className="post-avatar">
                <img src={imageSrc} />
            </div>
            <h3>{props.displayName}
                <img className="verified-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" />
                <span class="post-header-userName">{props.userName}</span>
            </h3>
        </div>
    );
}
