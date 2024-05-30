import React, { Component } from 'react'
import Home from './components/Home'
import Asimov from './components/Asimov'
import Dick from './components/Dick'
import LeGuin from './components/LeGuin'
import Pratchett from './components/Pratchett'
import Tolkien from './components/Tolkien'
import Adams from './components/Adams'
import Navbar from './components/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Asimov' element={<Asimov/>} />
        <Route path='/Dick' element={<Dick/>} />
        <Route path='/LeGuin' element={<LeGuin/>} />
        <Route path='/Pratchett' element={<Pratchett/>} />
        <Route path='/Tolkien' element={<Tolkien/>} />
        <Route path='/Adams' element={<Adams/>} />
      </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App