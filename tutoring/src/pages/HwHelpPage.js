import React, { Component } from 'react'
import './HwHelpPage.css'
import Upload from './upload/Upload'

class HwHelpPage extends Component {
  render() {
    return (
      <div className="HwHelpPage">
        <div className="Card">
          <Upload />
        </div>
      </div>
    )
  }
}

export default HwHelpPage
