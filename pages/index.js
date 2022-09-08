import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router, { useRouter } from "next/router";
import axios from "axios";
import Cards from './components/card';


const Index = () => {

  const router = useRouter();

  const [news, setNews] = useState([]);

  const getNews = async () => {
      await axios
        .get('https://inshorts.deta.dev/news?category=science')
        .then((resp) => {
          setNews(resp.data.data);
         })
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className='bg-light'>
      <h1 className='text-center pt-5 pb-5 bg-dark text-light mb-5 fixed-top' >MyNews</h1>
      <div className='d-flex flex-wrap gap-5 justify-content-center' style={{paddingTop: '200px'}}>
      {news.map((item) => {
        return (
          <Cards
             author={item.author}
             image={item.imageUrl}
             title={item.title}
             date={item.date}
             content={item.content}
          />
        )
      })}
      </div>
      
    </div>
  )
}

export default Index