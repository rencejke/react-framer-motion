import React from 'react'
import Header from '../partials/Header'
import { GoArrowRight } from 'react-icons/go'
import Transition from '../partials/Transition'
import { motion } from 'framer-motion'

const Home = () => {

     //reusable 
    const group = {
        //initial
        hidden: { opacity: 0 },
        
        //animate
        visible: {
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 1.6,
            staggerChildren: 0.7,
          },
        },
      };
    
      //animation of each child
      const item = {
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0 },
      };
    

  return (

    <>
      <Header/>

      <section className='pt-12'>
        <div className="container text-[18px]">
        <motion.h1 className='uppercase text-center text-[134px]'  
        initial={{opacity: 0, y:20}} 
        animate={{opacity: 1, y: 0}}
        transition ={{delay: 0.5}}
        

        >Archiform <span className='font-[Raleway-Thin]'>Agency</span></motion.h1>

        <motion.div className='flex justify-between items-start uppercase pt-12'
        variants={group}
        initial='hidden'
        animate = 'visible'
        >
            <motion.p variants={item}>high quality standard</motion.p>


                <motion.div className='flex flex-col justify-center gap-12 w-[30%] text-wra' variants={item}>
                <p> dive in4to the world of creative and innovative architectural concepts</p>
                <p> we make your wildest architectural dreams come true </p>
               </motion.div>

            <motion.div className='flex gap-6 items-center font-bold border-b-[.1rem] border-dark pb-2 cursor-pointer' variants={item}>
                <p>Get in Touch</p>
                <GoArrowRight className='text-[20px]' />
            </motion.div>
        </motion.div> 


        </div>       
        <motion.div className='pt-12'
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={ { delay: 1.5 }}
    
        
        >
            <img src="https://via.placeholder.com/1200x450" alt="" className='w-full object-cover h-[38.7vh]'/>
        </motion.div>
      </section>
    </>
  )
}

export default Transition(Home)
