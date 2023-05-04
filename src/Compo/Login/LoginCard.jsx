import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { useState } from 'react';
const LoginCard = () => {
  const {signIn}=useContext(AuthContext);
  const navigate=useNavigate()
  const location=useLocation();
  const from=location.state?.from?.pathname || '/category/0'
  const [err,setErr]=useState('')
  const handleSignIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    // const photo=form.photo.value;
    // const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    setErr('')
    signIn(email,password)
    .then(result=>{
    
      const loggeddUser=result.user;
      console.log(loggeddUser);
    form.reset();
    navigate(from, {replace: true} );
    })
    .catch(error=>{
      console.log(error)
      setErr(error.message)
    })
    
    }


  return (
    <Container className='w-25 mx-auto'>
      <h3>Please Log-in</h3>
        <Form onSubmit={handleSignIn} className='bg-warning p-3 rounded'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br /><br />
      <Form.Text className="text-secondary">
         Don't have an account?
         <Link to='/register' className='mx-1'>Register</Link>
        </Form.Text>
        <br /> <br />
      <Form.Text className="text-danger">
    <p>{err}</p>
        </Form.Text>
    </Form>
    </Container>
  );
};

export default LoginCard;