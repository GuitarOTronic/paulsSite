import React, { Component } from 'react'
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom'
import bars from '../pics/bars.png'
import times from '../pics/times.png'
import '../css/banner.css'

class Banner extends Component{
  constructor(props){
    super(props)
    this.state={
      isOpened:false
    }
  }
  async componentWillReceiveProps(nextProps){
    await this.setState({
      isOpened : nextProps.isOpened
    })
  }

  toggleMenu = async () => {
    await this.setState({
      isOpened:!this.state.isOpened
    })

  }



  render(){

    return(
      <div className='banner' id='home'>
        <header className="home-header">
          <div>
            <Link to='/' ><h1 className="phoneTitle"> Paul Witkamp <br></br> Guitar Lessons</h1></Link>
            <Link to='/' ><h1 className="App-title tabletTitle"> Paul Witkamp <br></br> Guitar Lessons</h1></Link>
          </div>

          <div className='hamburgerContainer' onClick={ this.toggleMenu }>
            {this.state.isOpened ? <img alt='times' src={times} className='hamburger'/> :  <img alt='bars' src={bars} className='hamburger'/> }
          </div>
          <div className='bannerMenu'>
            <ul>
              <Link to ='/' ><li> Home </li></Link>
              <hr></hr>
              <Link to='about'><li> About </li></Link>
              <hr></hr>
              <Link to='/testimonials'><li> Testimonials </li></Link>
              <hr></hr>
              <Link to='policies'><li> Info </li></Link>
              <hr></hr>
              <Link to='music'><li> Media </li></Link>
            </ul>
          </div>
        </header>
        <Collapse isOpened={this.state.isOpened} >
          <div className='hamMenuContainer'>
            <ul>
              <Link to ='/' onClick={ this.toggleMenu }><li> Home </li></Link>
              <hr></hr>
              <Link to='about' onClick={ this.toggleMenu }><li> About </li></Link>
              <hr></hr>
              <Link to='testimonials' onClick={ this.toggleMenu }><li> Testimonials </li></Link>
              <hr></hr>
              <Link to='policies' onClick={ this.toggleMenu }><li> Info </li></Link>
              <hr></hr>
              <Link to='music' onClick={ this.toggleMenu }><li> Media </li></Link>

            </ul>

          </div>
        </Collapse>
      </div>

    )
  }
}


export default Banner
