import HeroSlideShow from "../components/hero/hero";
export default function Blog(){
    return(
        <div>
            <HeroSlideShow interval={14000}/>
            <h1>This is a blog</h1>
        </div>
    )
}