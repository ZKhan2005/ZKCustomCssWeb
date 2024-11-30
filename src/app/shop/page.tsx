"use client";

import React from "react";
import style from "./Shop.module.css";
import Image from "next/image";
import Shoptop from "@/components/shopTop/Shoptop";
import Bestselling from "@/components/best-selling/Bestselling";

function Shop() {
 

  return (
    <div>
      <section className={style.shop}>


      

        <div className={style.newArrival}>
          <div>
            <h1>NEW ARRIVALS</h1>
          </div>
          <div className={style.feather}>
            <Image
              src="/feather.png"
              alt="featherImage"
              width={68}
              height={68}
            />
          </div>
          <div className={style.board}>
            <Image src="/board.png" alt="boardImage" width={93} height={93} />
          </div>
        </div>


        <Bestselling/>
        
        <Shoptop/>
        
        
      </section>
    </div>
  );
}

export default Shop;
