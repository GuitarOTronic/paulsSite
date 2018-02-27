import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../../css/music.css'

class Music extends Component{


  render(){
    return(
      <div className='musicContainer'>
        <h1>Performances by Paul</h1>
        <div className='song'>
            <ReactPlayer className='song'  url='https://youtu.be/EZ4s5IE4fZ8' playing={false} controls={true} config={{youtube:{playerVars:{showinfo:1}}}}/>
        </div>
        <div className='song'>
            <ReactPlayer url='https://www.youtube.com/watch?v=h9TlaYxoOO8' playing={false} controls={true} config={{youtube:{playerVars:{showinfo:1}}}}/>
        </div>
        <div className='song'>
            <ReactPlayer url='https://www.youtube.com/watch?v=h9TlaYxoOO8' playing={false} controls={true} config={{youtube:{playerVars:{showinfo:1}}}}/>
        </div>


      </div>
    )
  }

}

export default Music
