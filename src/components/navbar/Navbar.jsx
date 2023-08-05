"use client";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.left}>
            <Link href="/">
              <h4>logo</h4>
            </Link>
          </h2>
          <div className={styles.middle}>
            <Link className={styles.link} href="/">
              <AiFillHome className={styles.icon} />
              <h3>Home</h3>
            </Link>
            <Link className={styles.link} href="/kitaplar">
              <GoTasklist className={styles.icon} />
            </Link>
            <Link className={styles.link} href="/rastgele">
              <IoIosStats className={styles.icon} />
            </Link>
            <Link className={styles.link} href="/rastgele">
              <BsFillPersonFill className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
