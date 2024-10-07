import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Register'
import NotFound from './pages/ErrorPage'
import Admissions from './pages/Admissions'
import StudentProfile from './pages/ForStudents'
import ParentsProfile from './pages/ForParents'
import News from './pages/News'
import Calendar from './pages/Events'
import Gallery from './pages/PhotoGalery'
import Academic from './pages/Academic'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/students" element={<StudentProfile />} />
        <Route path="/parents" element={<ParentsProfile />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Calendar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
