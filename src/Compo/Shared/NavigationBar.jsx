import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const NavigationBar = () => {
  const {user,logOut}=useContext(AuthContext);
const handleSignOut=()=>{
  logOut()
  .then(result=>{
console.log("logout/btn");
  })
  .catch(error=>{
    console.log(error);
  })
}

  return (
    <Container>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='py-2'>
          <Nav className="mx-auto ">
          
            <Link to='/category/0' className='mx-2' >Home</Link>
            <Link href="#pricing" className='mx-2'>About</Link>
            <Link href="#pricing" className='mx-2 '>Career</Link>
            
          </Nav>
          <Nav>
           
              {
                user &&    <div className=' d-flex align-items-center'>
                  <span className='mx-5 '>
                  <FaUserCircle
                 className='fs-3 text-warning  mx-3 '></FaUserCircle><span className='fw-bolder'>{user.name}</span> </span>
                </div>

              }
{
  user?             <Button className='fs-5' onClick={handleSignOut}  variant="danger" >Log-out</Button> :  
  <Link to='/login'><Button className='fs-5' variant="secondary" >Log-in</Button> </Link>  

}          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default NavigationBar;