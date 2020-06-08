import React from 'react'
import '../../assets/styles/businessdots.scss'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-129736959-1');
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default class LoginSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail: '',
            loginPassword: '',
            signupFullname: '',
            signupEmail: '',
            signupPassword: '',
            dotpermission: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        document.title = "LogIn | Business Dots | Inside Chennai";

        const loginBtn = document.querySelector('#login');
        const signupBtn = document.querySelector('#signup');

        function slideUp() {
            if (this.id == 'signup') {
                const parent = this.parentElement;
                const sibling = parent.nextElementSibling;
                parent.classList.remove('slide-up');
                sibling.classList.add('slide-up');
            } else {
                const parent = this.parentElement.parentElement;
                const sibling = parent.previousElementSibling;
                parent.classList.remove('slide-up');
                sibling.classList.add('slide-up');
            }
        }

        loginBtn.addEventListener('click', slideUp);
        signupBtn.addEventListener('click', slideUp);
    }

    login() {
        this.setState({ dotpermission: true });
    }

    signup() {
        alert('you can only login right now');
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        if (this.state.dotpermission) {
            return (
                <Redirect to={'/business-dots/dot-type'} />
            );
        }
        return (
            <div>
                <div className="business-dots-login-signup">
                    <div className="form-structor">
                        <form className="signup slide-up" method="post">
                            <h2 className="form-title" id="signup">Sign up <span>Or</span></h2>
                            <div className="form-holder">
                                <input type="text" className="input" name="signupFullname" placeholder="Full Name" pattern="[a-zA-Z ]{3,}" required onChange={this.onChange.bind(this)} />
                                <input type="email" className="input" name="signupEmail" placeholder="Email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onChange={this.onChange.bind(this)} />
                                <input type="password" className="input" name="signupPassword" placeholder="Password" minLength={6} required onChange={this.onChange.bind(this)} />
                            </div>
                            <button className="btn-submit-signup" onClick={this.signup.bind(this)}>Sign up</button>
                            <p className="loginSignupNote text-center">* By signing up, you agree to our <Link target="_blank" to="/terms-conditions">Terms of Use</Link> and to receive emails & updates and acknowledge that you read our <Link target="_blank" to="/privacy-policy">Privacy Policy</Link>.</p>
                        </form>
                        <form className="login" method="post">
                            <div className="center">
                                <h2 className="form-title" id="login"><span>Or </span>Log in</h2>
                                <div className="form-holder text-center">
                                    <input type="email" className="input" name="loginEmail" placeholder="Email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required autoFocus onChange={this.onChange.bind(this)} />
                                    <input type="password" className="input" name="loginPassword" placeholder="Password" minLength={6} required onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="forget-password">Forget Password?</div>
                                <button className="btn-submit-login" onClick={this.login.bind(this)}>Log in</button>
                                <p className="loginSignupNote text-center">* By logging in, you agree to our <Link target="_blank" to="/terms-conditions">Terms of Use</Link> and to receive emails & updates and acknowledge that you read our <Link target="_blank" to="/privacy-policy">Privacy Policy</Link>.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}