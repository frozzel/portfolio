import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React from 'react'
import Snowfall from 'react-snowfall';
import logo from './logo.svg';

const About = () => {
  
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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Motivated Full Stack Web Developer and Junior Salesforce Administrator looking to join a growing team to continue building and improving on my Salesforce platform and Web Development capabilities.
          </p>
          <p align="LEFT">
          Can provide administration and customization of internal and outward facing Salesforce products and front end/backend web development. Looking for a key position in a dynamic and entrepreneurial environment that is focused on growing a suite of products and services.
          </p>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={20}
            />
          </h1>
          <div>
         <p>Front end programming languages HTML, Javascript, React, SASS and CSS</p> 
         <p>Version control systems, Git and GitHub</p> 
         <p>APIs like REST and SOAP as well as protocol like HTTP</p> 
         <p>Database storage solutions like JSON, SQL, and NoSQL</p> 
         <p>Graphic design and visual communications skills</p> 
         <p>Troubleshoot user and system issues, providing training, assistance, and solutions for end users</p> 
         <p>Deep functional understanding of business process on the Salesforce platform that can assist users with functional
            issues and requests</p> 
         <p>Creating and maintaining Reports, Dashboards, fields, assignment rules, validation rules, page layouts, flows and
            process builder</p> 
         <p>Setting up new users, profiles, permission sets and roles, Ensuring data integrity and security</p> 
         <p>Configure customized solutions within the SFDC platform to support critical business functions and meet project
            objectives and client requirements.</p> 
          </div>
          
        </div>
        </div>
        <div className="">
        <Snowfall color="#7cc5d9" style={{opacity: '.4' }} snowflakeCount={100}/>

        
          <div className="App-logo">
          <div><img src={logo} className="App-logo" alt="logo" /></div>
            
          </div>
        </div>
      
    </>
  )
}

export default About;
