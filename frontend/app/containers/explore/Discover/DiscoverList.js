import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../commons/Footer'
import '../../../assets/styles/page.scss'
import SlimHeader from '../../commons/slimHeader'
import Attractions from './Attractions'
import FilmTheatre from './FilmAndTheatre'
import HistoricalPlace from './HistoricalPlace'
import LibraryPark from './LibraryAndPark'
import Market from './Market'
import MuseumsExhibitions from './MuseumsExhibitions'
import OutdoorRecreation from './OutdoorRecreation'
import Religious from './Religious'

export default class DiscoverList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location_path: [
                'home', 'discover chennai'
            ],
            key: "value",
            title: ""
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
        if (id === "attractions") {
            title = "Attractions";
            set_title(title);
        } else if (id === "film-and-theatre") {
            title = "Film & Theatre";
            set_title(title);
        } else if (id === "historical-places") {
            title = "Historical Place";
            set_title(title);
        } else if (id === "library-and-parks") {
            title = "Library & Park";
            set_title(title);
        } else if (id === "market") {
            title = "Market";
            set_title(title);
        } else if (id === "museums-and-exhibitions") {
            title = "Museums & Exhibitions";
            set_title(title);
        } else if (id === "outdoor-and-recreation") {
            title = "Outdoor & Recreations";
            set_title(title);
        } else if (id === "religious") {
            title = "Religious";
            set_title(title);
        }
    }
    renderList() {
        if (this.props.match.params.id === "attractions") {
            return (
                <Attractions />
            )
        } else if (this.props.match.params.id === "film-and-theatre") {
            return (
                <FilmTheatre />
            )
        } else if (this.props.match.params.id === "historical-places") {
            return (
                <HistoricalPlace />
            )
        } else if (this.props.match.params.id === "library-and-parks") {
            return (
                <LibraryPark />
            )
        } else if (this.props.match.params.id === "market") {
            return (
                <Market />
            )
        } else if (this.props.match.params.id === "museums-and-exhibitions") {
            return (
                <MuseumsExhibitions />
            )
        } else if (this.props.match.params.id === "outdoor-and-recreation") {
            return (
                <OutdoorRecreation />
            )
        } else if (this.props.match.params.id === "religious") {
            return (
                <Religious />
            )
        }

    }

    render() {
        return (
            <div>

                <SlimHeader />

                <div className="normal-web-container">
                    <div className="chennaiTitleBar">
                        <Link className="titleRow" to="/discover-chennai/attractions">
                            <div className="subtitleLogo attractions" />
                            <div className="Subtitle">Attractions</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/film-and-theatre">
                            <div className="subtitleLogo film_theater" />
                            <div className="Subtitle">Film & Theater</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/historical-places">
                            <div className="subtitleLogo historical_place" />
                            <div className="Subtitle">Historical Places</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/library-and-parks">
                            <div className="subtitleLogo library_park" />
                            <div className="Subtitle">Library & Parks</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/market">
                            <div className="subtitleLogo market" />
                            <div className="Subtitle">Market</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/museums-and-exhibitions">
                            <div className="subtitleLogo museum_exhibitions" />
                            <div className="Subtitle">Museums & Exhibitions</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/outdoor-and-recreation">
                            <div className="subtitleLogo outdoor_recreation" />
                            <div className="Subtitle">Outdoor & Recreation</div>
                        </Link>
                        <Link className="titleRow" to="/discover-chennai/religious">
                            <div className="subtitleLogo religious" />
                            <div className="Subtitle">Religious</div>
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
