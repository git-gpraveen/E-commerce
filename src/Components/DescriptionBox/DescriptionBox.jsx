import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.</p>
        <p>
        One of the obvious differences between an eCommerce website and an ordinary business or company website is in the features that it supports. A company website may just house information on the brands products and services so users will need to contact the company directly if they want to do business with them
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
