import { useState } from "react"

const JoinChatForm = ({ displayName, OnSubmit}) => {
    const [username, setUsername] = useState(displayName)
    const [roomID, setRoomID] = useState("")

    function SendForm(e){
        e.preventDefault()

        OnSubmit(username, roomID)
    }
    return (
        
        <div className='joinFormWrapper'>
            <div className="welcome">Welcome <br></br> <span className='username'>{username} </span></div>
            <form className='joinForm' onSubmit={SendForm}>
                    <div className="usernameInput">
                    <label htmlFor="username">Username</label>
                    <br></br>
                    <input type="text" required={true} name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <br></br>
                <div className="roomIDInput">
                    <label className='joinLabel' htmlFor="roomID">Room ID</label>
                    <br></br>
                    <input type="text" required={true} name="roomID" id="roomID" value={roomID} onChange={e => setRoomID(e.target.value)} />
                </div>
                <button type="submit" >Join Room</button>
            </form>
        </div>
    )
}

export default JoinChatForm
