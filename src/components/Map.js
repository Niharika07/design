import './Template.scss';
import Template, { DarkBG, LightBG, HorHeader, VerSection } from './Template';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ZoloHeader from "../assets/ZoloHeader.png";
import Comp1 from "../assets/Zolo/Comp1.png";
import Comp2 from "../assets/Zolo/Comp2.png";
import Comp3 from "../assets/Zolo/Comp3.png";
import Comp4 from "../assets/Zolo/Comp4.png";
import Comp5 from "../assets/Zolo/Comp5.png";
import Comp6 from "../assets/Zolo/Comp6.png";
import Comp7 from "../assets/Zolo/Comp7.png";
import Comp8 from "../assets/Zolo/Comp8.png";
import Comp9 from "../assets/Zolo/Comp9.png";
import Comp10 from "../assets/Zolo/Comp10.png";
import Comp11 from "../assets/Zolo/Comp11.png";
import Comp12 from "../assets/Zolo/Comp12.png";
import HomepageA from "../assets/Zolo/HomepageA.jpg";
import MapA from "../assets/Zolo/MapA.jpg";
import ListingA from "../assets/Zolo/ListingA.jpg";
import v1 from "../assets/Zolo/v1.jpg";
import aissue from "../assets/Zolo/aissue.png";
import v2 from "../assets/Zolo/v2.jpg";
import final from "../assets/Zolo/final.png";
import sync from "../assets/Zolo/sync.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Map() {
    const carouselSettings = {
        dots: true, // Show navigation dots
        infinite: false, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: false, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed in milliseconds
    };

    return (
        <div className="case-study">
        <Template
        headerImage={ZoloHeader}
        className="proj-header"
        title="Map View for Real Estate Search"
        subtitle="Redesigning Zolo’s real estate search for 10M+ users to better support the diverse needs of homebuyers"
        blurb="Following Questrade’s acquisition of Zolo—recognized as the Strategic Acquisition of the Year in 2023, I was one of the lead designers on the team. Zolo is one of Canada’s leading real estate platforms used by over 10M home shoppers to buy, sell, rent, and explore property insights. As one of the two lead designers, I was tasked with identifying experience gaps and elevating Zolo’s user experience through a research-driven, user-centric approach that aligned with the business goals."
        problem="Zolo aimed to increase user engagement and make the homebuying experience more intuitive for its users. However, the existing experience lacked clarity, accessibility, and user-centered features—making it difficult for users to confidently navigate listings and take the next steps in their buying journey."
        outcome="Optimized Zolo’s map view with key features to support users through their complex and often stressful homebuying journey. Improved accessibility, streamlined interactions, and aligned the experience with user behavior—enhancing real estate search for over 10M users across Canada."
        role="UX designer"
        time="Mar 2024 - Dec 2024"
        team="2 UX Designers, 1 content designer, 1 Engineering lead, 1 researcher, 3 developers, 1 BSA"
    />

        <DarkBG id="Market Research">
            <HorHeader 
                top="Market Research"
                bottom="Understanding the Current Terrain"
                body="We analyzed 15 competitors to understand market best practices and identify opportunities to create a differentiated experience. This included reviewing buyer flows—from location search to viewing listings and contacting realtors."/>
            <div className='container-1200'>
            <Slider {...carouselSettings} className="custom-carousel">
                        <div>
                            <img src={Comp1} alt="Feature 1" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp2} alt="Feature 2" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp3} alt="Feature 3" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp4} alt="Feature 3" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp5} alt="Feature 1" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp6} alt="Feature 2" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp7} alt="Feature 3" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp8} alt="Feature 3" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp9} alt="Feature 1" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp10} alt="Feature 2" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp11} alt="Feature 3" className="carousel-image" />
                        </div>
                        <div>
                            <img src={Comp12} alt="Feature 3" className="carousel-image" />
                        </div>
                    </Slider>
            </div>

        </DarkBG>

        <LightBG id="Zolo Audit">
            <HorHeader 
                top="Zolo Audit"
                bottom="Identifying the existing gaps"
                body="After the market research, we evaluated Zolo’s website and app experience through a user-first lens to uncover pain points, usability gaps, and opportunities for improvement—aimed at enhancing the overall experience and driving business impact."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={HomepageA}
                        width="100%"
                    />
                </Zoom><br></br>
                <Zoom>
                    <img
                        alt=" "
                        src={MapA}
                        width="100%"
                    />
                </Zoom><br></br>
                <Zoom>
                    <img
                        alt=" "
                        src={ListingA}
                        width="100%"
                    />
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="Map optimization">
            <VerSection
                top="Aligning on the MVP"
                bottom="Defining What Ships First"
                body="">
                <div className='span-1'></div>
                <div className='span-3'>
                    <p>After sharing the existing gaps with senior leadership, cross-functional collaboration between UX, Product, and Engineering helped define a feasible MVP. Together, we prioritized features based on impact and technical viability to ensure a focused and valuable first release:</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>01 Saving Searches on the Map</h3>
                    <p>Give users the ability to bookmark and revisit specific search areas for easier tracking.</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>02 Toggle Between Map & List Views</h3>
                    <p>Create a seamless way to switch between views based on user preferences and browsing behavior.</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>03 Consistency Across Desktop Flow</h3>
                    <p>Ensure a unified visual and interaction pattern to reduce cognitive load and enhance usability across devices.</p>
                </div>
               
            </VerSection>
        </DarkBG>

        <LightBG id="V1">
            <HorHeader 
                top="Map Experience Redesign"
                bottom="Streamlining the Home Search Journey"
                body="With the MVP scope defined, I kicked off the first round of design explorations focused on optimizing Zolo’s map experience to better support users during their home search."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={v1}
                        width="100%"
                    />
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="Turning point">
            <HorHeader 
                top="Pivotal moment"
                bottom="Surfacing Accessibility Gaps"
                body="While reviewing the first iteration of Map Optimizations, a feedback from a senior leader during a review session shed light on a deeper, overlooked accessibility issue. This moment became a turning point—highlighting the importance of inclusive design and sparking meaningful conversations with leadership to prioritize accessibility as a core design principle moving forward."/>
            <div className='container-1200'>
            <h2><i>"Honestly, half the time I can't tell if I'm looking at a listing or just another street—everything kinda blends together when you're color blind."</i></h2>
            <h3>- Senior Leader</h3>
            </div>
        </DarkBG>
    
        <LightBG id="Addressing Accessibility Gaps">
            <HorHeader 
                top="Aligning with leadership"
                bottom="Addressing Accessibility gaps"
                body="Inspired by the leadership insight, I initiated a deeper audit of the map experience and uncovered more accessibility issues—like poor contrast and UI elements that distracted from key property details."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src ={aissue}
                        width="100%"
                    />
                
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="Addressing Accessibility Gaps">
            <HorHeader 
                top="Designing for Accessibility"
                bottom="Taking Initiative to Redesign for Inclusion"
                body="To address this, I iterated on V2 wireframes, stepping beyond the default design system to better align with brand guidelines and prioritize clarity, usability, and inclusion."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src ={v2}
                        width="100%"
                    />
                </Zoom>
            </div>
        </DarkBG>

        <LightBG id="Final">
            <HorHeader 
                top="Final Designs"
                bottom="Bringing it all together"
                body="The final designs reflect a cohesive, accessible, and user-centered map experience—tailored to support homebuyers through every step of their search journey."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={final}
                        width="100%"
                    />
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="sync">
            <HorHeader 
                top="Ensuring Consistency"
                bottom="Maintaining the experience on Desktop"
                body="With the MVP scope defined, I kicked off the first round of design explorations focused on optimizing Zolo’s map experience to better support users during their home search. These early iterations aimed to simplify decision-making, reduce friction, and bring consistency across the platform."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={sync}
                        width="100%"
                    />
                </Zoom>
            </div>
        </DarkBG>
        <LightBG id="Map optimization">
            <VerSection
                top="Validating the Design"
                bottom="User Testing & Feedback Loops"
                body="">
                <div className='span-1'></div>
                <div className='span-3'>
                    <p>With the final designs in place, we conducted usability testing sessions with 15 participants to validate our design decisions with real users. We focused on testing accessibility enhancements, map interactions, and the overall clarity of the new interface.</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>01 Task Success Rate</h3>
                    <p>All participants were able to complete key tasks like saving a search area and switching between views without assistance.</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>02 Time-on-Task Improvemen</h3>
                    <p>Users completed location-based property searches 30% faster compared to the old design, indicating improved usability and navigation.</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>03 Satisfaction Score</h3>
                    <p>93% of participants rated the new map experience 4 or above on a 5-point scale, highlighting higher satisfaction and ease of use.</p>
                </div>
               
            </VerSection>
        </LightBG>

    </div>


    );

}
export default Map;