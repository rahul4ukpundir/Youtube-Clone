import React from 'react'
import "./RecommandationVideos.css";
import VideoCard from './VideoCard.js/VideoCard';
import thumabnail1 from "./images/thumbnail1.jpg";
import thumbnail2 from "./images/thumbnail2.jpg";
import RahulJPG from  "./images/Rahul.jpg";
function RecommandationVideos() {
  return (
    <div className='recommnadationVideos'>
      <h2>Recommandations</h2>
      <div className='recommandationVideos_videos'>
      <VideoCard 
       title ="Become a Web Developer in 10 minutes | 2022/2023"
       channel ="Rahul Pundir"
       views="2.3m Views"
       timestamp="3 days ago"
       image={thumabnail1}
       channelImage ={RahulJPG}
       />
       <VideoCard 
       title ="

       Learn Full Stack in Hindi & English"
       channel ="Rahul Pundir"
       views="2.3m Views"
       timestamp="3 days ago"
       image={thumbnail2}
       channelImage ={RahulJPG}
       />
       <VideoCard 
       title ="Become a Web Developer in 10 minutes | 2022/2023"
       channel ="Rahul Pundir"
       views="2.3m Views"
       timestamp="3 days ago"
       image={thumabnail1}
       channelImage ={RahulJPG}
       />
       <VideoCard 
       title ="Become a Web Developer in 10 minutes | 2022/2023"
       channel ="Rahul Pundir"
       views="2.3m Views"
       timestamp="3 days ago"
       image={thumabnail1}
       channelImage ={RahulJPG}
       />
       <VideoCard 
       title ="Become a Web Developer in 10 minutes | 2022/2023"
       channel ="Rahul Pundir"
       views="2.3m Views"
       timestamp="3 days ago"
       image={thumabnail1}
       channelImage ={RahulJPG}
       />
      </div>
      
    </div>
  )
}

export default RecommandationVideos
