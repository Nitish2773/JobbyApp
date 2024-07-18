import {Component} from 'react'
import {BsBriefcaseFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'
import {ImLocation2} from 'react-icons/im'
import './index.css'

class JobDescription extends Component {
  render() {
    const {jobsData} = this.props
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      skills,
      title,
    } = jobsData
    return (
      <li className="job-description-container">
        <div className="description-logo-container">
          <img
            src={companyLogoUrl}
            alt="job details company logo"
            className="desc-logo"
          />
          <div className="description-ratings-container">
            <h1 className="desc-heading">{title}</h1>
            <div className="desc-sub-rating">
              <AiFillStar className="desc-star" />
              <p className="desc-star-text">{rating}</p>
            </div>
          </div>
        </div>
        <div className="desc-details">
          <div className="desc-loc-intern-container">
            <div className="desc-location">
              <ImLocation2 className="desc-icon" />
              <p className="desc-loc">{location}</p>
            </div>
            <div className="desc-internship">
              <BsBriefcaseFill className="desc-icon" />
              <p className="desc-intern">{employmentType}</p>
            </div>
          </div>
          <div className="desc-package-container">
            <p className="desc-package">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <div className="desc-job-links">
          <h1 className="job-desc-heading">Description</h1>
          <div className="link-container">
            <a href={companyWebsiteUrl} className="jb-link">
              Visit
            </a>
            <BiLinkExternal className="link-icon" />
          </div>
        </div>
        <p className="job-desc-text">{jobDescription}</p>
        <div className="skills-container">
          <h1 className="skills-heading">Skills</h1>
          <ul className="skills-card">
            {skills.map(item => (
              <li className="skills-items" key={item.name}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="skills-img"
                />
                <p className="skills-name">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="company-container">
          <h1 className="company-heading">Life at Company</h1>
          <div className="company-card">
            <div className="company-content">
              <p className="company-text">{lifeAtCompany.description}</p>
            </div>
            <img
              src={lifeAtCompany.imageUrl}
              alt="life at company"
              className="company-img"
            />
          </div>
        </div>
      </li>
    )
  }
}

export default JobDescription
