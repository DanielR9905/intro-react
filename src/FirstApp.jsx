import React from 'react'
import PropTypes from 'prop-types'

export default function FirstApp( {title, subtitle} ) {

  return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
 title: PropTypes.string.isRequired,
 subtitle: PropTypes.number,
}