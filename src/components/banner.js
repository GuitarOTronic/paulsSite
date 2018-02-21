import React, { Component } from 'react'
import {Collapse} from 'react-collapse';
import {Link} from 'react-router-dom'

import '../css/banner.css'
class Banner extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  toggleMenu = () => {
    this.props.showMenu()

  }

  render(){
    return(
      <div className='banner'>
        <header className="home-header">

          <h1 className="App-title">Witkamp <br></br> Lessons</h1>
          <div onClick={ this.toggleMenu }>
            {/* {this.state.isOpened ?
              <i className='fas fa-times fa-3x'></i> :
              <i className='fas fa-bars fa-3x'></i>
            } */}

            <i className={this.props.isOpened ?  "fas fa-times fa-3x" : "fas fa-bars fa-3x" }></i>
          </div>
        </header>
        <Collapse isOpened={this.props.isOpened} >
          <div>
            <ul>
              <Link to ='/' onClick={ this.toggleMenu }><li>Home</li></Link>
              <hr></hr>
              <Link to='about' onClick={ this.toggleMenu }><li>About</li></Link>
              <hr></hr>
              <Link to='music' onClick={ this.toggleMenu }><li>Music</li></Link>
              <hr></hr>
            </ul>

          </div>
        </Collapse>
      </div>

    )
  }
}


export default Banner
