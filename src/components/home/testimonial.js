import React from 'react'

const Testimonial=({name, title, date, testimonial, hasGreyBackground}) => {
  return(
    <div className={hasGreyBackground%2 ? 'testimonial ': 'testimonial testimonialGreyBackground'}>
      <h2>{ title }</h2>
      <p>{ testimonial }</p>
      <div className='dateName'>
        <h4 className='testimonialName'> - { name }</h4>
        <h5 className='testimonialDate'>{ date }</h5>

      </div>

    </div>
  )

}

export default Testimonial
