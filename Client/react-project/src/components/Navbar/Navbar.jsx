import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';



export default function NavigationBar() {

    const handleLogOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('logedInUserPermissions')
        // nevigate('/login')
    }


    return (
        <>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id='Navbar'>
               
                    <Navbar.Brand className='ms-3 brandname' ><b>Navbar</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-5 ms-auto ps-5">
                            <NavLink className="ms-3 navlink" to="/">Modal</NavLink>
                            <NavLink className="ms-3 navlink" to="/page2">Table</NavLink>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav className='ms-auto me-3'>
                        <Button variant="text"><AccountCircleIcon /></Button>
                        <Button variant="text"><LogoutRoundedIcon /></Button>
                        </Nav>
                    </Navbar.Collapse>
              
            </Navbar>

        </>
    )
}