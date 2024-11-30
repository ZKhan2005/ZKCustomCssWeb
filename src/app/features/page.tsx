import React from "react";
import style from "./Features.module.css";
import Image from "next/image";
import { poppins } from '@/font';
import Paydaysale from "@/components/payday-sale/Paydaysale";

function Features() {
  return (
    <div>
      <section className={style.features}>
        <div className={style.container}>
          <div className={style.youngsFavourite}>
            <div>
              <h1>YOUNG&apos;S FAVOURITE</h1>
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

          <div className={style.card}>

            <div className={style.card1}>
                    <div className={style.card1Image}>
                        <Image
                            src="/card1.png"
                            alt="card1Imag"
                            width={554}
                            height={382}
                        
                        />
                    </div>
                    <div className={style.content} style={{ fontFamily: poppins.style.fontFamily }}>
                        <h3>Trending on Instagam</h3>
                        <p>Explore Now!</p>
                        <Image src="/arrowF.png" alt="arrow" width={123} height={20} className={style.arrow}/>
                    </div>

            </div>
            <div className={style.card2}>
                    <div className={style.card1Image}>
                        <Image
                            src="/card2.png"
                            alt="cardImage"
                            width={554}
                            height={382}
                        
                        />
                    </div>
                    <div className={style.content} style={{ fontFamily: poppins.style.fontFamily }}>
                        <h3>All under $40</h3>
                        <p>Explore Now!</p>
                        <Image src="/arrowF.png" alt="arrow" width={123} height={20} className={style.arrow}/>
                    </div>

            </div>
          </div>
        </div>

        <Paydaysale/>
        
      </section>
    </div>
  );
}

export default Features;
