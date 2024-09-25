import React from 'react';
import Header from './HomePageComponent/Header.jsx';
import WorkoutClassesSection from './HomePageComponent/WorkoutClassesSection.jsx';
import AboutStyle from './HomePageComponent/AboutStyle.jsx';
import { MeetTrainerSection } from './HomePageComponent/MeetTrainerSection.jsx';
import { ContactUs } from './HomePageComponent/Contact.jsx';
import Footer from './Footer.jsx';
import Slider from './HomePageComponent/Slider.jsx'
const Home = () => {
  return (
    <>
      <Header />
      <Slider backgroundpicture={'https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840'} />
      <WorkoutClassesSection />
      <AboutStyle />
      <MeetTrainerSection />
      <ContactUs />
      <Footer/>
    </>
  );
}

export default Home;
