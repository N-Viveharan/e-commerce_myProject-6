import React from 'react'
import './Description.css'
function Description() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box ">Description</div>
            <div className="descriptionbox-nav-box fade ">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. 
                It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers
                 and conduct transactions without the need for a physical presence.
                 E-commerce websites have gained immense popularity due to their convenience, accessibility, and global reach. They allow users to shop anytime and from anywhere, 
                 compare prices easily, and access a wide variety of products that may not be available locally.
                 Additionally, e-commerce platforms often provide secure payment options, customer reviews, and personalized recommendations, enhancing the overall shopping experience.</p>

                 <p>E-commerce websites typically display products or services with detailed descriptions, 
                    images, prices, and any available variations (e.g., sizes, colors). 
                    Each product usually has its own dedicated page containing all relevant information.</p>
        </div>
    </div>
  )
}

export default Description