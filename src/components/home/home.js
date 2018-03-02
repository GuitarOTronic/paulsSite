import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Testimonial from './../home/testimonial.js'
import '../../css/home.css'
import testimonialDB from '../../assets/testimonialDB.js'
// import PaulsHeadshot from '../../pics/PaulHeadshotCropped.jpg'
import downArrow from '../../pics/arrow-down.png'
import kidsPic from '../../pics/kidsGroup.JPG'
import Modal from 'react-modal'
import upArrow from '../../pics/arrow-up.png'


class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      modalIsOpen:false,
    }
    Modal.setAppElement(document.body)

  }

  submitBecomeStudentForm = (event) => {
    let name = event.target.querySelectorAll('#name')[0].value
    let email = event.target.querySelectorAll('#email')[0].value
    let phone = event.target.querySelectorAll('#phone')[0].value
    let message = event.target.querySelectorAll('#message')[0].value
    let formInfo = { name, email, phone, message }
    event.preventDefault()
    this.props.submitBecomeStudentForm(formInfo)
    this.toggleModal()
  }


  toggleModal =()=>{
    this.setState({modalIsOpen:!this.state.modalIsOpen})
  }

  showSignUp = () => {

  }


  render(){

    return(
      <div className='homeContainer'>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Sign up to be a student"
          onRequestClose={ this.toggleModal }
          className='modalStyling'
        >
          <div className='becomeStudentFormContainer'>
            <div className='becomeStudentFormBanner'>
                <h2 >Paul Witkamp<br></br> Guitar Lessons</h2>
            </div>
            <div className='centerDiv'>
              <p>Contact Paul and start learning! </p>
            </div>
            <form onSubmit={this.submitBecomeStudentForm}>
              <label htmlFor='name'>Name:{" "}
                <input id='name' type='text'/>
              </label>
              <label htmlFor='email'>Email:{" "}
                <input id='email' type='email'/>
              </label>
              <label htmlFor='phone'>Phone:{" "}
                <input id='phone' type='phone'/>
              </label>
              <label htmlFor='message'>Message:{" "}<br></br>
                <textarea id='message' type='textarea' rows="10" cols="30" placeholder='Any questions for Paul? Whats your favorite type of music? '/>
              </label>
              <div className='formBtnContainer'>
                <button type='submit' className='formBtnSubmit'>Submit</button>
                <button onClick={this.toggleModal} className='formBtnCancel'>Cancel</button>
              </div>

            </form>
          </div>
        </Modal>

        <div className='becomeStudentBtnContainer' >
          <div className='homeTitle'>
            <img  src={require('../../pics/PaulHeadshotCropped.jpg') } alt='Pauls headshot' className='headShot'></img>
            <h1>Paul Witkamp <br></br>Guitar Lessons</h1>
          </div>
          <div className='elevatorPitch'>
            <h3>The one stop shop for great Guitar Lessons. </h3>
            <p>I am a classically trained guitarist whose mission is to help my students reach their goals while inspiring a love and passion for music.<br></br><br></br> Never picked up a guitar before? No problem! You’ll be playing your favorite songs in no time. Been playing for years but need a little help overcoming that next hurdle? Great! You’ll be playing better and with more confidence than ever before. </p>
          </div>
          <div className='buttonsContainer'>
            <button className='becomeStudentBtn' onClick={ this.toggleModal }> Become a Student! </button>
            <div className='learnMoreLinks'>
              <Link to='policies'>Pricing & Policies</Link>
              <Link to='about'>About Paul </Link>
              <a href='#testimonials' className='showTestamondials'>Testamonials</a>
              {/* <Link to='about'>About Paul </Link> */}
            </div>

          </div>
          {/* <a href='#testimonials'><div className='goToTestamonials'>
            <img src={ downArrow } alt='down arrow' className='downArrow'></img>
          </div></a> */}
        </div>

        <div className='divider'>
          <div id='testimonials' className='testimonialPicContainer'>
            <img src={ kidsPic } alt='Guitar class' className='testimonialPic'></img>
            <h2>See what students are saying about Paul </h2>
          </div>
        </div>

        <div className='centerDiv centerText'>
          <h2>Testimonials</h2>
        </div>
        <div className='testimonialContainer'>
          { testimonialDB.map((testimonial, i) =>
            <Testimonial
              name= { testimonial.name }
              date={ testimonial.date }
              testimonial={ testimonial.testimonial}
              title={testimonial.title}
              key={ i }
              hasGreyBackground={ i }
            />) }
        </div>



        <footer>
          {/* <a href="#home"><img src={ upArrow } alt='down arrow' className='upArrow ' ></img></a> */}
      </footer>
      </div>
    )
  }

}

export default Home
