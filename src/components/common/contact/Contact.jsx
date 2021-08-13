import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    //περναμε τα input fields
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      textarea:"",
      errors: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//αν εχει error το event δεν συνεχίζει
  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  handleInputChange(event) {
    var key = event.target.name;
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();

    //VALIDATE
    var errors = [];

    //firstname
    if (this.state.firstname === "") {
      errors.push("firstname");
    }
    //lastname
    if (this.state.lastname === "") {
        errors.push("lastname");
      }
    //email
    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(this.state.email).toLowerCase());

    if (!validEmail) {
      errors.push("email");
    }
    // στην περίπτωση που οι χαρακτήρες είναι <= 10 δεν γίνεται το submit
    if (this.state.textarea === "" || this.state.textarea.length<=10) {
        errors.push("textarea");
      }
    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      return false;
    } else {
      alert("form submited!");
    }
  }
//φτιάχνουμε τα Input types στην περίπτωση που δεν είναι συμπλήρωμένα θα εμφανιστεί ενα κοκκινο θαυμαστικό σε κάθε field
  render() {
    return (

      <form className="row">

        <div className="col-lg-6">
        <br></br> <br></br>
          <label htmlFor="firstname" style={{  color:'#097a7a' }}>First Name</label>
          <input
            autoComplete="off"
            className={
              this.hasError("firstname")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleInputChange}
          />

        </div>
        <div className="col-lg-6">
        <br></br> <br></br>
          <label htmlFor="lastname" style={{  color:'#097a7a' }}>Last Name</label>
          <input
            autoComplete="off"
            className={
              this.hasError("lastname")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleInputChange}
          />

        </div>
        <div className="col-lg-6">
          <label htmlFor="email" style={{  color:'#097a7a' }}>Email</label>
          <input
            autoComplete="off"
            className={
              this.hasError("email")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

        </div>
        <br></br>
        <div className="col-lg-12 " >
          <br></br>
          <label htmlFor="textarea" style={{  color:'#097a7a' }}>Text Area</label>
          <textarea rows="8"
            autoComplete="off"
            className={
              this.hasError("text area")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="textarea"
            value={this.state.textarea}
            onChange={this.handleInputChange}
          />
          <div
            className={this.hasError("textarea") ? "inline-errormsg" : "hidden"}
          >

            <br></br>
          </div>
        </div>
            <br></br>
        <div className="col-lg-12 ">
          <button className="btn btn-success" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>

      </form>
    );
  }
}

export default Contact;
