import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, InsertEmoticon, MicOutlined, SearchOutlined} from '@material-ui/icons'
import React from 'react'
import './Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className='chat__message'>
                    <span className='chat__messageName'>Jaaf</span>
                    This is a message
                    <span className='chat__messageTime'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat__message chat__reciever'>
                    <span className='chat__messageName'>Jaaf</span>
                    This is a message
                    <span className='chat__messageTime'>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form action="">
                    <input
                    // onChange={ (e)=>{
                    //     return SettingsInputAntenna(e.target.value)
                    // }}
                    type="text"
                    placeholder="Type a message"
                    />
                    <button
                    // onClick={sendMessage}
                    type="submit">
                        Send message
                    </button>
                </form>
                <MicOutlined/>
            </div>
        </div>
    )
}

export default Chat
