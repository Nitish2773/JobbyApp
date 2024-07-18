import {Component} from 'react'

class EmployeeData extends Component {
  render() {
    const {item, filterEmployee} = this.props
    return (
      <>
        <li key={item.employmentTypeId} className="emp-items">
          <input
            type="checkbox"
            id={item.employmentTypeId}
            onChange={filterEmployee}
            value={item.employmentTypeId}
          />
          <label htmlFor={item.employmentTypeId} className="emp-label">
            {item.label}
          </label>
        </li>
      </>
    )
  }
}

export default EmployeeData
