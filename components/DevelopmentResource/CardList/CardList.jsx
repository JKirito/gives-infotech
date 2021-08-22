import React from 'react';
import Card from '../Card/Card';
import Link from 'next/Link'

import classes from './CardList.module.css'

// List to Render Data Structure
// const listToRender = [
//     {
//         title: 'Temp Title',
//         imgUrl: 'https://source.unsplash.com/577x895/?apps,nature,technology',
//         alt: '',
//         tags: [
//             {
//                 title: 'New',
//                 marked: true,
//             }, {
//                 title: 'Development',
//                 marked: false,
//             }
//         ]
//     }
// ]

const CardList = ({ listToRender, cta }) => {

    const renderedCards = () => {
        return listToRender.map((cardData, idx) => { return <Card key={idx} data={cardData} /> })
    }
    const renderCTA = () => {
        return <div className={classes.CTA}>
            <Link href={cta.link} >{cta.title}</Link>
        </div>
    }
    return (
        <div className={classes.relative}>
            <div className={classes.cardList}>
                {renderedCards()}
            </div>
            {cta && renderCTA()}
        </div>
    );
}

export default CardList;