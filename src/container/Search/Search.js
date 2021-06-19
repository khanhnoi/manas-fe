import React, { useRef, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import HeaderHomePage from '../../components/layout/HeaderHomePage';
import Footer from '../../components/layout/Footer'

import { BASE_IMG } from '../../constants/Config'
import { Link } from 'react-router-dom'
import { getHomePageRequest } from '../../action/home';
import { useDispatch } from 'react-redux';

const Search = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const changeLangApi = () => {
    dispatch(getHomePageRequest())
}

  return (
      <>
          <HeaderHomePage title='THE LEADING FURNITURE DISTRIBUTOR' text='Manas Living focuses on building interior hubs by bringing copyrighted brands around the world to consumers and the Vietnamese design community' changeLangApi={changeLangApi}/>
          <Footer />
      </>
  )
}
export default withRouter(Search);
