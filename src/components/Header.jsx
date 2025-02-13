import Navbar from "./Navbar"

export default function Header(props) {

    return (
        <header>
            <div className="container_Header">
                <div><img src="../dc-logo.png" alt="" /></div>
                <div className="lista_Header">
                    <Navbar link={props.link} />
                </div>
            </div>
        </header>
    )
}