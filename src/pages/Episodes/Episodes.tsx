import LatestEpisodes from "components/LatesEpisodes/LatestEpisodes"
import React from "react"

type Props = {
}

const Episodes = (props: Props) => {
    return (
        <div className="episodes">
            <LatestEpisodes />
        </div>
    )
}

export default Episodes
