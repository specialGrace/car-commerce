import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios'
//  import {Link} from 'react-router-dom'
import styles from '../Signup/Signup.module.css'



const Signup = () => {
      const [inputState, setInputState] = useState({
        fullName: "",
        email: "",
        number: "",
        password: "",
        confirmPassword: "",
      });
    
   const [state, setState] = useState("");
   console.log(state);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };
  useEffect(() => {
    // checkValidation();
  }, [inputState]);

  const submitHandler = (e) => {
    e.preventDefault();
// fetchData();
    setInputState("");
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.name}>
          <h5 className={styles.text}>Fullname</h5>
          <input
            type="text"
            name="fullName"
            value={inputState.fullName}
            placeholder="fullname"
            onChange={(e) => changeHandler(e)}
            className={styles.input}
          />
        </div>

        <div className={styles.email}>
          <h5 className={styles.text}>Email Address</h5>
          <input
            type="email"
            name="email"
            value={inputState.email}
            placeholder="Email Address"
            onChange={(e) => changeHandler(e)}
            className={styles.input}
          />
          {/* {inputValidation.email && <p>{inputValidation.email}</p>} */}
        </div>

        <div className={styles.number}>
          <h5 className={styles.text}>Mobile Number</h5>
          <input
            type="number"
            name="number"
            value={inputState.number}
            placeholder="Mobile Number"
            onChange={(e) => changeHandler(e)}
            className={styles.input}
          />
          {/* {inputValidation.number && <p>{inputValidation.number}</p>} */}
        </div>

        <div className={styles.password}>
          <h5 className={styles.text}>Password</h5>
          <input
            type="password"
            name="password"
            value={inputState.password}
            placeholder="Password"
            onChange={(e) => changeHandler(e)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.confirmPassword}>
          <h5 className={styles.text}>Confirm Password</h5>
          <input
            type="password"
            name="confirmPassword"
            value={inputState.confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => changeHandler(e)}
            required
            className={styles.input}
          />
        </div>

        <p className={styles.termsConditions}>
          Agree To The{" "}
          <Link to="/terms" className={styles.terms}>
            Terms
          </Link>
          And
          <Link to="/conditions" className={styles.conditions}>
            Conditions
          </Link>
        </p>
        <button
          type="submit"
          className={styles.formBtn}
          onSubmit={submitHandler}
        >
          <Link to='/dashboard' className={styles.signupLink} >Agree & Sign Up</Link>
        </button>
        <span className={styles.formInputsignup}>
          <p>Already have an account? Login</p>
          <Link className={styles.signupLink} to="/signup">
            here
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Signup