import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '',
    isTrue: false,
  }

  changeName = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  fetchedData = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  errorData = errorMsg => {
    this.setState({error: errorMsg, isTrue: true})
  }

  submitData = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.fetchedData(data.jwt_token)
    } else {
      this.errorData(data.error_msg)
    }
  }

  render() {
    const {username, password, isTrue, error} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <div className="bg-container">
          <div className="login-container">
            <div className="login-card">
              <div className="login-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
                  className="login-logo"
                  alt="website logo"
                />
              </div>
              <form className="form" onSubmit={this.submitData}>
                <label htmlFor="username" className="label">
                  USERNAME
                </label>
                <input
                  type="text"
                  id="username"
                  className="input"
                  placeholder="Username"
                  value={username}
                  onChange={this.changeName}
                />
                <label htmlFor="password" className="label">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={this.changePassword}
                />
                <button type="submit" className="login-btn">
                  Login
                </button>
                {isTrue ? <p className="error-msg">*{error}</p> : ''}
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login
