import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import EventFiche from './components/EventFiche'
import Header from './components/Header'
import Home from './components/Home'

export default function App() {
  return (
    <div className='App'>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/event" element={<EventFiche/>} />
        </Routes>
    </div>
  )
}
