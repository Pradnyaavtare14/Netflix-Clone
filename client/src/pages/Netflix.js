/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {FaPlay} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovies, getGenres} from '../store';

import TopNav from '../components/TopNav'
// import Card from '../components/Card';
import SliderContainer from '../components/SliderContainer';

const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false);
   
  const navigate= useNavigate();
  const movies= useSelector((state)=> state.netflix.movies)

  const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

  const dispatch = useDispatch()
  useEffect(()=>{
        dispatch(getGenres())
  },[]);

  useEffect(()=>{
    if(generesLoaded){
      dispatch(fetchMovies({type:"all"}))
    }
});


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  };
  // console.log(movies)
  
  return (
    <HeroContainer>
      <div className='hero'>
        <TopNav isScrolled={isScrolled} />
        <img className="background-image" src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
          alt='heroimage'
        />
        <div className='container'>
          <div className='title'>
            <h1>Iron Man</h1>
            <p>Iron is a superhero who appears in American comic books published by marvel Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938).
            Although there are earlier characters who arguably fit this definition, it was Superman who popularized the superhero genre and established its conventions. He was the best-selling superhero in American comic books up until the 1980s 1.
            </p>

          </div>
          <div className='buttons'>
            <button onClick={()=> navigate('/player')} className='playBtn'>Play</button>
            <button className='moreBtn'>More</button>
          </div>

        </div>
      </div>
      <SliderContainer movies={movies}/>

    </HeroContainer>

  )
}
const HeroContainer = styled.div`

.hero{
  position: relative;
  .background-image{
    filter: brightness(40%);

  }
  img{
    height: 70vh;
    width: 100%;
  }
  .container{
    position: absolute;
    bottom: 1rem;
    .title{
      h1{
        margin-left: 5rem;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee, rgb(128,13,13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

      }
      p{
        margin-bottom: -50px;
        width: 640px;
        margin-left: 5rem;
        font-family:"lexend Deca", sans-serif;
        color: white;


      }
    }
    .buttons{
      display: flex;
      margin: 5rem;
      gap: 2rem;
    }
    .playBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      border-radius: 1rem;
      font-size: 1rem;
      padding:0.9rem ;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
    }
    .moreBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      color:white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1rem;
      padding:0.9rem ;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: 0.1rem solid white;
      cursor: pointer;

    }

  }

}




`

export default Netflix