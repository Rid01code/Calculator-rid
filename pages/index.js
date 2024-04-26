import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import styles from "./components/styles/allCSS.module.css"
import { useState } from "react";


// const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  let [isHovering, setIsHovering] = useState([false, false, false, false]);
  
  const handleMouseEnter = (index) => {
    const newHovering = [...isHovering];
    newHovering[index] = true;
    setIsHovering(newHovering)
  }

  const handleMouseOut = (index) => {
    const newHovering = [...isHovering];
    newHovering[index] = false;
    setIsHovering(newHovering)
  }

  const router = useRouter();

  return (<div className="w-full h-screen flex flex-col items-center justify-evenly">
    <button className={`${styles.button} ${isHovering[0] ? 'bg-blue-600' : 'bg-blue-400'}`}
      onClick={() => { router.push('./components/Function/Addition') }}
      onMouseEnter={() => handleMouseEnter(0)}
      onMouseLeave={() => handleMouseOut(0)}
      style={{ transition: "all 0.3s ease" }}>
      {isHovering[0] ? "Go to Addition" : "Addition"}
    </button>
    
    <button className={`${styles.button} ${isHovering[1] ? 'bg-green-600' : 'bg-green-400'}`}
      onClick={() => { router.push('./components/Function/Multiplication') }}
      onMouseEnter={() => handleMouseEnter(1)}
      onMouseLeave={() => handleMouseOut(1)} 
      style={{ transition: "all 0.3s ease" }}>
      {isHovering[1] ? "Go to Multiplication" : "Multiplication"}
    </button>
    
    <button className={`${styles.button} ${isHovering[2] ? 'bg-red-600' : 'bg-red-400'}`}
      onClick={() => { router.push('./components/Function/Subtraction') }} 
      onMouseEnter={() => handleMouseEnter(2)}
      onMouseLeave={() => handleMouseOut(2)} 
      style={{ transition: "all 0.3s ease" }}>
      {isHovering[2] ? "Go to Subtraction" : "Subtraction"}
    </button>
    
    <button className={`${styles.button} ${isHovering[3] ? 'bg-gray-600' : 'bg-gray-400'}`}
      onClick={() => { router.push('./components/Function/Division') }}
      onMouseEnter={() => handleMouseEnter(3)}
      onMouseLeave={() => handleMouseOut(3)}
      style={{ transition: "all 0.3s ease" }}>
      {isHovering[3] ? "Go to Division" : "Division"}
    </button>
  </div>);
}
