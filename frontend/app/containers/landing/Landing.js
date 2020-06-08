import React from 'react'
import '../../assets/styles/landing.scss'

export default class Landing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      trigger: false
    }
  }


  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (<div className="landing-main">
      <div className="landing-overlay-container">
        <div className="top">
          <div className="landing-logo" />
        </div>
        <div className="middle">
          <iframe width="896" height="100%" src="https://www.youtube.com/embed/9b5MugZbsTU?rel=0&hd=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="bottom">
          <div className="bottom-container">
            <div className="explore" />
            <div className="continue-container">
              <p>Stay tuned! Cause we are launching very soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
