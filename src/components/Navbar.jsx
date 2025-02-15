export default function Navbar(props) {

    return (
        < ul >
            {props.link.map((link) => (
                <li> <a href={link.url}>{link.testo}</a></li >
            ))}
        </ul >
    )
}
