import React from 'react';
import style from "./Offer.module.css"
import Image from 'next/image';
import Link from 'next/link';

function Offer() {
  return (
    <div className={style.offer}>

        <div className={style.offerTextDiv}>
        
            <div className={style.text}>
              <div className={style.let1}>
                <div className={style.let}>
                  <h1>EXCLUSIVE</h1>
                </div>
              </div>
              <div>
                <h1 className={style.snow}>OFFER</h1>
              </div>
            </div>

            <div className={style.boxDiv}>

                <div className={style.box}>
                    <h1> 06 <br /> DAYS</h1>
                </div>
                <div className={style.box}> 
                    <h1>17 <br /> HOURS </h1>
                </div>
                <div className={style.box}>
                    <h1>  36 <br /> MINS </h1>
                </div>

            </div>

            <div>
                <Link href="/shop">

                <button>SHOP NOW</button>

                </Link>

            </div>
           
        </div>





        <div className={style.offerImageDiv}>

        <Image
        src="/m1.png"
        alt="m1"
        width={500}
        height={500}
        className={style.offerImage}
        ></Image>

        </div>







    </div>
  )
}

export default Offer
