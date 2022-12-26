import React from "react"
import Button from "@mui/material/Button"
import "./Menu.scss"
import { NavLink } from "react-router-dom"

type Props = {
}

const Menu = (props: Props) => {
    return (
        <>
            <div className="menu">
                <Button>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-header-menu" : "header-menu" }>
                        Home
                    </NavLink>
                </Button>
                <Button>
                    <NavLink to="/episodes" className={({ isActive }) => isActive ? "active-header-menu" : "header-menu" }>
                        Episodes
                    </NavLink>
                </Button>
                <Button>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-header-menu" : "header-menu" }>
                        About
                    </NavLink>
                </Button>
                <Button>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active-header-menu" : "header-menu" }>
                        Contact
                    </NavLink>
                </Button>
                <Button>
                    <NavLink to="/reviews" className={({ isActive }) => isActive ? "active-header-menu" : "header-menu" }>
                        Reviews
                    </NavLink>
                </Button>
            </div>
        </>
    )
}

export default Menu
