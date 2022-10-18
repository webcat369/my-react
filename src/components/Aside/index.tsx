import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ReadOutlined, EditOutlined, DatabaseOutlined } from '@ant-design/icons'

export default function Aside () {
  const navigate = useNavigate()

  const handleClick = (e:any) => {
    console.log('click', e)
    navigate('/' + e.key)
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
      <Menu.Item key="list"><ReadOutlined /> 查看文章列表</Menu.Item>
      <Menu.Item key="edit"><EditOutlined /> 文章编辑</Menu.Item>
      <Menu.Item key="means"><DatabaseOutlined /> 修改资料</Menu.Item>
    </Menu>
  )
}
