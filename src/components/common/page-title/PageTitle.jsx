import React from 'react'

import './PageTitle.css';
//δημιουργουμε τον τιτλο καθε σελιδας μεσω props
function PageTitle (props) {

  const {title} = props;

  return (
    <section className="title">
      {title}
    </section>
  )

}

export default PageTitle;