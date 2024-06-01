import React, {useEffect} from 'react'
import './Pictorial.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/four.jpg'
import img2 from '../assets/two.jpg'
import img3 from '../assets/six.jpg'
import img4 from '../assets/five.jpg'
import { DefaultPlayer as Video } from 'react-html5video';
import Vid from '../assets/vid2.mp4'
import Vidi from '../assets/vid4.mp4'
import 'react-html5video/dist/styles.css'


const Pictorial = () => {
    useEffect(()=>{
        AOS.init({
          duration:2000});
    
      },[])

  return (
    <React.StrictMode>
        <div className='pics' data-aos = 'fade-up'>

            <h1>Pictorials</h1>
            <br />
            <br />
            <div className="gallery">
                <img src = {img1} alt='' className='img1'/>
                <img src = {img2} alt='' className='img2'/>
                <img src = {img3} alt='' className='img3'/>
                <img src = {img4} alt='' className='img4'/>

            </div>

            <Video className="vid" >
                <source src = {Vid} type = 'video/webm' />
                    
            </Video>
            <Video className = "vidi" >
                <source src = {Vidi} type = 'video/webm' />
                
            </Video>
            

        </div>
    </React.StrictMode>
    
  )
}

export default Pictorial
