import React, { Component } from 'react'
import '../../css/policies.css'



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
        <div className='pricingContainer'>
          <h1>Pricing</h1>
          <div className='flex spaceBetween'>
            <h4>Home-Studio:</h4>
          	<p>
              60 minute: $40<br></br>
          		45 minute: $35<br></br>
          		30 minute: $30<br></br>
            </p>
          </div>

          <div className='flex spaceBetween'>
            <h4>In-Home:</h4>
            <p>
              60 minute: $55<br></br>
          		45 minute: $50<br></br>
          		30 minute: $45<br></br>
            </p>
          </div>

          <div className='flex spaceBetween'>
            <h4>Online:</h4>
            <p>
              60 minute: $35<br></br>
              45 minute: $30<br></br>
              30 minute: $25<br></br>
            </p>
          </div>
          <div className='flex spaceBetween groupLessons'>
            <h4>Group lessons: </h4>
            <p>5% discount for each student. Maximum group size: 5</p>
          </div>
        </div>
        <div className='neighborhoodContainer'>
          <h1> Chicago Neighborhoods Served</h1>
          <iframe className='mapContainer' src="https://www.google.com/maps/d/u/1/embed?mid=1NcjNJiryPZVdoq6SK-FsG1qofJf2kRQS"></iframe>
          <div className='flex neighborhoodLocation'>
            <ul>
              <li>Logan Square</li>
              <li>Palmer Square</li>
              <li>Avondale</li>
              <li>Bucktown</li>
              <li>Wicker Park</li>
              <li>Roscoe Village</li>
              <li>West Loop Gate</li>
            </ul>
            <ul>
              <li>Lake View</li>
              <li>Lathrop Homes</li>
              <li>West De Paul</li>
              <li>Wrightwood Neighbors</li>
              <li>Lincoln Park</li>
              <li>Park West</li>
              <li>Lake View East</li>
            </ul>
            <ul>
              <li>Sheffield Neighbors</li>
              <li>Mid-North District</li>
              <li>Noble Square</li>
              <li>East Village</li>
              <li>Near West Side	</li>
              <li>West Town</li>
              <li>Greektown</li>

            </ul>
          </div>
          <hr className='lineDivider'></hr>
          <div className='homeLocation neighborhoodLocation'>
            <h3>Home Studio Location: </h3>
            <p>Intersection of N Albany Ave & W Wellington Ave</p>
          </div>
        </div>
        <div className='downloadPolicy'>
          <p>Please download, print, and sign the Lesson Policy Agreement and bring it to your first lesson.</p>
          <button className='downloadBtn'><a href='https://s3.us-east-2.amazonaws.com/witkamp-policy/policies.pdf' download>Download <i>Lesson Agreement Policy</i></a></button>
        </div>


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

      </div>
    )
  }
}

export default Policies
