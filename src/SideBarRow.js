import React from 'react'
import "./SideBarRow.css";
const SideBarRow = ({selected,title, Icon}) => {
  const isActive = selected ? `sideBarRow ${selected && 'selected'}` : 'sideBarRow'
  return (
    <div className={isActive}>
        <Icon className="sideBarRow_icon"/>
        <span className='sideBarRow_title'>{title}</span>
    </div>
  )
}

export default SideBarRow
