import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import JobDescription from '../JobDescription'
import SimilarJobsPage from '../SimilarJobsPage'
import './index.css'

const constantTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class SpecificJobDetails extends Component {
  state = {jobsData: {}, similarJobs: [], apiStatus: constantTypes.initial}

  componentDidMount() {
    this.getSpecificJobs()
  }

  getUpdatedData = item => ({
    id: item.id,
    companyLogoUrl: item.company_logo_url,
    companyWebsiteUrl: item.company_website_url,
    employmentType: item.employment_type,
    jobDescription: item.job_description,
    lifeAtCompany: {
      description: item.life_at_company.description,
      imageUrl: item.life_at_company.image_url,
    },
    location: item.location,
    packagePerAnnum: item.package_per_annum,
    rating: item.rating,
    skills: item.skills.map(items => ({
      imageUrl: items.image_url,
      name: items.name,
    })),
    title: item.title,
  })

  getSpecificJobs = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/jobs/${id}`, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedJobData = this.getUpdatedData(data.job_details)
      const updatedSimilarJobs = data.similar_jobs.map(item => ({
        id: item.id,
        companyLogoUrl: item.company_logo_url,
        employmentType: item.employment_type,
        title: item.title,
        location: item.location,
        rating: item.rating,
        jobDescription: item.job_description,
      }))

      this.setState({
        jobsData: updatedJobData,
        similarJobs: updatedSimilarJobs,
        apiStatus: constantTypes.success,
      })
    } else {
      this.state({apiStatus: constantTypes.failure})
    }
  }

  renderJobsData = () => {
    const {jobsData, similarJobs} = this.state
    return (
      <>
        <ul className="jobs-description">
          <JobDescription jobsData={jobsData} />
        </ul>
        <div className="similar-jobs">
          <h1 className="similar-jobs-main-heading">Similar Jobs</h1>
          <ul className="similar-jobs-container">
            {similarJobs.map(item => (
              <SimilarJobsPage item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderLoading = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div className="sp-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetryJobs = () => {
    this.getSpecificJobs()
  }

  renderFailure = () => (
    <div className="sp-failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        className="sp-failure-img"
        alt="failure view"
      />
      <h1 className="sp-failure-heading">Oops! Something Went Wrong</h1>
      <p className="sp-failure-text">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        className="sp-failure-btn"
        onClick={this.onClickRetryJobs}
      >
        Retry
      </button>
    </div>
  )

  renderSpecificJobsStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case constantTypes.success:
        return this.renderJobsData()
      case constantTypes.failure:
        return this.renderFailure()
      case constantTypes.loading:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="sj-container">{this.renderSpecificJobsStatus()}</div>
      </>
    )
  }
}

export default SpecificJobDetails
