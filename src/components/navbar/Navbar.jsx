"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

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
            <Link
              className={`${styles.link} ${
                activeButton === "home" ? styles.active : ""
              }`}
              href="/"
              onClick={() => handleButtonClick("home")}
            >
              <AiFillHome className={styles.icon} />
              <h3>Home</h3>
            </Link>
            <Link
              className={`${styles.link} ${
                activeButton === "task" ? styles.active : ""
              }`}
              href="/task"
              onClick={() => handleButtonClick("task")}
            >
              <GoTasklist className={styles.icon} />
              <h3>Task</h3>
            </Link>
            <Link
              className={`${styles.link} ${
                activeButton === "stats" ? styles.active : ""
              }`}
              href="/stats"
              onClick={() => handleButtonClick("stats")}
            >
              <IoIosStats className={styles.icon} />
              <h3>Stats</h3>
            </Link>
            <Link
              className={`${styles.link} ${
                activeButton === "profile" ? styles.active : ""
              }`}
              href="/productedRoute"
              onClick={() => handleButtonClick("profile")}
            >
              <BsFillPersonFill className={styles.icon} />
              <h3>Profile</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
