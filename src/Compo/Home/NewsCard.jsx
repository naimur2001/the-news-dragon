import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import moment from 'moment/moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStamp, FaStar } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const NewsCard = ({news}) => {
const {_id,title,details,image_url,author,total_view,rating}=news;

  return (
    
      <div>

      <Card className="mb-4">
      <Card.Header className='d-flex align-items-center'>
      <Image style={{height: '40px'}} src={author.img} roundedCircle />
      <div className='ps-2 flex-grow-1'>
        <p className='mb-0'>{author?.name}</p>
        <p><small>{moment(author?.published_date).format('DD-MM-yyyy')} {}</small></p>
      </div>
      <div>
<FaRegBookmark></FaRegBookmark>
<FaShareAlt></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant='top' src={image_url} ></Card.Img>
        <Card.Text>
     {details.length < 250 ? <>{details}</> : 
     <>{details.slice(0,250)}... <Link className='fw-bolder text-warning' to={`/news/${_id}`} > Read More </Link>  </>
     }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted d-flex ">
<div className='flex-grow-1 d-flex'>
<Rating style={{ maxWidth: 150 }} 
value={Math.round(rating?.number || 0)} readOnly />
  <span className='ms-2'>{rating?.number}</span>
</div>
<div>
<FaEye></FaEye> {total_view}

</div>
      </Card.Footer>
    </Card>

      </div>
 
  );
};

export default NewsCard;