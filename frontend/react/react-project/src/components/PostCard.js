// TODO: answer here
import React from 'react';
import LikeDisLikeButton from './LikeDislikeButton';
import '../assets/style/components/postCard.scss';

export default function PostCard({ image, caption, username, userId, date, liked, disliked, likeCount, dislikeCount }) {
  // TODO: answer here

  return <>
    <div aria-label='Post Card' className='post-card'>
      <img aria-label="Post Image" src={image} alt='' className='post-image'/>
      <LikeDisLikeButton 
      id={userId}
      isLiked={liked}
      isDisliked={disliked}
      likeCount={likeCount} 
      dislikeCount={dislikeCount}
      />
      <div className='post-content'>
        <h2 className='post-username' aria-label="Post User Name">{username}</h2>
        <p aria-label="Post Caption">{caption}</p>
        <span className='post-date' aria-label="Post Date">{date}</span>
      </div>
    </div>
  </>
}
