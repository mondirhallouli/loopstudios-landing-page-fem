export default function MobileMenu({ toggleMenu }) {

    return (
        <div className="mobile-menu" id="mobileMenu">
            <div className="mobile-menu__top-bar">
                <img src="/images/logo.svg" alt="loopstudios logo" />

                <button onClick={toggleMenu}>
                    <img src="/images/icon-close.svg" alt="mobile menu close icon" />
                </button>
            </div>

            <ul className="mobile-menu__list">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
            </ul>
        </div>
    )
}
