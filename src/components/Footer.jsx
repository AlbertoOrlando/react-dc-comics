import Navbar from "./Navbar"

export default function Footer(props) {
    return (
        <footer>
            <div className="container_Ftop">
                <div className="container_Fleft">
                    <div className="info">
                        <h2>DC COMICS</h2>
                        <ul>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Video</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                        <h2>SHOP</h2>
                        <ul>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div className="info">
                        <h2>DC</h2>
                        <Navbar link={props.link} />
                    </div>
                    <div className="info">
                        <h2>SITES</h2>
                        <ul>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container_Fright">
                    <img src="../dc-logo-bg.png" alt="" />
                </div>
            </div>
            <div className="container_fdown">
                <div className="sign_up">
                    <button className="bottone">SIGN-UP NOW!</button>
                </div>
                <div className="social">
                    <h2>FOLLOW US</h2>
                    <ul>
                        <li><a href="#"><img src="../footer-facebook.png" alt="" /></a></li>
                        <li><a href="#"><img src="../footer-twitter.png" alt="" /></a></li>
                        <li><a href="#"><img src="../footer-youtube.png" alt="" /></a></li>
                        <li><a href="#"><img src="../footer-pinterest.png" alt="" /></a></li>
                        <li><a href="#"><img src="../footer-periscope.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}