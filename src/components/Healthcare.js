import './Template.scss';
import Template, { DarkBG, LightBG, HorHeader, VerSection } from './Template';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Health from "../assets/Healthcare/health.png";
import Persona from "../assets/Healthcare/Persona.png";
import Journey from "../assets/Healthcare/journey.png";
import Ideas from "../assets/Healthcare/ideas.png";
import Feature1 from "../assets/Healthcare/p1.png";
import Feature2 from "../assets/Healthcare/p2.png";
import Feature3 from "../assets/Healthcare/p3.png";
import Mid from "../assets/Healthcare/mid.png";
import Prob1 from "../assets/Healthcare/Prob1.png";
import Sol1 from "../assets/Healthcare/Sol1.png";
import Prob2 from "../assets/Healthcare/Prob2.png";
import Sol2 from "../assets/Healthcare/Sol2.png";
import Prob3 from "../assets/Healthcare/Prob3.png";
import Sol3 from "../assets/Healthcare/Sol3.png";
import Team from "../assets/Healthcare/team2.jpg";

function Healthcare() {


    return (
        <div className="case-study">
            <Template
                headerImage={Health}
                className="proj-header"
                title="UHealth+"
                subtitle="Assist international students in accessing  healthcare services and navigating health insurance plans"
                blurb="It all began when a team of 6 international students were asked “How can you positively impact the lives of students at the University of Toronto?” The answer came from our personal experiences – understanding healthcare insurance plans and accessing healthcare services."
                problem="The current state of accessing information regarding international students health insurance plans places the burden of finding accurate healthcare information on international students with little to no guidance."
                outcome="We collaborated with UofT’s Innovation Hub to investigate how can we make access to healthcare easier for international students"
                role="UX designer"
                time="Fall 2021"
                team="5 designers"
            />

        <DarkBG id="research-plan">
            <VerSection
                top="User research"
                bottom="process & plan"
                body="We synthesized the collected data from the interviews and surveys into an affinity map to help form insights and uncovered major issues">
                <div className='span-1'>
                    <h3>01</h3>
                </div>
                <div className='span-3'>
                    <h3>Secondary research</h3>
                    <p>Our secondary research revealed that international students have two types of plans that offer different services – UHIP (University Health Insurance Plan) and Supplementary Plans.</p>
                </div>

                <div className='span-1'>
                    <h3>02</h3>
                </div>
                <div className='span-3'>
                    <h3>10 Semi-structured interviews</h3>
                    <p>We analyzed 10 semi-structured interviews and recruited international students of varying education levels from all three campuses (St George, Scarborough and Mississauga) to understand their issues with healthcare.</p>
                </div>
                <div className='span-1'>
                    <h3>03</h3>
                </div>
                <div className='span-3'>
                    <h3>44 Survey respondents</h3>
                    <p> We also analyzed 44 survey results to further get more data.</p>
                </div>
            
            </VerSection>

        </DarkBG>

        <LightBG id="research-findings">
            <VerSection
                top="User research"
                bottom="results & insights"
                body="Our research highlighted significant gaps in how international students access and understand their health insurance plans.">
                <div className='span-1'>
                    <h3>78%</h3>
                </div>
                <div className='span-3'>
                    <h3>Of students felt they received misinformation around coverage</h3>
                    <p>Conflicting details left students unsure about what was covered, leading to unexpected costs and delays in seeking care.</p>
                </div>

                <div className='span-1'>
                    <h3>86%</h3>
                </div>
                <div className='span-3'>
                    <h3>Of students mentioned lack of information surrounding the reimbursement process</h3>
                    <p>Students lacked guidance on claims, causing delays and financial stress when recovering medical expenses.</p>
                </div>
                <div className='span-1'>
                    <h3>89%</h3>
                </div>
                <div className='span-3'>
                    <h3>Of students expressed overload of information</h3>
                    <p>Scattered, unstructured resources made it hard to find relevant healthcare information.</p>
                </div>
                <div className='span-1'>
                    <h3>84%</h3>
                </div>
                <div className='span-3'>
                    <h3>Of students Students were confused between UHIP and supplementary plans</h3>
                    <p>Students struggled to distinguish coverage, leading to missed benefits and unnecessary costs.</p>
                </div>
            </VerSection>

        </LightBG>

        <DarkBG id="problem">
            <div className="container-1200">
                <h3>Problem statement</h3>
                <h2>The current state of accessing information regarding international students health insurance plans places the burden of finding accurate healthcare information on international students with little to no guidance.</h2>
            </div>

        </DarkBG>
        <LightBG id="persona">
            <HorHeader 
                top="Introducing our"
                bottom="persona — Issa"
                body="Through Issa, we were able to better understand the common motivations, frustrations and behaviours of our target user group and represent them."/>

            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src = {Persona}
                        width="100%"
                    />
                </Zoom>
            </div>

        </LightBG>
        <DarkBG id="journey-map">
            <HorHeader 
                top="Journey map"
                bottom="for healthcare access"
                body="To further identify the major struggles of Issa while seeking healthcare service, we had to put ourselves in her shoes."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src = {Journey}
                        width="100%"
                    />
                </Zoom>
            </div>

        </DarkBG>
        <LightBG id="feature-1">
            <HorHeader
                top="Ideation"
                bottom="and prioritization"
                body="Now, with our design goals in mind, we began envisioning potential solutions to help them get the care they need by sketching ideas and clustering them together. We voted and prioritized the ideas based on impact and feasibility." />

            <div className='container-1200'>
                    <div className='span-1'>
                        <Zoom>
                            <img
                                alt=" "
                                src = {Ideas}
                                width="100%"
                            />
                        </Zoom>
                    </div>
            </div>
        </LightBG>

        <DarkBG id="iterative design">
            <VerSection
                top="Narrowing down"
                bottom="design features"
                body="We decided to go with 2 homerun ideas - 'Find a Clinic' and 'Personalized Dashboard' that scored a high impact and high feasibility along with 1 quick win idea - 'Search your Coverage' with moderate impact and moderate feasibility.">
                <div className='span-1'>
                    <h3>01</h3>
                </div>
                <div className='span-3'>
                    <h3>Search your Coverage</h3>
                    <p>Shows whether a healthcare service is covered or not.</p>
                </div>

                <div className='span-1'>
                    <h3>02</h3>
                </div>
                <div className='span-3'>
                    <h3>Find a Clinic</h3>
                    <p>Shows clinics near you that accpet your insurance plan.</p>
                </div>
                <div className='span-1'>
                    <h3>03</h3>
                </div>
                <div className='span-3'>
                    <h3>Personalized Dashboard</h3>
                    <p> A dashboard with your coverage information and service details.</p>
                </div>
            
            </VerSection>

        </DarkBG>

        <LightBG id="feature-1">
            <HorHeader 
                top="Feature #1"
                bottom="Login, Search and Filter"
                body="We integrated university ID while login to build trust in the application and eliminate the registration process. Designed search and filter functions to find a nearby clinic that bills insurance partners."/>

                <Zoom>
                    <img
                        alt=" "
                        src = {Feature1}
                        width="100%"
                    />
                </Zoom>
        </LightBG>
        <LightBG id="feature-2">
            <HorHeader
                top="Feature #2"
                bottom="View and Bookmark a Clinic"
                body="The bookmark feature would ensure that the users only have to go through the process once." />

            <Zoom>
                <img
                    alt=" "
                    src = {Feature2}
                    width="100%"
                />
            </Zoom>
        </LightBG>

        <LightBG id="feature-3">
            <HorHeader
                top="Feature #3"
                bottom="Access to Coverage Card and Service Details"
                body="Lastly, by providing users with their insurance card details, and services covered, we would provide them with their personalized information in one place. We also added a section to view nearby clinics." />

            <Zoom>
                <img
                    alt=" "
                    src = {Feature3}
                    width="100%"
                />
            </Zoom>
        </LightBG>

        <DarkBG id="mid-fi">
            <HorHeader
                top="Iterative Design"
                bottom="& lean evaluation"
                body="We then conducted a lean evaluation of our low-fidelity prototype with 7 participants to detect potential issues. Since users found a few icons ambiguous and some information both redundant and unnecessary, we fixed these problems while shifting our designs from pen and paper to Figma. We created a medium-fidelity wireframe set before moving on to usability testing." />
            <div className='container-1200'>
            <Zoom>
                <img
                    alt=" "
                    src = {Mid}
                    width="100%"
                />
            </Zoom>
            </div>
        </DarkBG>

        <LightBG id="usability">
            <HorHeader
                top="Usability tests"
                bottom="and iterations"
                body="To evaluate the prototype, we conducted Usability testing remotely with 16 international students in presence of 1 moderator and 1 notetaker. We asked each participant to think-aloud as they completed the following tasks:" />

                <div className='container-1200'>
                    <div className='col-2-grid before-after'>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={Prob1}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>Before</h4>
                            <p>A major issue was the confusing icons—one for viewing the clinic on the map and a check icon that didn’t clarify which insurance covered the service.</p>
                        </div>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={Sol1}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>After</h4>
                                <p>I added a text link for viewing the clinic on the map and introduced tags to clarify whether a service is covered by UHIP, Supplementary, or not covered.</p>
                        </div>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={Prob2}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>Before</h4>
                            <p>Users felt the need for a clear action to apply filters. </p>
                        </div>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={Sol2}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>After</h4>
                            <p>To resolve this, I added an "Apply Filters" CTA to confirm users have set their filters.</p>
                        </div>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={Prob3}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>Before</h4>
                            <p>Users misinterpreted the "Services Covered" CTA, expecting a full list of available services, and needed an option to save insurance coverage details.</p>
                        </div>
                        <div className='span-1'>
                            <Zoom>
                                <img
                                    alt=" "
                                    src={Sol3}
                                    width="100%"
                                />
                            </Zoom>
                            <h4>After</h4>
                            <p>I updated the text to clearly state "View UHIP Services" and added a share icon to allow users to download their health insurance card to their phones.</p>
                        </div>
                    </div>
                </div>

        </LightBG>
        <DarkBG id="reflections">
        <VerSection
                top="Reflection"
                bottom="and core memories"
               >
                <div className='span-1'>
                    <h3>01</h3>
                </div>
                <div className='span-3'>
                    <h3>Power of teamwork </h3>
                    <p>As we were getting started with this course, I remember our professor mentioning how some students find groups they stick with for the entire program, I was fortunate enough to be a part of one such group.</p>
                </div>

                <div className='span-1'>
                    <h3>02</h3>
                </div>
                <div className='span-3'>
                    <h3>Design is an iterative process </h3>
                    <p>It was my first experience working end-to-end on a design process where I learnt the importance of continuous iteration and feedback.</p>
                </div>
                <div className='span-1'>
                    <h3>03</h3>
                </div>
                <div className='span-3'>
                    <h3>Creating an Impact </h3>
                    <p> This project started when 6 international students tried to maximise their insurance and were lost in the process. Working on this project was extremely meaningful since we were tackling a real-world challenge that existed widely.</p>
                </div>
            
            </VerSection>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src = {Team}
                        width="100%"
                    />
                </Zoom>
            </div>
        </DarkBG>
        </div>
    );

}
export default Healthcare;