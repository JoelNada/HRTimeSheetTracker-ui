import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'

export default function routes() {
  return (
   <Routes>
     <Route path='/' element={<Login/>}/>
    
   </Routes>
  )
}
