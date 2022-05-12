import { useEffect, useState } from "react"
import React from "react"
import { Link } from "react-router-dom"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"
import Logo from '../logo.svg';

export default function Navbar() {
  return (
    <div aria-label="Navbar" className="navbar">
      <div className="container">
        <div className="top-nav">
          <div className="app-logo">
            <a href="/" aria-label="App Title">
              <img src={Logo} alt="logo" aria-label="App Logo" />
            </a>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <a href="/" className="nav-link">link 1</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">link 2</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">link 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
