import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageTitle,Home,News,Faq,Appoinment,Statistics,Contact } from './components/common'

import './App.css';

function App() {
  return (
    //το route path μας ανακατευθύνει σε διαφορετικές σελίδες και το pagetitle μας βάζει τιτλο σε κάθε σελίδα
    //καθε μία απο αυτές τις σελίδες έχει τον δικό της φάκελο με το Jsx το css κάθως και ενα index.js
    <div className="App">

      <Header />
          <Switch>

            <Route path="/news">
              <br></br><PageTitle title="news" />
              <News />
            </Route>
            <Route path="/faq">
              <PageTitle title="faq"/>
              <Faq />
            </Route>
            <Route path="/appoinment">
              <PageTitle title="appointment"/>
              <Appoinment />
            </Route>
            <Route path="/statistics">
              <PageTitle title="statistics"/>
              <Statistics />
            </Route>
            <Route path="/contact">
              <PageTitle title="contact Us"/>
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
      <Footer />
    </div>
  );
}

export default App;