import React from 'react'
import './About.css'
import img from '../../Assets/About/aboutImage.png'
import server from '../../Assets/About/serverIcon.png'
import cursorIcon from '../../Assets/About/cursorIcon.png'
import uil from '../../Assets/About/uiIcon.png'

const About = () => {
    return (
        <div>
            <section className='container' id='about'>
                <div className='containeer'>
                    <h2 className='titlee'>About</h2>
                    <div className='content'>
                        <img className='aboutImage' src={img} alt="" />
                    </div>
                </div>
                <ul className='aboutItems'>
                    <li className='aboutItem'>
                        <img src={cursorIcon} alt="" />
                        <div className='aboutItemText'>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className='aboutItem'>
                        <img src={server} alt="Server icon" />
                        <div className="aboutItemText">
                            <h3>Backend developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>
                    <li className='aboutItem'>
                        <img src={uil} alt="" />
                        <div className='aboutItemText'>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design
                                systems as well
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default About