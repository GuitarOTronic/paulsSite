import React from 'react'

const Testamonial =({name, title, date, testamonial}) => {

  return(
    <div className='testamonial'>
      <h2>{ title }</h2>
      <p>{ testamonial }</p>
      <div className='dateName'>
        <h4 className='testamonialName'> - { name }</h4>
        <h5 className='testamonialDate'>{ date }</h5>

      </div> 

    </div>
  )

}

export default Testamonial
