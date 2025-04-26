import React from 'react';
import './Template.scss';
import './About.scss';
import Me from "../assets/me.jpg";

function About() {
    return (
        <div className="about"> 
         <div className='about-container'>
                <div className='col-12-grid'>
                    <div className='span-4 about-big'>                
                    <div className='about-me' style={{ backgroundImage: `url('${Me}')` }}>
                    </div>
                    </div>

                    <div className='span-8 about-small'>
                     
                     <div>
                        <div className='about-big'>
                        <h1>Hello world,</h1>
                        <h1 className='title-2'>I'm Niharika</h1>
                        <p>/ni · haar · uhka/</p>
                        <p>I’m a designer with a developer hat who geeks out over the messy, complex stuff. I thrive on uncovering the stories hidden in complex systems—crafting experiences that make the intricate feel intuitive and the overwhelming feel effortless.<br />
                        </p>

                        </div>


                        <div className='col-2-grid'>
                            <div>
                            <h3>Work mode</h3>
                                <p>I'm a <b>UX Designer at Questrade</b> with previous design experiences in aviation, education, and fintech for users across North America, Asia, and Europe. I hold a Master’s in User Experience Design from the University of Toronto and a Bachelor’s in Computer Science.

                            </p>
                            </div>
                            <div>
                                <h3>Play mode</h3>
                                <p>
                                When I’m not behind my laptop, you’ll find me discovering hidden cafes and exploring cities with my DoD(Diary of Doodles). I enjoy binge watching Sci-fi movies and have a playlist for just about every mood and genre.

                            </p>
                            </div>
                        </div>

                        </div>

                    </div>
                </div>
               
                <div className='experience root-container col-12-grid'>
                <div className='span-4 mt-64'>
                    <h1>How do I stand out as a Designer?</h1>

                </div>
                <div className='span-8 powers col-2-grid'>
                    <div>
                        <h3>Curiosity & Problem Framing</h3>
                        <p>A professor once told me—it’s not about finding the right solution, but the right problem. Since then, I’ve focused on asking thoughtful questions, diving into context, and shaping real, meaningful design challenges. </p>
                    </div>
                    <div>
                        <h3>Initiative & Ownership </h3>
                        <p>I love taking initiatives  in identifying gaps, proposing ideas, and moving projects forward. I care deeply about the outcome, and I show up with a sense of ownership—whether it's crafting flows or aligning with business goals. </p>
                    </div>
                    <div>
                        <h3>Collaboration & Feedback Fluency</h3>
                        <p>Design doesn’t happen in a vacuum—I thrive in cross-functional spaces, where feedback flows, ideas evolve, and diverse perspectives shape better design decisions.</p>
                    </div>
                    <div>
                        <h3>Design 🤝 development</h3>
                        <p>With a background in frontend dev, I bring a builder’s mindset to the design table. I think in systems, edge cases, and feasibility—making sure designs aren’t just beautiful, but buildable.</p>
                    </div>
                </div>
            </div>


            <div className='experience root-container col-12-grid mt-64'>
                <div className='span-4 exp-left'><h1>Experience</h1></div>
                <div className='span-8 exp-right mt-16'>
                    <div className='col-8-grid'>
                        <div className='span-2 date'><h3>2023—Now</h3></div>
                        <div className='span-6 info'>
                            <h3>Questrade</h3>
                            <h3 className='mb-only-date'><span>UX Designer</span> <span className='mb-only'>· 2023—Now</span></h3>
                            <p>Led end-to-end design workflows across multiple lines of business—including mortgages, enterprise tools, Zolo’s real estate platform, and most recently, credit cards. Over the course of 10+ projects, I collaborated with five+ cross-functional scrum teams, working closely with product managers, business analysts, engineering leads, and developers. I led the design efforts that not only improved usability and accessibility, but also aligned with broader business goals. </p>
                        </div>

                        <div className='span-2 date'><h3>2022—2023</h3></div>
                        <div className='span-6 info'>
                            <h3>Bombardier</h3>
                            <h3 className='mb-only-date'><span>UX Designer</span> <span className='mb-only'>· 2022—2023</span></h3>
                            <p>Shipped 17+ features to help users monitor real-time aircraft health and visualize historical data. I established a dark-mode design system aligned with brand guidelines, adding 15+ components that boosted task completion by 35%. Worked closely with researchers, PMs, and engineers to tackle high-impact problem space. </p>
                        </div>

                        <div className='span-2 date'><h3>2018—2021</h3></div>
                        <div className='span-6 info'>
                            <h3>Infosys</h3>
                            <h3 className='mb-only-date'><span>UX Engineer</span> <span className='mb-only'>· 2018—2021</span></h3>

                            <p>Designed, developed, and shipped a platform-independent frontend app for managing digital access and identities. Through user research, stakeholder workshops, and UX evaluations, I shaped the future-state design strategy. Crafted wireframes, screen flows, and pixel-perfect visuals while automating the delivery process—improving time-to-market by 75%. Working in an Agile, cross-functional, and culturally diverse team, I also mentored frontend developers, championing a user-centered approach to solving complex problems.</p>
                        </div>


                    </div>

                </div>

            </div>


            <div className='experience root-container col-12-grid'>
                <div className='span-4 exp-left'>
                    <h1>Education</h1>

                </div>
                <div className='span-8 col-8-grid exp-right'>
                <div className='span-2 date'>
                        <h3>2023</h3>
                        </div>
                    <div className='span-6 info'>
                        <div>
                        <h3>Master of Information</h3>
                        <h3>University of Toronto</h3>
                        <p>User experience design — 4.0 GPA</p>
                        </div>
                    </div>
                    <div className='span-2 date'>
                        <h3>2018</h3>
                        </div>
                    <div className='span-6 info'>
                        <div>
                        <h3>Bachelor of Technology</h3>
                        <h3>SRM University</h3>
                        <p>Computer Science — 3.7 GPA</p>
                        </div>
                    </div>
                </div>
               
                
            </div>
            
            </div>
            </div>
      
    );
}
export default About;