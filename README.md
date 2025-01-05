---

# Jobby App

Jobby App is a dynamic web application built to streamline the job search process. It provides users with a platform to search for jobs, view job details, and manage their profiles, offering a seamless and efficient experience.

## Features

### Login
- Secure login functionality for user authentication.
- Displays error messages for invalid credentials.
- Redirects authenticated users to the **Home Page**.

### Home Page
- **Search Jobs:** A search bar to quickly find jobs by keywords.
- **Profile Details:** Displays user information, including skills and job roles.
- **Salary Packages:** Lists different salary packages based on roles and experience.
- **Find Jobs Button:** Navigates users to the **Jobs Page**.

### Jobs Page
- **Job Listings:** Displays available jobs based on filters and search criteria.
- **Filter Options:**
  - Employment Types: Filter jobs by full-time, part-time, freelance, etc.
  - Salary Range: Filter jobs by minimum package requirements.
- **Search Functionality:** Finds jobs by keywords.
- **Retry Button:** Allows retrying failed API calls.
- **Detailed Job View:** Clicking on a job navigates users to the **Job Details Page**.

### Job Details Page
- **Job Description:** Displays detailed information about a selected job, including skills required, salary, and job role.
- **Similar Jobs:** Lists jobs with similar roles and requirements.
- **External Links:** Links to company websites or job application pages.

### Not Found Page
- Displays a **404 error page** for undefined routes.

### Logout
- Logs out users and redirects them to the **Login Page**.

## Technologies Used

### Frontend
- **React.js:** For creating a responsive and interactive UI.
- **HTML5 & CSS3:** For structuring and styling the application.
- **JavaScript:** For implementing client-side functionality.

### Backend
- **Node.js:** For server-side operations and API integration.

## API Endpoints

1. **Login API**: `https://apis.ccbp.in/login`  
   - Validates user credentials and returns a `JWT Token`.

2. **Profile API**: `https://apis.ccbp.in/profile`  
   - Fetches user profile details.

3. **Jobs API**: `https://apis.ccbp.in/jobs`  
   - Returns job listings based on filters and search parameters.

4. **Job Details API**: `https://apis.ccbp.in/jobs/:id`  
   - Fetches detailed information about a specific job.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jobby-app.git
   cd jobby-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Folder Structure
```
jobby-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── ...
├── package.json
└── README.md
```

## Deployment

The app is deployed and accessible at:  
[Jobby App Live Demo](https://nitishJobbyApp.ccbp.tech)

## Screenshots

### Login Page
![Login Page](https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png)

### Home Page
![Home Page](https://assets.ccbp.in/frontend/content/react-js/jobby-app-home-lg-output.png)

### Jobs Page
![Jobs Page](https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-success-lg-output-v0.png)

### Job Details Page
![Job Details](https://assets.ccbp.in/frontend/content/react-js/jobby-app-job-details-success-lg-output-v0.png)

## Video Demonstration

### Success
<video controls>
  <source src="https://assets.ccbp.in/frontend/content/react-js/jobby-app-success-output-v0.mp4" type="video/mp4">
</video>

### Failure
<video controls>
  <source src="https://assets.ccbp.in/frontend/content/react-js/jobby-app-failure-output-v0.mp4" type="video/mp4">
</video>

## Acknowledgments

This project was developed as part of the [CCBP Program](https://ccbp.in/), aimed at enhancing hands-on development skills.

---
