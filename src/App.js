import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import HomePage from './components/HomePage/index'
import ProtectedRoute from './components/ProtectedRoute/index'
import JobsPage from './components/JobsPage/index'
import SpecificJobDetails from './components/SpecificJobDetails/index'
import NotFound from './components/NotFoundPage'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/jobs" component={JobsPage} />
      <ProtectedRoute exact path="/jobs/:id" component={SpecificJobDetails} />
      <Route exact component={NotFound} />
    </Switch>
  </>
)

export default App
