import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class SearchHeader extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
    
      <div className="search-header">
      <div className="content-area">        
        <div className="search-box">
          <input type="text" />
        </div>
        <div className="icon-section">
          <div className="noti">
            <i className="fas fa-bell" />
            <div className="noti-number active">
              31
            </div>
          </div>
          <div className="comments">
            <i className="fas fa-comment" />
            <div className="noti-number active">
              13
            </div>
          </div>
          <div className="user">        
            <i className="fas fa-user" />
            <div className="noti-number active">
              38
            </div>
          </div>
        </div>
      </div>   
    </div>
       )
  }
}
