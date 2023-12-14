export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <section className="footer__wrapper-left">
                    <a href="/" className="footer__logo">
                        <img src="/images/logo.svg" alt="loopstudios logo" />
                    </a>

                    <ul className="footer__sitemap">
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Careers</a>
                        </li>
                        <li>
                            <a href="">Events</a>
                        </li>
                        <li>
                            <a href="">Products</a>
                        </li>
                        <li>
                            <a href="">Support</a>
                        </li>
                    </ul>
                </section>

                <section className="footer__wrapper-right">
                    <div className="footer__socials">
                        <a href="#">
                            <img src="/images/icon-facebook.svg" alt="loopstudios facebook" />
                        </a>
                        <a href="#">
                            <img src="/images/icon-twitter.svg" alt="loopstudios twitter" />
                        </a>
                        <a href="#">
                            <img src="/images/icon-pinterest.svg" alt="loopstudios pinterest" />
                        </a>
                        <a href="#">
                            <img src="/images/icon-instagram.svg" alt="loopstudios instagram" />
                        </a>
                    </div>

                    <p className="footer__copyright">© 2021 Loopstudios. All rights reserved.</p>
                </section>
            </div>

            {/* ATTRIBUTION TO THE FRONTEND MENTOR PLATFORM */}
            <div className="footer__attr">
                Challenge by <a href="https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.linkedin.com/in/mondir-hallouli" target="_blank">Mondir Hallouli</a>.
            </div>
        </footer>
    )
}