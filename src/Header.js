import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search";
import VideoIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationIcon from "@material-ui/icons/Notifications"
import { Avatar } from '@material-ui/core';
import "./Header.css";
import RahulJPG from "./images/Rahul.jpg";
import {Link} from "react-router-dom"

function Header() {
    const [inputSearch, setInputSearch] = React.useState("");
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon />
                <Link to="./">
                <img
                    className='header__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                    alt="" />
                </Link>
               
            </div>
            <div className='header__input'>
                <input type="text" placeholder='Search' onChange={(e)=> setInputSearch(e.target.value)}/>

                <Link to={`/search/${inputSearch}`}>
                <SearchIcon  className='header__inputButton'/>
                </Link>
                
            </div>
            <div className='header__right'>
                <VideoIcon className='header-icon' />
                <AppsIcon className='header-icon'/>
                <NotificationIcon className='header-icon'/>
                <Avatar src={RahulJPG} className ="user__photo"/>
            </div>

        </div>
    )
}

export default Header
