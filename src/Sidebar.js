import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVert  from '@material-ui/icons/MoreVert'
import ChatIcon from '@material-ui/icons/Chat';
import './Sidebar.css';


function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
                <Avatar />   
                <div className="sidebar__headerRight">
                <DonutLargeIcon />
                <ChatIcon />
                <MoreVert />
            
            
                </div>     
           </div>
           <div className="sidebar__search">
               
           </div>
           <div className="sidebar__chats">
               
           </div>
        </div>
    )
}

export default Sidebar
