import React from 'react'
import '../../assets/styles/page.scss'
import Footer from '../../containers/commons/Footer'
import SlimHeader from '../../containers/commons/slimHeader'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class AboutUs extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "Contact Us";
    }

    render() {
        return (
            <div>

                <SlimHeader />
                <div className="normal-web-container">
                    <div className="contactusLogo" style={{ marginTop: '-30px' }}></div>
                    <div className="textCenter ContactUs">info@insidechennai.com</div>
                </div>

                <Footer />

            </div>
        )
    }
}
