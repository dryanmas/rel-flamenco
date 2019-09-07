import React from 'react';

import './Booking.css';

class Booking extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="page-contents text-container">
        <p id="booking-description">Robert Earl Longley performs public and private concerts and events in the Southwest and beyond. Please submit the form below regarding booking and other inquiries.</p>

        <div id="contact-container">
          <form id="contact" onSubmit={this.handleSubmit}>
            <fieldset>
              <input name="name" placeholder="Name" type="text" tabindex="1"  onChange={this.handleChange} required autofocus />
            </fieldset>
            <fieldset>
              <input name="email" placeholder="Email Address" type="email" tabindex="2" onChange={this.handleChange} required />
            </fieldset>
            <fieldset>
              <textarea name="message" placeholder="Type your message here...." tabindex="5" onChange={this.handleChange} required></textarea>
            </fieldset>
            <fieldset>
              <div id="button-container">
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">SUBMIT</button>
              </div>
            </fieldset>
          </form>

          <div id="testimonials">
              <p className="testimonial">“The house concert Robert Longley played here was followed by one of the biggest and most enthusiastic standing ovations we've seen!" <i>Russ & Julie's House Concert Series, Moorpark, Ca</i>
            </p>
              
          <p className="testimonial">
              “After watching over 400 individuals, Mr. Longley is the only one with such pure originality and mastery on the guitar.  I can’t get tired of him.  I truly believe he is god-like on that instrument.”  <i>Bob Guess Theater, Santee, Ca</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking