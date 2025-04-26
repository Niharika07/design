import './Template.scss';
import Template, { DarkBG, LightBG, HorHeader, VerSection } from './Template';
import Zoom from 'react-medium-image-zoom';
import GroupfinderHearo from "../assets/Groupfinder/GroupfinderHero.png";
import 'react-medium-image-zoom/dist/styles.css'
import Feature1 from "../assets/Groupfinder/Feature1.png";
import Feature2 from "../assets/Groupfinder/Feature2.png";
import Feature3 from "../assets/Groupfinder/Feature3.png";
import Feature4 from "../assets/Groupfinder/Feature4.png";

function Groupfinder() {


    return (
        <div className="case-study">
             <Template
                headerImage={GroupfinderHearo}
                className="proj-header"
                title="Groupfinder"
                subtitle="Recommend compatible group members based on automatically assessed student preferences"
                blurb="In online learning environments, student-to-student interaction is often limited, especially within group projects. Our research found that CANVAS, the LMS used by our university, lacks robust support for peer collaboration. This gap hinders effective communication and teamwork."
                problem="How might we improve student-to-student interaction in online learning environments, particularly within group projects, to foster better collaboration and communication despite existing barriers in LMS platforms?"
                outcome="Designed a feature for UofT’s LMS that helps students share information about themselves that would help their peers gauge their compatibility, with respect to academic interests and work practices."
                role="UX designer"
                time="Fall 2021"
                team="5 designers"
            />
 <DarkBG id="desk-research">
            <VerSection
                top="Desk research"
                bottom="& product analysis"
                body="One of the major areas in our desk research focused on understanding Communication needs in the context of learning">
                <div className='span-1'>
                    <h3>01</h3>
                </div>
                <div className='span-3'>
                    <h3>Effective Communication in Successful Course Administration</h3>
                    <p>According to research, effective communication between instructor and students, and amongst students is essential to successfully administer a course.</p>
                </div>

                <div className='span-1'>
                    <h3>02</h3>
                </div>
                <div className='span-3'>
                    <h3>Impact of Peer and Instructor Communication on Academic Success</h3>
                    <p>Furthermore, a study on online learning found that students' ability to communicate easily with peers and instructors is most strongly linked to their academic skills.</p>
                </div>
                <div className='span-1'>
                    <h3>03</h3>
                </div>
                <div className='span-3'>
                    <h3>Learning Advantage of Small Group Collaboration</h3>
                    <p> Research also indicates that small groups enhance learning more effectively than individual study, as they encourage students to explore their thinking and engage in peer-to-peer knowledge sharing.</p>
                </div>
            
            </VerSection>

        </DarkBG>

        <LightBG id="user-research">
            <VerSection
                top="User research"
                bottom="themes & patterns"
                body="In order to conduct an exploratory analysis on the processes and challenges of graduate students in forming groups, we conducted semi-structured interviews that lasted between 15 and 20 minutes where we spoke to 15 graduate students, recruited through personal networks.">
                <div className='span-1'>
                    <h3>86%</h3>
                </div>
                <div className='span-3'>
                    <h3>Factors Influencing Communication Tool Selection</h3>
                    <p>Participants preferred communication tools that were widely used, convenient, and easy to use, ensuring seamless interaction with their peers.</p>
                </div>

                <div className='span-1'>
                    <h3>80%</h3>
                </div>
                <div className='span-3'>
                    <h3>Challenges in Group Formation</h3>
                    <p>Students faced difficulties in initiating conversations with classmates about forming groups. Additionally, they struggled to identify who was still looking for group members, making the process inefficient.</p>
                </div>
                <div className='span-1'>
                    <h3>73%</h3>
                </div>
                <div className='span-3'>
                    <h3>Teammate Selection Criteria</h3>
                    <p>When choosing teammates, students considered factors like familiarity, academic interests, and work practices. They assessed a person’s interest in the subject and past project experiences before forming a group.</p>
                </div>
                <div className='span-1'>
                    <h3>73%</h3>
                </div>
                <div className='span-3'>
                    <h3>Perceptions of Classmates</h3>
                    <p>Many students formed impressions of their classmates through social media platforms like LinkedIn and Instagram or by observing their participation in class, which influenced their group selection decisions.</p>
                </div>
            </VerSection>

        </LightBG>

        <DarkBG id="problem">
            <div className="container-1200">
                <h3>Problem statement</h3>
                <h2>Students lack a way to assess compatibility with potential teammates, making group formation challenging. Providing better visibility into interests, skills, and work styles can enhance collaboration, as research shows that higher compatibility improves group performance.</h2>
            </div>

        </DarkBG>

        <LightBG id="feature-1">
            <HorHeader 
                top="Feature #1"
                bottom="Course-Specific GroupFinder"
                body="Students can access the GroupFinder feature under the People tab within a specific course to find and form groups. To encourage reciprocity and prevent misuse, students can only view personalized recommendations and group details after completing their own profile information, avoiding any potential for loitering or stalking."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src = {Feature1}
                        width="100%"
                    />
                </Zoom>
                </div>
        </LightBG>

        <DarkBG id="feature-2">
            <HorHeader 
                top="Feature #2"
                bottom="TeamMatch Questionnaire"
                body="This smart questionnaire gathers key student preferences—timezone, availability, topic interests, skills, and experience—to generate better group member suggestions. Designed based on user interviews, it ensures more compatible and effective team formation."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src = {Feature2}
                        width="100%"
                    />
                </Zoom>
                </div>
        </DarkBG>

        <LightBG id="feature-3">
            <HorHeader 
                top="Feature #3"
                bottom="Rank groupwork roles by preference"
                body="Students can easily select and rank their top three preferred roles for group work using an intuitive drag-and-drop interface, ensuring a smoother and more interactive team formation process."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src = {Feature3}
                        width="100%"
                    />
                </Zoom>
                </div>
        </LightBG>

        <DarkBG id="feature-4">
            <HorHeader 
                top="Feature #4"
                bottom="Filter Search"
                body="Students can select from individuals seeking to form groups or incomplete groups still looking for members. They can browse various options and refine their search using filters for topic, meeting schedule, group role, and skills. Once they find a suitable match, they can contact the student using the provided contact details."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src = {Feature4}
                        width="100%"
                    />
                </Zoom>
                </div>
        </DarkBG>

        </div>

    );

}

export default Groupfinder; 