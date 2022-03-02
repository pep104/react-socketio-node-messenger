import React from 'react'
import propTypes from 'prop-types'
import readedSvg from '../../assets/img/readed.svg'
import noReadedSvg from '../../assets/img/noreaded.svg'

export default function IconReaded({ isMe, isReaded }) {
    return(
        isMe ? (isReaded ?(
            <img className='message__icon-readed' src={readedSvg} alt='Readed icon' />
            ) : (
             <img className='message__icon-readed message__icon-readed--no' src={noReadedSvg} alt='No readed icon' />
            )) : ''
 )
}

IconReaded.propTypes = {
    isMe: propTypes.bool,
    isReaded: propTypes.bool,
}
