import { useState } from 'react';
import './approach.css';
import Card from '../../ui/card/card';
import SectionTitle from '../../ui/section-title/section-title';

function Approach(props) {
  const [isShown, setIsShown] = useState(false);
  
  function toggle() {
    setIsShown(prevShown => !prevShown);
}

  return (
    <Card>
      <div className="approachContainer">
        <div className="row">
          <div className="colImage">
            <div className='approach-image'>
              <img src={`../${props.img}`} alt="Approach image" />
            </div>
          </div>
          <div className="colContent">
            <SectionTitle>Fun Approach to Tech</SectionTitle>
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
        </div>
      </div>
      </Card>
  );
}

export default Approach;
