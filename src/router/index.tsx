/*
    App > List + Edit + Means
    Login
    Register
    History模式 BrowserRouter
    Hash模式 HashRouter
*/
import React from 'react'
import App from './../App'
import List from '@/page/CmsManage/List'
import Edit from '@/page/CmsManage/Edit'
import Login from '@/page/CmsManage/Login'
import Means from '@/page/CmsManage/Means'
import Register from '@/page/CmsManage/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/list' element={<List />}> </Route>
        <Route path='/edit' element={<Edit />}> </Route>
        <Route path='/means' element={<Means />}> </Route>
      </Route>
      <Route path='/login' element={<Login />}> </Route>
      <Route path='/register' element={<Register />}> </Route>
    </Routes>
  </Router>
)

export default BaseRouter

