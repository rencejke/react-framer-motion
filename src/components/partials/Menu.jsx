import { Facebook, Instagram, MoveRight, Twitter, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Menu = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    
       //reusable 
       const groupNav = {
        //initial
        hidden: { opacity: 0 },
        
        //animate
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 1.6,
            staggerChildren: 0.4,
          },
        },
      };

      const socialMedia = {
        //initial
        hidden: { opacity: 0 },
        
        //animate
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 1.2,
            staggerChildren: 0.4,
          },
        },
      };

  
         
      const item = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <div>
    <button className="uppercase" onClick={() => setShowMenu(true)}>
      Menu
    </button>
    <AnimatePresence>
      {showMenu && (
 
           <motion.div
          className="w-full h-screen fixed top-0 right-0 bg-white z-50 p-10"
          initial={{ opacity: 0, x: "20px" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "20px" }}
        >
          <div className="flex justify-between items-start ">
            <p></p>

            <div className="max-w-[900px] w-full">
              <button
                className="flex justify-end w-full mb-10"
                onClick={() => setShowMenu(false)}
              >
                <X strokeWidth={1} size={30} />
              </button>

              <motion.ul
                className="list-none "
                variants={groupNav}
                initial="hidden"
                animate="visible"
              >
                <motion.li className="relative group " variants={item}>
                  <Link
                    to="/"
                    className="flex justify-between items-center py-10 pl-10 border-b border-dark border-opacity-20"
                  >
                    Home <MoveRight strokeWidth={0.8} />
                  </Link>

                  <img
                    src="https://via.placeholder.com/300x500"
                    alt=""
                    className="w-[200px] h-[300px] object-cover absolute z-50 left-1/3 -top-20 opacity-0 group-hover:opacity-1 "
                  />
                </motion.li>
                <motion.li className="relative group" variants={item}>
                  <Link
                    to="/about"
                    className="flex justify-between items-center py-10 pl-10 border-b border-dark border-opacity-20"
                  >
                    About <MoveRight strokeWidth={0.8} />
                  </Link>
                  <img
                    src="https://via.placeholder.com/300x500"
                    alt=""
                    className="w-[200px] h-[300px] object-cover absolute z-50 left-1/3 -top-20 opacity-0 group-hover:opacity-1 "
                  />
                </motion.li>
                <motion.li className="relative group" variants={item}>
                  <Link
                    to="/projects"
                    className="flex justify-between items-center py-10 pl-10 border-b border-dark border-opacity-20"
                  >
                    Projects <MoveRight strokeWidth={0.8} />
                  </Link>
                  <img
                    src="https://via.placeholder.com/300x500"
                    alt=""
                    className="w-[200px] h-[300px] object-cover absolute z-50 left-1/3 -top-20 opacity-0 group-hover:opacity-1 "
                  />
                </motion.li>
                <motion.li className="relative group" variants={item}>
                    <Link
                      to="/services"
                      className="flex justify-between items-center py-10 pl-10 border-b border-dark border-opacity-20"
                    >
                      Services <MoveRight strokeWidth={0.8} />
                    </Link>
                    <img
                      src="https://via.placeholder.com/300x500"
                      alt=""
                      className="w-[200px] h-[300px] object-cover absolute z-50 left-1/3 -top-20 opacity-0 group-hover:opacity-1 "
                    />
                  </motion.li>
                  <motion.li className="relative group" variants={item}>
                    <Link
                      to="/team"
                      className="flex justify-between items-center py-10 pl-10 border-b border-dark border-opacity-20"
                    >
                      Team <MoveRight strokeWidth={0.8} />
                    </Link>
                    <img
                      src="https://via.placeholder.com/300x500"
                      alt=""
                      className="w-[200px] h-[300px] object-cover absolute z-50 left-1/3 -top-20 opacity-0 group-hover:opacity-1 "
                    />
                  </motion.li>

                  <motion.li className="relative group" variants={item}>
                    <Link
                      to="/contact"
                      className="flex justify-between items-center py-10 pl-10 border-b border-dark border-opacity-20"
                    >
                      Contact <MoveRight strokeWidth={0.8} />
                    </Link>
                    <img
                      src="https://via.placeholder.com/300x500"
                      alt=""
                      className="w-[200px] h-[300px] object-cover absolute z-50 left-1/3 -top-20 opacity-0 group-hover:opacity-1 "
                    />
                  </motion.li>
                </motion.ul>
              </div>
            </div>
            <motion.ul
              className="absolute bottom-1/2 left-10 flex gap-10 flex-col"
              variants={socialMedia}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={item}>
                <Link>
                  <Facebook strokeWidth={1}/>
                </Link>
              </motion.li>

              <motion.li variants={item}>
                <Link>
                  <Twitter strokeWidth={1}/>
                </Link>
              </motion.li>

              <motion.li variants={item}>
                <Link>
                  <Instagram strokeWidth={1}/>
                </Link>
              </motion.li>
            </motion.ul>

            <motion.p
              className="absolute bottom-5 left-10 max-w-[300px] text-sm"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              97096 McClure Shore, <br /> Geraldburgh, MN 70575 <br />
              0921-200-212 <br />
              mail@archiformagency.com
            </motion.p>
          </motion.div>
 
        )}
     </AnimatePresence>
    </div>
  )
}

export default Menu
