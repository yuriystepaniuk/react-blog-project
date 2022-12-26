import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import "./App.scss"
import { StyledEngineProvider } from "@mui/material"

type Props = {
}

export const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Main />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}

export default App
