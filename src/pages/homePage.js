import AboutContent from "../components/about/aboutContent";
import AdvertContent from "../components/advert/advertContent";
import ApproachContent from "../components/approach/approachContent";
import Contact from "../components/contact/contact";
import EventContent from "../components/Events/eventContent";
import HeroSlideShow from "../components/hero/hero";
import OfferContent from "../components/offer/offerContent";
import Testimonial from "../components/testimonial/testimonial";

export default function HomePage(){
    return(
        <div>
            <HeroSlideShow interval={14000}/>
            <OfferContent />
            <AboutContent />
            <AdvertContent />
            <ApproachContent />
            <Testimonial />
            <EventContent />
            <Contact />
        </div>
    )
}