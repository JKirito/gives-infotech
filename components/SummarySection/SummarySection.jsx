import React from 'react';

import classes from './SummarySection.module.css'

const SummarySection = () => {
    return (
        <div className={classes.summarySection}>
            <h2>
                <span>Have an Idea?</span>
                <span className={classes.underline}>Tell Us About It</span>
            </h2>
        </div>
    )
}

export default SummarySection;