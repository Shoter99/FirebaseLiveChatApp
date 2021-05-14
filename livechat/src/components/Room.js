import { Link } from "react-router-dom"

const Room = ({roomID, roomName, docID, onDelete}) => {
    return (
        <div className='Room'>
            <div className='roomName'><p>Name: {roomName}</p><span onClick={() => onDelete(docID)}>❌</span>  </div>
            <div className='JoinBtn' ><Link className='btn' to={{pathname: '/chat_room', state: { roomName, roomID }}}>Join Room</Link></div>
            <div className='roomID'>ID: {roomID}</div>
        </div>
    )
}

export default Room
