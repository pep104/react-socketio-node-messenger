import React from 'react'
import './Dialogs.scss'
import { DialogItem } from '..'
import orderBy from 'lodash/orderBy'

export default function Dialogs({ items, userId }) {
  return (
    <div className="dialogs">
      {orderBy(items, ['created_at'], ['desc']).map(item => 
        <DialogItem 
        key={item.id}
        isMe={item.user.id === userId}
        {...item}
        />
      )}
    </div>

  )
}
