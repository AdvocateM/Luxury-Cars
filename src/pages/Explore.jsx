import React from 'react'
import { Link } from 'react-router-dom'
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg"


const Explore = () => {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        {/**Slider */}

        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <p className='exploreCategoryHeading'>Car for rent</p>
            <img src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='rent' className='exploreCategoryImg' />
          </Link>

          <Link to='/category/sales'>
            <p className='exploreCategoryHeading'>Car for Sales</p>
            <img src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='sales' className='exploreCategoryImg' />
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore