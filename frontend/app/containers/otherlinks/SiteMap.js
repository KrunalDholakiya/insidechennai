import React from 'react'
import '../../assets/styles/page.scss'
import Footer from '../../containers/commons/Footer'
import SlimHeader from '../../containers/commons/slimHeader'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class SiteMap extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Inside Chennai Site Map";
    }

    render() {
        return (
            <div>

                <SlimHeader />

                <div className="normal-web-container">
                    <div className="spaceRemover1"></div>
                    <h3 className="animated fadeIn sitemapBorder">Inside Chennai Site Map</h3>
                    <div className="smdetailed-container">
                        <div className="smfooter-row">
                            <div className="smtitle">
                                <Link className="smparagraph" to="/about-chennai">about chennai</Link>
                            </div>
                            <div className="smlist">
                                <Link className="smdata" to="/about-chennai/history">
                                    <div className="smparagraph">history</div>
                                </Link>
                                <Link className="smdata" to="/about-chennai/geography">
                                    <div className="smparagraph">geography</div>
                                </Link>
                                <Link className="smdata" to="/about-chennai/economy">
                                    <div className="smparagraph">economy</div>
                                </Link>
                                <Link className="smdata" to="/about-chennai/education">
                                    <div className="smparagraph">education</div>
                                </Link>
                                <Link className="smdata" to="/about-chennai/transportation">
                                    <div className="smparagraph">transportation</div>
                                </Link>
                                <Link className="smdata" to="/about-chennai/administration">
                                    <div className="smparagraph">administration</div>
                                </Link>
                                <Link className="smdata" to="/about-chennai/health-care">
                                    <div className="smparagraph">health care</div>
                                </Link>
                                <Link className="smdata" to="/about-chennai/media">
                                    <div className="smparagraph">media</div>
                                </Link>
                            </div>
                        </div>
                        <div className="smfooter-row">
                            <div className="smtitle">
                                <Link className="smparagraph" to="/discover-chennai">discover chennai</Link>
                            </div>
                            <div className="smlist">
                                <Link className="smdata" to="/discover-chennai/attractions">
                                    <div className="smparagraph">attractions</div>
                                </Link>
                                <Link className="smdata" to="/discover-chennai/film-and-theatre">
                                    <div className="smparagraph">film & theater</div>
                                </Link>
                                <Link className="smdata" to="/discover-chennai/historical-places">
                                    <div className="smparagraph">historical places</div>
                                </Link>
                                <Link className="smdata" to="/discover-chennai/library-and-parks">
                                    <div className="smparagraph">library & books</div>
                                </Link>
                                <Link className="smdata" to="/discover-chennai/market">
                                    <div className="smparagraph">market</div>
                                </Link>
                                <Link className="smdata" to="/discover-chennai/museums-and-exhibitions">
                                    <div className="smparagraph">museums & exibitions</div>
                                </Link>
                                <Link className="smdata" to="/discover-chennai/outdoor-and-recreation">
                                    <div className="smparagraph">outdoor & recreations</div>
                                </Link>
                                <Link className="smdata" to="/discover-chennai/religious">
                                    <div className="smparagraph">religious</div>
                                </Link>
                            </div>
                        </div>
                        <div className="smfooter-row">
                            <div className="smtitle">
                                <Link className="smparagraph" to="/tradition-and-culture">tradition & culture</Link>
                            </div>
                            <div className="smlist">
                                <Link className="smdata" to="/tradition-and-culture/people-of-chennai">
                                    <div className="smparagraph">people of chennai</div>
                                </Link>
                                <Link className="smdata" to="/tradition-and-culture/chennai-cuisine">
                                    <div className="smparagraph">chennai cuisine</div>
                                </Link>
                                <Link className="smdata" to="/tradition-and-culture/festivals-of-chennai">
                                    <div className="smparagraph">festivals of chennai</div>
                                </Link>
                                <Link className="smdata" to="/tradition-and-culture/tamil">
                                    <div className="smparagraph">tamil</div>
                                </Link>
                                <Link className="smdata" to="/tradition-and-culture/art-form-of-chennai">
                                    <div className="smparagraph">art form of chennai</div>
                                </Link>
                                <Link className="smdata" to="/tradition-and-culture/cycle-of-life">
                                    <div className="smparagraph">cycle of life</div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}
