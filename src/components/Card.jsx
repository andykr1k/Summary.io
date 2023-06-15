import React from 'react'
import { motion } from 'framer-motion'
import { BsFillChatFill, BsFillCameraVideoFill, BsFillFileEarmarkTextFill, BsFillImageFill } from 'react-icons/bs'

const Card = (props) => {

    return (
        <motion.div
        className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl m-2" whileHover={{scale:1.05}}
      >
        <a className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href={props.r}>
          <div className="">
          <div className='p-2'>
          {
            props.r == 'chat' ?
            <BsFillChatFill size={32}/>
            :
            <></>
          }
          {
            props.r == 'text' ?
            <BsFillFileEarmarkTextFill size={32}/>
            :
            <></>
          }
          {
            props.r == 'video' ?
            <BsFillCameraVideoFill size={32}/>
            :
            <></>
          }
          {
            props.r == 'image' ?
            <BsFillImageFill size={32}/>
            :
            <></>
          }
          </div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {props.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {props.description}
            </p>
          </div>
        </a>
      </motion.div>
)}

export default Card