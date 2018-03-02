import React, { Component } from 'react'
import '../../css/policies.css'



class Policies extends Component {


  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div className='policiesContainer'>
        <h1>Policies</h1>
        <div className='policyContent'>
          <a href='file://pauls_site/public/policies.pdf' download>Download</a>
          {/* <a href='https://drive.google.com/open?id=131lNq7hB84C8hv_OV6rgPNN-cVIruQAZ' download>Download</a> */}

          {/* <embed src='https://drive.google.com/open?id=131lNq7hB84C8hv_OV6rgPNN-cVIruQAZ' width="500" height="375" ></embed> */}
          {/* <embed width="100%" height="100%" src="../../assets/policies.pdf" type="application/pdf"></embed> */}
          {/* <embed type="application/pdf" width="100%" height="100%" src="../../assets/policies.pdf" /> */}
          {/* <p>
            In an effort to keep payments timely, encourage lesson regularity, and avoid complicated reschedules all students are required to agree to and sign the Payment Policy, Cancellation Policy, and Lesson Credit System.

            Monthly Payment Policy
            Lesson payments will be submitted on a monthly basis. Payment for the coming month will be submitted during the last lesson of the current month and is non-refundable.  Any known conflicts that would result in a lesson cancellation for the coming month should be discussed at that time and charges will be adjusted accordingly.

            Lesson Credit System
            The Lesson Credit System will work in tandem with the Same-Day Cancellation Policy and the Monthly Payment Policy. In the event that a cancellation occurs before the day of the scheduled lesson, a reschedule will be attempted. If a reschedule cannot be arranged, the payment for that lesson will be credited to the next month. The cost of one lesson will be removed from the next month’s payment. If a reschedule is successfully arranged and is cancelled for any reason, the cost of that lesson will not be credited.

            Reschedule Cancellation Policy
            Cancellation by student: If a student cancels a rescheduled lesson, for any reason, credit will not be provided for the cancellation

            Cancellation by teacher: If I cancel a rescheduled lesson, for any reason, credit will be given for the cancellation.

            Same-Day Cancellation Policy
            Cancellation by student: If a student cancels a lesson on the scheduled day, for any reason, credit will not be provided for the cancellation.

            Cancellation by teacher: If I cancel a lesson on the scheduled day, for any reason, a reschedule will be attempted. If we cannot agree upon a date/time, the lesson will be credited to the next month.


            </p> */}
        </div>

      </div>
    )
  }
}

export default Policies
