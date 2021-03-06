import React from 'react';

import classes from './SummarySection.module.css'

const SummarySection = () => {
    return (
        <div className={classes.summarySection}>
            <h2>
                <span className={classes.insideSummary}>Have an Idea?</span>
                <span className={classes.underline}>Tell Us About It</span>
            </h2>
                <p className={classes.email}>gives@gmail.com</p>               
                    <p className={classes.address}>4140 Parker Rd , Allentown,<br></br>
                    New Mexico 31134</p>
                    <div className={classes.extralink}>
                        <div className={classes.innerlink}>
                            <p className={classes.fb}>Facebook</p>
                            <p className={classes.linkedin}>Linkedin</p>
                            <p className={classes.benahce}>Benahce</p>
                        </div>
                    
                    </div>
                    <p className={classes.ppolicy}>Privacy & Policy</p>
                    <div className={classes.extralink}>
                        <div className={classes.links2}>
                            <p className={classes.dribble}>Dribble</p>
                            <p className={classes.insta}>Instagram</p>
                            <p className={classes.patreon}>Patreon</p>
                        </div>
                    </div>
        </div>
    )
}

export default SummarySection;