import React, {Component} from 'react'
import Head from 'next/head'

export default class Index extends Component {

    render() {
        return (
            <div id="App">
                <Head>
                    <title>Frontend Mentor | huddle-landing-page-with-curved-sections</title>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:700&display=swap" rel="stylesheet"/>
                </Head>
                <main id="main-content">
                    <header className="header">
                        <div className="container">
                            <nav className="navbar">
                                <img src="/static/images/logo.svg" alt="Huddle Logo" className="navbar__logo"/>
                                <a href="#" className="btn">Try it free</a>
                            </nav>

                            <div className="header__hero padtop">
                                <h1 className="header__title">Build The Community Your Fans Will Love</h1>
                                <p className="header__description">
                                    Huddle re-imagines the way we build communities. You have a voice, but so does 
                                    			your audience. Create connections with your users as you engage in genuine discussion.
                                </p>
                                <a href="" className="btn btn-pink btn-large">Get Started For Free</a>
                                <div className="header__illustrations padbot">
                                    <img src="/static/images/screen-mockups.svg" alt="" className="header__img"/>
                                    <div className="header__stats padtop">
                                        <div className="stat-card">
                                            <p className="large-text">
                                                <img src="/static/images/icon-communities.svg" alt="Communities" className="card-icon"/>
                                                1.4k+</p>
                                            <span className="small-text">Communities Formed</span>
                                        </div>
                                        <div className="stat-card">
                                            <p className="large-text">
                                                <img src="/static/images/icon-messages.svg" alt="Communities" className="card-icon"/>
                                                2.7m+</p>
                                            <span className="small-text">Messages Sent</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </header>

                    <section id="features" className="section-curved bg-gray">
                        <div className="container feature-card">
                            <div className="feature-card__content">
                                <h2 className="feature-card__title">Grow Together</h2>
                                <p className="feature-card__desc">Generate meaningful discussion with your audience and build a strong, loyal
                                    				community. Think of the insightful conversations you miss out on with a feedback form
                                </p>
                            </div>
                            <div className="feature-card__hero">
                                <img src="/static/images/illustration-grow-together.svg" alt="Grow Together" className="feature-card__img"/>
                            </div>
                        </div>
                    </section>
                    <section id="features2" className="section-clean">
                        <div className="container feature-card">
                            <div className="feature-card__content">
                                <h2 className="feature-card__title">
                                    Flowing Conversations
                                </h2>
                                <p className="feature-card__desc">You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                                    				just-in-time loading for a more natural flow.
                                </p>
                            </div>
                            <div className="feature-card__hero">
                                <img src="/static/images/illustration-flowing-conversation.svg" alt="Flowing Conversations" className="feature-card__img"/>
                            </div>
                        </div>
                    </section>
                    <section id="features3" className="section-curved bg-gray section-curved--2">
                        <div className="container feature-card">
                            <div className="feature-card__content">
                                <h2 className="feature-card__title">Your Users</h2>
                                <p className="feature-card__desc">It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                                    				once signed in to your app, your users can start chatting immediately.
                                </p>
                            </div>
                            <div className="feature-card__hero">
                                <img src="/static/images/illustration-your-users.svg" alt="Grow Together" className="feature-card__img"/>
                            </div>
                        </div>
                    </section>

                    <section id="getstarted" className="padtop padbot">
                        <div className="container">
                            <h2 className="feature-card__title">Ready To Build Your Community?</h2>
                            <a href="" className="btn btn-large btn-pink">Get Started For Free</a>
                        </div>
                    </section>


                    <footer id="footer" className="footer-curved">
                        <div className="container">
                            <div className="footer__item1">
                                <img src="/static/images/logo.svg" alt="Footer Logo" className="footer-logo"/>
                                <p className="footer__address">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                                    				vestibulum a, ultrices quis sem.</p>
                                <p className="footer-text">
                                    <img src="/static/images/icon-phone.svg" className="footer-icon" alt="Phone"/>
                                    Phone: +1-543-123-4567
                                </p>
                                <p className="footer-text">
                                    <img src="/static/images/icon-email.svg" className="footer-icon" alt="Phone"/>
                                    example@huddle.com
                                </p>

                                <ul className="social-links">
                                    <li>
                                        <a href="" className="footer-link">
                                            <i className="fab fa-facebook-square fa-3x"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="footer-link">
                                            <i className="fab fa-twitter fa-3x"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="footer-link">
                                            <i className="fab fa-instagram fa-3x"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__item2">
                                <h3 className="footer__newsletter">Newsletter</h3>
                                <p className="newsletter__desc">To receive tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                                    				send you spam or pass on your email address</p>
                                <div className="input__container">
                                    <input type="email" name="email" id="email"/>
                                    <submit className="btn btn-pink btn-boxy">Subscribe</submit>
                                </div>
                            </div>
                        </div>
                    </footer>


                    <p className="attribution">
                        Challenge by
                        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                                  Coded by
                        <a href="https://github.com/theAspiringDev1" target="_blank">Gerard Gueco</a>.
                    </p>

                </main>
            </div>
        )
    }
}
