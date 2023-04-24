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
            <p className='exploreCategoryHeading'>Places for rent</p>
            <img src={rentCategoryImage} alt='rent' className='exploreCategoryImg' />
          </Link>

          <Link to='/category/sales'>
            <p className='exploreCategoryHeading'>Places for Sales</p>
            <img src={sellCategoryImage} alt='sales' className='exploreCategoryImg' />
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore