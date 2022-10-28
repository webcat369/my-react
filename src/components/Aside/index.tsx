import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { ReadOutlined, EditOutlined, DatabaseOutlined } from '@ant-design/icons'

export default function Aside () {
  const navigate = useNavigate()
  const location = useLocation()
  const [ defaultKey, setDefaultKey ] = useState('')

  // 一旦渲染立刻获取动态路由路径，不在使用默认路径
  useEffect(() => {
    let path = location.pathname
    let key = path.split('/')[1]
    setDefaultKey(key)
  }, [])

  // 及时更新路由路径
  const handleClick = (e:any) => {
    console.log('click', e)
    navigate('/' + e.key)
    setDefaultKey(e.key)
  }

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 180 }}
      mode="inline"
      defaultSelectedKeys={[ 'list' ]} // 默认路由
      className='aside'
      theme="dark" // 黑色主题
    >
      <Menu.Item key="listlist"><ReadOutlined /> 查看文章列表List</Menu.Item>
      <Menu.Item key="listtable"><ReadOutlined /> 查看文章列表Table</Menu.Item>
      <Menu.Item key="edit"><EditOutlined /> 文章编辑</Menu.Item>
      <Menu.Item key="means"><DatabaseOutlined /> 修改资料</Menu.Item>
    </Menu>
  )
}
