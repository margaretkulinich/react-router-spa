import React from "react";
import { PostHeader } from "./PostHeader/PostHeader";
import "./Post.css";
import { PostContent } from "./PostContent/PostContent";
import { PostControllers } from "./PostControllers/PostControllers";


export default function Post({ imageSrc, displayName, userName, text, img}) {
    return (
        <div className="post">
            <PostHeader
                imageSrc={imageSrc} 
                displayName={displayName}
                userName={userName}
            />
            <PostContent 
                text={text}
                img={img}
            />
            <PostControllers />
        </div>
    )
}