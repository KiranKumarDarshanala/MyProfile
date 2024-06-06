import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion';

import { FaHtml5, FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";


const icon = (time) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: vduration,
            ease: "linear",
            repeat: "infinity",
            repeatType: "reverse",
        },
    },
});


const Skills = () => {
    return (
        <div id='skills' className="skills">
            <div className="skill-title">
                <h1>Skills & Technologies</h1>
            </div>
            <div className="skill-tech">
                <FaHtml5 className='tech htlm' />
                <FaCss3Alt className='tech css' />
                <IoLogoJavascript className='tech js' />
                <FaReact className='tech react' />
                <FaNodeJs className='tech nodejs' />
                <SiMongodb className='tech mongo' />
                <RiTailwindCssFill className='tech tailwindcss' />


            </div>
        </div >
    )
}

export default Skills
