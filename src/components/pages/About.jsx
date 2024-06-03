import React from 'react'
import Header from '../partials/Header'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import Transition from '../partials/Transition'
import { motion } from 'framer-motion'

const About = () => {

   
  const imgMotion = {
    //initial
    hidden: { opacity: 0 },
    
    //animate
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 1.8,
        staggerChildren: 0.7,
      },
    },
  };


  const item = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <div>
      <Header />
      <div className="container mt-10">
        <div className="grid grid-cols-[.7fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <img
              src="https://via.placeholder.com/300x600"
              alt=""
              className="w-[200px] h-[300px] object-cover mb-20"
            />
            <small className="uppercase max-w-[220px] block">
              Unique Design approach reflects individual demands
            </small>
          </motion.div>

          <div>
            <motion.h2
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              We integrate advanced technologies wuth a creative approach
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/" className="anchor mb-10 ">
                Learn More <MoveRight strokeWidth={0.8} />
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="max-w-[300px] opacity-80 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eius inventore nulla eaque omnis aliquid aperiam,
                quod rerum totam amet pariatur ab ipsum debitis error id
                temporibus fuga cum similique alias? Distinctio vitae aspernatur
                quisquam voluptatibus quis nemo velit quo?
              </p>

              <p className="max-w-[300px] opacity-80 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                libero inventore consectetur ducimus aliquam dolorem optio
                sapiente, non voluptatibus ex?
              </p>
            </motion.div>

            <motion.div
              className="flex gap-10 justify-end mt-5"
              variants={imgMotion}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src="https://via.placeholder.com/300x600"
                alt=""
                className="w-[150px] h-[150px] object-cover  "
                variants={item}
              />
              <motion.img
                src="https://via.placeholder.com/300x600"
                alt=""
                className="w-[150px] h-[150px] object-cover  "
                variants={item}
              />
              <motion.img
                src="https://via.placeholder.com/300x600"
                alt=""
                className="w-[150px] h-[150px] object-cover  "
                variants={item}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transition(About)