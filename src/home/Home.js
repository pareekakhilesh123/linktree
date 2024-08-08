import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar/Navbar';
import Section from './Section';
import Footer from '../components/Footer/Footer';
import Login from '../login/Login';


function Home() {
  return (
   <>
    <div className='home'>
    <Navbar/> 
   
    <Section title={"Everything you are. In one, simple link in bio."}
     bodyText={` Join 50M+ people using Linktree for their link in bio. One link to
     help you share everything you create, curate and sell from your
     Instagram, TikTok, Twitter, YouTube and other social media profiles.`}
     displayStyle={{bgColor: "#254f1a", color:"#d2e823"}}
     imgURL={"./img1.png"}   

     />

    <Section title={"Everything you are. In one, simple link in bio." } 
     bodyText={` Join 50M+ people using Linktree for their link in bio. One link to
     help you share everything you create, curate and sell from your
     Instagram, TikTok, Twitter, YouTube and other social media profiles.`}
     displayStyle={{bgColor: "#e9c0e9", color:"#502274"}} 
     imgURL={"./img1.png"}
     
     reverse={true} />

      <Section title={"Everything you are. In one, simple link in bio."}
     bodyText={` Join 50M+ people using Linktree for their link in bio. One link to
     help you share everything you create, curate and sell from your
     Instagram, TikTok, Twitter, YouTube and other social media profiles.`}
     displayStyle={{bgColor: "#780016", color:"#e9c0e9"}} 
     imgURL={"./img1.png"} />
     
      <Section title={"Everything you are. In one, simple link in bio." } 
     bodyText={` Join 50M+ people using Linktree for their link in bio. One link to
     help you share everything you create, curate and sell from your
     Instagram, TikTok, Twitter, YouTube and other social media profiles.`}
     displayStyle={{bgColor: "#e9c0e9", color:"#502274"}} 
     reverse={true}
     imgURL={"./img1.png"} />

     <Footer />
     <Login />


      
    </div>
    </>
  );
}

export default Home;
