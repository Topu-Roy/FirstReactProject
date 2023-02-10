import React, { useContext } from 'react'
import CrossMenuIcon from '../assets/close.png'
import { AppContext } from '../App'


const HambergerMenu = () => {


  const {isExpended, setIsExpended} = useContext(AppContext)

  return (
    <div className={isExpended ? `ham-menu-close` : `ham-menu-open`}>
        <div className="flex flex-col items-center justify-between gap-4 m-auto w-full h-full">
            <div className="flex flex-col items-center justify-center gap-4 flex-1">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="">About</a>
                <a href="#" className="">Contact</a>
            </div>
            <div className="">
                <article>This React Project was made with ❤️ by <a href="#"> TOPU ROY</a></article>
            </div>
        </div>
         
        <span onClick={() => setIsExpended(!isExpended)} className='absolute top-[10%] right-[10%] bg-white bg-opacity-5 rounded-full p-4 '><img src={CrossMenuIcon} alt="" className='h-[30px]' /></span>
    </div>
  )
}

export default HambergerMenu