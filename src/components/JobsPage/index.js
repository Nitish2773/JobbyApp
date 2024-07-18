/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header/index'
import JobDetails from '../JobDetails'
import SalaryData from '../SalaryData'
import EmployeeData from '../EmployeeData'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const constantTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class JobsPage extends Component {
  state = {
    profileData: [],
    jobsData: [],
    apiStatus: constantTypes.initial,
    userApiStatus: constantTypes.initial,
    searchInput: '',
    empData: [],
    salData: '',
  }

  componentDidMount() {
    this.profileData()
    this.jobsDetails()
  }

  // profileData
  profileData = async () => {
    this.setState({userApiStatus: constantTypes.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/profile', options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedProfileData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        profileData: updatedProfileData,
        userApiStatus: constantTypes.success,
      })
    } else {
      this.setState({userApiStatus: constantTypes.failure})
    }
  }

  renderLoading = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div className="loader-container" testid="loader">
      <Loader
        className="loader"
        type="ThreeDots"
        color="#ffffff"
        height="50"
        width="50"
      />
    </div>
  )

  retryData = () => {
    this.profileData()
  }

  renderProfileFailure = () => (
    <div className="failure-container">
      <button className="retry-btn" type="button" onClick={this.retryData}>
        Retry
      </button>
    </div>
  )

  renderProfileSuccess = () => {
    const {profileData} = this.state
    const {name, profileImageUrl, shortBio} = profileData
    console.log(name)
    return (
      <div className="profile-container">
        <ul className="profile-lists">
          <li className="profile-items">
            <img src={profileImageUrl} alt="profile" className="profile-avt" />
          </li>
          <li className="profile-items">
            <h1 className="profile-name">{name}</h1>
          </li>
          <li className="profile-items">
            <p className="profile-bio">{shortBio}</p>
          </li>
        </ul>
      </div>
    )
  }

  filterEmployee = event => {
    const {empData} = this.state
    console.log(empData)
    if (event.target.checked) {
      this.setState(
        {empData: [...empData, event.target.value]},
        this.jobsDetails,
      )
    } else {
      const updatedData = empData.filter(item => item !== event.target.value)
      this.setState({empData: updatedData}, this.jobsDetails)
    }
  }

  renderEmployeeDetails = () => (
    <>
      <ul className="employee-lists">
        {employmentTypesList.map(item => (
          <EmployeeData
            item={item}
            key={item.employmentTypeId}
            filterEmployee={this.filterEmployee}
          />
        ))}
      </ul>
    </>
  )

  filterSalary = id => {
    this.setState({salData: id}, this.jobsDetails)
  }

  renderSalaryDetails = () => (
    <>
      <ul className="salary-lists">
        {salaryRangesList.map(item => (
          <SalaryData
            item={item}
            key={item.salaryRangeId}
            filterSalary={this.filterSalary}
          />
        ))}
      </ul>
    </>
  )

  renderProfileStatus = () => {
    const {userApiStatus} = this.state
    switch (userApiStatus) {
      case constantTypes.success:
        return this.renderProfileSuccess()
      case constantTypes.failure:
        return this.renderProfileFailure()
      case constantTypes.loading:
        return this.renderLoading()
      default:
        return null
    }
  }

  // jobData

  jobsDetails = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const {searchInput, empData, salData} = this.state
    const filteredEmployee = empData.join(',')
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/jobs?employment_type=${filteredEmployee}&minimum_package=${salData}&search=${searchInput}`,
      options,
    )
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.jobs.map(item => ({
        id: item.id,
        companyLogoUrl: item.company_logo_url,
        employmentsType: item.employment_type,
        jobDescription: item.job_description,
        location: item.location,
        packagePerAnnum: item.package_per_annum,
        rating: item.rating,
        title: item.title,
      }))
      this.setState({jobsData: updatedData, apiStatus: constantTypes.success})
    } else {
      this.setState({apiStatus: constantTypes.failure})
    }
  }

  onClickJobDetails = () => {
    this.jobsDetails()
  }

  renderJobsDataFailure = () => (
    <div className="jobs-data-failure">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-data-img"
      />
      <h1 className="data-failure-heading">Oops! Something Went Wrong</h1>
      <p className="data-failure-text">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="data-failure-btn"
        type="button"
        onClick={this.onClickJobDetails}
      >
        Retry
      </button>
    </div>
  )

  renderJobsDataSuccess = () => {
    const {jobsData} = this.state
    const length = jobsData.length > 0
    return length ? (
      <ul className="job">
        {jobsData.map(item => (
          <JobDetails key={item.id} item={item} />
        ))}
      </ul>
    ) : (
      <div className="jobs-error-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png "
          className="jobs-error-img"
          alt="no jobs"
        />
        <h1 className="job-error-heading">No Jobs Found</h1>
        <p className="job-error-text">
          We could not find any jobs. Try other filters.
        </p>
      </div>
    )
  }

  renderJobsStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case constantTypes.success:
        return this.renderJobsDataSuccess()
      case constantTypes.failure:
        return this.renderJobsDataFailure()
      case constantTypes.loading:
        return this.renderLoading()
      default:
        return null
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  searchJobs = () => {
    this.jobsDetails()
  }

  onSearchClick = event => {
    if (event.key === 'Enter') {
      this.jobsDetails()
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <>
        <Header />
        <div className="jobs-container">
          <div className="filter-container">
            {this.renderProfileStatus()}
            <hr className="line" />
            <div className="employee-details">
              <h1 className="emp-heading">Type of Employment</h1>
              {this.renderEmployeeDetails()}
            </div>
            <hr className="line" />
            <div className="salary-details">
              <h1 className="salary-heading">Salary Range</h1>
              {this.renderSalaryDetails()}
            </div>
          </div>
          <div className="jobs-list">
            <div className="search-container">
              <input
                type="search"
                className="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearch}
                onKeyDown={this.onSearchClick}
              />
              <button
                type="button"
                testid="searchButton"
                className="search-btn"
                onClick={this.searchJobs}
              >
                <BsSearch />
              </button>
            </div>
            <div className="job-status">{this.renderJobsStatus()}</div>
          </div>
        </div>
      </>
    )
  }
}

export default JobsPage
