import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faHeart,  } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faUpload } from '@fortawesome/free-solid-svg-icons'

import "./PostControllers.css";

export function PostControllers(props) {
    return (
        <div className="post-controllers">
            <button className="controller">
                <FontAwesomeIcon icon={faCommentAlt} />
                <span className="controller-text">422</span>
            </button>
            
            <button className="controller">
                <FontAwesomeIcon icon={faRetweet} />
                <span className="controller-text">53</span>
            </button>

            <button className="controller">
                <FontAwesomeIcon icon={faHeart} />
                <span className="controller-text">612</span>
            </button>
    
            <button className="controller">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </div>
    )
}