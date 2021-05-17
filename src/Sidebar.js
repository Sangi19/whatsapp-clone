import { Avatar } from '@material-ui/core'
import MoreVert  from '@material-ui/icons/MoreVert'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLarge from '@material-ui/icons/Chat';
import React from 'react'

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
                <Avatar />   
                <div className="sidebar__headerRight">
                <DonutLarge />
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
