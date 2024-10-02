import Card from "../../ui/card/card";

export default function gallery(props){
    return(
        <Card>
            <div className="gallery-container">
            <h1 className="title">{props.title}</h1>
            <div className="gallery-image">
                <div>
                    {}
                </div>
            </div>
            </div>
            

        </Card>
    )
}