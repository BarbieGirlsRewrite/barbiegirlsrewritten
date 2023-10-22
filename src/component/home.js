import bgrLogo from "../img/image 64295.png";
import bgrFrame from "../img/Frame.svg";
import bgrBG from "../img/BG.svg";
import bgrDesign from "../img/12 2.svg";
import rightBfly from "../img/837 1.svg";
import leftBfly from "../img/837 2.svg";
import bgrModal from "../img/Modal.svg";
import barbie from "../img/211 2.svg";
import cones from "../img/cones.svg";
import bgrPicFrame from "../img/762 2.svg";
import shopIcon from "../img/1 56240.svg"
import gamesIcon from "../img/1 56239.svg"
import fashionIcon from "../img/1 56241.svg"
import chatIcon from "../img/1 56242.svg"
import rulesBG from "../img/997 1.png"
import rulesFG from "../img/998 1.png"
import rulesHL from "../img/999 1.png"
import socialsBG from "../img/991 1.png"
import socialsFG from "../img/992 1.png"
import socialsHL from "../img/993 1.png"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect } from "react";

function Home (){
;

    return <div class="background">
    <div class="container">
      <item>{/* 1.1 */}</item>
      <item>{/* 1.2 */}</item>
      <item>{/* 1.3 */}</item>
      <item>{/* 1.4 */}</item>
      <item>{/* 1.5 */}</item>
      <item class='lb'>{/* 1.6 */}
        <img src={leftBfly} id='lb' alt="left butterfly"></img>
      </item>
      <item>1.7</item>
      <item>1.8</item>
      <item> {/* 1.9 */}
        <img src={bgrLogo} id='bgr-logo' alt="Barbie Girls Rewritten"></img>
      </item>
      <item>{/* 1.10 */}</item>
      <item>{/* 1.11 */}</item>
      <item class='rb'>{/* 1.12 */}
        <img src={rightBfly} id='rb' alt="right butterfly"></img>
      </item>
      <item>{/* 2.1 */}</item>
      <item>{/* 2.2 */}</item>
      <item>{/* 2.3 */}</item>
      <item>{/* 2.4 */}</item>
      <item>{/* 2.5 */}</item>
      <item class='barbie'>{/* 2.6 */}
        <img src={barbie} id='barbie' alt="barbie"></img>
      </item>
      <item>{/* 2.7 */}</item>
      <item>{/* 2.8 */}</item>
      <item>{/* 2.9 */}</item>
      <item>{/* 2.10 */}</item>
      <item class='bgr-modal'>{/* 2..11 */} 
        <img src={bgrModal} id='bgr-modal' alt="modal"></img>
          <h1>Join The Fun!</h1>
          <img src={shopIcon} id='shop-icon' alt="shop icon"></img>
          <img src={gamesIcon} id='games-icon' alt="games icon"></img>
          <img src={fashionIcon} id='fashion-icon' alt="fashion icon"></img>
          <img src={chatIcon} id='chat-icon' alt="chat icon"></img>
          <p id='shop'>Go shopping!</p>
          <p id='games'>Play games!</p>
          <p id='fashion'>Design fashions!</p>
          <p id='chat'>Chat with friends!</p>
          <Link to="nav"><button className='button'>Play!</button></Link>
          
      </item>
      <item>{/* 2.12 */}</item>
      <item>{/* 3.1 */}</item>
      <item>{/* 3.2 */}</item>
      <item>{/* 3.3 */}</item>
      <item>{/* 3.4 */}</item>
      <item>{/* 3.5 */}</item>
      <item>{/* 3.6 */}</item>
      <item>{/* 3.7 */}</item>
      <item>{/* 3.8 */}</item>
      <item>{/* 3.9 */}</item>
      <item>{/* 3.10 */}</item>
      <item>{/* 3.11 */}</item>
      <item>{/* 3.12 */}</item>
      <item>{/* 4.1 */}</item>
      <item>{/* 4.2 */}</item>
      <item>{/* 4.3 */}</item>
      <item>{/* 4.4 */}</item>
      <item>{/* 4.5 */}</item>
      <item>{/* 4.6 */}</item>
      <item>{/* 4.7 */}</item>
      <item class='base'>{/* 4.8 */}
          <img src={bgrBG} id='bgr-bg' alt="background"></img>
          <img src={bgrFrame} id='bgr-frame' alt="frame"></img>
          <img src={bgrDesign} id='bgr-design' alt="design"></img>
      </item>
      <item>{/* 4.9 */}
        <img src={bgrPicFrame} id='bgr-picframe' alt="video frame"></img>
        <iframe
          src="https://www.youtube.com/embed/fHAynouG3pI"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video" />{" "}
      </item>
      <item>{/* 4.10 */}</item>
      <item>{/* 4.11 */}</item>
      <item>{/* 4.12 */}</item>
      <item>{/* 5.1 */}</item>
      <item>{/* 5.2 */}</item>
      <item>{/* 5.3 */}</item>
      <item>{/* 5.4 */}</item>
      <item>{/* 5.5 */}</item>
      <item>{/* 5.6 */}</item>
      <item>{/* 5.7 */}</item>
      <item>{/* 5.8 */}</item>
      <item>{/* 5.9 */}</item>
      <item>{/* 5.10 */}</item>
      <item>{/* 5.11 */}</item>
      <item>{/* 5.12 */}</item>
      <item>{/* 6.1 */}</item>
      <item>{/* 6.2 */}</item>
      <item>{/* 6.3 */}</item>
      <item>{/* 6.4 */}</item>
      <item>{/* 6.5 */}</item>
      <item>{/* 6.6 */}</item>
      <item>{/* 6.7 */}</item>
      <item>{/* 6.8 */}</item>
      <item>{/* 6.9 */}</item>
      <item>{/* 6.10 */}</item>
      <item>{/* 6.11 */}</item>
      <item>{/* 6.12 */}</item>
      <item>{/* 7.1 */}</item>
      <item>{/* 7.2 */}</item>
      <item>{/* 7.3 */}</item>
      <item>{/* 7.4 */}</item>
      <item>{/* 7.5 */}</item>
      <item>{/* 7.6 */}</item>
      <item>{/* 7.7 */}</item>
      <item>{/* 7.8 */}</item>
      <item>{/* 7.9 */}</item>
      <item>{/* 7.10 */}</item>
      <item>{/* 7.11 */}</item>
      <item>{/* 7.12 */}</item>
      <item>{/* 8.1 */}</item>
      <item>{/* 8.2 */}</item>
      <item>{/* 8.3 */}</item>
      <item>{/* 8.4 */}</item>
      <item>{/* 8.5 */}</item>
      <item>{/* 8.6 */}</item>
      <item>{/* 8.7 */}</item>
      <item>{/* 8.8 */}</item>
      <item>{/* 8.9 */}</item>
      <item>{/* 8.10 */}</item>
      <item>{/* 8.11 */}</item>
      <item>{/* 8.12 */}</item>
      <item>{/* 9.1 */}</item>
      <item>{/* 9.2 */}</item>
      <item>{/* 9.3 */}</item>
      <item>{/* 9.4 */}</item>
      <item>{/* 9.5 */}</item>
      <item>{/* 9.6 */}</item>
      <item>{/* 9.7 */}</item>
      <item>{/* 9.8 */}</item>
      <item>{/* 9.9 */}</item>
      <item>{/* 9.10 */}</item>
      <item>{/* 9.11 */}</item>
      <item>{/* 9.12 */}</item>
      <item>{/* 10.1 */}</item>
      <item>{/* 10.2 */}</item>
      <item>{/* 10.3 */}</item>
      <item class='cones'>{/* 10.4 */} 
        <img src={cones} id='cones' alt="cones"></img>
      </item>
      <item>{/* 10.5 */}</item>
      <item>{/* 10.6 */}</item>
      <item>{/* 10.7 */}</item>
      <item>{/* 10.8 */}</item>
      <item>{/* 10.9 */}</item>
      <item>{/* 10.10 */}</item>
      <item>{/* 10.11 */}</item>
      <item>{/* 10.12 */}</item>
      <item>{/* 11.1 */}</item>
      <item>{/* 11.2 */}</item>
      <item>{/* 11.3 */}</item>
      <item>{/* 11.4 */}</item>
      <item>{/* 11.5 */}</item>
      <item>{/* 11.6 */}</item>
      <item class='rules'> {/* 11.7 */} 
          <a id='rules-link' target="_blank" href="https://docs.google.com/document/d/1_udlvymwqoRvhfn8ZbxRhMGKuMd1O-5M01yA9ff9goQ/edit#heading=h.s1azp5fxcxyk">
            <img src={rulesHL} id='rules-hl' alt="rules highlight"></img>
          </a>
          <p id='rulestxt'>rules + legal</p>
          <img src={rulesFG} id='rules-fg' alt="rules foreground"></img>
          <img src={rulesBG} id='rules-bg' alt="rules background"></img>
      </item>
      <item>{/* 11.8 */}</item>
      <item class='socials'> {/* 11.9 */}
        <a id='socials-link' target="_blank" href="https://www.flowcode.com/page/barbiegirlsrewritten">
        <img src={socialsHL} id='socials-hl' alt="socials highlight"></img>
        </a>
        <p id='socialstxt'>socials</p>
        <img src={socialsFG} id='socials-fg' alt="socials foreground"></img>
        <img src={socialsBG} id='socials-bg' alt="socials background"></img>
      </item>
      <item>{/* 11.10 */}</item>
      <item>{/* 11.11 */}</item>
      <item>{/* 11.12 */}</item>
      <item>{/* 12.1 */}</item>
      <item>{/* 12.2 */}</item>
      <item>{/* 12.3 */}</item>
      <item>{/* 12.4 */}</item>
      <item>{/* 12.5 */}</item>
      <item>{/* 12.6 */}</item>
      <item>{/* 12.7 */}</item>
      <item>{/* 12.8 */}</item>
      <item>{/* 12.9 */}</item>
      <item>{/* 12.10 */}</item>
      <item>{/* 12.11 */}</item>
      <item>{/* 12.12 */}</item>
    </div>
  </div>
}
  
export default Home;