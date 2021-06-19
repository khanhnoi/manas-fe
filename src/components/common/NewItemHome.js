import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { BASE_IMG } from '../../constants/Config';
import { Link, withRouter } from 'react-router-dom'

const NewItemHome = (props) => {
    const { img, title, name, description, button, id } = props;

    return (
        <>
            <div className="row" >
                <div className="new-item-home">
                    <div className="new-item-home__bg"
                        style={{ backgroundImage: `url(${BASE_IMG}${img})` }}
                    ></div>
                    <div className="new-item-home__main homepage-last-new-slider-main">
                        <div className="new-item-home__main__title">
                            <p>{title}</p>
                        </div>
                        <p className="new-item-home__main__text main-text">
                            <p>{name}</p>
                        </p>
                        <p className="new-item-home__main__sp-text">
                            <p>{description}</p>
                        </p>
                        <div className="new-item-home__main__button">
                            <span>
                                <Link to={`/news/detail/${id}`} >
                                    {button}
                                </Link>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
            {/* <div className="col-md-4 mb-4">
                <div className="new-item-home-home">
                    <div className="new-item-home-home__img" style={{ backgroundImage: `url(${img})` }}>
                        {!img && <Skeleton height="100%"/>}
                    </div>
                    <div className="new-item-home-home__detail">
                        <div className="new-item-home-home__detail__title">
                            <p>{title || <Skeleton height="6rem"/>}</p>
                        </div>
                        <div className="new-item-home-home__detail__text">
                            <p>{text || <Skeleton height="6rem"/>}</p>
                        </div>
                    </div>
                </div>

            </div> */}
        </>
    )
}


export default NewItemHome;
