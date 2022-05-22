import { useEffect, useState } from "react"
import React from "react"
import { Link, Navigate } from "react-router-dom"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"
import "../assets/style/components/navbar.scss";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {
    const session = await getSession();
    // setUser(session?.data.user);
    // if (session?.status === 200) {
    //   setIsLoggedIn(true);
    // } else {
    //   setIsLoggedIn(false);
    // }
    if (session !== undefined) setUser(session.data.user);
    if (session !== undefined){
      if (session.status === 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }

  const handleLogin = () => {
    auth();
  }
  
  return (
    <>
      <div aria-label="Navbar" className="navbar">
        <div className="container">
          <div className="top-nav">
            <div className="app-logo" aria-label="App">
              <a href="/" aria-label="App Title">
                <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png' alt="logo" aria-label="App Logo" />
                Instagram Clone
              </a>
            </div>
            <ul className="nav">
              {
                isLoggedIn ? 
                (<li className="nav-item">
                  <a href={`/profile/${user.id}`} className="nav-link" aria-label="Profile">{user.name}</a>
                </li>)
                : 
                (<li className="nav-item">
                  <button aria-label="Login" onClick={handleLogin}>Login</button>
                </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
