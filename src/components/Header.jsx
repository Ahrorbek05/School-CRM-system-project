import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserGraduate, FaHome, FaEnvelope, FaCalendarAlt, FaInfoCircle, FaChalkboardTeacher, FaNewspaper, FaClipboard, FaBookOpen, FaImages } from 'react-icons/fa'
import logo from '../../public/logo.webp'
import profilePic from '../../public/logo.webp'

function Header() {
  return (
    <header className="shadow-sm">
      <div className="container mx-auto flex items-center justify-center max-w-[1024px] py-4">
        <img src={logo} alt="School Logo" className="h-10 w-10 rounded-full object-cover border-2 border-white" />

        <div className="flex-grow mx-4">
          <nav className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-6 rounded-full shadow-lg">
            <ul className="flex items-center justify-between space-x-8 text-white">
            <li>
                <NavLink to="/" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaHome className="text-xl" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaInfoCircle className="text-xl" />
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/students" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaUserGraduate className="text-xl" />
                  <span>Students</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/parents" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaChalkboardTeacher className="text-xl" />
                  <span>Parents</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Admissions" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaClipboard className="text-xl" />
                  <span>Admissions</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Academic" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaBookOpen className="text-xl" />
                  <span>Academics</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaNewspaper className="text-xl" />
                  <span>News</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaCalendarAlt className="text-xl" />
                  <span>Events</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaImages className="text-xl" />
                  <span>Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
                  <FaEnvelope className="text-xl" />
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a href="/login" className="relative inline-block text-lg font-medium text-white group mr-4">
            <span className="relative z-10 block px-5 py-1 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:bg-gradient-700 transition duration-300">
              Login
            </span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-gray-900 rounded-lg group-hover:translate-x-0 group-hover:translate-y-0"></span>
          </a>
        </div>

        <img src={profilePic} alt="Profile" className="h-10 w-10 rounded-full object-cover border-2 border-white" />
      </div>
    </header>
  )
}

export default Header
