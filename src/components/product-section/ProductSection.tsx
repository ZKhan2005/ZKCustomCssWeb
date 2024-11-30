import React from "react";
import style from "./ProductSection.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { cardData } from "@/constant/card";
import Link from "next/link";

function ProductSection() {
  return (
    <div className={style.product}>
      {cardData.map((item) => {
        return (
          <Link href={`/shop/${item.id}`} key={item.id}> {/* Key prop moved here */}
            <div className={style.card}>
              <div
                className={style.topImage}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <Image
                  src={item.img}
                  alt="models"
                  width={224}
                  height={350}
                  className={style.image}
                />
              </div>
              <div className={style.bottomDiv}>
                <div className={style.star}>
                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar
                      color="yellow"
                      size={25}
                      style={{ color: "#FFD700" }}
                      key={index}
                    />
                  ))}
                </div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductSection;
