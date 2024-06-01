import React, {useEffect} from 'react'
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import icon from '../assets/message.png'
import mail from '../assets/gmail.png'
import phone from '../assets/call.png'
import address from '../assets/map.png'
import bank from '../assets/piggy-bank.png'

// eslint-disable-next-line react/prop-types
const Contact = ({subTitle, title}) => {
    useEffect(()=>{
        AOS.init({
          duration:2000});
    
      },[])
    
  return (
    <React.StrictMode>
        <div className='head' data-aos='fade-up'>
        <p>{subTitle}</p>
        <h2>{title }</h2>
      
    </div>
    <div className='contact' data-aos='fade-up'>
        <div className="column">
            <h3>Send us a message<img src={icon} alt='' /></h3>
            <p>Reach out</p>

            <ul>
                <li><img src={mail} alt='' />  
                info@worldachiversorganization.co.ke

                </li>

                <li><img src={phone} alt='' />
                0739 282 815 / 0720 501 603
                
                </li>
                <li><img src={address} alt='' />
                1st Floor 2nd Wing Room 23,<br/> Multi-choice building, <br/>
                Westlands, Nairobi
                <br/>
                <br /> 
                Ratna Square Nyali <br />
                Mombasa-Kenya
                </li>

                <li><img src={bank} alt='' />
                KCB BANK CITY SQAURE BRANCH NAIROBI<br/>
                PAYBILL NUMBER: 522522 <br/>
                ACCOUNT NUMBER.<br/>
                1316823547<br/>
                ACCOUNT NAME<br/>
                WAO MENTORSHIP ORGANIZATION
                </li>
            </ul>
        </div>
        <div className="column">
            <form>
                <label>Name:</label>
                <input type='text' name='name' placeholder='Enter your name' required></input>

                <label>Phone Number:</label>
                <input type='tel' name='phone' placeholder='Enter your phone number' required></input>

                <label>Write here:</label>
                <textarea name='message'  rows='6' placeholder='Enter message here' required></textarea>

                <button type='submit' className='button'>Submit now</button>
            </form>
        </div>
        
    </div>

        <div className='footer' >
            <p>©2024 World Achievers Organization Africa</p>
             With you along the journey.
            </div>
    </React.StrictMode>
  )
}

export default Contact
