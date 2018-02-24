import React, { Component } from 'react'
import Testamonial from './testamonial.js'
import '../css/home.css'
import testamonialDB from '../assets/testamonialDB.js'
class Home extends Component{
  constructor(props){
    super(props)
    this.state={}
  }


  showSignUp = () => {
    console.log('heyo');
  }

  render(){
    return(
      <div className='homeContainer'>
        <div className='becomeStudentBtnContainer'>
          <button className='becomeStudentBtn' onClick={ this.showSignUp }> Become a Student </button>
        </div>
        <div className='testamonialContainer'>
          { testamonialDB.map((testamonial, i) => <Testamonial name= { testamonial.name } date={ testamonial.date } testamonial={ testamonial.testamonial } title={testamonial.title} key={ i }/>) }
        </div>




      </div>
    )
  }

}

export default Home
