"use client"


import React, { useEffect } from 'react'
import style from './Bestselling.module.css'
import useEmblaCarousel from "embla-carousel-react";
import { cardData } from "@/constant/card";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import { poppins } from "@/font";

function Bestselling() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000,stopOnMouseEnter:true,stopOnInteraction: false })
      ]);
    
      useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()); // Access API
        }
      }, [emblaApi]);



  return (
    <div>

<div className={style.embla} ref={emblaRef}>
          <div className={style.embla__container}>
            {cardData.map((data) => {
              return (
                <div className={style.embla__slide} key={data.id}>
                  <div
                    className={style.imgDiv}
                    style={{ backgroundColor: data.backgroundColor }}
                  >
                    <Image
                      src={data.img}
                      alt={"model1"}
                      width={224}
                      height={381}
                      className={style.cardImg}
                    />
                  </div>

                  <div
                    className={style.cardText}
                    style={{ fontFamily: poppins.style.fontFamily }}
                  >
                    <h3>{data.title}</h3>
                    <p>Explore Now!</p>
                    <Image
                      src="/arrowF.png"
                      alt="arrow"
                      width={50}
                      height={0}
                      className={style.arrow}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>






    </div>
  )
}

export default Bestselling