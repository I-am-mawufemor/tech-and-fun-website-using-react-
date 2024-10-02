import HeroSlideShow from "../components/hero/hero";

export default function Gallery(){
    return(
        <div>
            <HeroSlideShow interval={14000}/>
            <h1>This a gallery HomePage</h1>
        </div>
    )
}