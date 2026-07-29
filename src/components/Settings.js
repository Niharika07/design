import './Template.scss';
import Template, { DarkBG, LightBG, HorHeader, VerSection } from './Template';
import { Fade } from "react-awesome-reveal";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import SetHeader from "../assets/SetHeader.png";
import old from "../assets/Settings/old.png";
import reqt from "../assets/Settings/reqt.png";
import goals from "../assets/Settings/goals.png";
import layout from "../assets/Settings/layout.png";
import nav from "../assets/Settings/nav.png";
import prototype from "../assets/Settings/prototype.mov";
import iterate from "../assets/Settings/iterate.png";

function Settings() {


    return (
        <div className="case-study">
            <Fade direction='up' triggerOnce cascade>
            <Template
                headerImage={SetHeader}
                className="proj-header"
                title="Questrade Enterprise-wide Settings"
                subtitle="Redesigning Questrade’s settings experience to unify global and product-specific controls for better clarity and scale."
                blurb="The project was part of a broader initiative to enhance the customer portal used by thousands of users across Questrade’s Investing, Banking, and Mortgage platforms. It focused on redesigning the enterprise-level settings."
                problem="The existing experience of enterpise-wide settings at Questrade suffered from aesthetic inconsistencies, confusing navigation, and fragmented organization."
                outcome="I improved discoverability by introducing modular navigation, and reducing friction for 3 core product areas."
                role="Lead UX designer"
                resp="Web design, Systems thinking, Product Strategy, UI design, Usability testing"
                time="Aug 2023 - Dec 2023"
                team="1 Content Strategist, 1 UI Designer, 2 Engineers, Engineering Lead, Product Manager, and UX Manager."
                impactT1="↓ 30%"
                impactD1="Drop in internal support tickets according to post-launch reports."
                impactT2="↑ 22%"
                impactD2="Increase in task completion rate for key settings actions."
            /></Fade>

<DarkBG id="Discovery and Context Building">
            <VerSection
                top="Global settings"
                bottom="Uncovering existing gaps"
                body="I began by auditing the enterprise-wide (global) settings experience to understand where it was falling short. Through multiple collaborative sessions with product and engineering, we discovered key pain points.">
                <div className='span-1'>
                    <h3>01</h3>
                </div>
                <div className='span-3'>
                    <h3>Aesthetic inconsistency</h3>
                    <p>The existing settings pages lacked visual harmony, with outdated components and misaligned layouts that deviated from the design system-resulting in an inconsistent and unpolished user experience.</p>
                </div>

                <div className='span-1'>
                    <h3>02</h3>
                </div>
                <div className='span-3'>
                    <h3>Inconsistent navigation behavior</h3>
                    <p>The navigation structure made it difficult to maintain context when moving between settings and different product sections.</p>
                </div>
                <div className='span-1'>
                    <h3>03</h3>
                </div>
                <div className='span-3'>
                    <h3>Lack of clear distinction between global and product-specific settings</h3>
                    <p>Distinguishing between global (enterprise-wide) and product-specific settings was challenging, leading to confusion about where to manage certain preferences.</p>
                </div>
                <div className='span-1'>
                    <h3>04</h3>
                </div>
                <div className='span-3'>
                    <h3>Lack of Personalized Settings Based on User Account Type</h3>
                    <p>Settings were not dynamically tailored to users' account types (e.g., mortgage-only users), leading to unnecessary options being displayed and increased interface complexity.</p>
                </div>
            </VerSection>
            <div className='container-1200'>
                <Zoom> 
                    <img 
                        alt=" "
                        src={old}
                        width="100%"
                    />
                </Zoom>
            </div>
        </DarkBG>
        
        <LightBG id="Gathering Requirements">
            <HorHeader 
                top="Gathering Requirements"
                bottom="Aligning Global and Product-Specific Needs"
                body="To begin the redesign of the profile and settings experience, I collaborated with stakeholders across product, engineering, and design teams to map requirements across global and product-specific (Investing, Banking, Mortgage) needs."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={reqt}
                        width="100%"
                    />
                </Zoom>
                </div>
        </LightBG>

        <DarkBG id="Establishing Design Principles">
            <HorHeader 
                top="Establishing Design Principles"
                bottom="for Enterprise Settings"
                body="Following our discovery and alignment efforts, I identified the need to define core focus areas that would guide our design decisions for enterprise-wide settings."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={goals}
                        width="100%"
                    />
                </Zoom>
                </div>
        </DarkBG>

        <LightBG id="Exploring Page Structure">
            <HorHeader 
                top="Exploring Page Structure"
                bottom="Evaluating Layout Models"
                body="With a clear understanding of global and product-specific requirements, I explored multiple structural approaches to determine how settings should be accessed, displayed, and navigated—keeping both user experience and technical feasibility in mind."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src = {layout}
                        width="100%"
                    />
                </Zoom>
                </div>
        </LightBG>

        <DarkBG id="Desiging Logical Grouping">
            <VerSection
                top="Desiging Logical Grouping"
                bottom="with Scalable IA"
                body="">
                <div className='span-1'></div>
                <div className='span-3'>
                    <p>With the structural framework in place, the next step was to define a clear and scalable information architecture. I facilitated a lightweight card sorting exercise with 10 participants—comprising internal stakeholders and Questrade users. Participants were given a list of 15+ settings and asked to group them into categories that felt logical based on task goals and mental models:</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>01 Account and Access</h3>
                    <p>Login credentials, multi-factor authentication, and trusted devices</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>02 Preference and Display</h3>
                    <p>Homepage selection, language, dark mode, and accessibility features</p>
                </div>

                <div className='span-1'></div>
                <div className='span-3'>
                    <h3>03 Privacy and Permissions</h3>
                    <p>Notification settings, cookie preferences, and API access</p>
                </div>
               
            </VerSection>
        </DarkBG>

        <LightBG id="Design explorations">
            <HorHeader 
                top="Navigation Design Exploration"
                bottom="For global and product specific settings"
                body="I explored multiple navigation models to address the challenge of structuring settings that span both enterprise-wide and product-specific contexts. The goal was to ensure seamless transitions, preserve user context, and maintain clarity as users moved between sections."/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={nav}
                        width="100%"
                    />
                </Zoom>
                </div>
        </LightBG>

        <DarkBG id="Final Prototype">
            <HorHeader 
                top="Final Prototype"
                bottom="Enterprise Settings"
                body="I explored multiple navigation models to address the challenge of structuring settings that span both enterprise-wide and product-specific contexts. The goal was to ensure seamless transitions, preserve user context, and maintain clarity as users moved between sections."/>
            <div className='container-1200'>
                <Zoom>
                    <video
                        controls
                        autoPlay
                        loop
                        alt=" "
                        src={prototype}
                        type="video/mp4"
                        width="100%"
                    />
                </Zoom>
                </div>
        </DarkBG>

        <LightBG id="Iterating and Refining">
            <HorHeader 
                top="Iterating and Refining"
                bottom="through Feedback"
                body="I facilitated usability walkthroughs with 16 participants and gathered cross-functional feedback from designers, PMs, and QA leads across multiple product areas. During testing, 12 out of 16 users found the greyed-out background behind the modal visually distracting and preferred a fully isolated settings view with no underlying content visible"/>
            <div className='container-1200'>
                <Zoom>
                    <img
                        alt=" "
                        src={iterate}
                        width="100%"
                    />
                </Zoom>
                </div>
        </LightBG>

        <DarkBG id="Outcomes and Impact">
            <VerSection
                top="Outcomes and Impact"
                bottom="Validating the Design"
                body="The redesigned enterprise-wide settings created a scalable, modular, and user-friendly foundation across Questrade’s products—delivered through clear structure, iterative refinement, and close cross-functional collaboration.">
                <div className='span-1'>
                    <h3>01</h3>
                </div>
                <div className='span-3'>
                    <h3>Task completion rate</h3>
                    <p>+22% increase in task completion rate for key settings actions.</p>
                </div>

                <div className='span-1'>
                    <h3>02</h3>
                </div>
                <div className='span-3'>
                    <h3>Avg time spent</h3>
                    <p>-18% reduction in average time spent navigating to desired settings.</p>
                </div>
                <div className='span-1'>
                    <h3>03</h3>
                </div>
                <div className='span-3'>
                    <h3>Drop in internal support</h3>
                    <p>30% drop in internal support tickets related to settings confusion, according to post-launch reports.</p>
                </div>
            </VerSection>
        </DarkBG>

        </div>

);

}

export default Settings; 