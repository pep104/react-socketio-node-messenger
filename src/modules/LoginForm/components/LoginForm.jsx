import React from 'react'
import { Form, Input } from 'antd';
import { Button } from "../../../components";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Block } from '../../../components';
import { validateField } from '../../../utils/helpers';

export default function LoginForm(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty
  } = props;

  return (
    <div>
        <div className="auth__top">
          <h2>INVISE. Protect your data</h2>
          <p>Введите логин и пароль для входа в аккаунт</p>
        </div>
          <Block>
          <Form
        name="normal_login"
        className="login-form"
        onSubmit={handleSubmit}
        >
        <Form.Item
          id='username'
          name="username"
          validateStatus={validateField('username', touched, errors)}
          help={!touched.username ? '' : errors.username}
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
              
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} 
          id='username'
          placeholder="Username" 
          size="large" 
          value={values.username} onChange={handleChange} onBlur={handleBlur}  />
        </Form.Item>
        <Form.Item
        id='password'
        validateStatus={validateField('password', touched, errors)}
        help={!touched.password ? '' : errors.password}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            id='password'
            type="password"
            placeholder="Password"
            size="large"
            value={values.password} onChange={handleChange} onBlur={handleBlur}
          />
        </Form.Item>

        <Form.Item>
          {dirty && !isValid && <span>Error</span>}
          <Button type="primary" size='large' onClick={handleSubmit}>
            Log in
          </Button>
        </Form.Item>
        <Link className="auth register-link" to='/register'>Sign up</Link>
      </Form>
      </Block>
    </div>
  )
}
