import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { labels } from 'texts'
import { NavConf, Link } from './nav.types'
import 'template'

const navConf: NavConf = {
  links: [
    { path: '/home', name: 'Inicio' },
    { path: '/blog', name: 'Blog' },
    { path: '/contact', name: 'Contactenos' },
  ],
  activeClassName: 'active',
}

const useGetActivePathName = (): string => {
  const location = useLocation()
  const link = navConf.links.find((link: Link) => link.path === location.pathname)
  return link?.name || labels.default
}

const genetareLink = (position: number): JSX.Element => {
  return (
    <NavLink
      key={navConf.links[position].path}
      to={navConf.links[position].path}
      activeClassName={navConf.activeClassName}>
      {navConf.links[position].name}
    </NavLink>
  )
}

const NavComponent: React.FC = (): JSX.Element => {
  return (
    <header>
      <div className="header-area">
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="header_bottom_border">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2">
                  <div className="logo">
                    <a
                      href="index.html"
                      style={{
                        color: '#ffffff',
                        fontSize: '30px',
                        fontWeight: 'bold',
                      }}>
                      {labels.title}
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>{genetareLink(0)}</li>
                        <li>{genetareLink(1)}</li>
                        <li>{genetareLink(2)}</li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { NavComponent, useGetActivePathName }
