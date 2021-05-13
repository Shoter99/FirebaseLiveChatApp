import {  useState } from "react"
import JoinChatForm from "./JoinChatForm"
import firebase from '../firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'

const HomePage = ( {user, onLogOut} ) => {
    const [inRoom, setInRoom] = useState(false)
    const [username, setUsername] = useState('')
    const [roomID, setRoomID] = useState('')
    const firestore = firebase.firestore()
    var messages = []
    function JoinRoom(name, roomID){
        setUsername(name)
        setRoomID(roomID)
        setInRoom(true)
        
        const messagesRef = firestore.collection('messages')
        const query = messagesRef.limit(25)

        messages  = useCollectionData(query, {'roomID': roomID})
    }
    
    return (
        <div className='homePage'>
            <div className='logOut'>
                <button  onClick={onLogOut} className="logOutBtn">Log Out</button>
            </div>
            
            {inRoom ? `Welcome ${username} to room ${roomID} ${messages}` :<JoinChatForm OnSubmit={JoinRoom} displayName={user.displayName}/>}
        </div>
    )
}

export default HomePage
