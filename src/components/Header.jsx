import '../styles/Header.css';

function Header() {
    return (
        <header className="intro-wrapper">
            <div className="container flex-col">
                <div className="intro-head-wrapper">
                    <h1>
                        welcome to
                        <b> Shalini's </b>digital canvas  
                    </h1>
                    <h2>
                        - bringing creativity and functionality together..
                    </h2>
                </div>
                <div className="intro-foot-wrapper flex-row ">
                    <p>Hello! I'm passionate Full Stack Developer dedicated to building dynamic, user-centric web applications
                        . Explore my portfolio to see how I blend innovation with technical skill. Let's create something amazing together! </p>
                </div>

                {/* <div className="intro-img-wrapper"></div> */}
            </div>
        </header >

    );
}

export default Header;
