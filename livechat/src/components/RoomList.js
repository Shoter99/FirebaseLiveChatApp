import React, { useEffect, useState } from 'react'
import firebase from '../firebase'

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
    const rooms = useRooms(user.uid)
    return (
        <div>

        {rooms.map((room) => (
            <div key={room.id}>{room.roomName}</div>
            ))} 
        </div>
    )
}

export default RoomList
