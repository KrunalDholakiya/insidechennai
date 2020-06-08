import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../commons/Footer'
import '../../../assets/styles/page.scss'
import SlimHeader from '../../commons/slimHeader'
import History from './History'
import Geography from './Geography'
import Economy from './Economy'
import Education from './Education'
import Transportation from './Transportation'
import Administration from './Administration'
import HealthCare from './HealthCare'
import Media from './Media'

export default class AboutChennaiList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location_path: [
                'home', 'about chennai'
            ],
            key: "value",
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.set_title(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.set_title(nextProps.match.params.id)
    }
    set_title(id) {
        var set_title = function (title) {
            this.setState({
                title: title
            })
        }.bind(this)
        var title = "";
        if (id === "history") {
            title = "History";
            set_title(title);
        } else if (id === "geography") {
            title = "Geography";
            set_title(title);
        } else if (id === "economy") {
            title = "Economy";
            set_title(title);
        } else if (id === "education") {
            title = "Education";
            set_title(title);
        } else if (id === "transportation") {
            title = "Transportation";
            set_title(title);
        } else if (id === "administration") {
            title = "Administration";
            set_title(title);
        } else if (id === "health-care") {
            title = "Health Care";
            set_title(title);
        } else if (id === "media") {
            title = "Media";
            set_title(title);
        }
    }
    renderList() {
        if (this.props.match.params.id === "history") {
            return (
                <History />
            )
        } else if (this.props.match.params.id === "geography") {
            return (
                <Geography />
            )
        } else if (this.props.match.params.id === "economy") {
            return (
                <Economy />
            )
        } else if (this.props.match.params.id === "education") {
            return (
                <Education />
            )
        } else if (this.props.match.params.id === "transportation") {
            return (
                <Transportation />
            )
        } else if (this.props.match.params.id === "administration") {
            return (
                <Administration />
            )
        } else if (this.props.match.params.id === "health-care") {
            return (
                <HealthCare />
            )
        } else if (this.props.match.params.id === "media") {
            return (
                <Media />
            )
        }

    }

    render() {
        return (
            <div>

                <SlimHeader />

                <div className="normal-web-container">
                    <div className="chennaiTitleBar">
                        <Link className="titleRow" to="/about-chennai/history">
                            <div className="subtitleLogo history" />
                            <div className="Subtitle">History</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/geography">
                            <div className="subtitleLogo geography" />
                            <div className="Subtitle">Geography</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/economy">
                            <div className="subtitleLogo economy" />
                            <div className="Subtitle">Economy</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/education">
                            <div className="subtitleLogo education" />
                            <div className="Subtitle">Education</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/transportation">
                            <div className="subtitleLogo transportation" />
                            <div className="Subtitle">Transportation</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/administration">
                            <div className="subtitleLogo administration" />
                            <div className="Subtitle">Administration</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/health-care">
                            <div className="subtitleLogo health_care" />
                            <div className="Subtitle">Health Care</div>
                        </Link>
                        <Link className="titleRow" to="/about-chennai/media">
                            <div className="subtitleLogo media" />
                            <div className="Subtitle">Media</div>
                        </Link>
                    </div>

                    {/* <Breadcrumbs path={this.state.location_path} /> */}
                    <h2 className="textCenter">{this.state.title}</h2>
                    <div className="drop orange" />

                    <div className="limiter">
                        {this.renderList()}
                    </div>

                </div>

                <Footer />

            </div>
        )
    }

}
