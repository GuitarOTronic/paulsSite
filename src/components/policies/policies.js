import React, { Component } from 'react'
import '../../css/policies.css'
import { Collapse } from 'react-collapse';


class Policies extends Component {
  constructor(props){
    super(props)
    this.state={
      isOpened:false
    }
  }

  showPolicies=()=>{
    this.setState({
      isOpened:!this.state.isOpened
    })
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div className='policiesContainer'>
        <div className='downloadPolicy'>
          <p>Please download, print, and sign the Lesson Policy Agreement and bring to your first lesson.</p>
          <button className='downloadBtn'><a href='https://s3-us-west-1.amazonaws.com/witkamppolicy/policies.pdf' download>Download Lesson Agreement Policy</a></button>
        </div>
        {/* <div className='centerDiv'>
          <button onClick={ this.showPolicies }>View Policies</button>
        </div> */}

          {/* <Collapse isOpened={this.state.isOpened} > */}
        <div className='policyContent'>
          <h1>Lesson Policies</h1>
          <br></br>
          <p>
            In an effort to keep payments timely, I encourage lesson regularity, and avoid complicated reschedules all students are required to agree to and sign the Payment Policy, Cancellation Policy, and Lesson Credit System.
          </p>

          <h3>  Monthly Payment Policy</h3>
          <p>Lesson payments will be submitted on a monthly basis. Payment for the coming month will be submitted during the last lesson of the current month and is non-refundable.  Any known conflicts that would result in a lesson cancellation for the coming month should be discussed at that time and charges will be adjusted accordingly.</p>

          <h3>Lesson Credit System</h3>
          <p>The Lesson Credit System will work in tandem with the Same-Day Cancellation Policy and the Monthly Payment Policy. In the event that a cancellation occurs before the day of the scheduled lesson, a reschedule will be attempted. If a reschedule cannot be arranged, the payment for that lesson will be credited to the next month. The cost of one lesson will be removed from the next month’s payment. If a reschedule is successfully arranged and is cancelled for any reason, the cost of that lesson will not be credited.</p>

          <h3>Reschedule Cancellation Policy</h3>
          <p>Cancellation by student: If a student cancels a rescheduled lesson, for any reason, credit will not be provided for the cancellation

          <br></br><br></br>Cancellation by teacher: If I cancel a rescheduled lesson, for any reason, credit will be given for the cancellation.</p>

          <h3>Same-Day Cancellation Policy</h3>
          <p>Cancellation by student: If a student cancels a lesson on the scheduled day, for any reason, credit will not be provided for the cancellation.

          <br></br><br></br>Cancellation by teacher: If I cancel a lesson on the scheduled day, for any reason, a reschedule will be attempted. If we cannot agree upon a date/time, the lesson will be credited to the next month.
          </p>
        </div>
      {/* </Collapse> */}

      </div>
    )
  }
}

export default Policies
