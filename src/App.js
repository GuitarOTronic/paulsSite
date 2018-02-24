import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components//about/about.js'
import Banner from './components/banner.js'
import Home from './components/home/home.js'
import Music from './components/music/music.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isOpened:false,
    }
  }

  showMenu = () => {
    this.setState({isOpened:!this.state.isOpened})
  }

  render() {
    return (
    <Router>
      <div>
        <Banner
            isOpened={ this.state.isOpened}
            showMenu={ this.showMenu }
          />
        <Route exact path='/'
          component={ Home }
        />
        <Route path='/about'
          component={ About }
        />
        <Route path='/music'
          component={ Music }
        />

      </div>
    </Router>


    );
  }
}


export default App;
