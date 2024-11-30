"use client";
import React from "react";
import style from "./Navbar.module.css";
import { IoIosMenu } from "react-icons/io";
import { islandMoments, istokWeb } from "@/font";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const showFunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={style.nav}>
        <div className={style.logo}>
          <Image src="/mylogo.png" alt="Image" width={80} height={80} />
          <h1 className={islandMoments.className}>FlexureFit.</h1>
        </div>

        <AnimatePresence>
        {isOpen == true ?(
          <motion.div className={`${style.links} ${style.adjust}`}
          
          key={"adjust"}
          initial={{opacity:0, width:0}} 
          animate={{opacity:1, width:"50%"}}
          exit={{opacity:0, width:0}} 
          transition={{duration:2, type:"spring"}}
          
          
          
          >
          
          <ul>
            <li>
              <Link href={"/"} className={istokWeb.className}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/shop"} className={istokWeb.className}>
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/features"} className={istokWeb.className}>
                Features
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className={istokWeb.className}>
                Contact
              </Link>
            </li>
          </ul>
        
        
          <button>SIGN UP</button>
        
      </motion.div>
        )
      :
      (<div className={`${style.links}`}>
          
        <ul>
          <li>
            <Link href={"/"} className={istokWeb.className}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/shop"} className={istokWeb.className}>
              Shop
            </Link>
          </li>
          <li>
            <Link href={"/features"} className={istokWeb.className}>
              Features
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className={istokWeb.className}>
              Contact
            </Link>
          </li>
        </ul>
      
      
        <button>SIGN UP</button>
      
    </div>)}
    </AnimatePresence>
        <IoIosMenu size={40} className={style.menu} onClick={showFunc} />
      </nav>
    </div>
  );
}

export default Navbar;
