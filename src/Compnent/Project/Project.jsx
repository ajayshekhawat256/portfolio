import React from 'react'
import { projects } from '../../Data/project'
import ProjectCard from './ProjectCard'
import './Project.css'

const Project = () => {
  return (
    <div>
        <section className='container21' id='projects'>
            <h2 className='title21'>Projects</h2>
            <div className="projects21">
                {projects.map((project,id)=>{
                    return <ProjectCard project={project}/>
                })}
            </div>
        </section>
    </div>
  )
}

export default Project