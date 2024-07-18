import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

class Header extends Component {
  logoutApp = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-large">
          <Link to="/" className="links">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="lg-logo"
              alt="website logo"
            />
          </Link>
          <ul className="lg-nav-items">
            <Link to="/" className="links">
              <li className="lg-nav-links">Home</li>
            </Link>
            <Link to="/jobs" className="links">
              <li className="lg-nav-links">Jobs</li>
            </Link>
          </ul>
          <div className="logout-btn-container">
            <button
              type="button"
              className="logout-btn"
              onClick={this.logoutApp}
            >
              Logout
            </button>
          </div>

          <ul className="sm-nav-items">
            <Link to="/" className="links">
              <li className="sm-nav-links">
                <AiFillHome />
              </li>
            </Link>
            <Link to="/jobs" className="links">
              <li className="sm-nav-links">
                <BsBriefcaseFill />
              </li>
            </Link>
            <li className="sm-nav-links">
              <button className="lg-btn" type="button">
                <FiLogOut onClick={this.logoutApp} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
