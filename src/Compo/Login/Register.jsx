import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
const {createUser}=useContext(AuthContext);
const [accepted,setAccepted]=useState(false);
const handleAccept=(event)=>{
  setAccepted(event.target.checked)
}
const handleRegister=(event)=>{
event.preventDefault();
const form=event.target;
const photo=form.photo.value;
const name=form.name.value;
const email=form.email.value;
const password=form.password.value;

createUser(email,password)
.then(result=>{

  const createdUser=result.user;
  console.log(createdUser);
form.reset();
})
.catch(error=>{
  console.log(error)
})

}

  return (
    <div>
          <Container className='w-25 mx-auto'>
      <h3>Please Register</h3>
        <Form onSubmit={handleRegister} className='bg-danger p-3 rounded'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter photo" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={handleAccept}
        type="checkbox" 
        name='accept' 
        label={<>Accept <Link to='/terms' >Terms & Conditions</Link></>} />
      </Form.Group>
      <Button  disabled={!accepted}  variant="warning" type="submit">
      Register
      </Button>
      <br /><br />
      <Form.Text className="text-secondary">
          Have an account
         <Link to='/login' className='mx-1'>Login</Link>
        </Form.Text>
        <br /> <br />
      <Form.Text className="text-light">
        
        </Form.Text>
    </Form>
    </Container>
    </div>
  );
};

export default Register;