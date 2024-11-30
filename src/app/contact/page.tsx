import styles from "./Contact.module.css";

import React from 'react'

export default function Contact() {
  return (
    <div className={styles.contactDivMain}>
        <div className={styles.contactDiv}>


          <h1 className={styles.h1}>
            JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
          </h1>

          <p className={styles.p}>Type your email down below and become a young wild generation</p>
            <div>
          <input type="email" placeholder="Add your email here"/>
          <button>SEND</button>

            </div>

       </div>





    </div>
  )
}
