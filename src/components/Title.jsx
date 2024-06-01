/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import './Title.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Title = ({subTitle, title, title1, title2, title3}) => {
  useEffect(()=>{
    AOS.init({
      duration:2000});

  },[])
  
  return (
    <React.StrictMode>
    <div className='title' data-aos='fade up'>
        <p>{subTitle}</p>
        <h2>{title }</h2>
      
    </div>
    <div className='statement' data-aos='fade-up'>
        <p>
        Our learning institutions today are facing a number of challenges 
        posed by different socio-economic factors. Parenting has become a 
        big issue due to the certain circumstances, some of which are 
        imminently inevitable.
        <br/>
        Consequently, this translates to lack of ample time for parents 
        and care givers to instill the proper values and morals in children. 
        Teachers are left to carry out the pertinent role of parenting 
        oblivious that they too are expected to perform their normal 
        professional duties responsibilities effectively. It is for this reason 
        that mentorship programs become very essential in our schools. 
 
        </p>
    
        <h2>{title1}</h2>
        <p>
        We have a team of passionate and well-rounded professional 
        teachers and counselors with vast experience in the field of education.
        They have worked as ordinary classroom teachers and also as 
        administrators. This has given them a significant milestone in
        understanding the day to day challenges facing children and youth at 
        school and home. 
        <br/>
        Our mentorship programs are very flexible and can be tailor made as per the 
        client schedule. We take full cognizance of dissimilarities e.g. gender, age, 
        social status etc. Our program is intended for prosperity. Therefore, besides
        providing you with a comprehensive report we also do follow ups to ensure that
        the much-desired result is realized by all.We also work with political and 
        corporate leaders to inspire learners.
        </p>

        <h2>{title2}</h2>

        <p>
        We believe that the mentorship programs are no doubt a 
        worthy cause that will do a great deal of good for the school
        and the children.
        <br/>
        We are excited to partner and to share our knowledge and 
        experiences with you in this noble journey of raising ethical,
        independent and responsible citizens.
        <br/>
        Working together means winning together. 
        Make your mind, decide and act now
        </p>

        <h2>{title3}</h2>
        <p>
        We issue participation certificates to every participant
        upon completion of each and every program.
        </p>


    </div>
    <div className="justification">

    </div>
    </React.StrictMode>
  );
};



export default Title
