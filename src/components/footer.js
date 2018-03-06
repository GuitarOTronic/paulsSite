import React, { Component } from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
class Footer extends Component{


  render(){
    return(
      <footer className='footer'>

        <div className='footerNav'>
          {/* <div>
            <p>E: WitkampGuitarLessons@gmail.com</p>
          </div> */}
          <ul>
            <Link to ='/' ><li> Home </li></Link>
            {/* <hr></hr> */}
            <Link to='about'><li> About </li></Link>
            {/* <hr></hr> */}
            <Link to='policies'><li> Info </li></Link>
            {/* <hr></hr> */}
            <Link to='music'><li> Media </li></Link>
          </ul>
            <p>E: WitkampGuitarLessons@gmail.com</p>
        </div>
      </footer>

    )
  }
}

export default Footer
