import React from 'react'
import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

export default function Bread () {
  return (
    <Breadcrumb style={{ height: '30px', lineHeight: '30px' }}>
      <Breadcrumb.Item href="">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
  )
}
