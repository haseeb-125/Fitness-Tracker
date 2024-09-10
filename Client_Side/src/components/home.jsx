import React from 'react';
import Header from './HomePageComponent/Header.jsx';
import WorkoutClassesSection from './HomePageComponent/WorkoutClassesSection.jsx';
import AboutStyle from './HomePageComponent/AboutStyle.jsx';
import { MeetTrainerSection } from './HomePageComponent/MeetTrainerSection.jsx';
const Home = ()=> {
  return (
    <>
   <Header backgroundpicture={'https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840'} />
   <WorkoutClassesSection/>
  <AboutStyle/>
  <MeetTrainerSection/>
   </>
  );
}

export default Home;
