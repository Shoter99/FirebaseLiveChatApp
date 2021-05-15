import React from 'react'

const ChatMessage = ({message, user}) => {

    return (
        <div className={ user.uid === message.userUID ?  'messageField recived' : 'messageField'}>
            <p className='Username'>{message.user}</p>
            <div className='chatMessage'>
                <p>{message.text}
                </p>
            </div>
        </div>
    )
}

export default ChatMessage
