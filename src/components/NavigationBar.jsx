import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {

    return (
      <div>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      
    )
}