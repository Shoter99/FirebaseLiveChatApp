import { useEffect, useState } from "react"
import JoinChatForm from "./AddChatForm"
import ChatRoom from './ChatRoom'
import RoomList from './RoomList'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import firebase from '../firebase'


const HomePage = ( {user, onLogOut} ) => {
    const [addRoom, setAddRoom] = useState(false)
    const [username, setUsername] = useState(user.displayName)
    const [roomName, setRoomName] = useState('')
    const [chatroomID, setRoomID] = useState('')
    const [changingName, setChangingName] = useState(false)

    function showchageUsername(){
        setChangingName(true)
    }
    function changeUsername(e){
        e.preventDefault()
        const user = firebase.auth().currentUser
        console.log(username)
        user.updateProfile({
            displayName: username,
        }).then(() => setChangingName(false))
    }

    const AddRoom = (name, roomID) =>{
        setRoomName(name)
        setRoomID(roomID)
    } 
    useEffect(() => {
        if(chatroomID!== ''){
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
                    <div className="welcome">Welcome <br></br> <span className='username'><button onClick={showchageUsername}>{changingName ?
                        <form onSubmit={changeUsername}>
                            <input id="usernameChange" type="text" value={username} onChange={e => setUsername(e.target.value)} /> 
                        </form>
                        : username}</button> </span></div>
                    <div className='btn-wrapper'><button className='showFormBtn' onClick={() => setAddRoom(!addRoom)}>{addRoom ? 'Hide Form' : 'Add Room'} </button></div>
                    {addRoom ? <JoinChatForm {...props} OnSubmit={AddRoom} displayName={user.displayName} /> : ''}
                    <RoomList user={user} roomID={chatroomID}/>
                </> )} />
            <Route path={`/chat_room`} render={props => <ChatRoom {...props} user={user}  />} />
        </Router>
    )
}

export default HomePage
