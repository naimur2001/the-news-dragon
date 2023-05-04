import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";




const Header = () => {
 
  return (
    <Container>
   <div className="text-center">
   <img src={logo} alt="" />
    <p className='text-secondary'>
      <small>   
      Journalism Without Fear or Favour
      </small></p>
      <p  className='fw-bolder'> {moment().format("dddd, MMMM Do,YYYY")} </p>
   </div>
   <div className='d-flex bg-secondary p-2 rounded-3'>
    <Button variant="danger" >Latest</Button>
    <Marquee className='text-warning fs-4' speed={50}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
   </div>
  
    </Container>
  );
};

export default Header;


{/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
<Container>
  
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> }
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="/">
        <Link to='/' >Home</Link>
      </Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Career</Nav.Link>
      
    </Nav>
    <Nav>
     
      <Nav.Link eventKey={2} href="#memes">
        {
          user &&    <span className='mx-5'><FaUserCircle className='fs-3 text-warning  mx-3 '></FaUserCircle>{user.name} </span>

        }
{
user?             <Button className='fs-5' variant="danger" >Log-out</Button> :  
<Link to='/login'><Button className='fs-5' variant="secondary" >Log-in</Button> </Link>  

}            </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}