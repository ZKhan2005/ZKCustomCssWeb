import React from 'react'
import style from "./Shoptop.module.css"
import Image from "next/image"
import ProductSection from '../product-section/ProductSection'

function Shoptop() {
  return (
    <div className={style.shoptop}>
        
        <div className={style.newArrival}>
          <div>
            <h1>YOUNG&apos;S PRODUCT</h1>
          </div>
          <div className={style.feather}>
            <Image
              src="/feather.png"
              alt="featherImage"
              width={68}
              height={68}
            />
          </div>
        </div>
        <ProductSection/>
    </div>
    
  )
}

export default Shoptop
