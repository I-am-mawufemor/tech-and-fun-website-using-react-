import { useState } from 'react';
import './offer.css';
import Card from '../../ui/card/card';
import SectionTitle from '../../ui/section-title/section-title';
export default function Offer(props) {
    const [isShown, setIsShown] = useState(false);

    function toggle(){
            setIsShown(prevShown => !prevShown);
    }
    return (

            <Card>
            <div className="offer-container">
                <div className="row">
                    <div className="col content-col">
                        <SectionTitle>What We Offer</SectionTitle> 
                           {props.detail && <p>{props.detail}</p>} 

                           <div>
                    {isShown && (
                            <p>{props.detailDesc}</p>
                    )}
                </div>
                <button className="btn" onClick={toggle}>
                    {isShown ? "Hide" : "Read More "}&#8594;
                </button>
                    </div>

                    <div className="col image-col">
                        <div className="offer-image">
                            <img src={`../${props.img}`} alt="offer 1" />
                            <img src={`../${props.img2}`} alt="offer 2" />
                            <img src={`../${props.img3}`} alt="offer 3" />
                            <img src={`../${props.img4}`} alt="offer 4" />
                        </div>
                    </div>
                </div>
            </div>
            </Card>
    );
}

