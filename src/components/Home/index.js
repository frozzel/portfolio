import './index.scss';
import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {
    faSalesforce,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Snowfall from 'react-snowfall';


const Home = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 6000);

      return () => {
          clearTimeout(timer);
      }
  });

  useEffect(() => {
     
  }, []);
  
    const nameArray = ['D', 'e', 'n', 'n', 'i', 's', '', 'H', 'i', 'c', 'k', 'o', 'x', ','];
    const jobArray = [
        'F',
        'u',
        'l',
        'l',
        ' ',
        'S',
        't',
        'a',
        'c',
        'k',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]
   

    return (
        <>
                <Snowfall
  // Changes the snowflake color
  color="#7cc5d9"
  // Applied to the canvas element
  style={{opacity: '.4' }}
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={100}
/>
        <div className="container home-page">
            
            <div className="text-zone">
                <h1>
                
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
              
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={30}
                />
                </h1>


            <h2>MongoDb / Express / React / NodeJs / Salesforce Admin</h2>

            </div>
            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSalesforce} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        </>
    )
}
export default Home;