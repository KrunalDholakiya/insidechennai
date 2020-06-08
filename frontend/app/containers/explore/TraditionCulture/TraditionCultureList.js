import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../commons/Footer'
import '../../../assets/styles/page.scss'
import SlimHeader from '../../commons/slimHeader'
import ArtFormOfChennai from './ArtFormOfChennai'
import ChennaiCuisine from './ChennaiCuisine'
import CycleOfLife from './CycleOfLife'
import FestivalsOfChennai from './FestivalsOfChennai'
import PeopleOfChennai from './PeopleOfChennai'
import Tamil from './Tamil'

export default class TraditionCultureList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location_path: [
                'home', 'explore chennai', 'tradition & culture'
            ],
            key: "value"
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
        if (id === "people-of-chennai") {
            title = "People Of Chennai";
            set_title(title);
        } else if (id === "chennai-cuisine") {
            title = "Chennai Cuisine";
            set_title(title);
        } else if (id === "festivals-of-chennai") {
            title = "Festivals Of Chennai";
            set_title(title);
        } else if (id === "tamil") {
            title = "Tamil";
            set_title(title);
        } else if (id === "art-form-of-chennai") {
            title = "Art Form Of Chennai";
            set_title(title);
        } else if (id === "cycle-of-life") {
            title = "Cycle Of Life";
            set_title(title);
        }
    }
    renderList() {
        if (this.props.match.params.id === "people-of-chennai") {
            return (
                <PeopleOfChennai />
            )
        } else if (this.props.match.params.id === "chennai-cuisine") {
            return (
                <ChennaiCuisine />
            )
        } else if (this.props.match.params.id === "festivals-of-chennai") {
            return (
                <FestivalsOfChennai />
            )
        } else if (this.props.match.params.id === "tamil") {
            return (
                <Tamil />
            )
        } else if (this.props.match.params.id === "art-form-of-chennai") {
            return (
                <ArtFormOfChennai />
            )
        } else if (this.props.match.params.id === "cycle-of-life") {
            return (
                <CycleOfLife />
            )
        }
    }

    render() {
        return (
            <div>

                <SlimHeader />

                <div className="normal-web-container">
                    <div className="chennaiTitleBar">
                        <Link className="titleRow" to="/tradition-and-culture/people-of-chennai">
                            <div className="subtitleLogo people_of_chennai" />
                            <div className="Subtitle">People Of Chennai</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/chennai-cuisine">
                            <div className="subtitleLogo chennai_cuisine" />
                            <div className="Subtitle">Chennai Cuisine</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/festivals-of-chennai">
                            <div className="subtitleLogo festivals_of_chennai" />
                            <div className="Subtitle">Festivals Of Chennai</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/tamil">
                            <div className="subtitleLogo tamil" />
                            <div className="Subtitle">Tamil</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/art-form-of-chennai">
                            <div className="subtitleLogo art_of_chennai" />
                            <div className="Subtitle">Art Form Of Chennai</div>
                        </Link>
                        <Link className="titleRow" to="/tradition-and-culture/cycle-of-life">
                            <div className="subtitleLogo cycle_of_life" />
                            <div className="Subtitle">Cycle Of Life</div>
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
