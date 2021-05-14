import { useState } from "react"
const JoinChatForm = ({ displayName, OnSubmit}) => {
    const [chatname, setChatname] = useState('')
    const [roomID, setRoomID] = useState('')

    function SendForm(e){
        e.preventDefault()
        console.log(chatname, roomID)
        OnSubmit(chatname, roomID)
    }
    return (
        
        <div className='addFormWrapper'>
            <form className='addForm' onSubmit={SendForm}>
                    <div className="usernameInput">
                    <label htmlFor="chatName">Chat Name</label>
                    <br></br>
                    <input type="text" required={true} name="chatname" id="chatname" value={chatname} onChange={e => setChatname(e.target.value)} />
                </div>
                <br></br>
                <div className="roomIDInput">
                    <label className='addLabel' htmlFor="roomID">Room ID</label>
                    <br></br>
                    <input type="text" required={true} name="roomID" id="roomID" value={roomID} onChange={e => setRoomID(e.target.value)} />
                </div>
                <button type="submit" >Add Room</button>
            </form>
        </div>
    )
}

export default JoinChatForm
