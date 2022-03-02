import React from 'react'
import { IconReaded } from '..'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import isYesterday from 'date-fns/isYesterday'
import { Avatar } from '..'

const getMessageItem = created_at => {
  if (isToday(created_at)) {
    return format(
      created_at,
      'HH:mm'
    )
  } else if (isYesterday(created_at)) {
    return format(
      created_at, 'dd.MM HH:mm'
    )
  } else {
    return format(created_at, 'dd.mm.yyyy')
  }
}


export default function DialogItem({ user, unreaded, isMe, created_at, text }) {
  return (
    <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline })}>
      <div className='dialogs__item-avatar'>
        {/* <img src={user.avatar} alt={`${user.username} avatar`} /> */}
        <Avatar user={user} />
      </div>
      <div className='dialogs__item-info'>
          <div className='dialogs__item-info-top'>
              <b>{user.username}</b>
              <span>
                {getMessageItem(created_at)}
              </span>
          </div>
          <div className='dialogs__item-info-bottom'>
            <p>
              {text}
            </p>
            {isMe && <IconReaded isMe={true} isReaded={true} />}
            {unreaded > 0 && <div className='dialogs__item-info-bottom-count'>{unreaded > 9 ? '9+' : unreaded}</div>}
          </div>
      </div>
    </div>
  )
}

