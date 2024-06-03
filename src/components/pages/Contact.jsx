
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import Transition from "../partials/Transition";
import { motion } from "framer-motion"

const Contact = () => {
   
    //reusable 
    const groups = {
      //initial
      hidden: { opacity: 0 },
      
      //animate
      visible: {
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 1.7,
          staggerChildren: 0.7,
        },
      },
    };

    const item = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    };
   
  return (
    <>
      <Header />
      <div className="flex flex-col h-[calc(100vh-92px)]">
        <div className="container mt-10 grow">
          <motion.h2
             initial = {{ opacity: 0, y: 20 }}
             animate = {{ opacity: 1, y:0  }}
             transition = {{ delay: 0.5 }}
          >We can help you turn your architectural dreams into reality</motion.h2>

          <motion.div className="grid grid-cols-[400px_1fr] w-full my-20"
              initial = {{ opacity: 0, y: 20 }}
              animate = {{ opacity: 1, y:0  }}
              transition = {{ delay: 0.7 }}
          >
            <form action="">
              <div className="input-wrap">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>

              <div className="input-wrap">
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>

              <div className="input-wrap">
                <label htmlFor="">Message</label>
                <textarea name="" id=""></textarea>
              </div>

              <button className="px-2 py-1 text-sm bg-dark text-light">
                Send
              </button>
            </form>

            <motion.div className="justify-self-end self-start"
             
             initial = {{ opacity: 0, y: 20 }}
             animate = {{ opacity: 1, y:0  }}
             transition = {{ delay: 1.2 }}
            >
              <p className="max-w-[300px] text-sm opacity-50">
                97096 McClure Shore, <br /> Geraldburgh, MN 70575 <br />
                0921-200-212 <br />
                mail@archiformagency.com
              </p>
            </motion.div>

            {/* <ul className="absolute bottom-5 right-16 flex gap-10 ">
            <li>
              <Link>
                <Facebook strokeWidth={1} />
              </Link>
            </li>

            <li>
              <Link>
                <Twitter strokeWidth={1} />
              </Link>
            </li>

            <li>
              <Link>
                <Instagram strokeWidth={1} />
              </Link>
            </li>
          </ul> */}
          </motion.div>
        </div>
        <motion.div className="bg-dark text-light p-5  w-full"
        >
          <motion.h1 className="text-extreme text-center font-[raleway-medium] uppercase" 
            
            initial = {{ opacity: 0, y: 20 }}
            animate = {{ opacity: 1, y:0  }}
            transition = {{ delay: 1.2 }}
            
          >
            Archiform <span className="font-[raleway-thin]">Agency</span>
          </motion.h1>
          <div className="container">
            <div className="flex justify-between">
              <motion.small 
               
               initial = {{ opacity: 0, y: 20 }}
               animate = {{ opacity: 1, y:0  }}
               transition = {{ delay: 1.2 }}
              
              >&copy; 2024 archiform agency</motion.small>
              <motion.ul className="text-sm uppercase flex gap-5"
                variants={groups}
              >
                <motion.li variants={item}>
                  <Link>facebook</Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link>instragram</Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link>Behance</Link>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Transition(Contact);