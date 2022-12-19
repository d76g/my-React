import React from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Form } from "./Components/ReactForm"
export default function Page() {
    return (
       <div className='ageContainer'>
            <Router>
                <Link to='/'>Home</Link>
                <Routes>
                    <Route path="/" element={<Form/>}/>
                </Routes>
            </Router>
       </div>
            
    )
}



