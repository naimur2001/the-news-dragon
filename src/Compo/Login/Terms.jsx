import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className='text-center fw-bolder'>
      <h2>Terms & Conditions</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima neque sint, facere asperiores fuga quod molestiae reprehenderit rerum cupiditate earum temporibus eaque architecto voluptas totam modi ab velit corporis cum maiores quisquam. Voluptatum veniam quibusdam laborum adipisci iste, omnis accusamus, voluptatibus quam quaerat sapiente in dolorem quo illo facilis enim.</p>
      <p>Go Back To <Link to='/register' >Register</Link> </p>
    </div>
  );
};

export default Terms;