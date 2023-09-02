import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Contacto } from './components/Contacto/Contacto';
import { VideoDisplay } from './components/VideoDisplay/VideoDisplay';


export const App = () => {
  return (
    <>
      <NavBar  /> 
      <VideoDisplay /> 
      <Contacto />    
    </>
  );
}