import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "../pages/Signup";
import Posts from "../pages/Posts";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/posts" element={<Posts />} />
  </Routes>
);

export default Router;
