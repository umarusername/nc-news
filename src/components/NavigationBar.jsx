import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTopics } from './api'
import Topics from './Topics'

export default function NavigationBar() {

    return (
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Topics />
        </ul>
      </nav> 
    )
}
