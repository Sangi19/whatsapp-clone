import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';

function Chat() {
    const [seed, setseed] = useState('');

    useEffect(() => {
      setseed (Math.floor(Math.random() *5000))
    }, [])

    return (
        <div className="chat">

            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat__headerInfo'>
                <h3>Room Name</h3>
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
                <form></form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
