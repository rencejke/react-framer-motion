import { MoveRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Transition from "../partials/Transition";
import Header from "../partials/Header";
import { motion } from 'framer-motion'

const Services = () => {

    //reusable 
    const groups = {
      //initial
      hidden: { opacity: 0 },
      
      //animate
      visible: {
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 1.6,
          staggerChildren: 0.5,
        },
      },
    };
     
      //reusable 
      const groupLinks = {
        //initial
        hidden: { opacity: 0 },
        
        //animate
        visible: {
          opacity: 1,
          transition: {
            delayChilren: 0.8,
            duration: 1.8,
            staggerChildren: 0.7,
          },
        },
      };
  


    const item = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }
    
  return (
    <>
      <Header />
      <div className="container">
        <motion.h2 className="text-right max-w-[60vw] w-full ml-auto my-10"
         initial = {{ opacity: 0, y:20 }}
         animate = {{ opacity: 1, y: 0 }}
         transition={{ delay: 0.5 }}
        >
          Our Services guarantee the hightest level of professionalism and
          quality
        </motion.h2>

        <motion.div className="flex justify-between pb-10 mb-10  border-b border-dark border-opacity-20"
         variants={groups}
         initial='hidden'
         animate='visible'
        >
          <motion.p className="max-w-[320px] text-sm opacity-80" variants={item}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            libero accusamus saepe numquam in et necessitatibus autem ducimus
            quaerat aliquid, commodi eligendi ullam molestiae, a obcaecati
            perspiciatis vero nesciunt at!
          </motion.p>

          <motion.p className="max-w-[320px] text-sm opacity-80" variants={item}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui
            odit, quasi officia dolorem sapiente maxime ipsum eius cum deserunt
            aliquam assumenda illum sequi accusantium velit ratione debitis,
            sint autem alias quis.
          </motion.p>
          <p></p>
        </motion.div>

        <motion.div 
          
          variants={groupLinks}
          initial='hidden'
          animate='visible'
        >
        <motion.div className="flex justify-between border-b border-dark border-opacity-20 pb-10 mb-10" variants={item}>
          <Link to="/" className="text-3xl uppercase">
            Architectural Design
          </Link>
          <MoveRight strokeWidth={0.8} />
        </motion.div>

        <motion.div className="flex justify-between border-b border-dark border-opacity-20 pb-10 mb-10" variants={item}>
          <Link to="/" className="text-3xl uppercase">
            Interior Design
          </Link>
          <MoveRight strokeWidth={0.8} />
        </motion.div>

        <motion.div className="flex justify-between border-b border-dark border-opacity-20 pb-10 mb-10" variants={item}>
          <Link to="/" className="text-3xl uppercase">
            Landscape Design
          </Link>
          <MoveRight strokeWidth={0.8} />
        </motion.div>

        <motion.div className="flex justify-between border-b border-dark border-opacity-20 pb-10 mb-10" variants={item}>
          <Link to="/" className="text-3xl uppercase">
            Reconstruction and Restoration
          </Link>
          <MoveRight strokeWidth={0.8} />
        </motion.div>

        <motion.div className="flex justify-between border-b border-dark border-opacity-20 pb-10 mb-10" variants={item}>
          <Link to="/" className="text-3xl uppercase">
            Visualization and modeling{" "}
          </Link>
          <MoveRight strokeWidth={0.8} />
        </motion.div>
    

        </motion.div>


      </div>
    </>
  );
};

export default Transition(Services);