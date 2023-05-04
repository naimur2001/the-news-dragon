import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { Container,Row,Col } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav';
import RightNav from '../Shared/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
  return (
    <div>
    <Header></Header>

    <Container>
    
     <Row>
       
       <Col lg={9} className='mt-4' >
       <Outlet></Outlet>

       </Col>
       <Col lg={3} className='mt-4' >
         <RightNav></RightNav>
       </Col>
     </Row>
   </Container>

    <Footer></Footer>
   </div>
  );
};

export default NewsLayout;