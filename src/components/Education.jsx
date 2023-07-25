import React from 'react';
import './Education.css'
import eduImg from './img/edu.png'
import hr from './img/hr.png'
import codechef from './img/codechef.png'
import gfg from './img/gfg.png'
import dpgitm from './img/dpgitm.webp'
import cbse from './img/cbse.webp'
const Education = () => {
  return (
    <div>
      <div className="educationBox1 slide-out" >
        <div className="educationBox1a">
          <img src={eduImg} alt="" />
        </div>
        <div className="educationBox1b">
          <div className="educationBox1ba">
            <p className="para1">
              Education
            </p>
            <p className="para2">
              Basic Qualification and Certification
            </p>
          </div>
          <div className="educationBox1bb">
            <ul className="icons">
              <li className="insideIcon">
                <a href="https://www.hackerrank.com/vikasrajpoot479?hr_r=1" target="_blank"><img src={hr} alt="" className="iconImg" /></a>
              </li>
              <li className="insideIcon">
                <a href="https://www.codechef.com/users/vikasrajpoot47" target="_blank"><img src={codechef} alt="" className="iconImg" /></a>
              </li>
              <li className="insideIcon">
                <a href="https://auth.geeksforgeeks.org/user/vikasrajpoot479" target="_blank"><img src={gfg} alt="" className="iconImg" /></a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <p className="degree">Degress</p>
      <div className="educationBox2" data-aos="fade-up">
        <div className="innerEducationBox">
          <div className="innerEducationBox1">
            <img className="eduLogo" src={dpgitm} alt="" />
          </div>
          <div className="innerEducationBox2">
            <div className="innerEducationBox2a">
              <div className="newPara">
                <p className="p1">
                  DPG Institute of Technology and Management
                </p>
                <p className="p2">
                  2020-2024

                </p>
                
              </div>
              <p className="p3">
                  B.Tech in CSE(Data Science)
                </p>
            </div>
            <div className="eduContext">
              <ul className="eduInfo">
                <li className="eduList">
                &#x26A1; I am a final year student of CSE(Data Science)
                </li>
                <li className="eduList">
                &#x26A1; I have studied the various subject like DSA,OS,DBMS,Machine Learning,Data Science etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="innerEducationBox" > 
          <div className="innerEducationBox1">
            <img className="eduLogo" src={cbse} alt="" />
          </div>
          <div className="innerEducationBox2">
            <div className="innerEducationBox2a">
              <div className="newPara">
                <p className="p1">
                  Primary and Secondary Education
                </p>
                <p className="p2">
                  2017-2020

                </p>
                
              </div>
              <p className="p3">
                  10th and 12th
                </p>
            </div>
            <div className="eduContext">
              <ul className="eduInfo">
                <li className="eduList">
                &#x26A1; I have completed my Secondary eduction from National Institute of Open School
                </li>
                <li className="eduList">
                &#x26A1; I have completed my Sr.Secondary education from C.B.S.E
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
