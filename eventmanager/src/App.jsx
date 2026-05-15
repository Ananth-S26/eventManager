
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  return (

    <BrowserRouter>
    <Navbar/>
    <Home />
     <Footer/>
    </BrowserRouter>
  )

}

export default App;