import React from "react"
import './Home.css';
import './Card.scss';
import TextTransition, { presets } from 'react-text-transition';
import { Fade } from "react-awesome-reveal";
import HealthHeader from "../assets/HealthHeader.png";
import ZoloHeader from "../assets/ZoloHeader.png";
import CreditHeader from "../assets/CreditHeader.png";
import BomHeader from "../assets/BomHeader.png"
import GroupHeader from "../assets/GroupHeader.png";
import SetHeader from "../assets/SetHeader.png";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const TEXTS = [
  'Nice to e-meet you!',
  'I am a lover of chai', 
  'I value empathy & impact',
  'I studied CS & UX Design', 
  "I grew up in 9 states", 
  "If it’s ABBA, it’s on repeat",
  "Tacos are my love language",
  "Backpacked 10 countries chasing Wi-Fi",
  "Coded this site with React and caffeine",
];

const PROJECT_LIST = [
    {
      name: 'Questrade Credit Card App',
      company: ['Questrade', '2025'],
      image: CreditHeader,
      desc: "Designing a 0->1 credit card app that helps Canadians to track their spending, manage their card, and pay off balances with ease.",
      link: '/design/questrade',
      status: 'Shipped',
    },
    {
      name: 'Map View for Real Estate Search',
      company: ['Zolo', '2024'],
      image: ZoloHeader,
      desc: 'Improving  Zolo’s real estate search impacting 10M+ users by optimizing map features to better meet the diverse needs of homebuyers.',
      link: '/design/map',
      status: 'Shipped',
    },
    {
      name: 'Enterprise Settings',
      company: ['Questrade', '2024'],
      image: SetHeader,
      desc: 'Redesigning the Enterprise-wide settings experience at Questrade by aligning with multiple lines of businesses.',
      link: '/design/settings',
      status: 'Shipped',
    },
    {
      name: 'My Maintenance',
      company: ['Bombardier', '2023'],
      image: BomHeader,
      desc: 'Designing features to support aircraft engineers in monitoring aircraft’s real-time health and visualize historic information.',
      link: '/design/bom',
      status: 'Shipped',
    },
    {
      name: 'UHealth+',
      company: ['Case study', '2023'],
      image: HealthHeader,
      desc: 'Assisting international students in accessing  healthcare services and navigating health insurance plans',
      link: '/design/healthcare',
      status: 'Shipped',
    },
    
    {
        name: 'Groupfinder',
        company: ['Case study', '2022'],
        image: GroupHeader,
        desc: 'Designing a feature for UofT’s LMS that lets students share details about their academic interests and work habits, making it easier to find compatible peers.',
        link: '/design/groupfinder',
        status: 'locked',
      },
      
  ]

  function Home() {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        2000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <div className="App">
        
        <div className='jumbotron flex'>
        <div className='left flex flex-1 flex-column'>
          <Fade direction='up' triggerOnce cascade>

            <div className='flex-1'>
            
              <div style={{ position: 'relative' }}>    
                <h1>Hi friend, <span className="gradient-text">I'm Niharika 👋</span></h1>
              </div>
              <h2>
                <TextTransition direction="down" springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
              </h2>
            </div>
            <div className='job-section flex'>
              <Fade direction='up' triggerOnce cascade className='flex-1'>
              <div className='flex-1'>
                <h3>Designed Across</h3>
                <h4>Fintech, Real-estate and Aviation for 4+ years</h4> 
              </div>

              <div className='flex-1'>
                <h3>Let's Connect</h3>
                <div className='flex socials'>
          
                <a href="https://www.linkedin.com/in/niharika-sharma-0b5822b6/" rel="noreferrer" target='_blank'><BsLinkedin style={{ width: "32px", height: "32px", color: "#252525" }} alt="linkedin"/></a>
                <a href="https://github.com/Niharika07" rel="noreferrer" target='_blank'><BsGithub style={{ width: "32px", height: "32px", color: "#252525"}} alt="mail"/></a>
                <a href="mailto:niharika.sharma1596@gmail.com"><MdEmail style={{ width: "32px", height: "32px", color: "#252525" }} alt="mail"/></a>
         
          </div>
              </div>
              </Fade>
            </div>

          </Fade>

        </div>
     
      </div>
      <Fade direction="up" triggerOnce>
      <div className='root-container'>
        {renderCards()}
      </div>
  </Fade>
      </div>
    );
  }
  
  function renderCards() {
    return (
    <div className='flex home-card-container'>
        {PROJECT_LIST.map((item, i) => {      
  
          return(
            <div className='project-card'> 
            <a href={item.link} className={'fanout home-card ' + item.class} target={item.target}>
  
              <div className='preview-image' style={{backgroundImage: `url('${item.image}')`}}>
  
              </div>
                <div className='flex home-card-left flex-1 flex-column'>
                  <div className='flex-1 comp-logo'>
                    <div className='flex comp-section'>
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                  <p>{item.desc}</p>
  
                  <div className='project-context'>
                  {item.company.map(thing => (
                      <><h4>{thing}</h4>
                      <h4 className='dot'>·</h4>
                      </>
                    )
  
                  )}
                  </div>
                </div>
            </a>
          </div>
  
          );
  
      })}
    </div>
  
    )
  
  }
  
  export default Home;