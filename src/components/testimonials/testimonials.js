import React, { Component } from 'react'
import testimonialDB from '../../assets/testimonialDB.js'
import Testimonial from '../home/testimonial.js'

class Testimonials extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){
    return (
      <div>
        <h1>Testimonials</h1>

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
    </div>
    )
  }
}



export default Testimonials
