import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeNew from './containers/home/HomeNew';
import AboutChennai from './containers/explore/AboutChennai/AboutChennai';
import AboutChennaiList from './containers/explore/AboutChennai/AboutChennaiList';
import Discover from './containers/explore/Discover/Discover';
import DiscoverList from './containers/explore/Discover/DiscoverList';
import Inner from './containers/inner/Inner';
import TraditionCulture from './containers/explore/TraditionCulture/TraditionCulture';
import TraditionCultureList from './containers/explore/TraditionCulture/TraditionCultureList';
import NewAndNow from './containers/explore/NewAndNow/NewAndNow';
import AboutUs from './containers/otherlinks/AboutUs';
import ContactUs from './containers/otherlinks/ContactUs';
import SiteMap from './containers/otherlinks/SiteMap';
// import PreLoader from './containers/home/PreLoader';
//import Landing from './containers/landing/Landing';
//import Home from './containers/home/home';
// import Explore from './containers/explore/Explore';
//------------------------------ Business Dots ------------------------------
import BusinessDots from './containers/businessdots/BusinessDots'
import LoginSignup from './containers/businessdots/LoginSignup'
import DotType from './containers/businessdots/DotType'

export default (
	<Switch>
		<Route exact path="/" component={HomeNew} />
		<Route path="/home" component={HomeNew} />
		<Route path="/about-chennai/:id" component={AboutChennaiList} />
		<Route path="/about-chennai" component={AboutChennai} />
		<Route path="/discover-chennai/:id/:id" component={Inner} />
		<Route path="/discover-chennai/:id" component={DiscoverList} />
		<Route path="/discover-chennai" component={Discover} />
		<Route path="/inner" component={Inner} />
		<Route path="/tradition-and-culture/:id" component={TraditionCultureList} />
		<Route path="/tradition-and-culture" component={TraditionCulture} />
		<Route path="/new-and-now" component={NewAndNow} />
		<Route path="/about-us" component={AboutUs} />
		<Route path="/contact-us" component={ContactUs} />
		<Route path="/site-map" component={SiteMap} />
		{/* <Route exact path="/" component={PreLoader} /> */}
		{/* <Route exact path="/" component={Landing} /> */}
		{/* <Route path="/home_old" component={Home} /> */}
		{/*------------------------------ Business Dots ------------------------------*/}
		<Route path="/business-dots/dot-type" component={DotType} />
		<Route path="/business-dots/login" component={LoginSignup} />
		<Route path="/business-dots" component={BusinessDots} />
	</Switch>
);
