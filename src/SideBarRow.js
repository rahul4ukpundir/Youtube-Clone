import React from 'react'
import "./SideBarRow.css";
import { useLocation } from 'react-router';
const SideBarRow = ({selected,title, Icon}) => {
  
  const currentRoute = useLocation().pathname;

  return (
    <div className={`sideBarRow ${selected && 'selected'}`}>
        <Icon className="sideBarRow_icon"/>
        <span className='sideBarRow_title'>{title}</span>
    </div>
  )
}

export default SideBarRow
