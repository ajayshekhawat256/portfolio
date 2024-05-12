import React from 'react'
import './Hero.css'
import profile from '../../Assets/Hero/profilepic.jpg'

const Hero = () => {
  return (
    <section className='container'>
        <div className='content'>
            <h1 className='titleeee'>Hi, I'm Ajay</h1>
            <p className='description'>
                I'm a full stack developer with 2 years of experience using React and SpringBoot and NodeJS.Reach out
                if you had like to learn more!
            </p>
            <a className='contactBtn' href="/">Contact Me</a>
        </div>
          <img className='img' src={profile} alt="" />
          <div className="topBlur"></div>
          <div className="bottomBlur"></div>
    </section>
  )
}

export default Hero