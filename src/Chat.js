import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName]= useState("");
    const [messages, setMessages]= useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName (snapshot.data().name));

            db.collection("rooms")
            .docs(roomId)
            .collection(messages)
            .orderBy('timestamp', 'asc')
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
        setInput("");
    };

    return (
        <div className="chat">

            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
                <p>Last seen at ...</p>
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
                <p className={`chat__message ${true && "chat__receiver"}`}> 
                    <span className="chat__name">riya</span>
                    Hey guys
                    <span className="chat__timestamp">3.45pm</span>
                </p>
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
