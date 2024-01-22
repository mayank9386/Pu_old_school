import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";
import Facebook from '../assets/icons/facebook.png';
import Instagram from '../assets/icons/instagram.png';
import Youtube from '../assets/icons/youtube.png';
import Dribbble from '../assets/icons/dribbble.png';
const navbar = () => {
  
  return (
    <div className="navbar-sidebar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper-sidebar">
        <motion.span 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1,scale:1}} 
        transition={{duration:0.5}}
        >PU OLD SCHOOL</motion.span>
        <div className="social">
          <a href="/"><img src={Facebook} alt=""/></a>
          <a href="/"><img src={Instagram} alt=""/></a>
          <a href="/"><img src={Youtube} alt=""/></a>
          <a href="/"><img src={Dribbble} alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default navbar
