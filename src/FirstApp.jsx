import React from 'react'
import PropTypes from 'prop-types'

export default function FirstApp( {title, subtitle , name} ) {

  return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <p>{name}</p>
    </>
  )
}
FirstApp.defaultProps = {
  title: 'No hay titulo, Agregalo!',
  subtitle: 'No hay contenido, Agregalo!',
  name: 'Daniel Ramirez',
}

FirstApp.propTypes = {
 title: PropTypes.string.isRequired,
 subtitle: PropTypes.string,
}
