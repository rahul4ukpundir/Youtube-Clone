import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import SideBarRow from './SideBarRow'
import  WhatsAppIcon  from '@material-ui/icons/Whatshot';
import SubscriptionsIcon  from '@material-ui/icons/Subscriptions';
import  HomeIcon  from '@material-ui/icons/Home';
import { VideoLibrary } from '@material-ui/icons';
import { History } from '@material-ui/icons';
import { OndemandVideo } from '@material-ui/icons';
import { WatchLater } from '@material-ui/icons';
import { ThumbUpAltOutlined } from '@material-ui/icons';
import { ExpandMore } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const location = useLocation();
  const [selectedRow,setSelectedRow ] = useState(null);

  useEffect(()=>{
    setSelectedRow(location.pathname)
  }, [location])

  return (
    <div className='sidebar'>
      <Link to="/">
      <SideBarRow selected ={selectedRow?.includes("/")? true: false}  title ="Home" Icon ={HomeIcon}/></Link>
    
      <Link to="/trending">
      <SideBarRow selected ={selectedRow?.includes("/trending")} title ="Trendings" Icon = {WhatsAppIcon} />
      </Link>

      <SideBarRow title ="Subscriptions" Icon ={SubscriptionsIcon}/>
      <hr/>
      <SideBarRow title ="Library"  Icon ={VideoLibrary} />
      <SideBarRow title ="History"  Icon ={History} />
      <SideBarRow title ="Your Videos"  Icon ={OndemandVideo} />
      <SideBarRow title ="Watch Later"  Icon ={WatchLater} />
      <SideBarRow title ="Liked Videos"  Icon ={ThumbUpAltOutlined} />
      <SideBarRow title ="Show more"  Icon ={ExpandMore} />
    </div>
  )
}

export default SideBar
