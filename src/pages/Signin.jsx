import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibleIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../Components/OAuth'


const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)
  // const [email, SetEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [formData, SetForm] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    SetForm((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      if (userCredential.user) {
        navigate('/')
        console.log('Successfully logged in your profile')
      }

    } catch (error) {
      toast.error('User Not Found..')
    }
  }

  return (
    <div>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input type='email' className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />

            <div className='passwordInputDiv'>
              <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Passwords' id='password' value={password} onChange={onChange} />
              <img src={visibleIcon} alt='show password' className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>

            <Link to='/forgot_password' className='forgotPasswordLink' >Forgot Passwords</Link>

            <div className='signInBar'>
              <p className='signInText'>Sign In</p>
              <button className='signInButton'><ArrowRight fill='#ffffff' width='34px' height='34px' /></button>
            </div>
          </form>

          <OAuth />
          <Link to='/sign_up' className='registerLink'>Sign Up Instead</Link>
        </main>
      </div>
    </div>
  )
}

export default Signin