import React from 'react'
import '../../../assets/styles/page.scss'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class OutdoorRecreation extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Outdoor & Recreation | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar orActiveBar animated fadeIn"></div>
                <div className="spaceContainer"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row adventure_zone" to="/discover-chennai/outdoor-and-recreation/adventure_zone">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Adventure Zone </p>
                                    <p className="desc textCenter">Kancheepuram</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row besant_nagar_beach" to="/discover-chennai/outdoor-and-recreation/besant_nagar_beach">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Besant Nagar Beach</p>
                                    <p className="desc textCenter">Besant Nagar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row breezy_beach" to="/discover-chennai/outdoor-and-recreation/breezy_beach">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Breezy Beach</p>
                                    <p className="desc textCenter">Valmiki Nagar</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row chembarambakkam_lake" to="/discover-chennai/outdoor-and-recreation/chembarambakkam_lake">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Chembarambakkam Lake</p>
                                    <p className="desc textCenter">Thiruvallur</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row chennai_snake_park_trust" to="/discover-chennai/outdoor-and-recreation/chennai_snake_park_trust">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Chennai Snake Park Trust</p>
                                    <p className="desc textCenter">Guindy</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row chetpet_eco_park" to="/discover-chennai/outdoor-and-recreation/chetpet_eco_park">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Chetpet Eco Park</p>
                                    <p className="desc textCenter">Chetpet</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row covelong_beach" to="/discover-chennai/outdoor-and-recreation/covelong_beach">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Covelong Beach</p>
                                    <p className="desc textCenter">Covelong</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row east_coast_road" to="/discover-chennai/outdoor-and-recreation/east_coast_road">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">East Coast Road</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row golden_beach" to="/discover-chennai/outdoor-and-recreation/golden_beach">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Golden Beach</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row krishkinta" to="/discover-chennai/outdoor-and-recreation/krishkinta">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Kishkinta</p>
                                    <p className="desc textCenter">Tambaram</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row marina_beach" to="/discover-chennai/outdoor-and-recreation/marina_beach">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Marina Beach</p>
                                    <p className="desc textCenter">Triplicane</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row mattukadu" to="/discover-chennai/outdoor-and-recreation/mattukadu">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Mattukadu</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row mgm_dizzee_world" to="/discover-chennai/outdoor-and-recreation/mgm_dizzee_world">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Mgm Dizzee World</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row nettukuppam_beach" to="/discover-chennai/outdoor-and-recreation/nettukuppam_beach">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Nettukuppam Beach</p>
                                    <p className="desc textCenter">Nettukupam</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row odiyur_lake" to="/discover-chennai/outdoor-and-recreation/odiyur_lake">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Odiyur Lake</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row pullicat_lake_bird_sanctury" to="/discover-chennai/outdoor-and-recreation/pullicat_lake_bird_sanctury">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Pullicat Lake And Bird Sanctury</p>
                                    <p className="desc textCenter">Thiruvallur</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row queens_land" to="/discover-chennai/outdoor-and-recreation/queens_land">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Queens Land</p>
                                    <p className="desc textCenter">Chennai-Bangalore Highway</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row surfing_covelong_point" to="/discover-chennai/outdoor-and-recreation/surfing_covelong_point">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Surfing Covelong Point </p>
                                    <p className="desc textCenter">Kovalam</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row urapakkam_lake" to="/discover-chennai/outdoor-and-recreation/urapakkam_lake">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Urapakkam Lake</p>
                                    <p className="desc textCenter">Kanchipuram District</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row wild_tribe_ranch" to="/discover-chennai/outdoor-and-recreation/wild_tribe_ranch">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Wild Tribe Ranch </p>
                                    <p className="desc textCenter">Nemmeli</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <div className="spaceContainer"></div>
            </div>
        )
    }
}
