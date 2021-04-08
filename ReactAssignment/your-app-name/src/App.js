
import logo from './logo.svg';
import './App.css';
import "./components/mystyles.css";
import React, { useState } from 'react'
import Weather from './components/Weather'
import Akhil from './components/akhil.jpeg';
import Hyderabad from './components/Hyderabad.jpeg';
//import { Component } from "react";

function App() {
  const [state, setState] = useState("s1");
  
    
  return (
  

    <div className="parent">
                <div className="smalldiv">
              <a onClick={() => setState("s2")}><div  className="textdiv">About me</div></a>
              <a onClick={() => setState("s3")}><div className="textdiv">My Town</div></a>
          </div>

          {  state === 's1' &&
            <div className="divbody1">
              <h1>AKHIL ROY (A00443079)</h1>
              <img src={Akhil} width="500px" height="500px" />
            </div>
          }

          {  state === 's2' &&
              <div className="divbody2">
              <a onClick={() => setState("s1")}><div className="textdiv togglebutton absolute">&lt;&lt;BACK TO HOME</div></a>
              <br />
              <br />
              <br />
              <br />
              <h1>Name: &emsp;&emsp; AKHIL ROY</h1>
              <p>I am a 2017 graduate, I graduated from GRIET in Hyderabad. I have been a coding enthusiast for quite a while now.<br/>
                 I currently live in Halifax and I am looking forward to meeting all my classmates and professors at St. Mary's <br />
                 University. I love codng and solving problems. In fact I also loved developing this small React App. I look forward<br />
                 to doing more assignments like these because they are really fun !!! and there is lots to learn &#128512;&#128512;&#128512;.</p>


              <p>I am already somewhat acquainted with coding, so I thought why not try Data Analytics. I like the methodologies used<br/>
                 like regression, time analysis, predictive analysis, cluster analysis, etc. These are some of the reason why I joined<br />
                  MCDA program. In fact I have found myself capable of solving problems in Statistics and its related case studies, this<br />
                  has only nurtured my interest for more &#128522;&#128522;&#128522;. </p><br />
                      
              </div >
              
          }
          {  state === 's3' &&
              <div className="divbody3">
              <a onClick={() => setState("s1")}><div className="textdiv togglebutton absolute">&lt;&lt;BACK TO HOME</div></a>
              
              
              <a className="divbody3sub">
                  <br />
                  <br/>
                  <img src={Hyderabad} width="500px" />
                  <h1>I live in Hyderabad, TS, India.</h1>
              </a>
              
                    <a className="divbody3sub">
                      <Weather />
                    </a>
              </div>
              
          }
            </div>
  );
}

export default App;
