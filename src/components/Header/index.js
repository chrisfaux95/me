import React from 'react';
import { NavLink as RRNav } from "react-router-dom";
import { Navbar, NavItem, NavbarBrand, Nav, Button } from 'reactstrap';
import './style.css'

const Header = (props) => {
    return (
        <Navbar color='dark' dark expand='md'>
            <NavbarBrand tag={RRNav}
                exact to="/"
                className="mr-auto">
                Chris Faux
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <Button
                        color="primary"
                        tag={RRNav}
                        exact to="/">
                        About
                    </Button>
                </NavItem>
                <NavItem>
                    <Button
                        color="primary"
                        tag={RRNav}
                        exact to="/portfolio">
                        Portfolio
                    </Button>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header