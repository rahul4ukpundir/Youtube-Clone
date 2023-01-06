import { Avatar } from '@material-ui/core';
import React from 'react'
import "./VideoCard.css";

const VideoCard = ({ title, views, image, channel, timestamp, channelImage }) => {
  return (
    <div className='video-card'>
      <img src={image} className='videoCard_thumbnail' />
      <div className='video_info'>
        <Avatar
          className='video_avatar'
          src={channelImage}
          alt={channel}
        />
        <div className='video_text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} . {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
