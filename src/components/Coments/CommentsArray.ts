

export type Comments = {
    id: number
    image: string
    autor: string
    content: string
}

const commentsArray: Comments[] = [
    {
        id: 1,
        image: "images/star-pic.png",
        content: "I can’t recommend this podcast enough",
        autor: "Betty Lacey",
    },
    {
        id: 2,
        image: "images/star-pic.png",
        content: "Jacob is the best in the business",
        autor: "Adam Driver",
    },
    {
        id: 3,
        image: "images/star-pic.png",
        content: "A wealth of audio knowledge",
        autor: "Marcus Brown",
    },
    {
        id: 4,
        image: "images/star-pic.png",
        content: "Every episode is a gem!",
        autor: "Jessica Knowl",
    },
    {
        id: 5,
        image: "images/star-pic.png",
        content: "Whoa whoa, let me take some notes!",
        autor: "Scott Adams",
    },
    {
        id: 6,
        image: "images/star-pic.png",
        content: "I’ve upped my game considerably since I started listening",
        autor: "Steven Blast",
    }
]


export default commentsArray
