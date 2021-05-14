import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import Room from './Room'
function useRooms(uid){
    const [rooms, setRooms] = useState([])



    useEffect(() => {
        firebase.firestore()
        .collection(uid)
        .onSnapshot((snapshot) => {
            const newRooms = snapshot.docs.map((doc ) => ({
                id: doc.id,
                ...doc.data()
            }))
            setRooms(newRooms)
        })
    }, [])
    return rooms
}

const RoomList = ({ user }) => {
    function deleteRoom (id){
        firebase.firestore()
        .collection(user.uid)
        .doc(id)
        .delete()
    }
    const rooms = useRooms(user.uid)
    return (
        <div className='roomList'>

        {rooms.map((room) => (
            <Room key={room.id} onDelete={deleteRoom} roomID={room.roomID} docID={room.id} roomName={room.roomName} />
            ))} 
        </div>
    )
}

export default RoomList
