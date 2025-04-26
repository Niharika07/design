import React from "react";
import './Template.scss';

function Template(props) {

    return (
        <div className={'case-study ' + props.className}>
              <div className="cs-header" style={{ backgroundImage: `url(${props.headerImage})` }}>
                <img src={props.headerImage} alt="Header" className="header-image" />
            </div>

            <div className='case-info container-1200 col-4-grid'>
                <div className='span-3'>
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                </div>
                <div className='span-3'>
                    <p className='blurb'>{props.blurb}</p>
                    {props.problem &&
                        <div className='col-2-grid span-7'>

                            <div className='span-1'>
                                <h3>Problem</h3>
                                <p>{props.problem}</p>
                            </div>
                            <div className='span-1'>
                                <h3>Outcome</h3>
                                <p>{props.outcome}</p>
                            </div>
                        </div>
                    }
                </div>
                <div className='tools span-1'>

                    <div>
                        <h3>Role</h3>
                        <p>{props.role}</p>
                    </div>
                    <div>
                        <h3>Timeline</h3>
                        <p>{props.time}</p>
                    </div>

                    {props.team && (<div>
                        <h3>Team</h3>
                        <p>{props.team}</p>
                    </div>)}




                </div>



            </div>
        </div>
    );

}

export function DarkBG(props) {
    return(
        <div className='dark-bg' {...props}>
            {props.children}
        </div>
    )

}

export function LightBG(props) {
    return (
        <div className='light-bg' {...props}>
            {props.children}
        </div>
    )

}

export function ScrollMenu(props) {
    return(
        <div className="scroll-menu">
            {props.children}
        </div>
    )

}

export function HorHeader(props) {
    return(
        <div className='container-1200 h-header'>
            <div className='case-section-title-cont col-2-grid mb-24'>
                <div className='span-1 h-left-side'>
                    <h2>{props.top}</h2>
                    <h2>{props.bottom}</h2>
                </div>
                <div className='span-1'>
                    <div><p>{props.body}</p></div>
                </div>
            </div>
        </div>
    )
}

export function VerSection(props) {
    return (
        <div className='container-1200 ver-section'>
            <div className='case-section-title-cont col-8-grid'>
                <div className='span-3 ver-section-title'>
                    <h2>{props.top}</h2>
                    <h2>{props.bottom}</h2>
                    <div><p>{props.body}</p></div>
                </div>
                <div className='span-5 col-4-grid list-section'>
                    {props.children}

                </div>
            </div>
        </div>
    )
}



export function ScrollMenuItem(props) {

    const onPress = (e) => {
        e.preventDefault();
        const target = window.document.getElementById(
            e.currentTarget.href.split("#")[1]
        );
        if (target) {
            var headerOffset = 20;
            var elementPosition = target.getBoundingClientRect().top;
            var offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return(
        <a 
            onClick={(e) => onPress(e)} href={props.href}>
            <div
                data-to-scrollspy-id={props.id}
                className="ss-item"
            >
                {props.title}
            </div>
        </a>
    )
}

export default Template;
