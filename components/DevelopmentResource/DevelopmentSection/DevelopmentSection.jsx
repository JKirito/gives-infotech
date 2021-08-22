import React from 'react';
import CardList from '../CardList/CardList';

import classes from './DevelopmentSection.module.css'

// Just For Now
const tempData = {
    title: 'Complete Web development From Scratch',
    imgUrl: 'https://source.unsplash.com/577x895/?apps,nature,technology',
    alt: 'Web development course',
    tags: [
        {
            title: 'New',
            marked: true,
        }, {
            title: 'Development',
            marked: false,
        }
    ]
}
const BlogtempData = {
    title: 'Choose the right features for your custom mobile Application',
    imgUrl: 'https://source.unsplash.com/577x895/?apps,nature,technology',
    alt: 'Right Feature for Mobile Application',
    tags: [
        {
            title: 'Development',
            marked: false,
        }
    ]
}

const BlogListToRender = [
    BlogtempData,
    BlogtempData,
    BlogtempData
]

// List to Render Courses Data Structure
const listToRender = [
    {
        title: 'Complete Web development From Scratch',
        imgUrl: 'https://source.unsplash.com/577x895/?apps,nature,technology',
        alt: 'Web development course',
        tags: [
            {
                title: 'New',
                marked: true,
            }, {
                title: 'Development',
                marked: false,
            }
        ]
    },
    tempData,
    tempData
]

const CTADummy = {
    title: 'View All Resources',
    link: '/resources/'
}
const BlogCTA = {
    title: 'View Blogs',
    link: '/blog/'
}

const DevelopmentSection = () => {
    return (
        <div className={classes.developmentSection}>
            <h2>Development and Design Resources</h2>
            <div className={classes.subheading}>
                <p>We regularly release design courses, offer advice to newbie designers, walk you through creating awesome effects, and
                    share source files.</p>
            </div>
            <CardList listToRender={listToRender} cta={CTADummy} />
            <h2>Latest Blogs</h2>
            <CardList listToRender={BlogListToRender} cta={BlogCTA} />
        </div>
    );
}

export default DevelopmentSection;