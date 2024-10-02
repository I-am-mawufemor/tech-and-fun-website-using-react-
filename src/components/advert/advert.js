import React from 'react';
import './advert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faComments, faHome } from '@fortawesome/free-solid-svg-icons';

export default function AdvertSection(props) {
    return (
        <section className="advert-section" style={{ backgroundImage: `url('/hero-image/service-bg.jpg')` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                        <img src={`../${props.img}`} alt="Service Promotion" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 offset-lg-1 pl-lg-0">
                        <div className="section-title text-white">
                            <h2>{props.headline}</h2>
                           {props.discount && <p className="lead">{props.discount}</p>}
                        </div>
                        <div className="adverts">
                            <div className="advert-item">
                                <FontAwesomeIcon icon={faComments} />
                                <div className="advert-text">
                                    <h5>{props.service1}</h5>
                                    {props.detail && <p>{props.detail}</p>}
                                </div>
                            </div>
                            <div className="advert-item">
                                <FontAwesomeIcon icon={faHome} />
                                <div className="advert-text">
                                    <h5>{props.service2}</h5>
                                    {props.detail && <p>{props.detail}</p>}
                                </div>
                            </div>
                            <div className="advert-item">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <div className="advert-text">
                                    <h5>{props.service3}</h5>
                                    {props.detail && <p>{props.detail}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


