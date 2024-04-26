import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Ans from '../Answer/Ans';
import styles from "../styles/allCSS.module.css";

const Division = () => {
  const router =useRouter()

  let [inputVal1, setInputVal1] = useState();
  let [inputVal2, setInputVal2] = useState();
  let [divideAnswer, setDivideAnswer] = useState();

  let divideHandler = () => {
    event.preventDefault();
    setDivideAnswer(inputVal1/inputVal2)
  }

    let handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      divideHandler();
    }
  }

    let refreshHandler = () => {
    setInputVal1('')
    setInputVal2('')
    setDivideAnswer('')
    document.querySelectorAll('.allCSS_input__ihLp2').forEach(
      input => {
        input.value=''
      }
    )
  }

  return (
    <div className={styles.mainDiv}>

      <h1 className={styles.h1}>Division</h1>

      <form className={styles.form} onSubmit={divideHandler} onKeyDown={handleKeyDown}>

        <input placeholder='Number' className={styles.input} type="number" onChange={(event) => { setInputVal1(parseInt(event.target.value)) }} />

        <input className={styles.sign} value='/' readOnly />
        
        <input placeholder='Number' className={styles.input} type="number" onChange={(event) => { setInputVal2(parseInt(event.target.value)) }} />

        <input className={styles.equal} value="=" type="submit" />

        <Ans ans={divideAnswer} />
        
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

export default Division