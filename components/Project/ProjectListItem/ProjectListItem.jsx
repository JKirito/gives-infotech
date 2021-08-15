import React from 'react';
import Image from 'next/image'

import classes from './ProjectListItem.module.css'

const ProjectListItem = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.leftcontainer}>
                <h2 className={classes.heading}>{props.title}</h2>
                <h4 className={classes.subheading}>{props.heading}</h4>
                <h6 className={classes.info}>{props.subheading}</h6>
            </div>
            <div className={classes.rightcontainer}>
                <Image src="https://source.unsplash.com/577x895/?apps,nature,technology" alt="Application"
                    width={577} height={895} layout="responsive" />
            </div>
        </div>
    );
}

export default ProjectListItem;