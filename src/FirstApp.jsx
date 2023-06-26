import React from 'react'

const newMesagge = {
  message: 'Hola mundo',
  name: 'Daniel'
};

export default function FirstApp( message, name) {

  return (
    <>
    <h1>{ newMesagge.name }</h1>
    <p>{newMesagge.message}</p>
    </>
  )
}
