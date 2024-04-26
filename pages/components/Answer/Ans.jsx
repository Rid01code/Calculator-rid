import React from 'react';
import styles from "../styles/allCSS.module.css";

const Ans = ({ans}) => {
  return (
    <div className={styles.ans}>{ans}</div>
  )
}

export default Ans