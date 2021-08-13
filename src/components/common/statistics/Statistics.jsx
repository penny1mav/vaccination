import React from 'react';
import { DateTime } from 'react-datetime-bootstrap';
import {Component} from 'react';
import './Statistics.css'
import { $ }  from 'react-jquery-plugin'

class Statistics extends Component {
  //κρατάει τα δοθέντα values
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //Παιρνουμε τις τιμές του submit
    onSubmit(e)
    {
      e.preventDefault();
      var data = {
        date_from: this.date_from,
        date_to: this.date_to,

      }
      //παιρνουμε τα δεδομένα απο το δοθεν Url
      console.log(data);
      $.ajax({
        url: 'https://data.gov.gr/api/v1/query/mdg_emvolio',
        data: data,
        dataType: 'json',
        //βαζουμε το δικο μας μοναδικο token Που μας ηρθε στο mail απο την εγγραφη
        headers: {
          "Authorization": "Token 0cf8d0d9676922ad34ffa1f14f17a78729ad667b"
        },
        success: function(data) {
          //εμφανιζει τα αποτελεσματα
          alert('Total results found: ' + data.length)
        }
      });
    }


  render () {
    return (
      <form >
      <section className="statistics">
            <br></br><br></br>
            <h2>Choose a Date</h2>
            <br></br><br></br>
            <section className="date">
            <DateTime pickerOptions={{format:"LL"}} value="2021-06-5" ref={(c) => this.date_from = c} name="date_from"  />
            <br></br>
            <DateTime pickerOptions={{format:"LL"}} value="2021-06-21" ref={(c) => this.date_to = c} name="date_to"  />
            </section>
            <br></br> <br></br>
            <div className="col-lg-12  padd-top">
            <button className="btn btn-success" type="button"  onClick={this.onSubmit} >
                Submit
           </button>
        </div>
        </section>
        </form>
    )
  }
}


export default Statistics;