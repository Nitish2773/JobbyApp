import {Component} from 'react'

class SkillsPage extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="skills-items" key={item.name}>
        <img src={item.imageUrl} alt={item.name} className="skills-img" />
        <p className="skills-name">{item.name}</p>
      </li>
    )
  }
}

export default SkillsPage
