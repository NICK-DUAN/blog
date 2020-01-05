import React from 'react';
import styles from './users.css'
import { 
    Form,
    Input,
    InputNumber,
    Select,
    Icon,
    Tooltip,
    Card,
    Cascader,
    Modal,
    Button,
} from 'antd';


@Form.create()
class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    userRegister = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if(!err){
          Modal.error({
            title: "注册失败",
          });
          return;
        }
      })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
        const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '86',
        })(
          <Select style={{ width: 70 }}>
            <Select.Option value="86">+86</Select.Option>
            <Select.Option value="87">+87</Select.Option>
          </Select>,
        );
        return(
          <Card style={{ margin: "10px 250px 20px 250px"}}>
            <Form 
              layout="horizontal" 
              {...formItemLayout}
              onSubmit={this.userRegister}
            >
              <Form.Item
                label={
                  <span>
                    昵称&nbsp;
                    <Tooltip title="你希望大家怎么称呼你?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('nickname', {
                  rules: [{ required: true, message: '请输入逆臣!', whitespace: true }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="真实姓名">
                {getFieldDecorator("name", {
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="性别">
                {getFieldDecorator("gender", {
                  rules: [{required: true, message: "请选择性别"}]
                })(
                  <Select>
                    <Select.Option value="0">男</Select.Option>
                    <Select.Option value="1">女</Select.Option>
                    <Select.Option value="2">保密</Select.Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="电话">
                {getFieldDecorator("phone", {

                })(
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                )}
              </Form.Item>
              <Form.Item label="邮箱">
                {getFieldDecorator("email", {
                  rules: [{type: "email", message: "邮箱格式不合法"}]
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="年龄">
                {getFieldDecorator("age", {

                })(
                  <InputNumber min={0} max={99} step={1} />
                )}
              </Form.Item>
              <Form.Item label="生日">
                {getFieldDecorator("birth_day", {

                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="地区">
                {getFieldDecorator("area", {
                   rules: [
                    { type: 'array', required: true, message: 'Please select your habitual residence!' },
                  ],
                  initialValue: ['China', 'ShaanXi', 'TongChuan']
                })(
                  // <Cascader options={this.prop.user.area} />
                  <Cascader />
                )}
              </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
            </Form>
          </Card>
        )
    }    
}

export default Register;