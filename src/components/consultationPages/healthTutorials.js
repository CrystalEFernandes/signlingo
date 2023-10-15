import React from 'react';
import VideoCard from './VideoCard'; // Create a VideoCard component

const VideoPage = () => {
  const videoData = [
    {
      id: 1,
      title: 'Video 1',
      views: '1M views',
      date: '1 day ago',
      channel: 'Channel 1',
      thumbnail: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      title: 'Video 2',
      views: '500K views',
      date: '2 days ago',
      channel: 'Channel 2',
      thumbnail: 'https://via.placeholder.com/300x200',
    },
    // Add more video data objects
  ];

  return (
    <div className="home-page">
      <div className="video-list">
        {videoData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoPage;