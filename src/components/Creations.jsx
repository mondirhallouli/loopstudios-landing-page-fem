export default function Creations() {
    return (
        <div className="creations">
            <div className="creations__title">
                <h3>Our creations</h3>
                <button>See all</button>
            </div>

            <ul className="creations__list">
                <li className="earth">
                    <a href="" >
                        deep earth
                    </a>
                </li>
                <li className="arcade">
                    <a href="" >
                        night arcade
                    </a>
                </li>
                <li className="soccer">
                    <a href="">
                        soccer team VR
                    </a>
                </li>
                <li className="grid">
                    <a href="">
                        the grid
                    </a>
                </li>
                <li className="above">
                    <a href="">
                        from up above VR
                    </a>
                </li>
                <li className="pocket">
                    <a href="">
                        pocket borealis
                    </a>
                </li>
                <li className="curiosity">
                    <a href="">
                        the curiosity
                    </a>
                </li>
                <li className="fisheye">
                    <a href="">
                        make it fisheye
                    </a>
                </li>
            </ul>

            <button className="creations__more">see all</button>
        </div>
    )
}