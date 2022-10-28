import React, { useEffect, useState } from 'react'
import './assets/css/base.css'
import './page/CmsManage/style/App.scss'
import { Outlet, useLocation } from 'react-router-dom'
import { BackTop, Layout } from 'antd'
import Header from './components/Header'
import Aside from './components/Aside'
import Bread from './components/Bread'

const App = () => {
  const { Content } = Layout
  const [ breadName, setBreadName ] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    switch (pathname) {
    case '/listlist':
      setBreadName('查看文章列表List')
      break
    case '/listtable':
      setBreadName('查看文章列表Table')
      break
    case '/edit':
      setBreadName('文章编辑')
      break
    case '/means':
      setBreadName('修改资料')
      break
    default:
      setBreadName(pathname.includes('edit') ? '文章编辑' : '')
      break
    }
  }, [ pathname ])

  return (
    <Layout id="app">
      <Header />
      <div className='container'>
        <Aside />
        <div className='container_box'>
          <Bread />
          <Outlet/>
        </div>
      </div>
      <footer>Footer</footer>
    </Layout>
  )
}

export default App
