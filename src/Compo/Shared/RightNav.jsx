import React from 'react';
import { Button } from 'react-bootstrap';
import {FaGoogle,FaGithub, FaFacebook,FaInstagram,FaTwitter}  from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from './Qzone';
import bg from '../../assets/bg1.png'
const RightNav = () => {
  return (
    <div>
      
      <h4>Log-in With</h4>
     <div className='mb-4 mb-4'>
     <Button  variant='outline-danger' ><FaGoogle/> Log in Google</Button>
     <br />
     <br />
      <Button  variant='outline-secondary' ><FaGithub/> Log in Github</Button>
     </div>
     <h4>Find Us On</h4>
     <div className='mb-4 mb-4'>
     <ListGroup>
      <ListGroup.Item> <FaFacebook></FaFacebook> Facbook</ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
 
    </ListGroup>

     </div>
     <div>
      <Qzone></Qzone>
     </div>
     <div>
    <img src={bg} alt="" />
     </div>
    </div>
  );
};

export default RightNav;