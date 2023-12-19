import React from 'react'
import './Home.css'
import Aboutus from './images/aboutus.png';
import Championjeelogo from './images/championjeelogo.png';
import Iitjeementorship from './images/iitjeementorship.png';
import Neetmentorship from './images/neetmentorship.png';
// import Counsellings from './images/cousellingser.png';
import Personalmentor from './images/personalmentor.png';
import Dailyplan from './images/Dailyplan.png';
import WeeklyLive from './images/WeeklyLive.png';
import PerformanceAnalysis from './images/PerformanceAnalysis.png';
import PaperAnalysis from './images/PaperAnalysis.png';


export default function Home() {
  return (
    <>
      <div className="firstdiv">
      <div className="main col-md-12 ">
        <h6>Welcome</h6>
        <h1>India's Best <span className="change_content"></span></h1>
        <br/>
        <h4>Mentorship & <span className="change_content2">Counselling</span></h4>
        <h2>Platform</h2>
        <p>Know More about</p>
        <a href="" className="btnone">Mentorship</a>
        <a href="Counselling"className="btnone" >Counselling</a>
      </div>
    </div>

  <section>
    
    <div className="row">
      <div className="about col-md-12"> 
        <h1>About us</h1>
      </div>
      <hr className="line"/>
      <div className="divse col-md-6">
<img src={Aboutus} alt="" className="image1"/>
      </div>
      <div className="divse col-md-6">
<p>ChampionJee  consists of a team of IITians who are from the top IITs who have secured top
   ranks in JEE Mains and Advanced  and we have already 
   faced every ups and downs during our JEE/NEET preparation and 
   always have made solutions to tackle the problems and want to share
    our experience and knowledge to the upcoming JEE/NEET aspirants and to
     guide them reach their dream destination . We will track each and 
     every step in their preparation guiding to give a proper path to their studies
      which can give maximum efficiency.
</p>
      </div>
    </div>
   <div className="whychampionjee"><h1>WHY CHAMPIONJEE</h1></div>
    <div className="row">
    
      <div className="divs1 col-md-6 ">
  <img src={Championjeelogo} alt="" className="image1"/>
      </div>
      <div className="divse col-md-6">
        <p>Here mentors are all IITians from the 
          top IITs and will be tracking and giving a 
          
        personal look on the student , personalized 
        mentorship and guidance. JEE/NEET is assumed to be the 
        most precious exam which needs a proper guidance to a 
        student throughout the journey…need of a mentor is
        so necessary as the journey student have to face
        lots of things like demotivation, depression or 
        excitation, students should not get affected due
        to any such distraction...So, a mentor is necessary having personal look on the studies… we have already held many 
        sessions motivating 1000+ of students till date .</p>
      </div>
    </div>
  </section>
  <div className="row">
    <h1 id="we">WE OFFERS</h1>
  <div className="container">
    <div className="card">
      <div className="card__header">
        <img src={Iitjeementorship} alt="card__image" className="card__image" width="600"/>
      </div>
      <div className="card__body">
        
        <h1>JEE MENTORSHIP</h1>
          <ul>
            <li>Personal mentor </li>
            <li> Daily/Weekly Timetable/Planner</li>
            <li>Weekly Live session</li>
            <li> Performance Analysis</li>
            <li>Materials & Notes</li>
            <li>Previous year Papers</li>
            <li> Parents mentors meet</li>
          </ul>
          <span><a className="button button12" href="IITJEE.html">Join JEE Mentorship</a></span>
      </div>
   
    </div>
    <div className="card">
      <div className="card__header">
        <img src={Neetmentorship} alt="card__image" className="card__image" width="600"/>
      </div>
      <div className="card__body">
        
        <h1>NEET MENTORSHIP</h1>
          <ul>
            <li>Personal mentor </li>
            <li> Daily/Weekly Timetable/Planner</li>
            <li>Weekly Live session</li>
            <li> Performance Analysis</li>
            <li>Materials & Notes</li>
            <li>Previous year Papers</li>
            <li> Parents mentors meet</li>
          </ul>
          <span><a className="button" href="NEET.html">Join NEET Mentorship</a></span>
      </div>
   
    </div>
    <div className="card">
      <div className="card__header">
        {/* <img src={Counsellings} alt="card__image" className="card__image" width="600"/> */}
      </div>
      <div className="card__body">
        
        <h1>Counselling</h1>
        <ul>
          <li>Personal mentor </li>
          <li> Daily/Weekly Timetable/Planner</li>
          <li>Weekly Live session</li>
          <li> Performance Analysis</li>
          <li>Materials & Notes</li>
          <li>Previous year Papers</li>
          <li> Parents mentors meet</li>
        </ul>
        <span><a className="button" href="Counselling.html">Join Counselling</a></span>
      </div>
   
    </div>
    
    
    
    
    </div>
  </div>
  <div className="col-md-12 feature2">
    <h1>Our Top Feature</h1>

  </div>
 

  <div className="container">
    <div className="card">
      <div className="card__header">
        <img src={Personalmentor} alt="card__image" className="card__image" width="600"/>
      </div>
      <div className="card__body">
        
        <h2>One to one Mentorship</h2>
        <p>We are IITians and we know  
          every types of problems faced by an
          aspirants during JEE preparation as we ourselves have 
          gone through it. Your JEE mentor will mentor you regularly on 
          a personal level to help you in your preparation.</p>
      </div>
   
    </div>
    <div className="card">
      <div className="card__header">
        <img src={Dailyplan} alt="card__image" className="card__image" width="600"/>
      </div>
      <div className="card__body">
        
        <h2>Daily /weekly planner</h2>
        <p>A personalized schedule will be 
          structured for individual student on
           the basis of their ongoing covered syllabus 
           and which will be updated accordingly with regular
           observation on students on their performance</p>
      </div>
   
    </div>
    <div className="card">
      <div className="card__header">
        <img src={WeeklyLive} alt="card__image" className="card__image" width="600"/>
      </div>
      <div className="card__body">
        
        <h2>Weekly Live session</h2>
        <p>Regular live session will be 
          conducted to interact with the students clearing 
          some common doubts faced by students and a 
          dose of inspiration to boost their motivation</p>
      </div>
   
    </div>
    <div className="card">
      <div className="card__header">
        <img src={PerformanceAnalysis} alt="card__image" className="card__image" width="600"/>
      </div>
      <div className="card__body">
        
        <h2> Performance Analysis</h2>
        <p>We will be checking your solving accuracy,
           time efficiency, concepts clarity. We will be 
           giving you the most detailed report and analysis
            after in-depth analysis of your  errors 
          and Topics during practice as well as Mock Exams.</p>
      </div>
   
    </div>
    <div className="card">
      <div className="card__header">
        <img src={WeeklyLive} alt="card__image" className="card__image" width="600"/>
      </div>
      <div className="card__body">
        
        <h2> Materials & Notes</h2>
        <p>We will share our handwritten notes
           with you and we will regularly design
            and provide some quiz questions acc to
             ur syllabus for a personal 
          check of ur command on your completed topic</p>
      </div>
   
    </div>
    <div className="card">
      <div className="card__header">
        <img src={PaperAnalysis} alt="card__image" className="card__image" width="600"/>
      </div>
      <div className="card__body">
        
        <h2>Previous year Papers </h2>
        <p>Previous year paper with detailed 
          analysis for 50+ years along
           with the topic wise distribution of papers.</p>
      </div>
   
    </div>
  </div>
  
  
  
    </>
  )
}
