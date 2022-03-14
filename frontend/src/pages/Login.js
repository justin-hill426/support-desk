import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt/> Login
        </h1>
        <p>Please login to get support</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input name='email' type="email" id='email' value={email} onChange={onChange} placeholder="Enter your email" className="form-control" required/>
          </div>
          <div className="form-group">
            <input name='password' type="password" id='password' value={password} onChange={onChange} placeholder="Enter your password" className="form-control" required/>
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

export default Login