import React, { Component } from 'react'
import {Collapse} from 'react-collapse';
import {Link} from 'react-router-dom'
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
      <div className='banner'>
        <header className="home-header">

          <h1 className="App-title phoneTitle">Witkamp <br></br> Lessons</h1>
          <h1 className="App-title tabletTitle">Witkamp Lessons</h1>
          <div className='hamburgerContainer' onClick={ this.toggleMenu }>
            {this.state.isOpened ? <img alt='times' src={times} className='hamburger'/> :  <img alt='bars' src={bars} className='hamburger'/> }
          </div>
          <div className='bannerMenu'>
            <ul>
              <Link to ='/' ><li> Home </li></Link>
              <hr></hr>
              <Link to='about'><li> About </li></Link>
              <hr></hr>
              <Link to='music'><li> Music </li></Link>
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
              <Link to='music' onClick={ this.toggleMenu }><li> Music </li></Link>
              <hr></hr>
            </ul>

          </div>
        </Collapse>
      </div>

    )
  }
}


export default Banner
