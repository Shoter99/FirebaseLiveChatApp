import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
const ChatRoom = ({roomID, username}) => {
    
    const [messages, setMessages] = useState([])
    console.log(roomID, username)
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
            Hello {username} to chat room {roomID}
            {messages}
        </div>
    )
    
}

export default ChatRoom
