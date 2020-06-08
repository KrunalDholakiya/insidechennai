import React from 'react'
import '../../assets/styles/dashboard.scss'
import {Link} from 'react-router-dom'
import constants from '../../constants'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
  }

  showFloatingMenu() {
    this.setState({menu: true})
  }

  hideFloatingMenu() {
    this.setState({ menu: false })
  }

  profile() {
    this.props.history.push(`/profile`);
  }

  logout() {
    this.props.history.push(`/login`);
  }

  render() {
    return (
      <div className="dashboardContainer animated fadeIn">

        <div className="dashboardTop">

          <div className="left">
            <div className={"byContainer" + (constants.application_name !== 'Ngage' ? ' hide_company_logo':'')}>
              <p className="poweredBy">Powered By</p>
              <div className="companyLogo"></div>
            </div>
          </div>

          <div className="center flexCenter">
            <div className="mainLogoContainer">
              <div className="mainLogo"></div>
              <p className="logoText">{constants.application_name}</p>
              <p className="tagline">Messaging Platform</p>
            </div>
          </div>

          <div className="right">
            <div className="userContainer" onMouseLeave={this.hideFloatingMenu.bind(this)}>
              <img className="userImage" src={require('../../assets/images/profile.jpg')}/>
              <div className="user-data-container" onMouseEnter={this.showFloatingMenu.bind(this)}>
                <p className="userName">John Doe</p>
                <div className="arrow-down"></div>
              </div>

              <div className={"user-float-menu-container " + (this.state.menu ? 'active' : '')} onMouseLeave={this.hideFloatingMenu.bind(this)}>
                <div className="user-float-menu">
                  <div className="arrow-up"></div>
                  <div className="menu-content">
                    <div className="menu-content-item" onClick={this.profile.bind(this)}>
                      <p className="menu-text">Profile Settings</p>
                    </div>
                    <div className="menu-content-item logout" onClick={this.logout.bind(this)}>
                      <p className="menu-text">Logout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="dashboardBody flexCenter">
          <div>

          <div className="row_one">

            <Link to="/report">
              <div className="dashCard left">
                <div className="dashIcon">
                  <img src={require('../../assets/images/dashboard/d-reports.png')}/>
                </div>
                <div className="drop"></div>
                <p className="dashText">Reports</p>
              </div>
            </Link>

            <Link to="/bots">
              <div className="dashCard">
                <div className="dashIcon">
                  <img src={require('../../assets/images/dashboard/d-bots.png')}/>
                </div>
                <div className="drop"></div>
                <p className="dashText">Bots</p>
              </div>
            </Link>

            <Link to="/templates">
              <div className="dashCard right">
                <div className="dashIcon">
                  <img src={require('../../assets/images/dashboard/d-templates.png')}/>
                </div>
                <div className="drop"></div>
                <p className="dashText">Templates</p>
              </div>
            </Link>

          </div>

          <div className="row_two">

            <div className="dashCard left">
              <div className="dashIcon">
                <img src={require('../../assets/images/dashboard/d-users.png')}/>
              </div>
              <div className="drop"></div>
              <p className="dashText">Users</p>
            </div>

            <div className="dashCard">
              <div className="dashIcon">
                <img src={require('../../assets/images/dashboard/d-logs.png')}/>
              </div>
              <div className="drop"></div>
              <p className="dashText">Logs</p>
            </div>

            <div className="dashCard right">
              <div className="dashIcon">
                <img src={require('../../assets/images/dashboard/d-settings.png')}/>
              </div>
              <div className="drop"></div>
              <p className="dashText">Settings</p>
            </div>

          </div>

          </div>

        </div>

      </div>
    )
  }
}
