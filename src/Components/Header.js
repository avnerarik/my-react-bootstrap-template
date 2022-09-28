import headImage from '../avataaars.svg';

const Header = () => {
    return ( 
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading text-uppercase mb-0">React-Bootstrap</h1>
                <h2>Header Component</h2>
                {/*<!-- Masthead Avatar Image-->*/}
                <img className="masthead-avatar" src={headImage} alt="..." />
                {/*<!-- Masthead Heading-->*/}
                {/*<!-- Icon Divider-->*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/*<!-- Masthead Subheading-->*/}
                <p className="masthead-subheading font-weight-light mb-0">React - Bootstrap - NodeJS</p>
            </div>
        </header>
     );
}

export default Header;