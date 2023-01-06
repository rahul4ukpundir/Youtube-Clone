import { Avatar } from '@material-ui/core'
import { VerifiedUser } from '@material-ui/icons';
import React from 'react'
import "./ChannelRow.css";

const ChannelRow = ({image, channel, verfied, subs, noOfVideos, description}) => {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow_logo' src ={image}/>
      <div className='channelRow_text' >
        <h4>{channel}
         {verfied && <VerifiedUser />}
        </h4>
        <p>{subs} subscribers .  {noOfVideos}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
