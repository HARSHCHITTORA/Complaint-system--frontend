import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import Image from "../../assets/img/logo.png"
function Header() {
  return (
    <Navbar
    collapseOnSelect
    bg="dark"
    varient="dark"
    expand="md"
    >
        <Navbar.Brand>
           <img src={Image} alt="Paise Dekho" height="50"/>
        </Navbar.Brand>
        <Navbar.Toggle 
        aria-controls='basic-navbar-nav' 
        style={{color:"white"}}/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'>
                <Nav.Link href="/dashboard" style={{color:"white"}}>Dashboard</Nav.Link>
                <Nav.Link href="/Tickets" style={{color:"white"}}>Dashboard</Nav.Link>
                <Nav.Link href="/Logout" style={{color:"white"}}>Dashboard</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header