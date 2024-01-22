import React from 'react'
import { motion } from "framer-motion";
import Logo from "../assets/logo/logo_rc_transbg.svg";
import Scroll from "../assets/icons/scroll.png";
import Gate from "../assets/pu/univ-gate.jpg";
import Bus from "../assets/pu/bus.jpg";
import Sunrise from "../assets/pu/sunrise.jpg";
import Umisarc from "../assets/pu/umisarc.jpg";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <>
      <div className="hero-homepage ">
        <div className="hero-container row ms-5 me-5 pt-2">
          <div className="col col-lg-6 col-md-6 col-sm-12 hero-text-area ">
            <div className="hero-logo-area">
              <img className="herologo mt-5 mb-4" src={Logo} alt="" />
            </div>
            <div className="hero-header">PU OLD SCHOOL</div>
            <div className="wrapper">
              <motion.div
                className="textContainer"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h3 variants={textVariants} className="my-2">
                  A Global Community For Pondicherry University
                </motion.h3>
                <motion.div variants={textVariants} className="buttons ms-5">
                  <motion.button
                    className="motion-button"
                    variants={textVariants}
                  >
                    Read More
                  </motion.button>
                  <motion.button
                    className="motion-button my-3"
                    variants={textVariants}
                  >
                    Contact Us
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
            <motion.div className="d-flex justify-content-center  me-5">
              <motion.img
                className="image-scroll"
                variants={textVariants}
                animate="scrollButton"
                src={Scroll}
                alt=""
              ></motion.img>
            </motion.div>
          </div>

          <div className="col col-lg-6 col-md-6 col-sm-12 hero-image-area my-auto">
            <div className="imageContainer1 imageposition2" >
              <img src={Bus} alt=""  />
            </div>
            <div className="imageContainer1">
              <img src={Sunrise} alt="" />
            </div>
            <div className="imageContainer1 imageposition2" >
              <img src={Umisarc} alt=""  />
            </div>
            <div className="imageContainer1">
              <img src={Gate} alt="" />
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Hero