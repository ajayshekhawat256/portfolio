import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({project}) => {
    const { title, imageSrc,description, skills, demo, source }=project;
  return (
    <div className='container11'>
        <img className='image' src={imageSrc} alt="" />

        <h3 className='title'>{title}</h3>
        <p className='description1'>{description}</p>
        <ul className='skills1'>
            {
                skills.map((skill,id)=>{
                    return(
                        <li key={id} className='skill1'>
                            {skill}
                        </li>
                    )
                }) 
            }
        </ul>
        <div className="links">
            <a href={demo} className='link'>Demo</a>
            <a href={source} className='link'>Source</a>
        </div>
    </div>
  )
}

export default ProjectCard