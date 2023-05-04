import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'
const LeftNav = () => {
const [categories,setCategories]=useState([]);
useEffect(()=>{
  fetch("https://the-news-server-naimur2001.vercel.app/categories")
  .then(res=>res.json())
  .then(data=> setCategories(data))

},[])

  return (
    <div>
      <h2 >All Category </h2>
      {
        categories.map(cate=> <p key={cate.id} >
<Link to={`/category/${cate.id}`} className='text-black text-decoration-none' >{cate.name}</Link>

        </p> )
      }
       <div>
       <Row xs={1} md={1} lg={1} className="g-4 my-3">
      
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   
    </Row>
    </div>
    </div>
  );
};

export default LeftNav;