import Image from "next/image";
import React from "react";
import styles from "./login.module.css";
import loginImage from "../../../public/login-screen.png";
import Button from "@/components/button/Button";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <Image src={loginImage} width="121" height="94" />
        <h5>For free, join now and start learning</h5>
      </div>
      <div className={styles.input}>
        <div className={styles.inputBox}>
          <p>Email Address</p>
          <input type="email" placeholder="email address" />
        </div>
        <div className={styles.inputBox}>
          <p>Password</p>
          <input type="password" placeholder="password" />
        </div>
        <Link className={styles.link} href="#">
          Forgot Password
        </Link>
      </div>
      <Button text="Login" />
      <div className={styles.down}>
        <p>Not you member?</p>
        <Link className={styles.singupButton} href="/register">
          Singup
        </Link>
      </div>
    </div>
  );
};

export default Login;
