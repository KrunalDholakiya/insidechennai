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

export default class Attractions extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Attractions | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar aActiveBar animated fadeIn"></div>
                <div className="spaceContainer"></div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row anna_memorial" to="/discover-chennai/attractions/anna_memorial">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Anna Memorial</p>
                                    <p className="desc textCenter">Anna Nagar</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row broken_bridge" to="/discover-chennai/attractions/broken_bridge">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Broken Bridge</p>
                                    <p className="desc textCenter">Adyar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row chennai_central_railway_station" to="/discover-chennai/attractions/chennai_central_railway_station">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Chennai Central Railway Station</p>
                                    <p className="desc textCenter">Wall Tax Road, Broadway</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row chennai_international_airport" to="/discover-chennai/attractions/chennai_international_airport">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Chennai International Airport</p>
                                    <p className="desc textCenter">Meenambakam</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row crocodile_bank" to="/discover-chennai/attractions/crocodile_bank">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Crocodile Bank</p>
                                    <p className="desc textCenter">East Coast Road</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row express_avenue" to="/discover-chennai/attractions/express_avenue">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Express Avenue</p>
                                    <p className="desc textCenter">Royapettah</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row forum_viyaja_mall" to="/discover-chennai/attractions/forum_viyaja_mall">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Forum Viyaja Mall</p>
                                    <p className="desc textCenter">Vadapalani</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row gandhi_mandapam" to="/discover-chennai/attractions/gandhi_mandapam">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Gandhi Mandapam</p>
                                    <p className="desc textCenter">Adyar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row high_court_madras" to="/discover-chennai/attractions/high_court_madras">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">High Court(Madras)</p>
                                    <p className="desc textCenter">George Town</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row jayalalitha_memorial" to="/discover-chennai/attractions/jayalalitha_memorial">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Jayalalitha Memorial</p>
                                    <p className="desc textCenter">Triplicane</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row kathipara_junction" to="/discover-chennai/attractions/kathipara_junction">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Kathipara Junction</p>
                                    <p className="desc textCenter">Alandur</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row light_house" to="/discover-chennai/attractions/light_house">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Light House</p>
                                    <p className="desc textCenter">Marina Beach, Triplicane</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row m_a_chidambaram_stadium" to="/discover-chennai/attractions/m_a_chidambaram_stadium">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">M.A. Chidambaram Stadium</p>
                                    <p className="desc textCenter">Chepauk</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row mgr_memorial" to="/discover-chennai/attractions/mgr_memorial">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">MGR Memorial</p>
                                    <p className="desc textCenter">T Nagar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row napier_bridge" to="/discover-chennai/attractions/napier_bridge">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Napier Bridge</p>
                                    <p className="desc textCenter">Covum River</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row royapuram_fishing_harbour" to="/discover-chennai/attractions/royapuram_fishing_harbour">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Royapuram Fishing Harbour</p>
                                    <p className="desc textCenter">Royapuram</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row triumph_of_labour_statue" to="/discover-chennai/attractions/triumph_of_labour_statue">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Triumph Of Labour Statue</p>
                                    <p className="desc textCenter">Marina Beach</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row university_of_madras" to="/discover-chennai/attractions/university_of_madras">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">University Of Madras</p>
                                    <p className="desc textCenter">Chepauk</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="list_item_container">
                        <Link className="list_item_row valluvar_kottam" to="/discover-chennai/attractions/valluvar_kottam">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">Valluvar Kottam</p>
                                    <p className="desc textCenter"> Valluvar Kottam</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="list_item_row xime" to="/discover-chennai/attractions/xime">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">XIME</p>
                                    <p className="desc textCenter">Oragadam</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="last_child_container">
                        <Link className="list_item_row ymca" to="/discover-chennai/attractions/ymca">
                            <div className="details-container flexCenter">
                                <div className="details">
                                    <p className="title textCenter">YMCA</p>
                                    <p className="desc textCenter">Chennai</p>
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
