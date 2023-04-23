import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import google from '../assets/svg/googleIcon.svg'
import { async } from '@firebase/util'

const OAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check for User
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      // if user, doesn't exit, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          password: user.password,
          timestamp: serverTimestamp()
        })
        navigate('/')
      }
    } catch (error) {
      toast.error("Could not authorize with Google")
    }
  }

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign_in' ? "up" : "in"} with</p>
      <button onClick={onGoogleClick} className='socialIcon div'>
        <img className='socialIconImg' src={google} alt='google' />
      </button>
    </div>
  )
}

export default OAuth