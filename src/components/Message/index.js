import React, {useState, useRef, useEffect} from 'react'
import './Message.scss'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { IconReaded } from '..'
import { Time } from '..'
import waveSvg from '../../assets/img/wave.svg'
import pauseSvg from '../../assets/img/pause.svg'
import playSvg from '../../assets/img/play.svg'
import { convertToTime } from '../../utils/helpers'

const AudioMessage = ({ audioSrc }) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioElem = useRef(null)

    const togglePlay = () =>{
        if(!isPlaying){
            audioElem.current.play()
        } else {
            audioElem.current.pause()
        }
    }

    useEffect(() => {
        audioElem.current.addEventListener('playing', () => {
            setIsPlaying(true)
        }, false)
        audioElem.current.addEventListener('ended', () => {
            setIsPlaying(false)
            setProgress(0)
            setCurrentTime(0)
        }, false)
        audioElem.current.addEventListener('pause', () => {
            setIsPlaying(false)
        }, false)

        audioElem.current.addEventListener('timeupdate',  () => {
            const duration = (audioElem && audioElem.current.duration) || 0
            setCurrentTime(audioElem.current.currentTime)
            setProgress((audioElem.current.currentTime / duration) * 100)
        })
    }, [])

   


    return (
        <div className='message__audio'>
         <audio src={audioSrc} ref={audioElem} preload='auto'/>
           <div className='message__audio-progress' style={{ width: progress + '%' }}/>
           <div className='message__audio-info'>
               <div className='message__audio-btn'>
                   <button onClick={togglePlay}>
                       {isPlaying ? <img src={pauseSvg} alt='Pause svg' /> : <img src={playSvg} alt='Play svg' />}
                   </button>
               </div>
               <div className='message__audio-wave'>
                   <img src={waveSvg} alt='Wave svg' />
               </div>
               <span className='message__audio-duration'>
                   {convertToTime(currentTime)}
               </span>
           </div>
         </div>
    )
}

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping, audio }) => {   
    return (
          <div className={classNames('message',
           {'message--isme': isMe,
            'message--is-typing': isTyping,
            'message--is-audio': audio,
            'message--image': attachments && attachments.length === 1 })}
           >
             <div className='message__content'>
                 <IconReaded isMe={isMe} isReaded={isReaded} />
              <div className='message__avatar'>
                  <img src={avatar} alt={`Avatar ${user.fullname}`} />
              </div>
              <div className='message__info'>
                 <div>
                      {(audio || text || isTyping) && (<div className='message__bubble'>
                          {text && <p className='message__text'>{text}</p>}
                          {isTyping && (<div className='message__typing'>
                              <span/>
                              <span/>
                              <span/>
                          </div>)}
                          {audio && <AudioMessage audioSrc={audio} /> }
                      </div>)}
                     
                          {
                              attachments &&  (<div className='message__attachments'>
                                  {attachments.map(item => (
                                  <div key={item.filename} className='message__attachments-item'>
                                      <img key={item.filename} src={item.url} alt={item.filename} />
                                  </div>
                              ))}
                              </div>
                              )}
                      
                      {date && <span className='message__date'>
                          <Time date={date} />    
                      </span>}
                 </div>
              </div>
            </div>
          </div> 
      )
  }




Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: propTypes.string,
    user: propTypes.object,
    text: propTypes.string,
    date: propTypes.object,
    attachments: propTypes.array,
    isTyping: propTypes.bool, 
    isMe: propTypes.bool,
    isReaded: propTypes.bool,
    audio: propTypes.string
}

export default Message