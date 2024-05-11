import React from 'react'
import './Contact.css'
import mail from '../../Assets/Contact/emailIcon.png'
import github from '../../Assets/Contact/githubIcon.png'
import linked from '../../Assets/Contact/linkedinIcon.png'

const Contact = () => {
  return (
    <footer className='containerrrr' id='contact'>
        <div className='text'>
            <h2>Contact</h2>
            <p>Feel Free to reach out</p>
        </div>
        <ul className='linksss'>
            <li className='linkss'>
                <img src={mail} alt="" />
                  <a href="mailto:myemail@email.com">ajayshekhawat256@gmail.com</a>
            </li>
            <li className='linkss'>
                <img src={linked} alt="" />
                  <a href="https://www.linkedin.com/in/ajay-shekhawat-766217195/">linkedin.com/ajayshekhawat</a>
            </li>
            <li className='linkss'>
                <img src={github} alt="" />
                  <a href="https://github.com/ajayshekhawat256">github.com/myname</a>
            </li>
        </ul>

    </footer>
  )
}

export default Contact