import React from 'react'
import { Link } from 'react-router-dom'

const NavComponent: React.FC = (): JSX.Element => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contactos</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavComponent
