import React, { useState, useEffect } from 'react'
import './style/ListTable.scss'
import { Table, Button, Space } from 'antd'
import { Link } from 'react-router-dom'
import { ArticleListApi } from '@/api/app'
import moment from 'moment'

function MyTitle (props:any) {
  return (
    <div>
      <a className='table_title'  href={'http://codesohigh.com:8765/article/' + props.id} target="_blank" rel="noreferrer">{props.title}</a>
      <p style={{ color: '#999' }}>{props.subTitle}</p>
    </div>
  )
}

export default function ListTable () {
  const [ arr, setArr ] = useState([ {
    key: '1',
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
  } ])

  // 每一列
  const columns = [
    {
      dataIndex: 'mytitle',
      key: 'mytitle',
      width: '60%',
      render: (text:any) => (
        <div>{text}</div>
      ),
    },
    {
      dataIndex: 'date',
      key: 'date',
      render: (text:any) => (
        <p>
          {text}
        </p>
      ),
    },
    {
      key: 'action',
      render: (text:any, record:any) => {
        console.log(text, '1111')
        return (
          <Space size="middle">
            <Button type='primary' >编辑</Button>
            <Button type="primary" danger >删除</Button>
          </Space>
        )
      },
    },
  ]

  // 请求文章列表
  useEffect(() => {
    ArticleListApi().then((res:any) => {
      if (res.errCode == 0) {
        let newArr = JSON.parse(JSON.stringify(res.data.arr))

        // 声明一个空数组保存对象obj
        let myarr:any = []
        newArr.map((item:any) => {
          let obj = {
            key: item.id,
            date: moment(item.date).format('YYYY-MM-DD hh:mm:ss'),
            mytitle: <MyTitle id={item.id} title={item.title} subTitle={item.subTitle}/>,
          }
          myarr.push(obj)
        })
        setArr(myarr)
        console.log(myarr)
      }
    })
  }, [])

  return (
    <div className='list_table'>
      {/* columns列 dataSource数据 */}
      <Table columns={columns} showHeader={false} dataSource={arr} />
    </div>
  )
}
