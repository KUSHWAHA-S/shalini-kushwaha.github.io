import '../styles/NavBar.css';

function NavBar() {
    return (
        <div className="navbar flex-row">
            <nav className="navbar-inner flex-row">
                <h2>Shalini</h2>
                <ul className="nav-link flex-row">
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Experience</a>
                    </li>
                    <li>
                        <a href="">Education</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default NavBar;
