import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Testimonial from './../home/testimonial.js'
import '../../css/home.css'
import testimonialDB from '../../assets/testimonialDB.js'
import PaulsHeadshot from '../../pics/PaulHeadshotCropped.jpg'
import downArrow from '../../pics/arrow-down.png'
class Home extends Component{
  constructor(props){
    super(props)
    this.state={}
  }


  showSignUp = () => {

  }

  render(){
    return(
      <div className='homeContainer'>
        <div className='becomeStudentBtnContainer'>
          <div className='homeTitle'>
            <img  src={require('../../pics/PaulHeadshotCropped.jpg') } alt='Pauls headshot' className='headShot'></img>
            <h1>Paul Witkamp <br></br>Guitar Lessons</h1>
          </div>
          <div className='elevatorPitch'>
            <h3>The one stop shop for great Guitar Lessons. </h3>
            <p>I am a classically trained guitarist whose mission is to help my students reach their goals while inspiring a love and passion for music.<br></br><br></br> Never picked up a guitar before? No problem! You’ll be playing your favorite songs in no time. Been playing for years but need a little help overcoming that next hurdle? Great! You’ll be playing better and with more confidence than ever before. </p>
          </div>
          <div className='buttonsContainer'>
            <button className='becomeStudentBtn' onClick={ this.showSignUp }> Become a Student! </button>
            <div className='learnMoreLinks'>
              <a href='#testimonials'>Pricing & Policies</a>
              <Link to='about'>About Paul </Link>
              <a href='#testimonials' className='showTestamondials'>Testamonials</a>
              {/* <Link to='about'>About Paul </Link> */}
            </div>

          </div>
          <a href='#testimonials'><div className='goToTestamonials'>
            <img src={ downArrow } alt='down arrow' className='downArrow'></img>
          </div></a>
        </div>
        <div className='divider'>
          <div id='testimonials' className='testimonialPic'>
            <h2>See what students are saying about Paul </h2>
          </div>
        </div>

        <div className='centerDiv'>
          <h2>Testimonials</h2>
        </div>
        <div className='testimonialContainer'>
          { testimonialDB.map((testimonial, i) => <Testimonial name= { testimonial.name } date={ testimonial.date } testimonial={ testimonial.testimonial} title={testimonial.title} key={ i }/>) }
        </div>




      </div>
    )
  }

}

export default Home
