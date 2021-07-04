import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from "firebase";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName]= useState("");
    const [messages, setMessages]= useState([]);
    const [{user}, dispatch] =useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName (snapshot.data().name));

            db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId])

    useEffect(() => {
      setSeed (Math.floor(Math.random() *5000)) 
    }, [roomId])

    const sendMessage= (e) => {
        e.preventDefault();
        console.log("you typed >>>" , input);

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .add({
          message: input,
          name: user.displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

        setInput("");
    };

    return (
        <div className="chat">

            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
                <p>Last seen at{""} 
                 {new Date (
                     messages[messages.length-1]?.
                     timestamp?.toDate()
                     ).toUTCString() }
                </p>
                </div>

                <div className='chat__headerRight'>
                <IconButton>
                   <Search /> 
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
                </div>
            </div>

            <div className='chat__body'>
              {messages.map((message) => (
                <p className={`chat__message ${message.name===user.displayName && "chat__receiver"}`}> 
                    <span 
                     className="chat__name">{message.name}</span>
                     {message.message}
                    <span 
                     className="chat__timestamp">
                     {new Date(message.timestamp?.toDate())
                     .toUTCString()}
                    </span>
                </p>
                ))}
            </div>

            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input 
                    value= {input}
                    placeholder= "Type  message"
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" />
                    <button 
                    onClick={sendMessage} 
                    type = "submit">send a message </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
