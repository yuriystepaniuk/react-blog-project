import {
    Button,
    TextareaAutosize,
    Card,
    TextField,
    Typography,
    Grid,
} from "@mui/material"
import commentsArray from "components/Coments/CommentsArray"
import React, { useState } from "react"
import "./Reviews.scss"


type Props = {}

type Comments = {
    autor: string
    content: string
    id: number
}

type newComments = {
    autor: string
    content: string
    id?: number
}

const Reviews = (props: Props) => {
    const [reviews, setReviews] = useState<Comments[]>(commentsArray)
    const [newReviews, setNewReviews] = useState<newComments>({
        autor: "",
        content: "",
    })
    const handleChangeAutor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReviews((prevState) => ({
            ...prevState,
            autor: e.target.value,
        }))
    }
    const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReviews((prevState) => ({
            ...prevState,
            content: e.target.value,
        }))
    }
    const onSend = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReviews.autor === "" || newReviews.content === "") {
            alert("all fields are required")
            return
        }
        setReviews((prevState) => {
            return [...prevState, { ...newReviews, id: Math.random() * 1000 }]
        })
        setNewReviews({
            autor: "",
            content: "",
        })
    }
    return (
        <>
            <Typography
                variant="h3"
                sx={{ textAlign: "center", color: "white", padding: "40px 0" }}
            >
                Add Reviews
            </Typography>
            <form onSubmit={onSend}>
                {/* <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        color: "white",
                        padding: "40px 0",
                    }}
                >
                    Please leave a review
                </Typography> */}
                <div style={{ textAlign: "center", display: "block" }}>
                    <div>
                        <TextField
                            className="text-field"
                            placeholder="Your name"
                            value={newReviews.autor}
                            onChange={handleChangeAutor}
                            sx={{
                                label: { color: "grey" },
                                backgroundColor: "#191919",
                                border:"1px solid white",
                                borderRadius:"3px",
                            }}
                        />
                    </div>
                    <TextareaAutosize
                        className="text-area"
                        placeholder="Write your comment..."
                        value={newReviews.content}
                        onChange={handleChangeContent}
                        minRows={5}
                        style={{
                            margin: "20px 0",
                            border: "1px solid white",
                            borderRadius: "3px",
                            backgroundColor: "#191919",
                        }}
                    />
                    <div>
                        <Button
                            className="btn-review"
                            type="submit"
                            variant="outlined"
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </form>
            <Typography
                variant="h3"
                sx={{ textAlign: "center", color: "white", padding: "60px 0" }}
            >
                All Reviews
            </Typography>
            <Grid container spacing={2}>
                {reviews.map(({ autor, content }: Comments, id) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Card className="one-review">
                            <div className="item-block">
                                <p className="description-comment">{content}</p>
                                <h6 className="autor-comment">{autor}</h6>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Reviews
