import React from 'react';
import { Routes, Route } from "react-router-dom";

import {Overview,Computers,Electronics,Login,Register} from "./templates";

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Overview />} exact />
          <Route path="/computers" element={<Computers />} exact />
          <Route path="/electronics" element={<Electronics />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
      </Routes>
  );
}

export default App;
