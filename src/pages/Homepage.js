import React, { Component, Fragment } from 'react'
import NavBar from '../components/NavBar/NavBar';
import Ourcourse from '../components/Ourcourse/Ourcourse';

import TopHeader from '../components/TopHeader/TopHeader';
import OurSeervice from '../components/OurSeervice/OurSeervice';
import TechAnyl from '../components/TechAnyl/TechAnyl';
import TotalWork from '../components/TotalWork/TotalWork';
import Videoplay from '../components/Videoplay/Videoplay';
import RecentProject from '../components/RecentProject/RecentProject';
import Clientreview from '../components/Clientreview/Clientreview';
import Footer from '../components/Footer/Footer';

export default class Homepage extends Component {
  render() {
    return (
      <Fragment>
            
            <NavBar />
    <TopHeader />
    <OurSeervice />
    <TechAnyl />
    <TotalWork />
    <RecentProject />
    <Ourcourse /> 
    <Videoplay />
    <Clientreview />
    <Footer />

      </Fragment>
    )
  }
}
