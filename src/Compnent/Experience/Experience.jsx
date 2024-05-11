import React from 'react'
import './Experience.css'
import { images } from '../../Data/skills';
import { history } from '../../Data/history';


const Experience = () => {
    return (
        <section className="container" id="experience">
            <div className="contentt">
                <div className="content1">
                    <h2 className="title">Skills</h2>
                    <div className="skills"> 
                        {images.map((skill, id) => {
                            return (
                                <div key={id} className="skill">
                                    <div className="skillImageContainer">
                                        <img src={skill.imageSrc} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="content2">
                    <ul className="history">
                    <h2 className="heading">Experience</h2>
                        {history.map((historyItem, id) => {
                            return (
                                <li key={id} className="historyItem">
                                    <img
                                        src={historyItem.imageSrc}
                                        alt={`${historyItem.organisation} Logo`}
                                    />
                                    <div className="historyItemDetails">
                                        <h3>{`${historyItem.role} ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate}- ${historyItem.endDate}`}</p>
                                        <ul>
                                            {historyItem.experiences.map((experience, id) => {
                                                return <li key={id}>{experience}</li>;
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience