import React from 'react'
import './formInput.css'

const FormInput = (props) => {
  return (
    <div className='formInput'>
        <input placeholder= {props.placeholder} onChange={e=>props.Username(e.target.value)} />
    </div>
  )
}

export default FormInput