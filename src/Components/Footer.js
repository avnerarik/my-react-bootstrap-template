
const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        {/*<!-- Footer Location-->*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Footer - Location</h4>
                            <p className="lead mb-0">
                                2206-190 John Smith 
                                <br />
                                Winnipeg, MB R3C1J8
                            </p>
                        </div>
                        {/*<!-- Footer Social Icons-->*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            {/*}
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                            */}
                        </div>
                        {/*<!-- Footer About Text-->*/}
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Template</h4>
                            <p className="lead mb-0">
                                <span>Free to use, MIT licensed Bootstrap theme created by</span>
                                <br />
                                <a href="http://startbootstrap.com">Start Bootstrap</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*<!-- Copyright Section-->*/}
            <div className="copyright py-2 text-center text-white">
                <div className="container"><small>Copyright &copy; Your Website 2022</small></div>
            </div>
        </>
     );
}
 
export default Footer;
