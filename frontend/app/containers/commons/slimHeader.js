import React from 'react'
import { Link } from 'react-router-dom'

export default class SlimHeader extends React.Component {
  ToggleJS() {
    var burger = document.querySelector('.burger-container'),
      header = document.querySelector('.header');
    burger.onclick = function () {
      header.classList.toggle('menu-opened');
    }
  }

  render() {
    return (
      <div>

        <div className="header_body">
          <div className="header_left_section">
            <Link to="/home">
              <div className="header-logo"></div>
            </Link>
          </div>
          <div className="header_right_section">
            <div className="header_menu_container">
              <Link to="/about-chennai">
                <div className="header_menu_item">about chennai</div>
              </Link>
              <Link to="/discover-chennai">
                <div className="header_menu_item">discover chennai</div>
              </Link>
              <Link to="/tradition-and-culture">
                <div className="header_menu_item">tradition & culture</div>
              </Link>
              <Link to="/new-and-now">
                <div className="header_menu_item">new & now</div>
              </Link>
              <Link to="/business-dots">
                <div className="header_menu_item">business dots</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="icon">
            <Link to="/home">
              <div className="header-logo"></div>
            </Link>
          </div>
          <div className="burger-container" onMouseOver={this.ToggleJS.bind(this)}>
            <div id="burger">
              <div className="bar topBar"></div>
              <div className="bar btmBar"></div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <Link to="/about-chennai">about chennai</Link>
            </div>
            <div className="menu-item">
              <Link to="/discover-chennai">discover chennai</Link>
            </div>
            <div className="menu-item">
              <Link to="/tradition-and-culture">tradition & culture</Link>
            </div>
            <div className="menu-item">
              <Link to="/new-and-now">new and now</Link>
            </div>
            <div className="menu-item">
              <Link to="/business-dots">business dots</Link>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

