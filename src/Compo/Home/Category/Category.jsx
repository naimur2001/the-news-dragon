import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard';

const Category = () => {
const {id}=useParams();
const cateoriesNews = useLoaderData();


  return (
    <div>
    {id && <h1>Category size {cateoriesNews.length}</h1>}
     {
      cateoriesNews.map(news=> <NewsCard key={news._id} 
      news={news}
      
      ></NewsCard> )
     }
    </div>
  );
};

export default Category;