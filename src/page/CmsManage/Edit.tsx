import React, { useEffect, useState } from 'react'
import { PageHeader, Button, Modal, Form, Input } from 'antd'
// 引入moment
import moment from 'moment'
import E from 'wangeditor'
let editor = null
import { ArticleAddApi, ArticleSearchApi } from '@/api/app'
import { useParams } from 'react-router-dom'

export default function Edit () {
  const [ content, setContent ] = useState('')
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const [ form ] = Form.useForm()
  const params = useParams()

  // 模拟componentDidMount
  useEffect(() => {
    const editor = new E('#div1')
    console.log(editor)

    editor.config.onchange = (newHtml:string) => {
      setContent(newHtml)
      console.log(newHtml)

    }
    editor.create()
    return () => {
      editor.destroy()
    }
  }, [])


  // 提交文章
  const showModal = () => {
    setIsModalVisible(true)
    console.log('隐藏')

  }

  // 对话框点击提交
  const handleOk = () => {
    // setIsModalVisible(false) //关闭对话框
    form.validateFields()
      .then((values) => {
        // form.resetFields()// reset重置
        // onCreate(values)

        console.log('Received values of form: ', values)
        let { title, subTitle } = values
        console.log(content)

        // 请求
        ArticleAddApi({ title, subTitle, content }).then((res) => {
          console.log(res)
        })
      })
      .catch(() => true)
  }

  // 取消
  const handleCancel = () => {
    setIsModalVisible(false)
    console.log('取消')
  }

  return (
    <div>
      <PageHeader
        ghost={false}
        onBack={() =>  params.id ? window.history.back() : null}
        title="文章编辑"
        subTitle={'当前日期：' + moment(new Date()).format('YYYY-MM-DD')}
        extra={[
          <Button key="1" type="primary" onClick={() =>  setIsModalVisible(true)}>提交文章</Button>,
        ]}
      >

        <Modal zIndex={99999} title="填写文章标题" visible={isModalVisible} onOk={handleOk}
          onCancel={() =>  setIsModalVisible(false)} okText="提交" cancelText="取消">
          {/* //在Model下添加表单代码 */}
          <Form
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 21 }}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              label="标题"
              name="title"
              rules={[ { required: true, message: '请填写标题!' } ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="副标题"
              name="subTitle"
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </PageHeader>
      <div id="div1"  style={{ padding: '0 20px 20px', background: '#fff' }}></div>
    </div>
  )
}
