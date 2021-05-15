import React from 'react'
import ChatMessage from './ChatMessage'
const ChatField = ({ messages, user }) => {
    return (
        <div className='chatField'>
            {messages.map(message => (
                <ChatMessage key={message.id} user={user} message={message}/>
            ))}
        </div>
    )
}

export default ChatField
