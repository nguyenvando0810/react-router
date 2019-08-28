import React from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name: 'About',
    to: '/about',
    exact: false
  },
  {
    name: 'Products',
    to: '/products',
    exact: false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? 'active dodo' : ''

        return (
          <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={to}>{label}</Link>
          </li>
        )
      }}
    />
  )
}

class Navbar extends React.Component {
  showMenu = (menus) => {
    if (menus.length > 0) {
      return menus.map((menu, index) => {
        return <MenuLink key={index} to={menu.to} label={menu.name} activeOnlyWhenExact={menu.exact} />
      })
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to='/'>Router</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {/* <MenuLink to="/" label="Home" activeOnlyWhenExact={true} />
              <MenuLink to="/contact" label="Contact" activeOnlyWhenExact={false} />
              <MenuLink to="/about" label="About" activeOnlyWhenExact={false} /> */}

              {this.showMenu(menus)}

              {/* <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" exact to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to='/contact'>Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to='/about'>About</NavLink>
                </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
