import React, { useEffect, useState } from 'react'
import { PageHeader, Button, Modal } from 'antd'
// 引入moment
import moment from 'moment'
import E from 'wangeditor'
let editor = null

export default function Edit () {
  const [ content, setContent ] = useState('')
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  // componentDidMount
  useEffect(() => {
    const editor = new E('#div1')
    editor.create()
  }, [])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="文章编辑"
        subTitle={'当前日期：' + moment(new Date()).format('YYYY-MM-DD')}
        extra={[
          <Button key="1" type="primary" onClick={() =>  setIsModalVisible(true)}>提交文章</Button>,
        ]}
      >

        <Modal zIndex={99999} title="填写文章标题" visible={isModalVisible}  onOk={handleOk} onCancel={() =>  setIsModalVisible(false)}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </PageHeader>
      <div id="div1"></div>
    </div>
  )
}
