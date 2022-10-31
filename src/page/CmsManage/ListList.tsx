import React, { useEffect, useState } from 'react'
import { List, Skeleton, Pagination, Button } from 'antd'
import { ArticleListApi } from '@/api/app'
// 引入moment
import moment from 'moment'

export default function ListList () {
  const [ list, setList ] = useState([])
  const [ total, setTotal ] = useState(0)
  const [ current, setCurrent ] = useState(1)
  const [ pageSize, setPageSize ] = useState(10)

  // 请求列表数据
  useEffect(() => {
    ArticleListApi({
      num: current,
      count: pageSize,
    }).then((res:any) => {
      if (res.errCode === 0) {
        let { arr, total, num, count } = res.data
        setList(arr)
        setTotal(total)
        setCurrent(num)
        setPageSize(count)
      }
    })
  }, [])


  const getList = (num:number) => {
    ArticleListApi({
      num: current,
      count: pageSize,
    }).then((res:any) => {
      if (res.errCode === 0) {
        let { arr, total, num, count } = res.data
        setList(arr)
        setTotal(total)
        setCurrent(num)
        setPageSize(count)
      }
    })
  }
  // 分页
  const onChange = (pages:number) => {
    getList(pages)
  }

  return (
    <div className='list_table' style={{ padding: '20px' }}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item:any) => (
          <List.Item
            actions={[
              <Button type='primary' onClick={() => console.log(item.id)}>编辑</Button>,
              <Button type='primary' danger onClick={() => console.log(item.id)}>删除</Button>,
            ]}
          >
            <Skeleton loading={false}>
              <List.Item.Meta
                title={<a href="!#">{item.title}</a>}
                description={item.subTitle}
              />
              <div>{moment(item.date).format('YYYY-MM-DD hh:mm:ss')}</div>
            </Skeleton>
          </List.Item>
        )}
      />
      <Pagination onChange={onChange} total={total} current={current} pageSize={pageSize} style={{ float: 'right', marginTop: '20px' }}
      />
    </div>
  )
}
