import React from 'react'
import './Block.scss'
import classNames from 'classnames'

export default function Block({ children, className }) {
  return (
    <div className={classNames('block', className)}>
      {children}
    </div>
  )
}
