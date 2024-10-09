import React from "react";
import { OktoProvider, BuildType } from "okto-sdk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import JournalPage from "./components/JournalPage/JournalPage";
import LandingPage from "./components/LandingPage/LandingPage";

const OKTO_CLIENT_API_KEY = "919f1a75-4586-400a-8bc8-d0bbbeda2827";

function App() {
  console.log("App component rendered");
  return (
    <Router>
      <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </OktoProvider>
    </Router>
  );
}

export default App;
