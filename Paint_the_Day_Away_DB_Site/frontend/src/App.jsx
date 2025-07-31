
import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Customers from './pages/Customers'
import Products from './pages/Products'
import ProductReceipts from './pages/ProductReceipts'
import Receipts from './pages/Receipts'
import Orders from './pages/Orders'
import Manufacturers from './pages/Manufacturers'


// Define the backend port and URL for API requests
const backendPort = 1923;  // Use the port you assigned to the backend server, this would normally go in a .env file
const backendURL = `http://classwork.engr.oregonstate.edu:${backendPort}`;

function App() {
  

  return (
    <div className = "app">
        <header>
          <h1>Paint the Day Away Art Supply Store</h1>
          <p>By: Nicole Rishwain and Grace</p>
        </header>
        <main>
        <Navigation/>
        <Routes>
          <Route path = "/customers" element = {<Customers backendURL={backendURL}/>}></Route>
        </Routes>
        </main>
    </div>
  )
}

export default App
