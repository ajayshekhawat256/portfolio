import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='container'>
        <div className='content'>
            <h1 className='titleeee'>Hi, I'm Ajay</h1>
            <p className='description'>
                I'm a full stack developer with 2 years of experience using React and SpringBoot and NodeJS.Reach out
                if you had like to learn more.
            </p>
            <a className='contactBtn' href="/">Contact Me</a>
        </div>
          <img className='img' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="topBlur"></div>
          <div className="bottomBlur"></div>
    </section>
  )
}

export default Hero