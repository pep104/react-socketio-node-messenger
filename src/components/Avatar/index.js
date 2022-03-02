import React from 'react'
import propTypes from 'prop-types'
import './Avatar.scss'
import { generateAvatar } from '../../utils/helpers'


export default function Avatar({ user }) {
    if (user.avatar) {
        return (
        <img className='avatar' src={user.avatar}
        alt={`Avatar ${user.username}`} />
        )
      } else {
        const {color, colorLighten} = generateAvatar(user.id)
        const firstChar = user.username[0]
        return <div style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)` }} 
        className='avatar avatar--symbol'>
            {firstChar}
        </div>
      }
}

Avatar.propTypes = {
    className: propTypes.string
}