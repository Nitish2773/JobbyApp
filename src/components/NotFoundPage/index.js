import {Component} from 'react'
import Header from '../Header'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="not-found-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
            className="not-found-img"
            alt="not found"
          />
          <h1 className="not-found-heading">Page Not Found</h1>
          <p className="not-found-text">
            We are sorry, the page you requested could not be found.
          </p>
        </div>
      </>
    )
  }
}

export default NotFound
