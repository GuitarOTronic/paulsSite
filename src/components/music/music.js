import React, { Component } from 'react'
import ReactPlayer from 'react-player'
class Music extends Component{


  render(){
    return(
      <div>
        Music page
        <ReactPlayer url='https://youtu.be/EZ4s5IE4fZ8' playing={false} controls={true} />
        <ReactPlayer url='https://www.youtube.com/watch?v=h9TlaYxoOO8' playing={false} controls={true} />
      </div>
    )
  }

}

export default Music
