import React, { useState } from 'react'
import firebase from '../firebase'
import {ReactComponent as Send} from '../img/paper-plane.svg'
const SendMessageField = ({ user, roomID }) => {
    const [message, setMessage] = useState('')
    
    
    function onSubmit(e){
        e.preventDefault()
        SendMessage()
    }

    function SendMessage(){
        
        const timestamp = firebase.firestore.FieldValue.serverTimestamp()
        firebase.firestore()
        .collection(roomID)
        .add({
            text: message,
            user: user.displayName,
            userUID: user.uid,
            createdAt: timestamp
        })
        setMessage('')
        const chat = document.body.querySelector('.chatField')
        chat.scrollTop = chat.scrollHeight
    }

    return (
        <div>
            <form className='sendMessage' onSubmit={onSubmit}>
            <div className='messageInput'> <input required={true} type="text" value={message} onChange={e => setMessage(e.target.value)} name="message" id="message" /> </div>
            <div className='sendIcon'><button type='submit'><Send  className='send'/></button></div>
            </form>
        </div>

    )
}

export default SendMessageField
