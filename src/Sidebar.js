import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVert  from '@material-ui/icons/MoreVert'
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core';
import './Sidebar.css';
import { SearchOutlined } from '@material-ui/icons';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                   <IconButton>
                    <DonutLargeIcon />
                   </IconButton>
                   <IconButton>
                    <ChatIcon />
                   </IconButton>
                   <IconButton>
                    <MoreVert />
                   </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start a new chat" type="text" />
                </div>                
            </div>
            <div className="sidebar__chats">
                <h1>slidebar</h1>
                <h1>slidebar</h1>
                <h1>slidebar</h1>
                <h1>slidebar</h1>
                <h1>slidebar</h1>
                <h1>slidebar</h1>
                <h1>slidebar</h1>
                <h1>slidebar</h1>
            </div>
        </div>
    )
}

export default Sidebar
