import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import { useLocation } from 'react-router'
import SendMessageField from './SendMessageField'
import ChatField from './ChatField'


function useMessages(roomID, user) {
    const [messages, setMessages] = useState([])

    const firestore = firebase.firestore()
    var currentUser = firebase.auth().currentUser

    

    useEffect(() => {
        if(!currentUser || roomID === ''){

            window.location.replace('/')
        } 
        else{
            firestore
        .collection(roomID)
        .orderBy('createdAt')
        .onSnapshot((snapshot) => {
            const newMessages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) 
            setMessages(newMessages)
            const chat = document.body.querySelector('.chatField')
            chat.scrollTop = chat.scrollHeight
        })
        }
    }, [])
    return messages;
}

const ChatRoom = ({user}) => {
    
    const location = useLocation()
    const { roomName, roomID} = location.state
    const messages = useMessages(roomID, user)
    

    const leaveRoom = () => window.location.replace('/')
    
    return (
        <div>
            <button onClick={leaveRoom}  className='leaveRoom'>Leave Room</button>
            <ChatField messages={messages} user={user}/>
            <SendMessageField user={user} roomID={roomID}/>
        </div>
    )
    
}

export default ChatRoom
