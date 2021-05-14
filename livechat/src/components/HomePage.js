import { useEffect, useState } from "react"
import JoinChatForm from "./AddChatForm"
import ChatRoom from './ChatRoom'
import RoomList from './RoomList'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import firebase from '../firebase'


const HomePage = ( {user, onLogOut} ) => {
    const [addRoom, setAddRoom] = useState(false)
    const [inRoom, setInRoom] = useState(false)
    const [username, setUsername] = useState(user.displayName)
    const [roomName, setRoomName] = useState('')
    const [chatroomID, setRoomID] = useState('')

    function JoinRoom(name, roomID){
        setRoomName(name)
        setRoomID(roomID)
    } 
    useEffect(() => {
        if(chatroomID!= ''){
        firebase.firestore()
        .collection(user.uid)
        .add({
            roomName,
            roomID: chatroomID
        })
    }
    }, [chatroomID])
    
    return (
        <Router>
            <div className='homePage'>
                <div className='logOut'>
                    <button  onClick={onLogOut} className="logOutBtn">Log Out</button>
                </div>

            </div>
            <Route exact path='/' render={props => (
                <> 
                    <div className="welcome">Welcome <br></br> <span className='username'>{username} </span></div>
                    <button onClick={() => setAddRoom(!addRoom)}>{addRoom ? 'Hide Form' : 'Add Room'} </button>
                    {addRoom ? <JoinChatForm {...props} OnSubmit={JoinRoom} displayName={user.displayName} /> : ''}
                    <RoomList user={user} roomID={chatroomID}/>
                </> )} />
            <Route path={`/chat_room`} render={props => <ChatRoom {...props} username={username} roomID={chatroomID}  />} />
        </Router>
    )
}

export default HomePage
