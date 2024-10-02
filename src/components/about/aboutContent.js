import About from "./about";
import aboutData from "./aboutData";

function AboutContent() {
    const aboutElement = aboutData.map(aboutItem => {
        return (
            <About 
                key={aboutItem.id}
                {...aboutItem}
            />
        );
    });

    return (
        <div className="about-content">
            {aboutElement}
        </div>
    );
}

export default AboutContent;
