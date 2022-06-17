import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, Movies, MovieInformation, Profile, NavBar } from './';
import { DivMain, DivRoot, DivToolbar } from './styles';

const App = () => (
  <DivRoot>
    <CssBaseline />
    <NavBar />
    <DivMain>
      <DivToolbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </DivMain>
  </DivRoot>
);

export default App;
