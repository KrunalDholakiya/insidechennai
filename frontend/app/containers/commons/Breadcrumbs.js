import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default class Breadcrumbs extends React.Component {

  renderCrumbs() {
    return (
      this.props.path.map((elt, index) => {
        if (index === this.props.path.length - 1) {
          return <BreadcrumbItem className="nope" key={elt}><a><span className="bot_header_name">{elt}</span></a></BreadcrumbItem>;
        } else {
          return <BreadcrumbItem key={elt}><Link to={elt} >{elt}</Link></BreadcrumbItem>;
        }
      })
    )
  }

  render() {
    return (
      <div className="bread-container">
        <Breadcrumb>
          {this.renderCrumbs()}
        </Breadcrumb>
      </div>
    )
  }
}
