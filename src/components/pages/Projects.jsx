import { MoveRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import Transition from "../partials/Transition";
import { motion } from 'framer-motion'
const Projects = () => {

         //reusable 
         const groupText = {
          //initial
          hidden: { opacity: 0 },
          
          //animate
          visible: {
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 1.6,
              staggerChildren: 0.7,
            },
          },
        };

        const groupImg = {
          //initial
          hidden: { opacity: 0 },
          
          //animate
          visible: {
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 1.7,
              staggerChildren: 0.2,
            },
          },
        };
        
        const itemImg = {
          hidden: { opacity: 0, x: 10 },
          visible: { opacity: 1, x: 0 },
        };

        const itemText = {
          hidden: { opacity: 0, x: 10 },
          visible: { opacity: 1, x: 0 },
        }
        

      //animation of each child
      const item = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      };
    

  return (
    <div>
      <Header />
      <div className="container mt-10">
        <motion.h2  
          initial ={{opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ delay: 0.5 }}          

         
        >
          We have successfully implemented a wide range of projects of varying
          complexity and scale
        </motion.h2>

        <motion.div className="flex justify-between mt-10 mb-10 items-start"
        variants={groupText}
        initial='hidden'
        animate='visible'
          
        >
          <motion.p className="max-w-[300px] text-sm opacity-80" variants={item}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            assumenda cumque aliquid sed similique quidem delectus aut a,
            perferendis iste?
          </motion.p>

          <motion.p className="max-w-[300px] text-sm opacity-80" variants={item}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            quam doloribus aliquam sequi soluta, quae illo voluptates quisquam
            praesentium cumque.
          </motion.p>

          <motion.Link className="anchor" variants={item}>
            Learn More <MoveRight strokeWidth={0.8} />
          </motion.Link>
        </motion.div>

        <motion.div className="flex justify-between"
            variants={groupImg}
            initial='hidden'
            animate='visible'
        >
          <motion.img
            src="https://via.placeholder.com/300x450"
            alt=""
            className="w-[400px] h-[220px] object-cover"
            variants={itemImg}
          />

          <motion.div className="-translate-y-10"
             variants={groupImg}
             initial='hidden'
             animate='visible'
          >
            <motion.img
              src="https://via.placeholder.com/130x130"
              alt=""
              className="w-[130px] h-[130px] object-cover mb-5"
              variants={itemImg}
            />

            <motion.img
              src="https://via.placeholder.com/130x130"
              alt=""
              className="w-[130px] h-[130px] object-cover mb-2"
              variants={itemImg}
            />

            <motion.h6 className="text-sm uppercase" variants={itemText}>SetScape Tower</motion.h6>
            <motion.p className="text-xs opacity-40" variants={itemText}>Architectural Design</motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transition(Projects);