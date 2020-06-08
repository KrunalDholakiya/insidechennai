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
        document.title = "About Us";
    }

    render() {
        return (
            <div>

                <SlimHeader />

                <div className="normal-web-container">
                    <div className="spaceRemover1"></div>

                    <h3 className="animated fadeIn sitemapBorder">About Us</h3>
                    <p className="textCenter textpadding">This About us bio is less about us and more about <b>“you“</b>. We make it our job to cater to your unceasing need for unique, genuine and interesting information about anything and everything that you would want to know about <b>“our”</b> city <b>Chennai</b>. This city has let you dream, and we provide a platform to help you achieve those dreams in the city of Chennai.</p><br />
                    <p className="textCenter textpadding"><b>Together you and we will discover and help the city grow like no other.</b></p><br /><br />
                    <p className="textCenter textpadding">In the upcoming months, we will  bring to you a platform named Business Dots, where in businesses of different sizes and natures can collaborate with us. We are ready and set to serve you with this set platform called Insidechennai.com. We are highly interactive and enthusiastic medium for this beautiful city of Chennai.</p><br />
                    <p className="textCenter textpadding"><b>Let’s bring together the future to the city that we call our home, Chennai.</b></p>

                </div>

                <Footer />

            </div>
        )
    }
}
