import React from 'react';
import './VideoCard.css'
const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-card-info">
        <h2>{video.title}</h2>
        <p>{video.views} · {video.date}</p>
        <p>{video.channel}</p>
      </div>
    </div>
  );
};

export default VideoCard;
