import { Avatar } from '@material-ui/core'
import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import "./SearchPage.css";
import thumabnail1 from "../images/thumbnail1.jpg";
import thumbnail2 from "../images/thumbnail2.jpg";
import RahulJPG from "../images/Rahul.jpg";
function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_fiter'>
        <TuneOutlined className='searchPage_filterIcon' />
        <h2 className='searchPage_filterText'>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image={RahulJPG}
        channel="Rahul Pundir"
        verfied={true}
        subs={"30k "}
        noOfVideos="230 Videos"
        description="A Channel Description (also known as a “YouTube About Page”) is a brief outline of what type of content you publish on your channel. It appears on your Channel Page and in YouTube’s search results."
      />
      <VideoRow
        title="Build youtube clone with React js"
        views="1,2M Views"
        image={thumabnail1}
        channel="Rahul Tech"
        timestamp="3days ago"
        subs={"30k "}
        description="A Channel Description (also known as a “YouTube About Page”) is a brief outline of what type of content you publish on your channel. It appears on your Channel Page and in YouTube’s search results."
      />

      <VideoRow
        title="Python Full stack course"
        views="1,2M Views"
        image={thumbnail2}
        channel="Rahul Tech"
        timestamp="3days ago"
        subs={"30k "}
        description="A Channel Description (also known as a “YouTube About Page”) is a brief outline of what type of content you publish on your channel. It appears on your Channel Page and in YouTube’s search results."
      />
      <VideoRow
        title="Build youtube clone with React js"
        views="1,2M Views"
        image={thumabnail1}
        channel="Rahul Tech"
        timestamp="3days ago"
        subs={"30k "}
        description="A Channel Description (also known as a “YouTube About Page”) is a brief outline of what type of content you publish on your channel. It appears on your Channel Page and in YouTube’s search results."
      />

      <VideoRow
        title="Python Full stack course"
        views="1,2M Views"
        image={thumbnail2}
        channel="Rahul Tech"
        timestamp="3days ago"
        subs={"30k "}
        description="A Channel Description (also known as a “YouTube About Page”) is a brief outline of what type of content you publish on your channel. It appears on your Channel Page and in YouTube’s search results."
      />


    </div>
  )
}

export default SearchPage
