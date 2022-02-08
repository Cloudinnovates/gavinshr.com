import { Component } from "react"
import "./Contact.css"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <div id="contact">
        <hr/>

        <div className="center">
          <h1>Contact</h1>

          <p style={{ paddingTop: "15px" }}>You can email me at <i><u>shrader.gavin@gmail.com</u></i> or submit an inquiry via my contact form:</p>
        </div>

        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="group">
            <label htmlFor="name">Name</label>
            <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="group">
            <label htmlFor="message">Message</label>
            <textarea rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <div className="group-submit">
            <button type="submit" value="Submit" className="button-arrow"><span>Submit </span></button>
          </div>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    fetch('https://gavinshr.com/mail.php', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent. Thank you for contacting me!");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
    .catch((error) => {
      console.log(error)
      alert("Message failed to send.")
    });
  }

  resetForm(){
    this.setState({name: "", email: "", message: ""})
  }
}

export default Contact;
