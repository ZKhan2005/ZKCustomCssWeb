import React from "react";
import style from "./Herosection.module.css";

import Image from "next/image";
import Link from "next/link";

function Herosection() {
  return (
    <div>
      <section className={style.hero}>
        <div className={style.container}>
          <div className={style.leftcontent}>
            <div className={style.line}>
              <div className={style.let}>
                <div className={style.let1}>
                  <h1>LET&apos;S</h1>
                </div>
              </div>
              <div>
                <h1>EXPLORE</h1>
              </div>
              <div className={style.unique}>
                <div className={style.unique1}>
                  <h1>UNIQUE</h1>
                </div>
              </div>
              <div>
                <h1>CLOTHES.</h1>
              </div>
            </div>
            <div className={style.paraBtn}>
            <div className={style.para}>
              <p>Live for influential and innovation fashion</p>
            </div>
            <div className={style.btn}>
            <Link href="/shop">
              <button>SHOP NOW</button>
              </Link>
            </div>
            </div>
          </div>
          <div className={style.rightcontent}>
            <Image
              src="/mainImage.png"
              alt="mainImage"
              width={504}
              height={550}
              priority
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
        </div>
        <div className={style.bottom}>
          
          <div >
            <Image src="/hm.png" alt="hm" width={100} height={72} className={style.hm}/>
          </div>
            
          <div>
            <Image src="/obey.png" alt="hm" width={112} height={39}  className={style.obey} />
          </div>
          
          <div >
            <Image src="/shopify.png" alt="hm" width={148} height={44}  className={style.shopify}/>
          </div>
            
          <div >
            <Image src="/lacost.png" alt="hm" width={110} height={140}  className={style.lacoste}/>
          </div>

          <div >
            <Image src="/levi.png" alt="hm" width={98} height={43}  className={style.levi}/>
          </div>

          <div >
            <Image src="/amazon.png" alt="hm" width={119} height={36}  className={style.amazon}/>
          </div>
            

        </div>
      </section>
    </div>
  );
}

export default Herosection;
