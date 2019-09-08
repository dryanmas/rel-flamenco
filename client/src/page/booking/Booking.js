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

  reset() {
    this.setState({ name: '', email: '', message: '' });
  }

  displayMessage(type) {
    const ids = {
      success: 'form-success',
      failure: 'form-failure'
    }

    const message = document.getElementById(ids[type]);

    message.style.display = 'block';

    window.setTimeout(() => {
      message.style.display = 'none';
    }, 3000);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const emailInput = this.state;

    fetch(`/api/email`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(emailInput)
    })
    .then(res => {
      if (res.status === 200) {
        this.displayMessage('success');
        this.reset();
      } else {
        this.displayMessage('failure');
      }
    })
    .catch(err => {
      this.failedSubmit();
    });
  }

  render() {
    return (
      <div className="page-contents text-container">
        <p id="booking-description">Robert Earl Longley performs public and private concerts and events in the Southwest and beyond. Please submit the form below regarding booking and other inquiries.</p>

        <div id="form-message">
          <p id="form-success">Your message is on its way.</p>
          <p id="form-failure">Failed to send. Please try again.</p>
        </div>
        <div id="contact-container">
          <form id="contact" onSubmit={this.handleSubmit}>
            <fieldset>
              <input name="name" value={this.state.name} placeholder="Name" type="text" tabIndex="1"  onChange={this.handleChange} required autoFocus />
            </fieldset>
            <fieldset>
              <input name="email" value={this.state.email} placeholder="Email Address" type="email" tabIndex="2" onChange={this.handleChange} required />
            </fieldset>
            <fieldset>
              <textarea name="message" value={this.state.message} placeholder="Type your message here...." tabIndex="3" onChange={this.handleChange} required></textarea>
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