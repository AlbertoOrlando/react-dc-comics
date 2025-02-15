export default function Card(props) {
    return (
        <div className="cardProduct">
            <img src={props.thumb} alt="" />
            <h3>{props.series}</h3>
        </div>
    )
}