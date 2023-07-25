import React from 'react';
import './Home.css'
import mainImg from './img/feeling-proud.svg'
import ContactInfo from './ContactInfo';
const Home = () => {
  
  return (
    <div className="midSection slide-out">
      <div className="midBox1">
        <div className="Box1a">
          <p className="mainName">Vikas</p>
        </div>
        <div className="Box1b">
          Web Developer, Data Science Learner, Data analyst | Loves to learn new technology
        </div>
        <div className="Box1c">
          <ContactInfo/>
        </div>
        <div className="Box1d">
          <a href="https://github.com/vikasrajput47/vikasrajput47" target="_blank">
            <p className="text">&#11088; Star Me on GitHub</p>
          </a>
        </div>
      </div>

      <div className="midBox2">
        <img src={mainImg} alt="ImageFront" />
      </div>
    </div>
  );
};

export default Home;
