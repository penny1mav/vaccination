import { Accordion,Card,Button } from "react-bootstrap";
import React,{Component} from "react";

import { DateTime } from 'react-datetime-bootstrap';

import "./Appoinment.css";



class Appoinment extends Component {
//δημιουργούμε έναν constructor για να μπορέσουμε να περάσουμε τις τιμές στο name, βάζουμε στο Name αρχική τιμή το κενό
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }


  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
//δημιουργούμε ενα Pop up αρχείο για να μας δείξει πως η φόρμα υποβλήθηκε
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
    //μέσω του fetch στελνουμε τα δεδομένα σε site με μέθοδο POST
    fetch('https://us-central1-unipi-aps.cloudfunctions.net/emvolioDate', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}

  render() {
    //δημιουργούμε Input types και κάνοντας submit, περνάμε τις τιμές που έχουμε υποβάλλει

    return (
      <form onSubmit={this.handleSubmit} className="row">
        <div className="col-lg-6" >
        <label  style={{  color:'#097a7a' }} >
        <br/><br/>
         First Name:
          <input type="text" value={this.state.value} name="fname" onChange={this.handleChange} />
        </label>
        </div>
        <div className="col-lg-6">
        <br/><br/>
        <label  style={{  color:'#097a7a' }}>

         Last Name:
          <input type="text" value={this.state.value} name="lname" onChange={this.handleChange} />
        </label>

        </div>
        <div className="col-lg-6">
        <br/><br/>
        <label style={{  color:'#097a7a' }}>
          AMKA:
          <input type="text" value={this.state.value} name="amka" onChange={this.handleChange} />
        </label>

        </div>
        <div className="col-lg-6">
        <br/><br/>
        <label style={{  color:'#097a7a' }}>
          Phone Number:
          <input type="text" value={this.state.value} name="phone" onChange={this.handleChange} />
        </label>
        </div>
        <div className="col-lg-6">
        <br/><br/>
        <label style={{  color:'#097a7a' }}>
          Email:
          <input type="text" value={this.state.value} name="email" onChange={this.handleChange} />
        </label>
        </div>
        <div className="col-lg-5" >
        <br></br>
        <br></br>
        <label className="gender" style={{  color:'#097a7a' }}>
        Gender:
        <br></br>
          <input type="radio" value={this.state.value} name="radio" onChange={this.handleChange} style={{  color:'#097a7a' }} />Male
          <br></br>
          <input type="radio" value={this.state.value} name="radio" className="female" onChange={this.handleChange} style={{  color:'#097a7a' }} />Female
          <br/><br/>
        </label>
        </div>
        <div >
        <h4 style={{  color:'#097a7a' }}>Suggested Date</h4>
        <DateTime value="2021-07-07" className="suggestedDate" /><br></br>
        <input type="checkbox"   />
            Agree
        </div>
        <div >
      <br></br>

          <Accordion defaultActiveKey="0" >
                <Card className="accordition2" >
                    <Card.Header >
                    <Accordion.Toggle as={Button} variant="light" eventKey="1" className="button"  >
                    pick up another date?
                    </Accordion.Toggle>
                    <br></br>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body  style={{  backgroundColor:'#adcadb' }}><h4>Format </h4>
                    <DateTime  pickerOptions={{format:"LL"}} value="2021-06-5"/>
                    <h4>Time Only</h4>
                    <DateTime pickerOptions={{format:"LTS"}}/> </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                </div>
                <br></br>
                <div className="col-lg-12">

        <input type="submit" className="btn btn-success" value="Submit" />
        <br></br>
      </div>
      </form>
    );
  }
}

export default Appoinment;













