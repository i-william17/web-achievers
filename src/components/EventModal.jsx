import React from 'react'
import './EventModal.css'
import img from '../assets/mod.jpeg'

// eslint-disable-next-line react/prop-types
const EventModal = ({open, onClose}) => {
    if(!open)
        return null

  return (
    <React.StrictMode> 
        <div>
            <div className="overlay">
                <div className="modalContainer">
                    <img className='pic' src={img} alt=''/>
                    <div className="modright">
                        <div className="content">
                            <h2>Mental Health Training - Cooperate Networking</h2>
                            <p>Join us for the MENTAL HEALTH TRAINING session this July.
                                <br/>For more information feel free to reach out to us.
                            </p>

                        </div>

                        <div className="btnContainer">
                            <a href='' alt=''><button className="btn">Learn more</button></a>

                            <button onClick={onClose} className="btn">Close</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
 
    </React.StrictMode>
  )
}

export default EventModal
