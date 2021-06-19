import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

import logo from '../../assets/images/Icon/manas_logo_white.svg'
import fb from '../../assets/images/Icon/ic_facebook.svg'
// import tw from '../../assets/images/Icon/ic_switer.svg'
import ins from '../../assets/images/Icon/ic_ins.svg'
import ytb from '../../assets/images/Icon/ic_youtube.svg'

const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="footer__lists">
                <div className="container">
                    <div className="row footer__lists">
                        <div className="col-md-2 footer__lists__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-md-10 d-flex">
                            <div className="footer__lists__list col-md-3">
                                <p> {t('footer.about.title')}</p>
                                <ul>
                                    <li>
                                        <Link to="/about"><p>{t('footer.about.list.1')}</p></Link>
                                    </li>
                                    <li>
                                        <Link to="/about"><p>{t('footer.about.list.2')}</p></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__lists__list col-md-3">
                                <p>{t('footer.solution.title')}</p>
                                <ul>
                                    <li>
                                        <Link to="/designer">
                                            <p>{t('footer.solution.list.1')}</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__lists__list col-md-3">
                                <p> {t('footer.service.title')}</p>
                                <ul>
                                    <li><Link to="/service">
                                        <p>{t('footer.service.list.1')}</p>
                                    </Link></li>
                                    <li><Link to="/service">
                                        <p>{t('footer.service.list.2')}</p>
                                    </Link></li>
                                    <li><Link to="/service">
                                        <p>{t('footer.service.list.3')}</p>
                                    </Link></li>
                                    <li><Link to="/service">
                                        <p>{t('footer.service.list.4')}</p>
                                    </Link></li>
                                    <li><Link to="/service">
                                        <p>{t('footer.service.list.5')}</p>
                                    </Link></li>
                                </ul>
                            </div>
                            <div className="footer__lists__list col-md-3">
                                <p> {t('footer.brandAndProduct.title')}</p>
                                <ul>
                                    <li><Link to='/showroom'><p>{t('footer.brandAndProduct.list.1')}</p></Link></li>
                                    <li><Link to='/showroom'><p>{t('footer.brandAndProduct.list.2')}</p></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12" >
                            <div className="footer__lists__hr"></div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-9 col-12 footer__contact">
                            <div className="col-md-6 col-12 footer__contact__item">
                                <p>{t('footer.contact.address.title')} </p>
                                <p>{t('footer.contact.address.text')}</p>
                            </div>
                            <a  href="tel:02862584999"
                            className="col-md-3 col-12 footer__contact__item">
                                <p>{t('footer.contact.contact.title')} </p>
                                <p>{t('footer.contact.contact.text')}</p>
                            </a>
                            <a href={`mailto:${t('footer.contact.email.text')}`}
                             className="col-md-3 col-12 footer__contact__item">
                                <p> {t('footer.contact.email.title')} </p>
                                <p>{t('footer.contact.email.text')}</p>
                            </a>
                        </div>
                    </div>
                    <div className="row footer__end">
                        <div className="col-md-6 footer__end__copyright">
                            <p>{t('footer.copyright')}</p>
                        </div>
                        <div className="footer__end__social">
                            <a href="https://www.facebook.com/ManasLivingVN/" target="_blank">
                                <img src={fb} />
                            </a>
                            <a href="https://www.instagram.com/accounts/login/?next=/manasliving_vn/" target="_blank">
                                <img src={ins} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC1oAbau_aAWGeSd2GCEObsA/" target="_blank">
                                <img src={ytb} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
