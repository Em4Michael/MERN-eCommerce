import React, { Component } from 'react'
import './sideBar.css'
import { sideBarItems } from './sideBarItems'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

class SideBar extends Component {
   state = { click: true }
  Click = () => {
    this.setState({ click: !this.state.click })
  }
  render() {
  return (
    <>
   <div className={this.state.click ? 'side' : 'side active'}>
    
   {/* className={this.state.click ? 'inActive' : '{item.cName}'}> */}

      <Link to='/Home'>
        <div className='side-bar-top'>
          <div className={this.state.click ? 'side-bar-title' : 'side-bar-title active'}>  Scam Trust </div>
          <img className={this.state.click ? 'side-bar-logo' : 'side-bar-logo active'} src="/images/shielgg.png" alt="Scam Trust" />
        
        </div>
      </Link>
   
      {sideBarItems.map((item, index) => {
        return (
          <div className='sides' key={index}>
            <Link to={`/${item.link}`} className={this.state.click ? `${item.cName}` : `${item.cNameX}`}>
              <div className={this.state.click ? 'side-item' : 'side-item active'}>
                <FontAwesomeIcon icon={item.icon} />
                <h6 className={this.state.click ? 'Active' : 'inActive'}>{item.name}</h6>
              </div>
            </Link>
            <Link to={`/${item.link2}`} className={this.state.click ? `${item.cName2}` : `${item.cNameX2}`}>
              <div className={this.state.click ? 'side-item2' : 'side-item2 active'}>
                <FontAwesomeIcon icon={item.icon2} />
                <p className={this.state.click ? 'Active' : 'inActive'}>{item.name2}</p>
              </div>
            </Link>
          </div>
  
        )
        
      }
      )}
    </div>
    
    <div className={this.state.click ? 'header' : 'header active'}>
    <div className="side-icon" onClick={this.Click}>
      <FontAwesomeIcon icon={this.state.click ? faArrowLeft : faArrowRight} className="toggle"/>
    </div>
      <div className="header-title">
        Settings
      </div>
      <div className="Bell">
      <FontAwesomeIcon icon={faBell} className="bell" />
      <div className="bellActive"></div>
         </div>
      <div clasName="userAbbrevation-wrap">
        <div className="userAbbrevation enclosed">
           RV
         </div>
      </div>
    </div>
    </>
  )
    }
}

export default SideBar