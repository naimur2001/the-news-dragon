import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import EditorChoice from './EditorChoice';
const News = () => {
  const news=useLoaderData();
  const {title,details,image_url,category_id}=news;

  return (
    <div>
     <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
       <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowAltCircleLeft></FaArrowAltCircleLeft>  All News in this Category</Button></Link>
      </Card.Body>
    </Card>
    <div className='my-5'>
    <EditorChoice></EditorChoice>
    </div>
    </div>
  );
};

export default News;