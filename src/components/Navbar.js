import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import HamMenu from '../assets/hambergermenu.png'
import { AppContext } from '../App'


const Navbar = () => {

  
  const {setIsExpended, isExpended} = useContext(AppContext)

  return (
    <nav className="z-40 sticky top-0 left-0 flex items-center justify-between p-4 mt-2 sm:p-6 md:p-8">
      <span className="font-Saira-Stencil-One text-xl md:text-2xl xl:text-3xl text-slate-200 cursor-pointer">
        <Link to="/">TOPU</Link>
      </span>

      <div className="flex items-center gap-8">
        <li className="flex items-center gap-8">
          <ul className="hidden md:flex gap-2 items-center justify-between">
            <span className="h-[10px] w-[10px] rounded-full p-1 bg-[#00ECF9]"></span>
            <Link to="/" className="text-white drop-shadow-lg">
              Home
            </Link>
          </ul>
          <ul className="hidden md:block">
            <Link to="/about" className="drop-shadow-lg">About</Link>
          </ul>
          <ul>
            <Link to="/works" className="drop-shadow-lg">Works</Link>
          </ul>
        </li>

        <button className="hidden md:block py-2 btn text-black" type="button">
          <Link to="/contact">Contact</Link>
        </button>
        <button
          className="md:hidden p-2 shadow rounded-full bg-[#00ECF9]"
          type="button" onClick={() => setIsExpended(!isExpended)}
        >
          <img src={HamMenu} alt="Menu" />
        </button>
      </div>


    </nav>
  )
}

export default Navbar;
