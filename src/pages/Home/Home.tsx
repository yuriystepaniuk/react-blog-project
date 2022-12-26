import React from "react"
import AboutAutor from "components/AboutAutor/AboutAutor"
import Coments from "components/Coments/Coments"
import LatestEpisodes from "components/LatesEpisodes/LatestEpisodes"
import Slider from "components/Slider/Slider"
import Subscribe from "components/Subscribe/Subscribe"
import "./Home.scss"

type Props = {
}

const Home = (props: Props) => {
    return (
        <>
                <Slider />
                <LatestEpisodes />
                <div className="home-about-autor">
                    <AboutAutor />
                </div>
                <Subscribe />
                <Coments />
        </>
    )
}

export default Home
