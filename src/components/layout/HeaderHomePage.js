import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import Loader from '../common/Loader';
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n/i18n';

import homeImg from '../../assets/images/Icon/header_store.svg';

// import image1 from '../../assets/images/menu/about.svg';
// import image2 from '../../assets/images/menu/craftsmanship.svg';
// import image3 from '../../assets/images/menu/brands.svg';
// import image4 from '../../assets/images/menu/services.svg';
// import image5 from '../../assets/images/menu/news.svg';
// import image6 from '../../assets/images/menu/store.svg';

import logo from '../../assets/images/Icon/manas_logo.svg';
import search from '../../assets/images/Icon/search.png';
import searchGray from '../../assets/images/Icon/search-menu.png';
import nav from '../../assets/images/Icon/ic_menu.svg';
import close from '../../assets/images/Icon/ic_close.svg';

import scroll from '../../assets/images/Icon/ic-scroll_down.svg';
import lang from '../../assets/images/Icon/ic_languge.svg';
import fb from '../../assets/images/Icon/ic_fb_menu.svg';
// import tw from '../../assets/images/Icon/ic_twiter_menu.svg';
import ins from '../../assets/images/Icon/ic_in_menu.svg';
import ytb from '../../assets/images/Icon/ic_menu_youtube.svg';

import { BASE_IMG } from '../../constants/Config';

const img1 = '/uploads/home/2020-07-01_bLjObBd7-2.png'
const img2 = '/uploads/home/2020-07-02_AqxEWoSu-4.png'

const HeaderHomePage = (props) => {
    const { title, text, changeLangApi } = props;
    const [show, setShow] = useState(false);
    const [searchButton, setSearchButton] = useState(true);
    // const [isLang, setIsLang] = useState(true);
    const { t } = useTranslation();

    // useEffect(() => {
    // }, [isLang])

    const checkLangEn = () => {
        let lan = localStorage.getItem('i18nextLng');
        if (lan === 'en') {
            return true
        }
        return false
    }

    const changeLang = async (lang) => {
        try {
            let lan = localStorage.getItem('i18nextLng');
            if (lan !== lang) {
                i18n.changeLanguage(lang);
                localStorage.setItem('i18nextLng', lang);
                // setIsLang(!isLang);
                await changeLangApi();
                await showHeader();
            }
        }
        catch (e){
            throw e
        }
        
    }

    const setButton = () => {
        setSearchButton(!searchButton)
        if (searchButton) {
            document.querySelector('#search-button').style.width = '175px';
        }
        else {
            document.querySelector('#search-button').style.width = '0'
        }
    }
    const showHeader = () => {
        if (show) {
            setShow(!show);
            document.querySelector('#showItem').style.top = '-100vh';
            document.querySelector('#showItem').style.opacity = '0';
            document.querySelector('#menu-lists').style.display = 'none';
            document.querySelector('#fixed-top').style.position = 'absolute'

            document.querySelector('#search-button').style.borderBottom = '1px solid #ffffff'
            document.querySelector('#search-button').style.color = '#ffffff';
        }
        else {
            setShow(!show);
            document.querySelector('#showItem').style.top = '0';
            document.querySelector('#showItem').style.opacity = '1'
            document.querySelector('#menu-lists').style.display = 'block';
            document.querySelector('#fixed-top').style.position = 'fixed'

            document.querySelector('#search-button').style.borderBottom = '1px solid #000000'
            document.querySelector('#search-button').style.color = '#000000';
        }
    }
    const onMouseHeader = () => {
        if (window.innerWidth <= 767) {
            document.querySelector('#background-hover').style.width = '0vh';
            document.querySelector('#background-hover').style.height = '0vh';
        }

    }
    const showHover = (img) => {
        if (window.innerWidth > 767) {
            document.querySelector('#background-hover').style.width = '50vh';
            document.querySelector('#background-hover').style.height = '50vh';

            document.querySelector('#background-hover').style.backgroundImage = `url(${BASE_IMG}${img})`;
        }
    }
    const hideHover = () => {
        if (window.innerWidth > 767) {
            document.querySelector('#background-hover').style.width = '45vh';
            document.querySelector('#background-hover').style.height = '45vh';
        }
    }
    return (
        <>
            {(!title || !text || !homeImg) ?
                <Loader />
                : (
                    <section className="header header--homepage">


                        <div className="header__background header__background--homepage" style={{ backgroundImage: `url(${homeImg})` }}></div>
                        <div className="header__top" id="fixed-top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 d-flex">
                                        <Link to="/">
                                            <img src={logo} className="header__top__logo" />
                                        </Link>
                                        <div className="header__top__right">
                                            {show ? (<img src={searchGray} className="header__top__right__search" onClick={() => setButton()} />)
                                                : (<img src={search} className="header__top__right__search" onClick={() => setButton()} />)}

                                            <input id="search-button" />
                                            {show ? (<img src={close} className="header__top__right__close" onClick={() => showHeader()} />)
                                                : (<img src={nav} className="header__top__right__nav" onClick={() => showHeader()} />)}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="header__homepage-position">
                            <div className="container">
                                <div className="row">
                                    <div className="header__homepage-position__title col-md-8">
                                        <p>{title}</p>
                                    </div>
                                    <div className="header__homepage-position__text col-md-7 col-lg-6">
                                        <p>{text}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <Link to='/about'>
                                            <div className="header__homepage-position__button">
                                                {t('About Us')}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header__scroll">
                            <Scroll.Link to="top-head" smooth={true} duration={1000}>
                                <img src={scroll} />
                            </Scroll.Link>
                        </div>
                        <div className="header__menu-active header__menu-active--homepage" id="showItem"
                            onMouseOver={() => onMouseHeader()}
                        >
                            <div className="container">
                                <div className="row header__menu-active__menu-list">
                                    <div className="col-md-12  d-flex">
                                        <div className="col-md-6 col-12">
                                            <ul id="menu-lists">
                                                <li style={{ animationDelay: '0.2s' }}>
                                                    <Link to="/about">
                                                        <p onMouseOver={() => showHover(img1)} onMouseLeave={() => hideHover()}>{t('About Us')}</p>
                                                    </Link>
                                                </li>
                                                <li style={{ animationDelay: '0.4s' }}>
                                                    <Link to="/designer">
                                                        <p onMouseOver={() => showHover(img2)} onMouseLeave={() => hideHover()}>{t('Craftsmanship')}</p>
                                                    </Link>
                                                </li>
                                                <li style={{ animationDelay: '0.6s' }}>
                                                    <Link to="/designer">
                                                        <p onMouseOver={() => showHover(img1)} onMouseLeave={() => hideHover()}>{t('The Brands')}</p>
                                                    </Link>
                                                </li>
                                                <li style={{ animationDelay: '0.8s' }}>
                                                    <Link to="/service">
                                                        <p onMouseOver={() => showHover(img2)} onMouseLeave={() => hideHover()}>{t('Our Service')}</p>
                                                    </Link>
                                                </li>
                                                <li style={{ animationDelay: '1s' }}>
                                                    <Link to="/showroom">
                                                        <p onMouseOver={() => showHover(img1)} onMouseLeave={() => hideHover()}> {t('News')}</p>
                                                    </Link>
                                                </li>
                                                <li style={{ animationDelay: '1.2s' }}>
                                                    <Link to="/showroom">
                                                        <p onMouseOver={() => showHover(img2)} onMouseLeave={() => hideHover()}> {t('Our Store')}</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="header__menu-active__menu-list__background-hover" id="background-hover"></div>
                                        </div>

                                    </div>
                                    <div className="col-12 d-flex">
                                        <div className="header__menu-active__contact" id="headerContactId">
                                            <img src={lang} />
                                            {
                                                checkLangEn() ? (
                                                    <>
                                                        <p style={{ fontWeight: `bold` }} onClick={() => changeLang('en')} id="en">Eng</p>
                                                        <p onClick={() => changeLang('vi')} id="vi">VN</p>
                                                    </>
                                                )
                                                    :
                                                    (
                                                        <>
                                                            <p onClick={() => changeLang('en')} id="en">Eng</p>
                                                            <p style={{ fontWeight: `bold` }} onClick={() => changeLang('vi')} id="vi">VN</p>
                                                        </>
                                                    )
                                            }
                                        </div>
                                        <div className="header__menu-active__social" id="headerSocialId">
                                            <a href="https://www.facebook.com/ManasLivingVN/" target="_blank" >
                                                <img src={fb} />
                                            </a>
                                            <a href="https://www.instagram.com/accounts/login/?next=/manasliving_vn/" target="_blank" >
                                                <img src={ins} />
                                            </a>
                                            <a href="https://www.youtube.com/channel/UC1oAbau_aAWGeSd2GCEObsA/" target="_blank" >
                                                <img src={ytb} />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                )}
        </>
    );
}

export default HeaderHomePage;
