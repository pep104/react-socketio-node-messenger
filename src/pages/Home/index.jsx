import React from "react";
import { Dialogs, Message, Status } from "../../components";
import { TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined } from '@ant-design/icons'
import './Home.scss'
import auidoMP3 from '../../mp3/promise-616.mp3'
import { Input } from 'antd';
import { ChatInput } from "../../components";

const { Search } = Input;

const Home = () => (
  <section className="home">
    
    <div className="chat">
      <div className="chat__sidebar">

        <div className="chat__sidebar-header">
          <div>
            <TeamOutlined />
            <span>Dialogue list</span>
          </div>
          <FormOutlined />
        </div>

        <div className="chat__sidebar-search">
          <Search placeholder="Search among dialogues" />
        </div>

        <div className="chat__sidebar-dialogs">
              <Dialogs userId={0} items={[
            {
              id: '0b137a4f2b9ce2ea0e6472787015ea19',
              text: 'Соображения высшего порядка,а также рамки и место обучения кадров в значительной степени обуславливает создание ключевых компонентов планируемого обновления.',
                isReaded: false,
                created_at: new Date('Sun Feb 19 2021 16:09:08'),
                user: {
                  id: '0b137a4f2b9ce2ea0e6472787015ea19',
                  username: 'Артем',
                  avatar: null
                }
            },
            {
              id: 'e04e5515fa51c16488a86803c3913234',
              text: 'Значительной степени обуславливает создание ключевых компонентов планируемого обновления.',
                isReaded: false,
                created_at: new Date('Sun Feb 20 2022 16:09:08'),
                user: {
                  id: 'e04e5515fa51c16488a86803c3913234',
                  username: 'Тимикс',
                  avatar: null
                }
            }
          ]} />
        </div>

      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div />
         <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Артем</b>
              <div className="chat__dialog-header-status">
                <Status online={true} />
              </div>
         </div>
         <EllipsisOutlined style={{ fontSize: '22px' }} />
        </div>
        <div className="chat__dialog-messages">
                  <Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                text='Test Message' date={new Date('Sun Feb 20 2022 16:09:08')} 
                isMe={false}
                isReaded={false}
                attachments={[
                  {
                    filename: '1image.jpg',
                    url: 'https://source.unsplash.com/random/100x100'
                  },
                  {
                    filename: '2image.jpg',
                    url: 'https://source.unsplash.com/random/100x100'
                  },
                  {
                    filename: '3image.jpg',
                    url: 'https://source.unsplash.com/random/100x100'
                  },
                ]}
                />
              <Message avatar='https://images.unsplash.com/photo-1640622304896-2af07ccb1c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              text='test message' 
              date={new Date('Sun Feb 20 2022 16:09:08')} 
              isMe={true} 
              isReaded={true}
              />

          <Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              date={new Date('Sun Feb 20 2022 17:09:08')} 
                isMe={false}
                isReaded={false}
                attachments={[
                  {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/random/150x150'
                  },
                ]}
                />

          <Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                date={new Date('Sun Feb 20 2022 10:09:08')} 
                isMe={false}
                isReaded={false}
                audio={auidoMP3}
                
                />

            <Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                isTyping
                isReaded={false}
              />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>

    {/* <Dialogs userId={0} items={[
      {
        id: '0b137a4f2b9ce2ea0e6472787015ea19',
        text: 'Соображения высшего порядка,а также рамки и место обучения кадров в значительной степени обуславливает создание ключевых компонентов планируемого обновления.',
          isReaded: false,
          created_at: new Date('Sun Feb 19 2021 16:09:08'),
          user: {
            id: '0b137a4f2b9ce2ea0e6472787015ea19',
            username: 'Артем',
            avatar: null
          }
      },
      {
        id: 'e04e5515fa51c16488a86803c3913234',
        text: 'Значительной степени обуславливает создание ключевых компонентов планируемого обновления.',
          isReaded: false,
          created_at: new Date('Sun Feb 20 2022 16:09:08'),
          user: {
            id: 'e04e5515fa51c16488a86803c3913234',
            username: 'Тимикс',
            avatar: null
          }
      }
    ]} /> */}
    
    {/* <Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
      date={new Date('Sun Feb 20 2022 10:09:08')} 
      isMe={false}
      isReaded={false}
      audio={auidoMP3}
      
      />
      <Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
      date={new Date('Sun Feb 20 2022 10:09:08')} 
      isMe={false}
      isReaded={false}
 
      
      /> */}


    {/* <Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
      text='Test Message' date={new Date()} 
      isMe={false}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/random/100x100'
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/random/100x100'
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/random/100x100'
        },
      ]}
      />
    <Message avatar='https://images.unsplash.com/photo-1640622304896-2af07ccb1c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    text='Test Message' 
    date={new Date()} 
    isMe={true} 
    isReaded={true}
    />

    <Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
      isTyping
    />

<Message avatar='https://images.unsplash.com/photo-1640597995884-57667d173ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
     date={new Date()} 
      isMe={false}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/random/150x150'
        },
      ]}
      /> */}
  </section>
);

export default Home;
