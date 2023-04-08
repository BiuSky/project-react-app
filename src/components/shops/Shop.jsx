import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import "./button"
import "./todolist"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Mobile Phones</h2>
              </div>
              <div>
              <button type="button" className="my-button" onClick={() => console.log('Button clicked')}>
                ADD
              </button>
              </div>
              <div>
              <button type="button" className="my-button" onClick={() => console.log('Button clicked')}>
                EDIT
              </button>
              </div>
              <div>
              <button type="button" className="my-button" onClick={() => console.log('Button clicked')}>
                DELETE
              </button>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
