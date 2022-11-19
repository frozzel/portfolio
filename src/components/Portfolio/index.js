import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import KETORIFIC from '../../assets/images/KETORIFIC.png';
import FlyGuys from '../../assets/images/FLYGUYS.png';
import Weather from '../../assets/images/Weather.png';
import Global from '../../assets/images/Global.png';
import Cup from '../../assets/images/Cup.png';
import Notes from '../../assets/images/Notes.png';
import Snowfall from 'react-snowfall';


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
       
    }, []);
 
       
    return (
        <>
        <Snowfall color="#7cc5d9" style={{opacity: '.4' }} snowflakeCount={100}/>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <p>Please checkout my work as I progress with my Full Stack Development skills! Each site links
                    to its github repo with links in the Readme files to the live site. Keep in mind the sites are
                    deployed using Heroku who sleeps inactive sites to conserve on energy!
          </p>
          
                <div className='card-grid-view'>
                <div className='card-body'><a href="https://github.com/frozzel/Class-Notes">
                        <div className="card-wrapper">
                            <div className='card-img-overlay'>
                                <img src={Notes} alt="" />
                            </div>
                        
                        </div> </a>
                    </div>
                   
                    <div className='card-body'><a href="https://github.com/frozzel/Flyguys">
                        <div className="card-wrapper">
                            <div className='card-img-overlay'>
                                <img src={FlyGuys} alt="FlyGuys" />
                            </div>
                        
                        </div> </a>
                    </div>
                    <div className='card-body'><a href="https://github.com/frozzel/Climate-Change">
                        <div className="card-wrapper">
                            <div className='card-img-overlay'>
                                <img src={Weather} alt="Weather Dashboard" />
                            </div>
                        
                        </div> </a>
                    </div>
                    <div className='card-body'><a href="https://github.com/frozzel/GlobalEquity">
                        <div className="card-wrapper">
                            <div className='card-img-overlay'>
                                <img src={Global} alt="Global Equity" />
                            </div>
                        
                        </div> </a>
                    </div>
                    <div className='card-body'><a href="https://github.com/frozzel/CupOTears">
                        <div className="card-wrapper">
                            <div className='card-img-overlay'>
                                <img src={Cup} alt="Cup O' Tears" />
                            </div>
                        
                        </div> </a>
                    </div>
                    <div className='card-body'><a href="https://github.com/frozzel/KETORIFIC">
                        <div className="card-wrapper">
                            <div className='card-img-overlay'>
                                <img src={KETORIFIC} alt="KETORIFIC" />
                            </div>
                        
                        </div> </a>
                    </div>
                    






                </div>
            </div>
            
        </>
    );
}
export default Portfolio;