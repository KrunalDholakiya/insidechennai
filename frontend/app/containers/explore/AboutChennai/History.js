import React from 'react'
import '../../../assets/styles/page.scss'
import HorizontalTimelineContent from './Timeline/HorizontalTimelineContent'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

let content = [
    {
        date: "1",
        subtitle: "Pre-History",
        content: "The Archaeological Survey of India (ASI) found stone age implants near the Pallavaram Hills based on which they suspect that around 250,000 BCE, an Old Stone Age settlement thrived on Pallavaram Hill, and round 1000 BCE, there existed a Megalithic settlement in Kundrathur. From 300 BCE - 300 CE, it was known as the Sangam Period in Tamil Nadu and during this period, places like Mylapore were of prominence. The Sangam period saint Thiruvallur, the author of Thirukkural is often associated with Mylapore. From 52 - 70 CE, according to Christian tradition, one of the Christian apostales St. Thomas arrived in the vicinity of Chennai and preached in the city. He was allegedly martyred on St. Thomas Mount.  From 900 - 1200 CE, Chennai formed a part of the Chola Empire. Neighbourhoods to the south of Egmore formed a part of the Chola province of Pulivar Kottam while those to the north formed a part of province of Puzhal Kottam. In 1522, the Portuguese occupied Mylapore and set up a colony which they named São Tomé de Meliapore after which in 1523 they established San Thome Church in honour of St. Thomas."
    },
    {
        date: "2",
        subtitle: "17th Century",
        content: "In the 17th Century, there existed plenty of scattered settlements and each settlement grew around the nucleus of a temple. In 1612, the Dutch arrived and captured the region and established near Pulicat, just north of the city. In the year 1626, the British East India Company decided to build a factory on the east coast and selected Armagon (Dugarazpatnam), a village some 35 miles north of Pulicat, as its site. In 1639, the English secured a grant from the Damarla Venkatadari Nayaka, Nayaks of Kalahasti, for getting a three-mile-long strip of land and the city of Madras was founded (22 August). The foundation was laid for Fort St. George and the construction was completed on 23rd April, 1640. In 1664, the first British hospital in the country was started in Fort St. George (16 November) which later became the Government General Hospital. In 1668, Triplicane was annexed to the city. In 1678, the foundation was laid for St. Mary’s Church in Fort St. George and the church was completed in 1679. In 1688,  Madras City Municipal Corporation was inaugurated and in 1693, Egmore, Puraswalkam and Tondiarpet were annexed to the city."
    },
    {
        date: "3",
        subtitle: "18th Century",
        content: "18th Century could be known as the century of invasions for Tamil Nadu, started by Emperor Aurangazeb's general Daud Khan who attacked the Fort St.George in 1701. However, the British manage to hold the Fort.Expanding the city, five neighbouring villages of Thiruvottiyur, Nungambakkam, Vyasarpadi, Kottivakkam and Sathangadu were annexed to the city in 1708. In 1711, the first printing press is erected.In 1726  Coja Petrus Uscan constructed the 134 stone steps at St.Thomas Mount, which are used to reach the summit of the 300 - feet hillock till date.In 1735, Chintadripet was formed and in 1742, Vepery, Periamet, Perambur and Pudupakkam were annexed to the city.In 1746, the French Admiral La Bourdonnais captured Fort St George but returned it to the English through the Treaty of Aix - la - Chapelle(1748) in 1749. In the same year, Santhome and Myapore were annexed to the city.In 1758, the French Commander Lawly sieged Madras but the siege lasted only for a year, until 1759. In 1767, Hyder Ali invaded the city for the first time and in 1769 for the second time.The Chepauk Palace was built by Nawab of Arcot in 1768. In 1772, Seven Wells Scheme, the city's first organised water supply, was started. In 1777, Veerappillai was appointed as first Kotthawal, giving rise to the name 'Kotthawal Chavadi'. In 1784, the first newspaper, Madras Courier, was founded and in the following year, the first post office started functioning. In 1786, William Petrie, a member of the Madras Government, built a private astronomical observatory, the first observatory in the East. In 1788,  Thomas Parry landed in Madras and began the oldest surviving mercantile name in the city—Parry's. 1792 was the year where the  Systematic meteorological observations started, giving birth to the Madras Observatory and later the Regional Meteorological Centre.In 1795: Triplicane Wallajah Mosque was built."
    },
    {
        date: "4",
        subtitle: "19th Century",
        content: "The 19th century was a year of developments for Tamil Nadu with the emergence or multiple colleges and museums. In 1817, the Madras Literary Society was founded. In 1831, the first Commercial Bank, Madras Bank, was founded. Also, in the same year, the first census in the city was taken (population: 39,785). In 1834, the first survey school was inaugurated which later developed as an engineering college. In 1835, the First medical college was founded which later was known as Madras Christian College. In 1841, the Ice House was built, where ice brought from America through ships was stored. It was renamed as Vivekananda House. In 1842, the first lighthouse was built. 1844 was the year for the opening of Higginbotham's, the first book store in the country. In 1846, Pachaiappan School was founded which later became Pachaiappa's College. In 1851 the Museum is formed followed by the Zoo in 1853. In 1854, the Imperial Hotel was opened, which later became the Taj Connemara, the oldest functioning hotel in the city. In 1855 the University Board was formed. In 1856 the first Railway line from Royapuram to Arcot was built. In 1857 the  University of Madras was founded. In 1862 the first pier was constructed at the harbour and the developments took place in 1868.  From 1864 to 1865 the  Presidency College was built. In 1873 the birth registration began and int same year Madras Mail newspaper was founded. In 1874, the University Senate House was built. In 1875 the Madras observatory started issuing daily weather reports. The city was hit by the Great Famine from 1876–78, which completely wiped the city. In  1878,  The Hindu newspaper was  founded. In 1882, the first telephone was installed. In 1885 the Marina Beach road was formed. In 1886, the Connemara Public Library was founded.  In 1889 the High Court Building foundation was laid. In 1899, the First Tamil newspaper, Swadesamitran, was founded."
    },
    {
        date: "5",
        subtitle: "20th Century",
        content: "In 1905 the Chennai Port Trust was formed. 1910: Parsi fire temple was built at Royapuram and in 1911 the Government Royapettah Hospital was established. In 1914, the water mains and drainage were formed and street lights were introduced. In 1923: The city was expanded to occupy an area of about 80 sq km. In 1924 the School of Indian Medicine was founded and the radio broadcasting began on 31 July. In 1925: Loyola College was founded and the first bus transport began. In 1931 the Suburban electric train services started from Chennai Beach to Tambaram.  In 1934,  Raja Sir Muthiah Chettiyar was appointed first mayor of the city. In 1942, the Second World War resulted in evacuation of Madras. In 1943, the population of the city crossed the million mark. In 1946, Mambalam, Saidapet, Government Farm, Puliyur, Kodambakkam, Saligramam, Adayar and Alandur villages, which formed part of Saidapet Municipality, Sembiyam, Siruvallur, Peravallur, Small Sembarambakkam and Ayanavaram, which formed part of Sembium Panchayat Board Aminjikarai, Periyakudal, Maduvankarai villages, which formed part of Aminjikarai Panchayat Board, were annexed to the city. Part of Velacheri village, belonging to Velacheri Panchayat Board, was also made a part of the city. In 1947: Indian national flag was hoisted over Fort. St. George as India attained Independence and Madras city was chose as the capital of Madras state. In 1950: Boundary of the city was extended to cover 129 sq km by the inclusion of Saidapet and Sembium. In 1952 the Nehru Stadium was built. In 1953: Government Dental College was founded (10 August). In1954: Adyar Cancer Institute was founded (June 18). In 1956 the Gandhi Mandapam was built.  In 1960 the  Kilpauk Medical College started functioning. In 1969 the First World Tamil Congress was held and the Madras State was renamed Tamil Nadu, meaning Tamil country. In 1972 the Madras Metropolitan Development Authority was formed and in 1973 the  Madras Corporation was superseded.. In 1974, Valluvar Kottam was built. In 1976, the present lighthouse was built. In 1977 the Madras Metropolitan Water Supply and Sewage Board was formed and Kanagam, Taramani, Thiruvanmiyur, Velacheri, Kodambakkam, Virugambakkam, Saligramam, Koyambedu, Thirumangalam, Villivakkam, Errukancheri, Kolathur and Kodungaiyur panchayat areas were annexed to the city. In 1983, Apollo Hospitals opened the country's first corporate hospital. 1988 was an eventful year as  the Birla Planetarium was built, the Madras Corporation's tercentenary was celebrated and the decentralisation of administration took place.1996 was the year when the city of Madras was renamed as Chennai."
    },
    {
        date: "6",
        subtitle: "21th Century",
        content: "In 2002, the Intercity bus terminus at George Town was shifted to Chennai Mofussil Bus Terminus (CMBT) at Koyambedu (18 November). On 26th December, 2004, the Indian Ocean Tsunami wreaked  havoc in the city, killing about 206 people. In 2010, the First seawater desalination plant started functioning at Minjur (25 July). In 2011, Nine municipalities, 8 town panchayats, and 25 village panchayats were annexed to the city which got the city to reache the present stage of 426 km2 from 174 km2. In 2013, the Second seawater desalination plant started functioning at Nemmeli (22 February). In 2015, the Chennai Metro started functioning. 2015 also brought the tragic event of the South Indian floods that caused the death of hundreds of people and damages worth several billions of dollars."
    },
];

export default class History extends React.Component {

    componentWillMount() {
        this.data = content.map((history) => {
            return ({
                date: history.date,
                component: (
                    <div className='container' >
                        <h4>{history.subtitle}</h4>
                        <hr />
                        <p className="textCenter abouttextpadding">{history.content}</p>
                    </div>
                )
            });
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "History | Inside Chennai";
    }

    render() {
        return (
            <div>
                <div className="activeTbar aActiveBar animated fadeIn"></div>
                <div className="normal-web-container spaceRemover">
                    <p className="textCenter abouttextpadding">
                        Chennai has a fascinating history. The region around Chennai has served as an important administrative, military, and economic centre for many centuries. It used to be the centre of conflict for the supremacy of the British and the French.  In the 17th and the 18th century, Chennai was still developing as many localities were being annexed to the city only then. 19th century brought prosperity to Chennai as it started growing rapidly. Many museums and educational institutions among other things emerged in the city. Chennai came to be known as the “Detroit of India” because of its multiple industries and ports. To provide better understanding of the history of Chennai, here is a timeline that pans out the details of the events in chronological order.
                    </p>
                    <div className="spaceContainer"></div>
                    <div className="textCenter" style={{ fontSize: '20px', fontWeight: '500' }}>Timeline that pans out the events in a chronological order.<br /><br /></div>
                    <HorizontalTimelineContent className="timeline" content={this.data} />
                </div>
            </div>
        )
    }
}
