import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updatePasswordProfile, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRight } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibleIcon from '../assets/svg/visibilityIcon.svg'
import { serverTimestamp, setDoc, doc } from 'firebase/firestore'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  // const [email, SetEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [formData, SetForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { name, email, password } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    SetForm((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name
      })

      const formDataCopy = { ...formData }
      // delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      console.log('user profile added')

      navigate('/')
    } catch (error) {
      toast.error('Something Went Wrong...')
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
            <input type='text' className='nameInput' placeholder='Enter Full Name' id='name' value={name} onChange={onChange} />
            <input type='email' className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />

            <div className='passwordInputDiv'>
              <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Passwords' id='password' value={password} onChange={onChange} />
              <img src={visibleIcon} alt='show password' className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>

            <Link to='/forgot_password' className='forgotPasswordLink' >Forgot Passwords</Link>

            <div className='signUpBar'>
              <p className='signUpText'>Sign Up</p>
              <button className='signUpButton'><ArrowRight fill='#ffffff' width='34px' height='34px' /></button>
            </div>
          </form>

          {/*Google OAuth */}
          <Link to='/sign_in' className='registerLink'>Sign In Instead</Link>
        </main>
      </div>
    </div>
  )
}

export default Signup