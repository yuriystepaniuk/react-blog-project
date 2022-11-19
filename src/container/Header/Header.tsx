import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/material"
import "./Header.scss"
import Menu from "components/Menu/Menu"

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static">
                <div className="header">
                    <Container className="container">
                        <Toolbar>
                            {/* <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton> */}
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                <span>Castaway</span>
                            </Typography>
                            <Menu />
                        </Toolbar>
                    </Container>
                </div>
            </AppBar>
        </>
    )
}

export default Header
