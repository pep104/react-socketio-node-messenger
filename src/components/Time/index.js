import React, {Fragment} from 'react'
import propTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ru } from 'date-fns/locale'

export default function Time({ date }) {
    return(
    <Fragment>{formatDistanceToNow(date, {addSuffix: true, locale: ru})}</Fragment>
 )
}

Time.propTypes = {
    date: propTypes.object
}
