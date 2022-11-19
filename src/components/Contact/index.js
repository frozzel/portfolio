import {useState, useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
import Salesforce from '../../assets/images/Salesforce.png';
import Snowfall from 'react-snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub, faSalesforce, faYoutube,} from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  
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


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_3eenbrk', 'template_xlft98q', form.current, 'E0jgsTm4JA0E0F_0v')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
      <Snowfall color="#7cc5d9" style={{opacity: '.4' }} snowflakeCount={100}/>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div >
        <span className='icon'>
          <a 
            href="https://linkedin.com/in/dennis-hickox-1b0a10227"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </span>
        <span className='icon'>
          <a
            href="https://github.com/frozzel"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </span>
        <span className='icon'>
          <a
            href="https://trailblazer.me/id/dhickox1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faSalesforce}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </span>
        <span className='icon'> 
          <a
            href="https://www.youtube.com/channel/UCeHPkw1Uk9QhMTu35Yf1FBQ/featured"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </span>
      </div>
          <p>
            I am interested in freelance opportunities, full time MERN Development and Salesforce Integrations. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either. Check out the Video on how I use this data in my Saleforce Dev Org to analyze employment opportunities!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Jobsite or Company Name"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-vid" >
        <img src={Salesforce} className="contact-page salesforceImg" alt="Salesforce Logo" />
        
        <iframe width="500" height="300" src="https://www.youtube.com/embed/tDBYmzdEHi0" title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    
    </>
  )
}

export default Contact;
