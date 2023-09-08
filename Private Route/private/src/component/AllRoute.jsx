import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Private from './Private'

const AllRoute= () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/dash" element={
      <Private>
      <Dashboard/>
      </Private>
      }></Route>
    </Routes>
  )
}

export default AllRoute;

