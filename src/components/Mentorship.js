import React from 'react'
import './Mentorship.css'
import Aboutus from './images/aboutus.png';
import Championjeelogo from './images/championjeelogo.png';
import Iitjeementorship from './images/iitjeementorship.png';
import Neetmentorship from './images/neetmentorship.png';
import Personalmentor from './images/personalmentor.png';
import Dailyplan from './images/Dailyplan.png';
import WeeklyLive from './images/WeeklyLive.png';
import PerformanceAnalysis from './images/PerformanceAnalysis.png';
import PaperAnalysis from './images/PaperAnalysis.png';
import Meet from './images/Meet.png';

export default function Mentorship() {
  return (
    <div>
      <div class="row">
    <div class="about col-md-12">

      <h1>NEED OF MENTORSHIP?</h1>
    </div>
    <hr class="line"/>
    <div class="needofm">
    <q>If you cannot see where you are going,ask to some who has been there before- <span>(J Loseb Norris)</span> </q>
    <p> There has been a huge spread by various means around the students related to JEE & NEET which affects students confidence to great extent.Coaching 
      spread the fear about the competition in students its the toughest exam and has high competition.
      <br/>
      To remover such fear and guide a student to correct path, <q> <i> a need of mentor is always so important in once life.</i> </q> The mentor their self had been through this circumstances and have overcome it successfully.Mentor is 
      must to guide your prepraration, whether you are following correct path or not.Never let you fall in any distractions, always motivate you towards your goal along with giving solutions to problems
      an aspirants faces.They are there to boost your self confidence whenever you
      are feeling low and is some who believe in you even when you might not believe in yourself.they constantly reminds you of capabilites and is there help through out the way. <br/><q>Wishing Nothing but <i> ALL THE BEST</i></q>
    </p>
    </div>
  </div>
  <div class="feature2">
  <h1>Our Top Feature</h1>

</div>
<div class="row">
    <div class="container">
      <div class="card">
        <div class="card__header">
          <img src={Personalmentor} alt="card__image" class="card__image" width="600"/>
        </div>
        <div class="card__body">

          <h2>One to one Mentorship</h2>
          <p>We are iitians and we know
            all types of problems which are faced by
            aspirants during jee prep as we ourselves have
            gone through it. Your jee mentor will mentor you regularly on
            a personal level to help you in your preparation.</p>
        </div>
    </div>
    <div class="card">
        <div class="card__header">
          <img src={Dailyplan} alt="card__image" class="card__image" width="600"/>
        </div>
        <div class="card__body">

          <h2>Daily /weekly planner</h2>
          <p>A personalized schedule will be
            structured for individual student on
            the basis of their ongoing covered syllabus
            and which will be updated accordingly with regular
            observation on students on their performance</p>
        </div>

      </div>
      <div class="card">
        <div class="card__header">
          <img src={Meet} alt="card__image" class="card__image" width="600"/>
        </div>
        <div class="card__body">

          <h2>Weekly Live session</h2>
          <p>Regular live session will be
            conducted to interact with the students clearing
            some common doubts faced by students and a
            dose of inspiration to boost their motivation</p>
        </div>

      </div>
      <div class="card">
        <div class="card__header">
          <img src={PerformanceAnalysis} alt="card__image" class="card__image" width="600"/>
        </div>
        <div class="card__body">

          <h2> Performance Analysis</h2>
          <p>We will be checking your solving accuracy,
            time efficiency, concepts clarity. We will be
            giving you the most detailed report and analysis
            after in-depth analysis of your errors
            and Topics during practice as well as Mock Exams.</p>
        </div>

      </div>
      <div class="card">
        <div class="card__header">
          <img src={PaperAnalysis} alt="card__image" class="card__image" width="600"/>
        </div>
        <div class="card__body">

          <h2> Materials & Notes</h2>
          <p>We will share our handwritten notes
            with you and we will regularly design
            and provide some quiz questions acc to
            ur syllabus for a personal
            check of ur command on your completed topic</p>
        </div>

      </div>
      <div class="card">
        <div class="card__header">
          <img src={PaperAnalysis} alt="card__image" class="card__image" width="600"/>
        </div>
        <div class="card__body">

          <h2>Previous year Papers </h2>
          <p>Previous year paper with detailed
            analysis for 50+ years along
            with the topic wise distribution of papers.</p>
        </div>
        </div>
    </div>
    </div>
    <div class="newcon">
        <div class="hello12">
          <h1>Our Mentorship Program</h1>

        </div>
      </div>
      <div class="container">
        <div class="card">
          <div class="card__header">
            <img src={Iitjeementorship} alt="card__image" class="card__image" width="600"/>
          </div>
          <div class="card__body">

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
            <span><a class="button button12" href="IITJEE.html">Join JEE Mentorship</a></span>
          </div>
        </div>
        <div class="card">
          <div class="card__header">
            <img src={Neetmentorship} alt="card__image" class="card__image" width="600"/>
          </div>
          <div class="card__body">

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
            <span><a class="button" href="NEET.html">Join NEET Mentorship</a></span>
          </div>

      </div>
        </div>
    </div>
  )
}
