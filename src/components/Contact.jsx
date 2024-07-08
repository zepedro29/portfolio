import { CONTACT } from "../constants"
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {motion} from "framer-motion"

const Contact = () => {
  return (

    
    <div className="border-b border-neutral-300">
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="mt-20 text-center text-4xl"> Get in
        <span className="text-neutral-500"> Touch</span>
        </motion.h1>

        <motion.p 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 0}}
        transition={{duration: 1.5}}
        className="flex justify-center mt-1 text-lg">Contact Me</motion.p>

        <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 0}}
        transition={{duration: 1.5}}
        className="flex justify-center mt-12">
         <div className="flex items-center rounded-full border-2 border-neutral-300 px-6 py-4 w-auto max-w-md">
            <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span className="text-base">jpskay@gmail.com</span>
            </div>
             <div className="mx-4 h-6 border-l border-neutral-300"></div>
            <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <span className="text-base">961924949</span>
            </div>
          </div>
        </motion.div>
        <p className="flex justify-center pt-24 text-neutral-400 mb-5 text-sm">Copyright &#169; 2024 José Vilaça</p>
    </div>

    
  )
}

export default Contact