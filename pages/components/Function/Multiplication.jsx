import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Ans from '../Answer/Ans';
import styles from "../styles/allCSS.module.css";

const Multiplication = () => {

  let [inputVal1, setInputVal1] = useState();
  let [inputVal2, setInputVal2] = useState();
  let [multiplyAnswer, setMultiplyAnswer] = useState();
    const router =useRouter()

  let multiplyHandler = () => {
    event.preventDefault();
    setMultiplyAnswer(inputVal1*inputVal2)
  }
  
    let handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      multiplyHandler();
    }
  }

  let refreshHandler = () => {
    setInputVal1('')
    setInputVal2('')
    setMultiplyAnswer('')
    document.querySelectorAll('.allCSS_input__ihLp2').forEach(
      input => {
        input.value=''
      }
    )
  }

  return (
    <div className={styles.mainDiv}>

      <h1 className={styles.h1}>Multiplication</h1>

      <form className={styles.form} onSubmit={multiplyHandler} onKeyDown={handleKeyDown}>

        <input placeholder='Number 1' className={styles.input} type="number" onChange={(event) => { setInputVal1(parseInt(event.target.value)) }} />

        <input className={styles.sign} value='x' readOnly />
        
        <input placeholder='Number 2' className={styles.input} type="number" onChange={(event) => { setInputVal2(parseInt(event.target.value)) }} />

        <div className={styles.ansDiv}>
          <input className={styles.equal} type='submit' value="=" />
          <div className={styles.ansBox}><Ans ans={multiplyAnswer} /></div>
        </div>
        
      </form>

      <button className={styles.refresh} onClick={()=>{refreshHandler()}}>
        ↻
      </button>

      <button onClick={()=>{router.push('/')}} className={styles.backButton}>
        ←Back
      </button>

    </div>
  )
}

export default Multiplication