import React from 'react';
import Image from 'next/image'
import classes from './TopSection.module.css'

import ComputerImage from '../../public/MotoComp.png'

const TopSection = () => {
    return (
        <div className={classes.topSection}>
            <div className={classes.holder}>
                <div className={classes.wrapper}>
                    <h1 className={classes.heading}>
                        <span>
                            We develop your
                        </span>
                        <span>
                            <span className={classes.bluetext}>ideas</span> and <span className={classes.bluetext}>skill</span>
                        </span>
                        <span>so you can exceed</span>
                    </h1>
                </div>
                <button className={`${classes.btnPrimary} ${classes.marginTop} `}>Start Project</button>
            </div>
            <div className={classes.sectionImg}>
                <Image src={ComputerImage} layout='responsive' alt='Computer'></Image>
            </div>
        </div>
    );
}

export default TopSection;