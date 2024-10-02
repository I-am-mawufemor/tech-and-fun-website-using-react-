function Event(props) {
    return (
        <div className="col">
            <img src={`../${props.img}`} alt="event-images" />
            <h4>{props.headline}</h4>
            <p>{props.detail}</p>
            <a href="#" className="event-btn">Read more &#8594;</a>
        </div>
    );
}

export default Event;
