import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkModeOn: true,
  }

  changeMode = () => {
    this.setState(prevState => ({isDarkModeOn: !prevState.isDarkModeOn}))
  }

  render() {
    const {isDarkModeOn} = this.state
    const btnText = isDarkModeOn ? 'Light Mode' : 'Dark Mode'
    const card = isDarkModeOn ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg-container">
        <div className={`change-mode-card ${card}`}>
          <h1>Click to change Mode</h1>
          <button className="btn-ele" type="button" onClick={this.changeMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
