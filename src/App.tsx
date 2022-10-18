import React from 'react'
import './assets/css/base.css'
import './page/CmsManage/style/App.scss'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/Header'
import Aside from './components/Aside'

const App = () => {
  const { Content } = Layout
  return (
    <Layout id="app">
      <Header />
      <div className='container'>
        <Aside />
        <div className='container_box'>
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
      <footer>Footer</footer>
    </Layout>
  )
}

export default App
