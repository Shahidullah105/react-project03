import React, { Component, useEffect, useState } from 'react';
import  { Fragment} from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';



 const NavBar =() => {
     const [ sticky, setSticky] = useState(false);
     useEffect( () =>{
      window.addEventListener('scroll', ()=>{
         window.scrollY > 10 ? setSticky(true): setSticky(false);
      
      })



     });




        return (
            <Fragment>
     <Navbar fixed='top'  collapseOnSelect expand="lg" 
     className={ ` ${sticky? 'navbgcolor' : '' } ` } > 
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className={ ` ${sticky? 'onesss' : 'text-white' } ` }>Home</Nav.Link>
            <Nav.Link href="#deets" className={ ` ${sticky? 'onesss' : 'text-white' } ` }>Service</Nav.Link>
            <Nav.Link href="#deets" className={ ` ${sticky? 'onesss' : 'text-white' } ` }>Portfolio</Nav.Link>
            <Nav.Link href="#deets" className={ ` ${sticky? 'onesss' : 'text-white' } ` }>Contact</Nav.Link>
            <Nav.Link href="#deets" className='text-white'>About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




            </Fragment>
        );
    }


export default NavBar;