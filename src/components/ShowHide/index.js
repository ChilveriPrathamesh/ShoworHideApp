// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  toggleFirstName = () => {
    const {showFirstName} = this.state
    if (showFirstName === true) {
      this.setState({showFirstName: false})
    } else {
      this.setState({showFirstName: true})
    }
  }

  toggleLastName = () => {
    const {showLastName} = this.state
    if (showLastName === true) {
      this.setState({showLastName: false})
    } else {
      this.setState({showLastName: true})
    }
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="body">
          <div className="hide-container">
            <button
              type="button"
              className="btn"
              onClick={this.toggleFirstName}
            >
              Show/Hide FirstName
            </button>
            <div className="container">
              {showFirstName && <p className="name">Joe</p>}
            </div>
          </div>
          <div className="hide-container">
            <button type="button" className="btn" onClick={this.toggleLastName}>
              Show/Hide LastName
            </button>
            <div className="container">
              {' '}
              {showLastName && <p className="name">Jonas</p>}{' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
