import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { BASE_IMG } from '../../constants/Config';
import { Link } from 'react-router-dom'

const ServiceItem = (props) => {
    const { img, title, text, button, type, link } = props;
    const onMouseButton = (title) => {
        document.getElementById(`serviceItemImgId${title}`).style.transform = `scale(1.1)`

        document.getElementById(`serviceItemLayerId${title}`).style.transform = `translateY(-100%)`
    }
    const leaveMouseButton = (title) => {
        document.getElementById(`serviceItemImgId${title}`).style.transform = `scale(1)`

        document.getElementById(`serviceItemLayerId${title}`).style.transform = `translateY(0)`
    }

    const onMouseImg = (title) => {
        document.getElementById(`serviceItemImgId${title}`).style.transform = `scale(1.15)`

    }
    const leaveMouseImg = (title) => {
        document.getElementById(`serviceItemImgId${title}`).style.transform = `scale(1)`
    }
    return (
        <>
            <div className={`col-12 service-item d-flex service-item--type-${type} flex-wrap`}>

                <div className="col-md-12 col-lg-6" >
                    <div className="position-relative" style={{ height: `100%`, width: `100%`, overflow: `hidden`, }}>
                        <div className="service-item__img"
                            id={`serviceItemImgId${title}`} style={{
                                backgroundImage: `url(${BASE_IMG}${img})`
                            }}
                        >
                            {!img && <Skeleton height="100%" />}
                        </div>

                        <div className="service-item__hover position-absolute"
                            id={`serviceItemLayerId${title}`}
                            style={{ height: `100%`, width: `100%`, top: `0`, left: `0`, zIndex: 1 }}
                            onMouseOver={() => onMouseImg(title)}
                            onMouseLeave={() => leaveMouseImg(title)}
                        ></div>
                    </div>


                </div>
                <div className="col-md-12 col-lg-6 service-item__detail">
                    <p className="service-item__detail--title">{title || <Skeleton height="100%" />}</p>
                    <p className="service-item__detail--text">{text || <Skeleton height="8rem" />}</p>
                    <Link to={link}>
                        <div className="service-item__detail__button"
                            onMouseOver={() => onMouseButton(title)}
                            onMouseLeave={() => leaveMouseButton(title)}
                        >

                            {button || <Skeleton height="100%" />}

                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ServiceItem;
