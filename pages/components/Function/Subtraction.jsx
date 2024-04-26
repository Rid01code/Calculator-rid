import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Ans from '../Answer/Ans';
import styles from "../styles/allCSS.module.css";

const Subtraction = () => {
  const router =useRouter()
  let [inputVal1, setInputVal1] = useState();
  let [inputVal2, setInputVal2] = useState();
  let [subtractAnswer, setSubtractAnswer] = useState();

  let subtractionHandler = () => {
    event.preventDefault();
    setSubtractAnswer(inputVal1-inputVal2)
  }

    let handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      subtractionHandler();
    }
  }

    let refreshHandler = () => {
    setInputVal1('')
    setInputVal2('')
    setSubtractAnswer('')
    document.querySelectorAll('.allCSS_input__ihLp2').forEach(
      input => {
        input.value=''
      }
    )
  }

  return (
    <div className={styles.mainDiv}>

      <h1 className={styles.h1}>Subtraction</h1>

      <form className={styles.form} onSubmit={subtractionHandler} onKeyDown={handleKeyDown}>

        <input className={styles.input} type="number" onChange={(event) => { setInputVal1(parseInt(event.target.value)) }} />

        <input className={styles.sign} value='-' readOnly />
        
        <input className={styles.input} type="number" onChange={(event) => { setInputVal2(parseInt(event.target.value)) }} />

        <input className={styles.equal} value="=" type="submit" />

        <Ans ans={ subtractAnswer} />
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

export default Subtraction