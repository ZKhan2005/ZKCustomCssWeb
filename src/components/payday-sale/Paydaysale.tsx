import React from 'react'
import style from './Paydaysale.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Paydaysale() {
  return (
    <div>
        <div className={style.sale}>
          <div className={style.saleImageDiv}>
            <Image
              src="/payday.png"
              alt="yellowModel"
              width={708}
              height={580}
              className={style.saleImage}
            />
            <div className={style.star1}>
              <Image src="/star.png" alt="star" width={35} height={30} />
            </div>
            <div className={style.star2}>
              <Image src="/star.png" alt="star" width={35} height={30} />
            </div>
            <div className={style.star3}>
              <Image src="/star.png" alt="star" width={35} height={30} />
            </div>
            <div className={style.star4}>
              <Image src="/star.png" alt="star" width={35} height={30} />
            </div>
          </div>

          <div className={style.saleTextDiv}>
            <div className={style.text}>
              <div className={style.let1}>
                <div className={style.let}>
                  <h1>PAYDAY</h1>
                </div>
              </div>
              <div className={style.let2}>
                <h1 className={style.snow}>SALE NOW</h1>
              </div>
            </div>
            <div className={style.saleParaDiv}>
              <div className={style.salePara}>
                <p className={style.para1}>
                  Spend minimal $100 get 30% off <br />
                  voucher code for your next purchase
                </p>

                <p className={style.para2}>22 Dec - 31 Dec 2024</p>

                <p>*Terms and conditions applied</p>
              </div>
              <div className={style.btn}>
                <Link href="/shop">
                <button>SHOP NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Paydaysale