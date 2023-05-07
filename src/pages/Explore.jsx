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
            <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/436327413.jpg?k=e61190b16650cdfd58796f04b71cfd75f81b74622ba5e51fdbb7014778854976&o=&hp=1' alt='rent' className='exploreCategoryImg' />
          </Link>

          <Link to='/category/sales'>
            <p className='exploreCategoryHeading'>Car for Sales</p>
            <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/223275789.jpg?k=3a70489f8c4c84887435c8cecfc3b6df5f5ad29a839c3851005cf3d581344f7c&o=&hp=1' alt='sales' className='exploreCategoryImg' />
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore