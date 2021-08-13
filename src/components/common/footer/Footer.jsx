import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />

      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
          Καραολή και Δημητρίου 80, Πειραιάς 185 34
          </section>
          <section className="footer-info__returns">
           21 0414 2000

          </section>

        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">

          </section>

          <section className="footer-info__terms">
           vaccination.info@unipi.gr   <br></br> World Health Organization


          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">

          Terms and Conditions
            <br />
            Copyright © 2021
          </section>



        </section>

      </section>
      <hr className="footer-seperator" />

    </section>
  )

}

export default Footer;