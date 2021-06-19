import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

import imgBanner from '../../assets/images/Icon/Image1.svg';

import HeaderHomePage from '../../components/layout/HeaderHomePage';
import ServiceItem from '../../components/common/ServiceItem';
import ServiceItemHome from '../../components/common/ServiceItemHome';
import NewItemHome from '../../components/common/NewItemHome';
import Footer from '../../components/layout/Footer';

import { BASE_IMG, NEW_LETTER } from '../../constants/Config';
import { getHomePageRequest } from '../../action/home';
import { postData } from '../../Service/base_service'
import { getFormDataFromRef } from '../../helpers/form'
import { destructServerErrors } from '../../helpers/error'

const HomePage = () => {
    const { t } = useTranslation();
    const data = useSelector(state => state.home?.data);
    // console.log('dataHome:');
    // console.log(data);
    // const header = home && home.data ;
    const email = useRef("");
    const [mail, setMail] = useState('')
    const [err, setErr] = useState("")
    const [success, setSuccess] = useState("")
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const changeLangApi = () => {
        dispatch(getHomePageRequest())
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHomePageRequest())
    }, []);

    const handleChangeEmail = (e)=>{
        setMail(e.target.value);
    }
    const sendLetter = (e) => {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(mail==='') {
            setErr(t('The email field is required'))
        }
        else if( re.test(mail)) {
            postData(NEW_LETTER, { email: getFormDataFromRef(email).current }).then(res => {
                // console.log('test');
                // console.log(res);
                setSuccess(t('You have successfully registered'))
                document.querySelector('.homepage-foot__form').reset()
                setErr("")
            }).catch(error => {
                let errs = destructServerErrors(error);
                if (errs.email == 'The email field is required.') { 
                    setErr(t('The email field is required'))
                }
                else {
                    setErr(t('The email must be a valid email address'))
                }
                setSuccess(t('Please confirm the CAPTCHA'))
            })
        }
        else {
            setErr(t('The email must be a valid email address'))
        }
        
    }

    return (
        <>
            <HeaderHomePage title={data?.name} text={data?.featured} changeLangApi={changeLangApi} />
            <section className="homepage-banner" id="scroll-header" name="top-head">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 homepage-banner__text">
                            <p className="homepage-banner__text--1">{data?.description || <Skeleton height="6rem" />}</p>

                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="homepage-banner__img-background" style={{ backgroundImage: `url(${imgBanner})` }}>
                                {!imgBanner && <Skeleton height="100%" />}
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="homepage-visit">
                <div className="container">
                    <div className="row">

                        <ServiceItem
                            img={data?.image_brand}
                            title="Discover Our Brands"
                            text={data?.description_brand}
                            button="Visit Our Brands"
                            type={1}
                            link="/collection" />
                        <ServiceItem
                            img={data?.image_craftsmanship}
                            title="Craftsmanship"
                            text={data?.description_craftsmanship}
                            button="Visit Designer Profiles"
                            type={2}
                            link="/designer" />
                    </div>
                </div>
            </section>

            <section class="homepage-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 homepage-services__title">
                            <p>{t('homepage.service') || <Skeleton height="2rem" />}</p>
                        </div>
                        <div className="col-md-6 homepage-services__text">
                            <p>{data?.description_services ||  <Skeleton height="2rem" />}</p>
                        </div>
                    </div>
                    <div className="row">
                        {data?.service.map((item, index) => (
                            <ServiceItemHome
                                key={index}
                                img={`${item?.image}`}
                                logo={`${item?.icon}`}
                                title={item?.name}
                                text={item?.description}
                                id={item?.id}
                            />
                        ))}

                    </div>
                    <div class="row homepage-services--center">
                        <div className="col-md-12">
                            <Link to="/service" >
                                <span className="homepage-services__button">
                                    {t('homepage.view')  ||  <Skeleton width="100%" height="100%" />}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section class="homepage-news">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 homepage-news__title">
                            <p>{t('homepage.new.title')  ||  <Skeleton height="2rem" />}</p>
                        </div>
                        <div className="col-md-6 homepage-news__text">
                            <p>{t('homepage.new.text')  ||  <Skeleton height="2rem" />}</p>
                            <Link to="/news">
                                <span className="homepage-services__button">
                                    {t('homepage.new.button')  ||  <Skeleton width="100%" height="100%" />}
                                </span>
                            </Link>
                        </div>
                    </div>
                    {
                        data?.new ?
                            <Carousel
                                responsive={responsive}
                                arrows={false}
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                infinite={true}
                                showDots={true}
                            >
                                {data.new.map((item, index) => (
                                    <NewItemHome
                                        key={index}
                                        img={item.image}
                                        title={item.title}
                                        name={item.name}
                                        description={item.description}
                                        button="Read Article"
                                        id={item.id}
                                    />
                                ))}

                            </Carousel>
                            : <Skeleton height="450px" />

                    }

                </div>
            </section>



            <section className="homepage-brand">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="homepage-brand__title">
                                <p> {t('homepage.brand.title') ||  <Skeleton height="2rem" />}</p>
                            </div>
                            <div className="homepage-brand__text">
                                <p> {t('homepage.brand.text') ||  <Skeleton height="2rem" />} </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data?.branch.map((item, index) => (
                            <div key={index} className="col-md-2 col-4 homepage-brand__logo" >
                                <a href={`${item.link}`} style={{ overflow: `hidden` }} target="_blank">
                                    <img src={`${BASE_IMG}${item.logo}`} />
                                </a>

                            </div>
                        )) ||  <Skeleton height="6rem" />
                        }
                    </div>
                </div>
            </section>
            <section className="homepage-foot">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 homepage-foot__img" style={{ backgroundImage: `url(${BASE_IMG}${data?.image_contact})` }}>
                        </div>
                        <form className="col-md-12 col-lg-6 homepage-foot__form" onSubmit={(e) => sendLetter(e)}>
                            <div className="homepage-foot__form__title">
                                <p> {t('homepage.foot.title')}</p>
                            </div>
                            <div className="homepage-foot__form__text">
                                <p>{data?.description_contact}</p>
                            </div>
                            <input
                                type="text"
                                className="homepage-foot__form__input"
                                placeholder={t('homepage.foot.placeholder')}
                                name="email"
                                ref={email}
                                onChange={(e)=>handleChangeEmail(e)}
                            />

                            <div className="homepage-foot__form__button">
                                <span onClick={(e) => sendLetter(e)}> {t('homepage.foot.button')}</span>
                            </div>
                            {
                                err !== "" && <p className="pt-3 text-danger homepage-foot__form__err">
                                    {
                                        err
                                    }
                                </p>
                            }
                            {
                                success !== "" && <p className="pt-3 text-success homepage-foot__form__success">
                                    {
                                        success
                                    }
                                </p>
                            }
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default HomePage;
