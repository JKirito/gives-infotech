import React from 'react';
import ProjectListItem from '../ProjectListItem/ProjectListItem';

import classes from './ProjectListContainer.module.css'

const ProjectListContainer = () => {
    return (
        <div className={classes.projectlistcontainer}>
            <div className={classes.heading}>
                <h2>
                    <span>
                        featured
                    </span>
                    <span className={classes.stroked}>
                        projects
                    </span>
                </h2>
            </div>
            <ProjectListItem title='Sleep' heading='Sleep app helps millions fall asleep every night' subheading='branding, design, mobile, product' />
            <ProjectListItem title='Ferumpipe' heading='Galvanized steel metal
    frame manufacture' subheading='branding, design, mobile, product' />
            <ProjectListItem title='Holo' heading='Hulu Video Player' subheading='branding, design, mobile, product' />
        </div>
    );
}

export default ProjectListContainer;