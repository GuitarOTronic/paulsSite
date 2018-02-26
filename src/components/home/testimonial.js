import React from 'react'

const Testimonial=({name, title, date, testimonial}) => {

  return(
    <div className='testimonial'>
      <h2>{ title }</h2>
      <p>{ testimonial}</p>
      <div className='dateName'>
        <h4 className='testimonialName'> - { name }</h4>
        <h5 className='testimonialDate'>{ date }</h5>

      </div>

    </div>
  )

}

export default Testimonial
