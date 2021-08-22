import React from 'react';
import Image from 'next/image'
import classes from './Card.module.css'

const Card = ({ data }) => {
    console.log(data)

    const renderTags = () => {
        return data.tags.map((tag, idx) => {
            if (tag.marked) {
                return <div key={idx} className={`${classes.tag} ${classes.active}`}>{tag.title}</div>
            } else {
                return <div key={idx} className={`${classes.tag}`}>{tag.title}</div>
            }
        })
    }
    return (
        <div className={classes.cardContainer}>
            <div className={classes.imgWrapper}>
                <Image src={data.imgUrl} alt={data.alt}
                    width={577} height={895} layout="responsive" />
            </div>
            <div className={classes.tagContainer}>
                {/* <div className={`${classes.tag} ${classes.active}`}>
                    New
                </div>
                <div className={`${classes.tag}`}>
                    Development
                </div> */}
                {renderTags()}
            </div>
            <h4 className={classes.title}>{data.title}</h4>
        </div>
    );
}

export default Card;