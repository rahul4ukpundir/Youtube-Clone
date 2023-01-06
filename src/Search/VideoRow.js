import React from 'react'
import "./VideoRow.css";


const VideoRow = ({title, views, image, channel, timestamp, subs, description}) => {
  return (
    <div className='videoRow'>
      <img src= {image} className ='videoRow_logo' />
      <div className='videoRow_text'>
        <h2>{title}</h2>
        <p className='videoRow_headline'>{channel} .  <span className='videoRow_subsNumber'>{subs} Subscribers </span> {views} . {timestamp} </p>
        <p className='videoRow_description'>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
