import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDoc, query, where, orderBy, limit, startAfter, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from "../Components/Spinner"
// import { async } from '@firebase/util'


const Category = () => {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(() => {
    const fetchListing = async () => {
      try {
        // Get Reference
        const listingRef = collection(db, 'listing')

        // Create Query
        const q = query(listingRef, where('type', '==', params.categoryName),
          orderBy('timestamp', 'desc'), limit(10))

        //  Execute Query
        const querySnap = await getDocs(q)

        let listing = []

        querySnap.forEach((doc) => {
          console.log(doc.data())
          return listing.push({
            id: doc.id,
            data: doc.data()
          })

          setListing(listing)
        })
      } catch (error) {
        toast.error('Could Not Fetch Listing')
      }
    }
  })

  return (
    <div className='category'>
      <header>
        <p className='pageHeader'>
          {params.categoryName == 'rent' ? 'Place for rent' : 'Place for sales'}
        </p>
      </header>

      {loading ? <Spinner /> : listing && listing.length > 0 ? (
        <div></div>) : (<p>No Listing for {params.categoryName}</p>)
      }
    </div>
  )
}


export default Category