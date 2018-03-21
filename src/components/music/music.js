import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../../css/music.css'

class Music extends Component{
  constructor(props){
    super(props)
    this.state={
      paulsPerformances:[
        'https://www.youtube.com/watch?v=MuM1oUmE-fU',
        'https://www.youtube.com/watch?v=JG0mbNSEeW4',
        'https://www.youtube.com/watch?v=Ut6s1EySBak',
        'https://www.youtube.com/watch?v=LLIYfYeCx7Y&t=3s',
        'https://www.youtube.com/watch?v=vh3r4zktV8A',
        'https://www.youtube.com/watch?v=v98D_K05fbU',
        'https://www.youtube.com/watch?v=8PB6T_PDZAU',
        'https://www.youtube.com/watch?v=kIwYGwL0lLU',
        'https://www.youtube.com/watch?v=woMuzUiFnx4',
        'https://www.youtube.com/watch?v=GKAyGI1zzVI',
        'https://www.youtube.com/watch?v=3_E6jiDnCWM',
        'https://www.youtube.com/watch?v=rxZsuLNG_NA',
        'https://www.youtube.com/watch?v=jMUEf1ZYoF4',
        'https://www.youtube.com/watch?v=fJlNhrFoSXU',
      ],
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div className='musicContainer'>
        <h1>Performances by Paul</h1>
        <div className='songContainer'>
          {this.state.paulsPerformances.map((url, i)=><ReactPlayer width=' 320px' height='150px' className='song' key={ i } url={ url } playing={false} controls={true} config={{youtube:{playerVars:{showinfo:1}}}}/>) }
        </div>
      </div>
    )
  }

}

export default Music
