import './Template.scss';
import Template, { DarkBG, LightBG, HorHeader, VerSection } from './Template';
import { Fade } from "react-awesome-reveal";
import QuestHeader from "../assets/Questrade/QuestHeader.png";
import Zoom from 'react-medium-image-zoom';
import market from "../assets/Questrade/market.png";
import survey from "../assets/Questrade/survey.png";
import persona from "../assets/Questrade/persona.png";
import comp from "../assets/Questrade/comp.png";
import goal1 from "../assets/Questrade/goal1.png";
import flow from "../assets/Questrade/flow.png";
import usage from "../assets/Questrade/usage.png";
import entry from "../assets/Questrade/entry.png";
import struct from "../assets/Questrade/struct.png";
import payflow from "../assets/Questrade/payflow.png";
import issue1 from "../assets/Questrade/issue1.png";
import sol1 from "../assets/Questrade/sol1.png";
import issue2 from "../assets/Questrade/issue2.png";
import sol2 from "../assets/Questrade/sol2.png";
import issue3 from "../assets/Questrade/issue3.png";
import sol3 from "../assets/Questrade/sol3.png";
import system from "../assets/Questrade/system.png";
import proto1 from "../assets/Questrade/proto1.mov";
import proto2 from "../assets/Questrade/proto2.mov";
import proto3 from "../assets/Questrade/proto3.mov";
import error from "../assets/Questrade/error.png";
import loading from "../assets/Questrade/loading.png";


function Questrade() {
   
    return (
        <div className='case-study'>
              <Fade direction='up' triggerOnce cascade>
             <Template
        headerImage={QuestHeader}
        className="proj-header"
        title="QuestCard"
        subtitle="Designing Questrade's 0->1 Credit Card App"
        blurb="Questrade, a trusted investment platform, is entering the competitive Canadian credit card market. They need to launch a brand new product that not only works but also stands out and builds on their brand's trust."
        problem="How might we design a 0-1 credit card experience that makes it easy for users to understand their spending, manage their card, and stay on top of payments?"
        outcome="I led the end-to-end design for Questrade's first credit card app, from initial research, strategy to final UI and usability testing to bring this app to life."
        role="Prouct Designer"
        resp="Product strategy, Information architecture, Interaction design, Visual design, Usability testing"
        time="Dec 2024 - May 2025"
        team="Product Manager, Content Designer, Engineering Lead, Business Analyst and 5 Developers"
        impactT1="✅ 92%"
        impactD1="Task success rate for key flows including payment, usage and card management"
        impactT2="⭐️ 4.8/5"
        impactD2="Positive sentiment on a 5-point Likert scale"
    />

</Fade>

<DarkBG id="Understanding the market">
    
            <HorHeader 
                top="Why credit card?"
                bottom="Understanding the market"
                body="Canada's credit card market is experiencing unprecedented growth, with 31.2 million active users and a sharp rise in adoption."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={market}
                        width="100%"
                    />
                </Zoom>
            </div>
        </DarkBG>

        <LightBG id="Demographics">
            <HorHeader 
                top="Who would swipe right"
                bottom="on this Credit Card?"
                body="The research team along with Product ran a survey to get some quantitative insights into adoption potential that could shape how the product lands in the market."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={survey}
                        width="100%"
                    />
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="Defining our persona">
            <HorHeader 
                top="Who are we designing for?"
                bottom="Our persona"
                body="The survey insights helped us shape a clear picture of our target user, including their behaviors, attitudes, and financial mindset."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={persona}
                        width="100%"
                    />
                </Zoom>
            </div>
        </DarkBG>

        <LightBG id="Competitor analysis">
            <HorHeader 
                top="What others are doing?"
                bottom="The competitive lens"
                body="I needed to understand what users already had and what they were still missing. I dug into competitors to see how they positioned their cards, what features stood out, and where the friction lived."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={comp}
                        width="100%"
                    />
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="Design goals">
            <HorHeader 
                top="Desining with purpose"
                bottom="Goals and business values"
                body="I defined clear design goals and aligned them with business values to make sure every design decision had a reason to exist - an anchor point to help navigate trade-offs and focus on what truly matters."/>
            <div className='container-1200'>
            <Zoom>
                    <img
                        alt=" "
                        src={goal1}
                        width="100%"
                    />
                </Zoom>
            </div>
        </DarkBG>
        <LightBG id="User flow diagram">
            <HorHeader 
                top="Mapping the key expriences"
                bottom="User flow diagram"
                body="I mapped out the end-to-end user flow for credit card features, while also highlighting the key features I led - card usage, card management and money movement."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={flow}
                        width="100%"
                    />
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="Card usage">
            <HorHeader 
                top="Card Usage"
                bottom="Design explorations"
                body="One of the features I led was Credit Card Usage, which gave users a clear view of their current balance, credit and transaction limits, and the rates tied to their card."/>
            <div className='container-1200'>
            <Zoom>
                    <img
                        alt=" "
                        src={usage}
                        width="100%"
                    />
                </Zoom>
            </div>
        </DarkBG>

        <LightBG id="Card Management">
            <HorHeader 
                top="Card Management"
                bottom="Design explorations"
                body="The next feature I led was card Management - where I focused on identifying the right entry point, defining key card servicing features, and structuring the overall user experience."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={entry}
                        width="100%"
                    />
                </Zoom>
            </div>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={struct}
                        width="100%"
                    />
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="Card payment">
            <HorHeader 
                top="Money Movement"
                bottom="Design explorations"
                body="The final feature I led, and arguably the most challenging - was Money Movement, with a primary focus on enabling users to pay off their credit card."/>
            <div className='container-1200'>
          
                    <img
                        alt=" "
                        src={payflow}
                        width="100%"
                    />
              
            </div>
        </DarkBG>

        <LightBG id="usability">
            <HorHeader
                top="Usability tests"
                bottom="and iterations"
                body="To validate my design decisions, I conducted a usability testing with a mix of 20 new and existing credit card users." />

                <div className='container-1200'>
                    <div className='col-2-grid before-after'>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={issue1}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>Before</h4>
                            <p>A major issue was with the discoverability of card usage page, <b>80%</b> of users didn't find the tab-based approach intuitive. Many expected it to be located closer to the section showing their credit card balance.</p>
                        </div>
                    
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={sol1}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>After</h4>
                                <p>I addressed this by repositioning the Card Usage entry point right next to the credit card balance, making it more visible and aligned with user expectations.</p>
                        </div>
                       
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={issue2}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>Before</h4>
                            <p>In the payment flow, <b>65%</b> of users were unsure about what would happen when they selected a different amount than the statement balance. They also wanted guidance on which option was recommended.</p>
                        </div>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={sol2}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>After</h4>
                                <p>I partnered with our content designer to add a short, clear explanation beneath the amount selection. We also introduced a chip to indicate the preferred or suggested option, helping users feel more confident in their choice.</p>
                        </div>
                      
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={issue3}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>Before</h4>
                            <p>On the Card Management page, <b>60%</b> of users felt the screen was cluttered. They found the extra descriptions under each card setting unnecessary, since the terms were already familiar.</p>
                        </div>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={sol3}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>After</h4>
                                <p>I removed the additional context to create a cleaner, more breathable layout, reducing visual noise without sacrificing clarity.</p>
                        </div>
                     
                    </div>
                </div>
        </LightBG>

        <DarkBG id="High-fidelity">
            <HorHeader 
                top="Bringing it all together"
                bottom="With the Design System"
                body="Once the core flows were validated, I moved into high-fidelity prototyping using our internal design system. Leveraging pre-defined components helped speed up the process while keeping things consistent across the product."/>
            <div className='container-1200'>
            <Zoom>
                    <img
                        alt=" "
                        src={system}
                        width="100%"
                    />
                </Zoom>
            </div>
            <div className='container-1200'>
            <div className='col-3-grid before-after'>
            <div className='span-1'>
            <Zoom>
                    <video
                        controls
                        autoPlay
                        loop
                        alt=" "
                        src={proto1}
                        type="video/mp4"
                        width="100%"
                    />
                </Zoom>
                <h3>Card Usage</h3>
                </div>
                <div className='span-1'>
                <Zoom>
                    <video
                        controls
                        autoPlay
                        loop
                        alt=" "
                        src={proto2}
                        type="video/mp4"
                        width="100%"
                    />
                </Zoom>
                <h3>Card Management</h3>
                </div>
                <div className='span-1'>
                <Zoom>
                    <video
                        controls
                        autoPlay
                        loop
                        alt=" "
                        src={proto3}
                        type="video/mp4"
                        width="100%"
                    />
                </Zoom>
                <h3>Pay credit card</h3>
                </div>
                </div>
            </div>
        </DarkBG>

        <LightBG id="Edge cases">
            <HorHeader 
                top="Designing for edge cases"
                bottom="Going beyond the basics"
                body="The next feature I led was card Management - where I focused on identifying the right entry point, defining key card servicing features, and structuring the overall user experience."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={error}
                        width="100%"
                    />
                </Zoom>
            </div>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={loading}
                        width="100%"
                    />
                </Zoom>
            </div>
        </LightBG>

        <DarkBG id="Outcomes">
            <VerSection
                top="Outcomes"
                bottom="From exploration to Impact"
                body="To validate the effectiveness of the final designs, I conducted usability testing with 20 users across all three core flows: Card Usage, Card Management, and Money Movement. The results showed clear improvements in usability, engagement, and overall user satisfaction.">
                <div className='span-1'>
                    <h3>01</h3>
                </div>
                <div className='span-3'>
                    <h3>+25% Increase in Task Success Rate</h3>
                    <p>Users were able to complete tasks like checking balances, managing card settings, and making payments with 92% success, up from 67% in early design iterations.</p>
                </div>

                <div className='span-1'>
                    <h3>02</h3>
                </div>
                <div className='span-3'>
                    <h3>+20% Increase in Feature Engagement</h3>
                    <p>After introducing visual aids, progressive disclosure, and a cleaner structure, users spent more time exploring secondary actions within Card Management, like setting limits or viewing rates.</p>
                </div>
                <div className='span-1'>
                    <h3>03</h3>
                </div>
                <div className='span-3'>
                    <h3>93% Reported Positive Sentiment</h3>
                    <p> In post-test surveys, 93% of participants described the experience as “easy,” “clean,” and “straightforward.” Many mentioned the designs felt “modern” and “trustworthy” - key traits for a financial product.</p>
                </div>
            
            </VerSection>

        </DarkBG>

        </div>
    );
};

export default Questrade;