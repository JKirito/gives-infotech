import React from 'react';

import classes from "./TagLine.module.css"

const TagLine = () => {
    return (
        <div className={classes.tagline}>
            <h2>
                <span>Leading digital agency with solid design and development </span>
                <span>expertise. We build readymade websites, mobile </span>
                <span>applications, and elaborate online business services.</span>
            </h2>
        </div>
    );
}

export default TagLine;