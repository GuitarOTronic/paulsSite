import React, { Component } from 'react'

import '../css/home.css'

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
        <button onClick={ this.showSignUp }> Become a Student </button>


      </div>
    )
  }

}

export default Home
