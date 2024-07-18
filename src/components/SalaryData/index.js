import {Component} from 'react'

class SalaryData extends Component {
  render() {
    const {item, filterSalary} = this.props

    const onChangeSalary = () => {
      filterSalary(item.salaryRangeId)
    }
    return (
      <>
        <li className="salary-items" key={item.salaryRangeId}>
          <input
            type="radio"
            id={item.salaryRangeId}
            name={item.salaryRangeId}
            value={item.salaryRangeId}
            onClick={onChangeSalary}
          />
          <label htmlFor={item.salaryRangeId} className="salary-label">
            {item.label}
          </label>
        </li>
      </>
    )
  }
}

export default SalaryData
