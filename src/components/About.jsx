import aboutImg from "../assets/JPabout.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div id ="about"className="border-b border-neutral-300 pb-4">

        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.8}}
        className="my-20 text-center text-4xl"> 
            About 
            <span className="text-neutral-500"> Me</span>
        </motion.h1>
        
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-32 lg:-mt-28">
                <div className="flex items-center justify-center">
                    <img src={aboutImg} alt="about" className="rounded-2xl object-cover shadow-xl" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter lg:pr-20 text-justify">
                        {ABOUT_TEXT.p1} 
                        <br />           
                        {ABOUT_TEXT.p2}
                        <br />
                        {ABOUT_TEXT.p3}
                    </p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About