import { Grid } from "@mui/material"
import React from "react"
import "./Coments.scss"
import OneComent from "./OneComent"
import commentsArray from "components/Coments/CommentsArray"



type CommentProps = {
    image: string
    content: string
    autor: string
    id: number
}

type Props = {}

const Coments = (props: Props) => {
    return (
        <>
            <Grid
                className="comments-block"
                container
                direction="row"
                justifyContent="center"
                spacing={2}
            >{commentsArray.map(
                        ({ image, content, autor,id }: CommentProps) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <OneComent
                                    image={image}
                                    content={content}
                                    autor={autor}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}

export default Coments
