import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'
import { BASE_IMG } from '../../constants/Config';

const ServiceItemHome = (props) => {
    const { img, logo, title, text, id } = props;
    return (
        <>
            <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                <Link to={`/service/detail/${id}`}>
                    <div className="service-item-home">
                        <div style={{ overflow: `hidden` }}>
                            <div className="service-item-home__img position-relative" style={{ backgroundImage: `url(${BASE_IMG}${img})` }}>
                                {!img && <Skeleton height="100%" />}
                                <div className="service-item-home__img--hover position-absolute"
                                    style={{ height: `100%`, width: `100%`, top: `0`, left: `0`, zIndex: 1 }}
                                >
                                </div>
                            </div>

                        </div>

                        <div className="service-item-home__detail">
                            {(!logo || !title || !text) ? <Skeleton height="100px" /> :
                                <>
                                    <div className="service-item-home__detail__logo">
                                        <img src={`${BASE_IMG}${logo}`} />
                                    </div>
                                    <div className="service-item-home__detail__title">
                                        <p>{title}</p>
                                    </div>
                                    <div className="service-item-home__detail__text">
                                        <p>{text}</p>
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default ServiceItemHome;
