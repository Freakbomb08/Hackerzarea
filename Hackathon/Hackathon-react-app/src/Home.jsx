import React from "react"
import { useEffect } from "react"
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import awsLogo from './assets/aws.svg';
import cloudLogo from './assets/cloud.svg';
import githubLogo from './assets/github.svg';
import gitlabLogo from './assets/gitlab.svg';
import googleLogo from './assets/google.svg';
import herokuLogo from './assets/heroku.svg';
import intelLogo from './assets/intel.svg';
import linkedinLogo from './assets/linkedin.svg';
import metaLogo from './assets/meta.svg';
import nvidiaLogo from './assets/nvidia.svg';
import TestimonialSlider from "./TestimonialSlider.jsx";
import Slider1 from "./Slider1.jsx"
 function Home(){
    const MyComponent=()=>{
        const navigate=useNavigate();
    }
    function handleClick(){
        navigate('/')
    };
  return(
    <div className="container">
      <aside className="about">
      <h1>Empowering Coders to Innovate and <br/> Solve Real-World Challenges</h1>
      <p>Where unique challenges find creative solutions. Through the power of hackathons, 
        coders come together to tackle the ecosystem’s most pressing challenges. With opportunities for prizes, mentorship, 
        and ongoing support from top organizations in Web3, 
        we empower innovators to create impactful solutions and drive the future of technology.</p>
      </aside>
      
      <section>
        <h2 className="heading">Trusted By the Best</h2>
        <div className="images">
        <img src={awsLogo}></img>
        <img src={cloudLogo}></img>
        <img src={githubLogo}></img>
        <img src={gitlabLogo}></img>
        <img src={googleLogo}></img>
        <img src={herokuLogo}></img>
        <img src={nvidiaLogo}></img>
        <img src={metaLogo}></img>
        <img src={intelLogo}></img>
        <img src={linkedinLogo}></img>
        </div>
      </section>
      <button className="start-btn" onClick={handleClick}>Get Started</button>
      <div className="slide">
      
      <div className="slider-1">
      <h2 className="heading">Our Past Events</h2>
      <Slider1 />
      </div>
      <TestimonialSlider />
      </div>
    </div>
    

  ); 
 }
 export default Home