import {Component} from 'react'
import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import './index.css'

class SimilarJobsPage extends Component {
  render() {
    const {item} = this.props
    const {
      companyLogoUrl,
      employmentType,
      title,
      location,
      rating,
      jobDescription,
    } = item
    return (
      <li className="similar-jobs-items">
        <div className="similar-jobs-logo-container">
          <img
            src={companyLogoUrl}
            alt="similar job company logo"
            className="similar-jobs-logo"
          />
          <div className="similar-jobs-ratings-container">
            <h1 className="similar-jobs-heading">{title}</h1>
            <div className="similar-jobs-sub-rating">
              <BsFillStarFill className="similar-jobs-star" />
              <p className="similar-jobs-star-text">{rating}</p>
            </div>
          </div>
        </div>
        <div className="similar-jobs-desc-container">
          <h1 className="similar-jobs-desc-heading">Description</h1>
          <p className="similar-jobs-desc-text">{jobDescription}</p>
        </div>
        <div className="similar-jobs-details">
          <div className="similar-jobs-loc-intern-container">
            <div className="similar-jobs-location">
              <ImLocation2 className="similar-jobs-desc-icon" />
              <p className="similar-jobs-desc-loc">{location}</p>
            </div>
            <div className="similar-jobs-desc-internship">
              <BsBriefcaseFill className="similar-jobs-desc-icon" />
              <p className="similar-jobs-desc-intern">{employmentType}</p>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default SimilarJobsPage
