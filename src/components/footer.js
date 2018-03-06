import React, { Component } from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
class Footer extends Component{


  render(){
    return(
      <footer className='footer'>

        <div className='footerNav'>
          <ul>
            <Link to ='/' ><li> Home </li></Link>
            <Link to='about'><li> About </li></Link>
            <Link to='testimonials'><li> Testimonials </li></Link>
            <Link to='policies'><li> Info </li></Link>
            <Link to='music'><li> Media </li></Link>
          </ul>
          <p><b>Witkamp Guitar Lessons</b> • (555)555-5555 • </p>
          <h6>© 2018</h6>
        </div>
      </footer>

    )
  }
}

export default Footer
