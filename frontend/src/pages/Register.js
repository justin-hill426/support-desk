import React from 'react'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {toast} from 'react/toastify'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const {name, email, password, password2} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match')
    }
  }



  return (
    <>
      <section className="heading">
        <h1>
          <FaUser/> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input name='name' type="text" id='name' value={name} onChange={onChange} placeholder="Enter your name" className="form-control" />
          </div>
          <div className="form-group">
            <input name='email' type="email" id='email' value={email} onChange={onChange} placeholder="Enter your email" className="form-control" />
          </div>
          <div className="form-group">
            <input name='password' type="password" id='password' value={password} onChange={onChange} placeholder="Enter your password" className="form-control" />
          </div>
          <div className="form-group">
            <input name='password2' type="password" id='password2' value={password2} onChange={onChange} placeholder="Confirm your password" className="form-control" />
          </div>
          <div className="form-group">
            <button className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register