import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components//about/about.js'
import Banner from './components/banner.js'
import Home from './components/home/home.js'
import Footer from './components/footer.js'
import Music from './components/music/music.js'
import Policies from './components/policies/policies.js'

import Testimonials from './components/testimonials/testimonials.js'
import './App.css';
import axios from 'axios'

// const host = process.env.REACT_APP_HOST
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isOpened:false,
      modalIsOpen:false,
    }
  }

  showMenu = () => {
    this.setState({isOpened:!this.state.isOpened})
  }

  submitBecomeStudentForm = async (formInfo) => {
    await axios.post(`http://localhost:2999/newStudent`, formInfo).then(response => {
      console.log(response);
    })

  }

  toggleModal = () => {
    this.setState({modalIsOpen:!this.state.modalIsOpen})
  }

  render() {
    return (
    <Router onUpdate={() => window.scrollTo(0, 0)} >
      <div className='mainContainer'>
        <Banner
            isOpened={ this.state.isOpened}
            showMenu={ this.showMenu }
          />
        <Route exact path='/'
          render = {(props) =>
            <Home
              modalIsOpen={ this.state.modalIsOpen }
              toggleModal={ this.toggleModal }
              submitBecomeStudentForm={this.submitBecomeStudentForm}
            />
          }
        />
        <Route path='/about'
          component={ About }
        />
        <Route path='/policies'
          component={ Policies }
        />
        <Route path='/music'
          component={ Music }
        />
        <Route path='/testimonials'
           component={ Testimonials }
        />
        <Footer/>
      </div>
    </Router>


    );
  }
}


export default App;
