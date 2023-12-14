import MobileMenu from "./MobileMenu";

export default function Header() {
    const handleClick = (evt) => {
        evt.stopPropagation();

        const mobileMenu = document.querySelector("#mobileMenu");
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            mobileMenu.style.left = '100%';
        }
        else {
            mobileMenu.classList.add('open');
            mobileMenu.style.left = '0%';
        }
    };

    return (
        <header className="header">

            <nav className="nav">
                <a href="/">
                    <img src="/images/logo.svg" alt="loopstudios logo image" />
                </a>

                <button className="nav__menu-btn" onClick={handleClick}>
                    <img src="/images/icon-hamburger.svg" alt="menu icon" />
                </button>

                <ul className="nav__menu">
                    <li>
                        <a href="#" className="">About</a>
                    </li>
                    <li>
                        <a href="#" className="">Careers</a>
                    </li>
                    <li>
                        <a href="#" className="">Events</a>
                    </li>
                    <li>
                        <a href="#" className="">Products</a>
                    </li>
                    <li>
                        <a href="#" className="">Support</a>
                    </li>
                </ul>
            </nav>

            <div className="header__hero">
                <p className="header__hero-text">Immersive experiences that deliver</p>
            </div>

            <MobileMenu toggleMenu={handleClick} />
        </header>
    )
}