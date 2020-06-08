import React from 'react'
import Footer from '../../commons/Footer'
import '../../../assets/styles/feeds.scss'
import SlimHeader from '../../commons/slimHeader'
import Instafeed from 'instafeed'
import $ from 'jquery'
import ReactGA from 'react-ga';
//import ReactPlayer from 'react-player'
//import { Container, Row, Col } from 'reactstrap'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class NewAndNow extends React.Component {

    /*constructor(props) {
        super(props)

        this.state = {
             key: "value",
             posts: [
                 {
                     videoUrl: '',
                     image: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg?cs=srgb&dl=nature-raindrops-drops-of-water-8633.jpg&fm=jpg',
                     title: 'Stay Tuned... We are launching soon',
                     description: 'Visveswaraya Tower Park, is an urban park in the suburb of Anna Nagar. Located near Anna Nagar Roundtana, the tower was built in 1968 for World Trade Fair exhibition.'
                 },
                 {
                     videoUrl: 'https://www.youtube.com/watch?v=bCExDpBUNLM',
                     image: 'https://instagram.famd1-2.fna.fbcdn.net/vp/af6283a4cdc6513a73627bef351993fe/5C2298AC/t51.2885-15/e35/39507578_289616631593014_7457399381591851008_n.jpg?_nc_eui2=AeGmuTCpVmNzjqFK-1hqAmBOxE-y1oqLGwvfS1gQENJGHyq9zqDNyNkykLBVAFwRkvCsVmCOK_npqnjlkFyR9ZZqrj7x36FWMb93dnxrndAMpg',
                     title: 'Anna Nagar Tower Park',
                     description: 'Visveswaraya Tower Park, is an urban park in the suburb of Anna Nagar. Located near Anna Nagar Roundtana, the tower was built in 1968 for World Trade Fair exhibition.'
                 }
             ]
         }
    }*/

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "New & Now";

        // pagination buttons
        var more = $("#more");
        var nomore = $("#nomore");

        // feed settings
        var feed = new Instafeed({
            get: 'user',
            userId: '8427447534',
            accessToken: '8427447534.1677ed0.c045b6ea632d47a1abdc03541f980f06',
            limit: 12,
            target: 'instafeed',
            sortBy: 'most-recent',
            resolution: 'standard_resolution',
            after: function () {
                // * check for more images
                if (!this.hasNext()) {
                    more.hide();
                    nomore.show();
                } else {
                    more.show();
                    nomore.hide();
                }
            },
            filter: function (image) {
                var date = new Date(image.created_time * 1000);
                var months = new Array(12);
                months[0] = 'January';
                months[1] = 'February';
                months[2] = 'March';
                months[3] = 'April';
                months[4] = 'May';
                months[5] = 'June';
                months[6] = 'July';
                months[7] = 'August';
                months[8] = 'September';
                months[9] = 'October';
                months[10] = 'November';
                months[11] = 'December';
                // * parse month, day and year
                var month = date.getMonth();
                var day = date.getDate();
                var year = date.getFullYear();
                // * concatenate and assign time
                var time = months[month] + ' ' + day + ', ' + year;
                image.created_time = time;
                // * end function execution
                return true;
            },
            template: '<a class="image" target="_blank" href="{{link}}"><img src="{{image}}"><div class="instaInfo"><p class="caption">{{caption}}</p><p class="date">{{model.created_time}}</p></div><div class="likes"><span class="heart_logo"></span><p>{{likes}}</p></div></a>'
        });

        // pagination binding
        more.on('click', function () {
            feed.next();
        });

        // initialize feed
        feed.run();
    }

    render() {

        return (
            <div>

                <SlimHeader />

                <div className="feeds_normal-web-container">
                    <h2 className="textCenter">New & Now</h2>
                    <div className="drop orangeNowAndNow" />
                    <div className="limiter big">

                        <div className="icFeeds_card_row">

                            <div id="instafeed"></div>
                            <div id="more"><p>Load more posts...</p></div>
                            <div id="nomore"><p>No more posts to show.</p></div>

                            {/* <Row className="rowCenter">
                                {
                                    this.state.posts.map(post => {

                                        if (post.videoUrl === '') {
                                            return (
                                                <Col lg={4} md={6} sm={6} xs={12}>
                                                    <div className="icFeed-box">
                                                        <div className="icFeed-image" >
                                                            <img src={post.image} />
                                                        </div>
                                                        <div className="icFeed-desc">
                                                            <div className="title">{post.title}</div>
                                                            <div className="desc">{post.description}</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        } else {
                                            return (
                                                <Col lg={4} md={6} sm={6} xs={12}>
                                                    <div className="icFeed-box">
                                                        <div className="icFeed-image" >
                                                            <ReactPlayer
                                                                url={post.videoUrl}
                                                                controls={true}
                                                                width="100%"
                                                                height="310px"
                                                            />
                                                        </div>
                                                        <div className="icFeed-desc">
                                                            <div className="title">{post.title}</div>
                                                            <div className="desc">{post.description}</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        }
                                    })
                                }
                            </Row> */}
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }

}
