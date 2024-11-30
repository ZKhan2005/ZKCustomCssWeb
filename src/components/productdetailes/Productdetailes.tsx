"use client";

import React from "react";
import style from "./Productdetailes.module.css";
import Image from "next/image";
import { cardData } from "@/constant/card";

export default function Productdetailes(props: { cardId: number }) {
  const data = cardData.find((item) => {
    return item.id == props.cardId;
  });
  const [addToCart, setAddToCart] = React.useState<number>(1);

  function handleAddToCart() {
    
    setAddToCart(addToCart + 1);
  }

  function handleDecreaseFromCart() {
    if (addToCart > 0) {
      setAddToCart(addToCart - 1);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setAddToCart(value);
    }
  }

  return (
    <div>
      <section className={style.product}>
        <div
          className={style.imageDiv}
          style={{ backgroundColor: data?.backgroundColor }}
        >
          <Image
            src={data!.img}
            alt="models"
            width={300}
            height={400}
            className={style.img}
          />
        </div>

        <div className={style.content}>
          <h1>{data?.title}</h1>

          <p>{data?.price}</p>

          <div className={style.cartDiv}>
            <input
              type="number"
              min={0}
              max={100}
              value={addToCart}
              onChange={handleInputChange}
            ></input>
            <div className={style.smallBtn}>
            <button>Add To Cart</button>

            <div className={style.miniBtn}></div>
              <button style={{backgroundColor:"white",width:"50px",height:"50px",border:"1px solid #E6C744"}} onClick={handleAddToCart}>+</button>
                
                <button  style={{backgroundColor:"white",width:"50px",height:"50px",border:"1px solid #E6C744"}} onClick={handleDecreaseFromCart} disabled={addToCart <= 0}>-</button> 
            </div>
          </div>

          <p style={{ fontSize: "20px" }}>Product Detailes:</p>
          <p style={{ fontSize: "15px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor.
          </p>
        </div>
      </section>
    </div>
  );
}
