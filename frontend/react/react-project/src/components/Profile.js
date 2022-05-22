// TODO: answer here
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSession } from "../api/auth";
import { API_URL } from "../api/config";
import Logo from "../logo.svg";

export default function Profile() {
  // TODO: answer here
  let {UserId} = useParams();
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getSession()

    axios.get(`${API_URL}/profile/${UserId}`, {withCredentials: true}).then((res) => {
      setProfile(res.data.data.profile);
      setPosts(res.data.data.posts);
    })
  }, [])

  return <>
    <div aria-label="Navbar" className="navbar">
        <div className="container">
          <div className="top-nav">
            <div className="app-logo" aria-label="App">
              <a href="/" aria-label="App Title">
                <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png' alt="logo" aria-label="App Logo" />
                Instagram Clone
              </a>
            </div>
            <span>{profile.name}</span>
          </div>
        </div>
      </div>
    <div className="container">
      {
        posts.length > 0 && posts.map((item, index) => {
          return (
            <div aria-label='Post Card' key={index} className='post-card'>
              <img aria-label="Post Image" src={item.image} alt='' className="post-image"/>
              <div className="post-content">
                <Link to={`/profile/${profile.id}`}>{profile.name}</Link>
                <p>{item.content}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  </>
}
