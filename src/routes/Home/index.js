import React, { Component } from 'react'
import { Button, Col, Form, Input,  Radio, Row, Select } from 'antd'
import axios from 'axios'
import verify from '../../utils/Verify'

@Form.create()
export default class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, fieldValue) => {
      if (err) {
        console.log('error',err)
      }
      const body = {
        ...fieldValue,
        name: fieldValue.name,
        sex: fieldValue.sex,
        school: fieldValue.school,
        college: fieldValue.college,
        discipline: fieldValue.discipline,
        grade: fieldValue.grade,
        number: fieldValue.number,
        mobile: fieldValue.mobile,
        QQ: fieldValue.QQ,
        type: '现场赛'

      }
      axios({
        method: 'POST',
        url:'http://turingbe.elatis.cn/turingcupbaoming',
        data: body
      }).then(data => {
        this.props.history.push('/success')
        console.log(data)
      }).catch(err => {
        console.log(err)
      })

    })

  }

  handleReset = (e) => {
    e.preventDefault()
    // console.log('123')
    this.props.form.resetFields()
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const FormItem = Form.Item
    const RadioGroup = Radio.Group
    const Option = Select.Option

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 5},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    }
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
        >

          <div className="form-content-header" key="form-content-header">
            <div className="form-content-header-title">
              <h1>现场赛报名</h1>
            </div>
            <br />
            <div className="form-content-header-extra">
            </div>
          </div>

          <FormItem
            {...formItemLayout}
            label="姓名"
            hasFeedback
            // validateStatus="validating"
            // help="The information is being validated..."
          >
            {getFieldDecorator('name', {
              rules: [{
                pattern: verify.chinese, message: '输入包含非中文字符！'
              }, {
                required: true, message: '请输入姓名'
              }]
            })(
              <Input className='form-content-input' />,
            )}
          </FormItem>

          <FormItem
            label='性别'
            {...formItemLayout}
            key="form-content-sex"
          >
            {getFieldDecorator('sex', {
              rules: [{required: true, message: '性别'}],
            })(
              <RadioGroup>
                <Radio value='男'>男</Radio>
                <Radio value='女'>女</Radio>
              </RadioGroup>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="学校"
            hasFeedback
          >
            {getFieldDecorator('school', {
              rules: [
                {required: true, message: '请选择您所在的学校！'},
              ],
            })(
              <Input placeholder="请输入您的学校" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="学院"
            hasFeedback
          >
            {getFieldDecorator('college', {
              rules: [
                {required: true, message: '请输入您所在的学院'},
              ],
            })(
              <Input placeholder="请输入您所在的学院" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="专业"
            hasFeedback
            // validateStatus="validating"
            // help="The information is being validated..."
          >
            {getFieldDecorator('discipline', {
              rules: [
                {required: true, message: '请输入您所在的专业'},
              ],
            })(
              <Input placeholder="请输入您所在的专业" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="年级"
            hasFeedback
          >
            {getFieldDecorator('grade', {
              rules: [
                {required: true, message: '请选择您所在的年级'},
              ],
            })(
              <Select placeholder="请选择一个年级">
                <Option value="2018">2018</Option>
                <Option value="2017">2017</Option>
                <Option value="2016">2016</Option>
                <Option value="2015">2015</Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="学号"
            hasFeedback
            help="务必仔细确认您的学号"
          >
            {getFieldDecorator('number', {
              rules: [
                {pattern: verify.number, message: '学号不合理'},
                {required: true, message: '请输入您的学号'},
              ],
            })(
              <Input placeholder="请输入您的学号" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="手机号"
            hasFeedback
            help="务必仔细确认您的手机号，手机号将用于接收考试信息"
          >
            {getFieldDecorator('mobile', {
              rules: [
                {pattern: verify.number, message: '请输入正确的手机号'},
                {required: true, message: '请输入您的手机号号'},
              ],
            })(
              <Input placeholder="请输入您的手机号" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="QQ"
            hasFeedback
          >
            {getFieldDecorator('QQ', {
              rules: [
                {pattern: verify.number, message: '请输入正确的QQ号码'},
                {required: true, message: '请输入您的QQ号'},
              ],
            })(
              <Input placeholder="请输入您的QQ号" />
            )}
          </FormItem>

          <FormItem
            key="form-content-footer"
          >
            <Row gutter={12} type='flex'>
              <Col className='left-content' xs={{span: 24}} sm={{span: 12, offset: 6}}>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='form-button-1'
                  // loading={this.state.loading}
                  disabled={this.state.submitted}
                >
                  {this.state.submitted ? '提交成功' : '点击提交'}
                </Button>
                <Button
                  type="ghost"
                  htmlType='reset'
                  onClick={this.handleReset}
                  className='form-button-2'
                  style={{marginLeft: 20}}
                >
                  重置
                </Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
    )
  }
}
