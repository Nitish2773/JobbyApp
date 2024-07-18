import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import './index.css'

class JobDetails extends Component {
  render() {
    const {item} = this.props
    const {
      id,
      companyLogoUrl,
      employmentsType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
    } = item
    return (
      <li className="job-details-container">
        <Link to={`/jobs/${id}`} className="specific-job-links">
          <div className="jd-logo-container">
            <img src={companyLogoUrl} alt="company logo" className="jd-logo" />
            <div className="jd-text-container">
              <h1 className="jd-heading">{title}</h1>
              <div className="jd-rating-container">
                <BsFillStarFill className="star-icon star-bg" />
                <p className="jd-rating rating-text">{rating}</p>
              </div>
            </div>
          </div>
          <div className="jd-details">
            <div className="jd-loc-intern-container">
              <div className="jd-location">
                <ImLocation2 className="icon" />
                <p className="jd-loc">{location}</p>
              </div>
              <div className="jd-internship">
                <BsBriefcaseFill className="icon" />
                <p className="jd-intern">{employmentsType}</p>
              </div>
            </div>
            <div className="package-container">
              <p className="jd-package">{packagePerAnnum}</p>
            </div>
          </div>
          <hr className="line" />
          <h1 className="jd-desc">Description</h1>
          <p className="jd-desc-text">{jobDescription}</p>
        </Link>
      </li>
    )
  }
}

export default JobDetails
