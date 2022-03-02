import React from 'react'
import { SmileOutlined, PushpinOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import './ChatInput.scss'

export default function ChatInput() {
  return (
    <div className='chat-input'>
        <div className='chat-input__smile-btn'>
            <SmileOutlined />
        </div>
        
          <Input size='large' placeholder="Enter your message..." />

        <div className='chat-input__actions'>
           <PushpinOutlined />
           <AudioOutlined />
           <SendOutlined />
        </div>
    </div>
  )
}
