import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Ans from '../Answer/Ans';
import styles from '../styles/allCSS.module.css'

const Addition = () => {

  let [inputVal1, setInputVal1] = useState();
  let [inputVal2, setInputVal2] = useState();
  let [addAnswer, setAddAnswer] = useState("");
  
  const router =useRouter()

  let addHandler = () => {
    event.preventDefault()
    setAddAnswer(inputVal1 + inputVal2);
  }
  let handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      addHandler();
    }
  }

      let refreshHandler = () => {
    setInputVal1('')
    setInputVal2('')
    setAddAnswer('')
    document.querySelectorAll('.allCSS_input__ihLp2').forEach(
      input => {
        input.value=''
      }
    )
  }

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h1}>Addition</h1>

      <form onSubmit={addHandler} onKeyDown={handleKeyDown} className={styles.form}>

        <input placeholder='Number 1' onChange={(event) => { setInputVal1(parseInt(event.target.value)) }} className={styles.input} type='number'  />

        <input className={styles.sign} value='+' readOnly/>

        <input placeholder='Number 2' onChange={(event) => { setInputVal2(parseInt(event.target.value)) }} className={styles.input} type='number' />

        <div className={styles.ansDiv}>
          <input className={styles.equal} type='submit' value="=" />
          <div className={styles.ansBox}><Ans ans={addAnswer} /></div>
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

export default Addition