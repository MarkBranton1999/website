import Mark from './Mark.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import Projects from './projects.json'

var Rainbow = require('rainbowvis.js');
var myRainbow = new Rainbow();
myRainbow.setSpectrum('skyblue', 'darkcyan', 'darkgreen', 'yellowgreen', 'darkgoldenrod', 'darkorange')

function App(props) {

  const [height, setHeight] = useState(document.documentElement.scrollHeight);
  const [color, setColor] = useState("#" + myRainbow.colorAt(window.pageYOffset));

  useEffect(() => {
    function updateColorOnScroll(Offset){
      return "#" + myRainbow.colorAt(Offset);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setColor(updateColorOnScroll(window.pageYOffset))
      );
      window.addEventListener("load", () =>
        setHeight(document.documentElement.scrollHeight),
        myRainbow.setNumberRange(0, height)
      );
    }
  });

  return (
    <div className="App">
      <header className="App-header container-fluid" style={{backgroundColor: color}}>
        <img src={Mark} className="App-logo"/>
        <h1>Mark Branton</h1>
        <div>
          I am a 4th year computer engineering student at the University of Waterloo who is always looking for new job opportunities.
        </div>
        <div>
          I am mainly looking for web development jobs.
          Please do not hesitate to reach out to me with job opportunities.
        </div>
      </header>
      <div class="screen container-fluid" style={{backgroundColor: color}}>
        <h1>
          Projects
        </h1>
        {Projects.map((Project) => {
          return (<div>
            <h2>{Project.Title}</h2>
            <p>{Project.Description}</p>
          </div>);
        })}
      </div>
    </div>
  );
}

export default App;
