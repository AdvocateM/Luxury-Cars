import { getAuth, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'


const Profile = () => {
  const auth = getAuth()
  const [user, setUser] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [listings, setListings] = useState(null)
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    email: auth.currentUser.email,
    name: auth.currentUser.displayName,
  })

  const { name, email } = formData

  const navigate = useNavigate()

  const logout = () => {
    auth.signOut()
    navigate('/')
  }


  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update name in firebase
        await updateProfile(auth.currentUser, {
          displayName: name
        })
        const userRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(userRef, {
          name
        })
      }
    } catch (e) {
      toast.error("Could Not Update profile details")
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  return (
    <div className='profile'>
      <header className='profileHeader'>
        <p className='pageHeader'>My Profile</p>
        <button type="button" onClick={logout} className='logOut'>Logout</button>
      </header>
      <main>
        <div className='profileDetailsHeader'>
          <p className='profileDetailsText'>Personal Details</p>
          <p className='changePersonalDetails' onClick={() => {
            changeDetails && onSubmit()
            setChangeDetails((prevState) => !prevState)
          }}>
            {changeDetails ? 'Done' : 'Change'}</p>
        </div>

        <div className="profileCard">
          <form >
            <input type='text' id='name' className={!changeDetails ? "profileName" : "profileNameActive"} disabled={!changeDetails} value={name} onChange={onChange} />
            <input type='text' id='email' className={!changeDetails ? "profileEmail" : "profileEmailActive"} disabled={!changeDetails} value={email} onChange={onChange} />
          </form>
        </div>

        <Link to='/Create-Listing' className='createListing' ><img src={homeIcon}></img> <p>Sell your Car</p><img src={arrowRight}></img></Link>
      </main>
    </div>
  )
}

export default Profile