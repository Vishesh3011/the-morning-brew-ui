import React, { useEffect, useState } from 'react';

import { db } from '../../firebase';
import { useStateValue } from '../stateProvider';
import { useAuth } from '../Login/AuthContext';

import NewsCard from '../NewsCard/NewsCard';

import './SavedNews.css'


function SavedNews() {
    const [{ savedNews }, dispatch] = useStateValue();

    const [news, setNews] = useState([]);

    const currentUser = useAuth();    

    useEffect (() => {
        if(currentUser){
            db
            .collection('users')
            .doc(currentUser?.uid)
            .collection('savedNews')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setNews(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))            
            ))
        }
        else{
            setNews([]);
        }
    })

  return (
    <div className='home'>
      <section className='news' id = "home">
            {news.map(ns => (
            <NewsCard className='homeNewsCard' key = {ns.source.id} title = {ns.title} description = {ns.description} image = {ns.urlToImage} link = {ns.url}/>
            ))}
      </section>
    </div>
  )
}

export default SavedNews