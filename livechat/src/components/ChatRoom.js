import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import firebase from '../firebase'
const ChatRoom = ({user}) => {
    
    const location = useLocation()
    const { roomName, roomID} = location.state
    const [messages, setMessages] = useState([])
    /*useEffect(() => {
        const firestore = firebase.firestore()
        var user = firebase.auth().currentUser
        console.log(roomID)
        console.log(username)
        if(!user || roomID === ''){

            window.location.replace('/')
        } 
        else{
            firestore
        .collection(roomID)
        .onSnapshot((snapshot) => {
            const newMessages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) 
            setMessages(newMessages)
        })
        }
    }, [])
*/
    const leaveRoom = () => window.location.replace('/')
    return (
        <div>
            <button onClick={leaveRoom}  className='leaveRoom'>Leave Room</button>
            Hello {user.displayName} to chat room {roomID}
            {messages}
        </div>
    )
    
}

export default ChatRoom
