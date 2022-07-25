import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./pages/main/components/Header/Header";
import AuthorizationModal from "./pages/main/components/authorization-modal/auth-modal";

const App = () => (
  <div className="App">
    <Header />
    <AuthorizationModal />
    <Outlet />
  </div>
);
export default App;
