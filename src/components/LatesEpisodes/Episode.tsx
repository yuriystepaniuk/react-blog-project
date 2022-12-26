import { Button } from "@mui/material"
import React from "react"
import "./Episode.scss"

type Props = {
    category: string
    episodeNumber: number
    title: string
    description: string
    image: string
}

const Episode = ({
    category,
    episodeNumber,
    title,
    description,
    image,
}: Props) => {
    return (
        <div className="episode">
            <img src={image} alt="Episode" />
            <div className="information">
                <div className="category">
                    <span>{category}</span>
                </div>
                <div className="liked">
                    <span>liked</span>
                </div>
                <div className="episode-number">Episode {episodeNumber}</div>
                <div className="title">{title}</div>
                <p className="description">{description}</p>
                <div className="btn-element">
                    <Button className="btn">View Episode Details</Button>
                </div>
            </div>
        </div>
    )
}

export default Episode
