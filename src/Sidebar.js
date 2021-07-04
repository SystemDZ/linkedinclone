import React from 'react'
import { Avatar } from '@material-ui/core'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import {selectUser} from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1547731030-cd126f44e9c5" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoURL} />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1,864</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React')}
                {recentItem('Node')}
                {recentItem('Express')}
                {recentItem('Firebase')}
                {recentItem('Javascript')}
                {recentItem('uiuxdesign')}
            </div>
        </div>
    )
}

export default Sidebar
