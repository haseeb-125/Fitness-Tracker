import React from 'react';
import Header from './HomePageComponent/Header.jsx';
import WorkoutClassesSection from './HomePageComponent/WorkoutClassesSection.jsx';
import AboutStyle from './HomePageComponent/AboutStyle.jsx';
import { MeetTrainerSection } from './HomePageComponent/MeetTrainerSection.jsx';
const Home = ()=> {
  return (
    <>
   <Header/>
   <WorkoutClassesSection/>
  <AboutStyle/>
  <MeetTrainerSection/>
   </>
  );
}

export default Home;
