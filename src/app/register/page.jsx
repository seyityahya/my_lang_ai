import React from "react";
import styles from "./register.module.css";
import Button from "@/components/button/Button";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <h5>Create an Account</h5>
      </div>
      <div className={styles.input}>
        <div className={styles.inputBox}>
          <p>Name</p>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className={styles.inputBox}>
          <p>Email Address</p>
          <input type="email" placeholder="Email Adress" />
        </div>
        <div className={styles.inputBox}>
          <p>Password</p>
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.inputBox}>
          <p>Confirm Password</p>
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <Button text="Singup" />
      <div className={styles.down}>
        <p>Already you member?</p>
        <Link className={styles.singupButton} href="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
