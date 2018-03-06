import React, { Component } from 'react'
import '../../css/about.css'

class About extends Component{

  componentDidMount() {
    window.scrollTo(0,0);
  }


  render(){
    return(
      <div>
        <h1>Paul Witkamp</h1>
        <div className='aboutContainer centerDiv'>
          <div className='practingContainer'>
            <div className='practing'></div>
          </div>

          <div className='centerDiv'>
            <article className='aboutContent'>

              I first picked up guitar in 7th grade and never put it down afterward. I took lessons throughout high school and eventually decided to pursue music in college. I received my Bachelor of Music in Recording Technology and my Master of Music in Classical Guitar Performance from Ball State University. While  studying I held the Classical Guitar Graduate Assistantship. My responsibilities included instructing individual undergraduate students in proper classical guitar technique, history of the instrument, and musical expression through etudes and repertoire in preparation for performances. I also directed small classical guitar ensembles as part my of duties.
              <br/><br/>
              After receiving my degrees I moved to Chicago and in addition to my own private lessons, I am also currently a member of the guitar faculty at the Merit School of Music in Chicago and Sherwood Community Music School at Columbia University. I instruct private and group classical guitar classes with both schools. Our goal is to expand students’ personal and educational growth by cultivating a strong work ethic, effective listening, teamwork, and self-confidence. We develop each student’s musical potential by improving their musical knowledge, skill, and instrumental technique. As an Instructor I instill a strong understanding of the fundamentals of classical guitar and music as a discipline.
              <br/><br/>
              When I teach, I like to begin with basic techniques such as simple note production, good tone production, slur execution, etc. Depending on the student’s skill level, I like to move onto more advanced techniques such as the barre, rasgueado, natural and artificial harmonics, or whatever the music we're working on might need. I think it is important to develop reading skills for traditional music notation with an emphasis on phrasing and musicality, and offer guidance in the development of the skills necessary to execute guitar techniques while incorporating basic to advanced music theory knowledge to understanding the guitar.
              <br/><br/>
              While my primary focus has been Classical Guitar, I understand that each person has their own goals. As a private instructor, I make my goal the student's goal and create lesson plans tailored to the individual student’s needs and desires. Whether you're trying to pursue music at the collegiate level or just learn a few of your favorite songs, I'll be sure to help you get here!
            </article>
          </div>
        </div>



      </div>
    )
  }
}

export default About
