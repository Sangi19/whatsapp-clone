import React, { useEffect, useState } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVert  from '@material-ui/icons/MoreVert'
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core';
import "./Sidebar.css";
import SidebarChat from "./SidebarChat.js";
import { SearchOutlined } from "@material-ui/icons";
import db from './firebase';
import { useStateValue } from './StateProvider';


function Sidebar() {   
    const [rooms, setRooms] = useState ([]);
    const [{ user }, dispatch] = useStateValue();


    useEffect(() => {
      const unsubscribe= db.collection("rooms").onSnapshot((snapshot)=> 
            setRooms(
                snapshot.docs.map((doc) =>
            ({
                id: doc.id,
                data: doc.data(),
            })    
         ))
        );  
        return () => {
            unsubscribe();  
        }    
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
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
                <SidebarChat addNewChat />
                {
                    rooms.map(room=> (
                        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                    ))
                }  
                          
            </div>
        </div>
    )
}

export default Sidebar
