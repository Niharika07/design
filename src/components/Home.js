import React from "react"
import './Home.css';
import './Card.scss';
import health from "../assets/health.png";
import ZoloHeader from "../assets/ZoloHeader.png";
import CreditHeader from "../assets/CreditHeader.png";
import GroupfinderHearo from "../assets/Groupfinder/GroupfinderHero.png";

const PROJECT_LIST = [
    {
      name: 'Questrade credit card',
      company: ['Questrade', '2025'],
      image: CreditHeader,
      desc: "Designing a seamless credit card experience for investment-conscious Canadians that integrates spending and investing, making wealth growth effortless.",
      link: 'design-with-nikki/questrade',
      status: 'Shipped',
    },
    {
      name: 'Map View for Real Estate Search',
      company: ['Zolo', '2024'],
      image: ZoloHeader,
      desc: 'Improving  Zolo’s real estate search impacting 10M+ users by redesigning the homepage and optimizing map features to better meet the diverse needs of homebuyers.',
      link: 'design-with-nikki/map',
      status: 'Shipped',
    },

    {
      name: 'UHealth+',
      company: ['Case study', '2023'],
      image: health,
      desc: 'Assisting international students in accessing  healthcare services and navigating health insurance plans',
      link: 'design-with-nikki/healthcare',
      status: 'Shipped',
    },
    
    {
        name: 'Groupfinder',
        company: ['Case study', '2022'],
        image: GroupfinderHearo,
        desc: 'Designing a feature for UofT’s LMS that lets students share details about their academic interests and work habits, making it easier to find compatible peers.',
        link: 'design-with-nikki/groupfinder',
        status: 'locked',
      },
      
  ]

  function Home() {
  
  
    return (
      <div className="App">
        
    <div className='root-container'>
     <div className='home-header'>
          <h1>Hello, I'm Niharika 👋
          </h1>
      </div>
      <div className='home-body'>
        <h2>
        A curious designer and developer exploring the nuances of human interactions and simplifying complex workflows. 
        </h2>
        </div>




          {renderCards()}
        </div>
  
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