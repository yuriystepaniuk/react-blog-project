import { Button, Grid } from "@mui/material"
import React from "react"
import Episode from "./Episode"
import "./LatestEpisodes.scss"
import episodesArray from "./EpisodesArray"

type EpisodeProps = {
    category: string
    episodeNumber: number
    title: string
    description: string
    image: string
    id: number
}

type Props = {
}

const LatestEpisodes = (props: Props) => {
    
    return (
        <div className="latest-episodes">
            <div className="title-header">
                <h1> Latest episodes</h1>
                <Button className="btn">View all episodes</Button>
            </div>
            <div className="content">
                {episodesArray.map(
                    ({
                        category,
                        episodeNumber,
                        
                        title,
                        description,
                        image,
                        id,
                    }: EpisodeProps) => (
                        <Grid item xs={12} sm={12} md={12} key={id}>
                            <Episode
                                category={category}
                                episodeNumber={episodeNumber}
                                title={title}
                                description={description}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </div>
        </div>
    )
}

export default LatestEpisodes
