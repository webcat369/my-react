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
  // 分页
  const [ pagination, setPagination ] = useState({ current: 1, pageSize: 1, total: 0 })

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

  const getArticleList = (current:number, pageSize:number) => {
    ArticleListApi({
      num: current,
      count: pageSize,
    }).then((res:any) => {
      console.log(res.data, 'res')
      let { num, count, total } = res.data
      setPagination({ current: num, pageSize: count, total })
      if (res.errCode == 0) {
        let newArr = JSON.parse(JSON.stringify(res.data.arr))

        /*
            1. 要给每个数组项加key，让key=id
            2. 需要有一套标签结构，赋予一个属性
        */
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
  }

  // 分页的函数
  const pageChange = (arg:any) => getArticleList(arg.current, arg.pageSize)

  // 请求文章列表
  useEffect(() => {
    getArticleList(pagination.current, pagination.pageSize)
  }, [])

  return (
    <div className='list_table'>
      {/* columns列 dataSource数据 */}
      <Table columns={columns} showHeader={false} dataSource={arr} onChange={pageChange} pagination={pagination}/>
    </div>
  )
}
