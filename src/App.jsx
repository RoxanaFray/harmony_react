import TopNavigation from './components/TopNavigation';
import AboutComplex from './components/AboutComplex';
import Dignities from './components/Dignities';
import Plans from './components/Plans';
import Location from './components/Location';
import Documents from './components/Documents';
import Footer from './components/Footer';

import Backdrop from "@mui/material/Backdrop";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDajiGob_K56bjTGypdayQ4AFGFANRc56Y",
  authDomain: "harmony-site.firebaseapp.com",
  projectId: "harmony-site",
  storageBucket: "harmony-site.appspot.com",
  messagingSenderId: "485517124381",
  appId: "1:485517124381:web:f1a613bc859f80c2c2b7f4",
  measurementId: "G-SPDP20HH61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <TopNavigation />
      <AboutComplex/>
      <Dignities />
      <Plans />
      <Location />
      <Documents />
      <Footer />
    </>
  );
}

export default App;
