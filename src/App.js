import './App.css';
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import face from './Tanu.jpg'
import jsonData from './info.json'
import BoxData from './BoxData'

function App() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0.5, 1],
)
  const opacityTwo = useTransform(
    scrollYProgress,
    [1, 0.25, 0],
    [0, 0.75, 1],
  )

  return (
    <div ref={ref}>
      <motion.div style={{y: textY, opacity: opacityTwo}} className="App">
        <img src={face} style={{height:'45%', borderRadius:'50%', overflow:'hidden'}}></img>
        <h1 style={{fontSize:'60px', marginBottom:'0.5em'}}>
          Hi. My name is Tanusri Harish.
          </h1>
        <p 
          style=
            {{marginTop:'0', 
            paddingLeft:'25%', 
            paddingRight:'25%', 
            textAlign:'center', 
            fontSize:'20px'}}> 
              I am a Computer Science and Biology Student at Western University currently working as a full-stack software developer for the Constas Research Lab at Western University. (Scroll down for more info!)
          </p>
          
      </motion.div>
      <motion.div style={{ y: backgroundY }} className='App-header'>
        <motion.h1 style={{opacity: opacity, marginLeft:'5%'}}>
          Projects
        </motion.h1>
        <motion.div  style={{opacity: opacity, overflowY:'auto', width:'70vw'}}>
          {jsonData.projInfo.map((dataItem, index) => (
            <BoxData title={dataItem.title} desc={dataItem.desc} link={dataItem.link}/>
          ))}
        </motion.div>

      </motion.div>
    </div> 
  );
}

export default App;
