import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/homeNew.scss'

export default class PreLoader extends React.Component {
    componentWillMount() {
        window.setTimeout(function () {
            window.location.href = "/home";
        }, 2250);
    }
    render() {
        return (

            <div className="PreLoaderContainer">
                <div className="PreLoader animated bounceIn slow"></div>
                <div className="nlpt"></div>
            </div>

        );
    }
}