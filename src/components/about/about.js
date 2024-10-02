import AboutCard from '../../ui/about-card/about-card';
import SectionTitle from '../../ui/section-title/section-title';
import './about.css';
import { useState } from "react";

export default function About(props) {
    const [isShown, setIsShown] = useState(false);

    function toggle() {
        setIsShown(prevShown => !prevShown);
    }

    return (
        <AboutCard>
            <div className="col-left">
                <div className="about-img">
                    <img src={`../${props.img}`}alt="About Us" />
                </div>
            </div>
            <div className="col-right">
            <SectionTitle>about us</SectionTitle>
                <h2>{props.Heading}</h2>
                {props.Description && <p>{props.Description}</p>}
                <div>
                    {isShown && (
                        <>
                            <div className="about-heading">Mission Statement</div>
                            <p>{props.Mission}</p>
                            <div className="about-heading">Core Values</div>
                            <p>{props.CoreValue}</p>
                        </>
                    )}
                </div>
                <button className="about-btn" onClick={toggle}>
                    {isShown ? "Hide" : "Read More"}
                </button>
            </div>
            </AboutCard>
    );
}


