import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/home.css'
import ReactPlayer from 'react-player'
import kidsPic from '../../pics/kidsGroup.JPG'
import Modal from 'react-modal'



class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      modalIsOpen:false,

    }
    Modal.setAppElement(document.body)
  }

  componentDidMount() {
    window.scrollTo(0,0);
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
                <input required id='name' type='text'/>
              </label>
              <label htmlFor='email'>Email:{" "}
                <input required id='email' type='email'/>
              </label>
              <label htmlFor='phone'>Phone:{" "}
                <input required id='phone' type='phone'/>
              </label>
              <label htmlFor='message'>Message:{" "}<br></br>
                <textarea required id='message' type='textarea' rows="10" cols="30" placeholder='Any questions for Paul? Whats your favorite type of music? '/>
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
            <div id='testimonials' className='testimonialPicContainer'>
              <img src={ kidsPic } alt='Guitar class' className='testimonialPic'></img>
            </div>
            <p id='pitch'>Never picked up a guitar before? No problem! You’ll be playing your favorite songs in no time. Been playing for years but need a little help overcoming that next hurdle? Great! You’ll be playing better and with more confidence than ever before. </p>
          </div>
          <div className='buttonsContainer'>
            <button className='becomeStudentBtn' onClick={ this.toggleModal }> Become a Student! </button>
            <div className='learnMoreLinks'>
              <Link to='policies'>Pricing & Policies</Link>
              <Link to='about'>About Paul </Link>
              <Link to='testimonials'> Testamonials</Link>
            </div>

          </div>

        </div>
        <div className='divider '>
          <h3 className='centerDiv'>Student Performing Piece</h3>
        </div>

        <div className='studentSongContainer'>
            <ReactPlayer  width=' 320px' height='150px'  url='https://www.youtube.com/watch?v=TiAc32y459o&t=20s' playing={false} controls={true} config={{youtube:{playerVars:{showinfo:1}}}}/>
        </div>
        <div id='testimonials' className='testimonialPicContainer divider'>
          <h3 className='centerDiv'>See what students are saying about Paul </h3>
        </div>
        <div className='homeTestimonialContainer'>
          <div className='homeTestimonial'>
            <h3>"Paul is a phenomenal instructor with the personality and charisma it takes to teach such a distinguished instrument." -Kyle </h3>
          </div>
          <div className='homeTestimonial'>
            <h3>"Mr. Witkamp gave me private lessons for two years and it was one of the best investments I've made." -Nate</h3>
          </div>
          <div className='homeTestimonial'>
            <h3>"Paul is a fantastic guitarist and an even better teacher." -Lauren</h3>
          </div>
          <div className='homeTestimonial'>
            <h3>"He has been very organized, punctual, and inspiring instructor." -Suliko T.</h3>
          </div>
          <Link style={{'color':'#fff','textDecoration': 'underline', 'fontSize':'1.2rem'}} to='testimonials'><em>See more testimonials...</em></Link>
        </div>
      </div>
    )
  }

}

export default Home
