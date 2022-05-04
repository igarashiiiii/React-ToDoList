import React from 'react';
import { Done } from '../components/done';
import { Yet } from '../components/yet';
import { FillIn } from '../components/fillIn';
import { Routes, Route } from 'react-router-dom';

export const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FillIn></FillIn>} />
        <Route path="/done" element={<Done></Done>} />
        <Route path="/yet" element={<Yet></Yet>} />
      </Routes>
    </>
  );
};
