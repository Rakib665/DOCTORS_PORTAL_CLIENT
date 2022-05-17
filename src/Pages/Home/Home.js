import React from 'react';
import MakeAppointment from '../MakeAppointment';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-6'>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <Contact></Contact>
          <Footer></Footer>

        </div>
    );
};

export default Home;