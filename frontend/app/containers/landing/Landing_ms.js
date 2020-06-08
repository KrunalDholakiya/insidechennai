import React from 'react'
import '../../assets/styles/landing.scss'
import Loader from 'react-loaders'

export default class Landing extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  state = {
    navigateLogo: false
  }

  login() {
    let temp = setTimeout(
      function () {
        if (!this.state.navigateLogo) {
          this.setState({ navigateLogo: true });

          let temp2 = setTimeout(
            function () {
              this.props.history.push(`/home`)
            }.bind(this),
            3000,
          )
        }
      }.bind(this),
      500,
    )
  }

  renderLogo() {
    if (this.state.navigateLogo) {
      return (
        <div className="logo-overlay-holder animated fadeIn">
          <div className="logo-overlay-container">
            <div className="landing-logo" />
            <Loader type="ball-pulse-sync" />
            <p>Launching</p>
          </div>
        </div>
      )
    }
  }

  render() {
    let loader = <Loader type="ball-scale" />

    return (
      <div className="ms-main">
        {this.renderLogo()}
        <div className="continue-holder">
          <p>|| Shri Swaminarayan Vijayate ||</p>
          <button onClick={this.login.bind(this)}>Launch Website</button>
        </div>
      </div>
    )
  }
}
