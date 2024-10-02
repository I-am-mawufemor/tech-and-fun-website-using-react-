import "./about-card.css"
export default function AboutCard(props){
    return(
        <div className="about-card">
        { props.children}
    </div>
    )
}