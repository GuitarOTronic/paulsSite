import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../../css/music.css'

class Music extends Component{
  constructor(props){
    super(props)
    this.state={
      paulsPerformances:[
        'https://youtu.be/jMUEf1ZYoF4',
        'https://youtu.be/rxZsuLNG_NA',
        'https://youtu.be/3_E6jiDnCWM',
        'https://youtu.be/GKAyGI1zzVI'
      ],
    }
  }

  render(){
    return(
      <div className='musicContainer'>
        <h1>Performances by Paul</h1>
        <div className='songContainer'>
          {this.state.paulsPerformances.map((url, i)=><ReactPlayer width=' 320px' height='150px' className='song' key={ i } url={ url } playing={false} controls={true} config={{youtube:{playerVars:{showinfo:1}}}}/>) }

        </div>
        {/* <div className='song'>
            <ReactPlayer url='https://www.youtube.com/watch?v=h9TlaYxoOO8' playing={false} controls={true} config={{youtube:{playerVars:{showinfo:1}}}}/>
        </div>
        <div className='song'>
            <ReactPlayer url='https://www.youtube.com/watch?v=h9TlaYxoOO8' playing={false} controls={true} config={{youtube:{playerVars:{showinfo:1}}}}/>
        </div> */}


      </div>
    )
  }

}

export default Music
