import TopNavigation from './components/TopNavigation';
import AboutComplex from './components/AboutComplex';
import Dignities from './components/Dignities';
import Plans from './components/Plans';
import Location from './components/Location';
import Documents from './components/Documents';
import Footer from './components/Footer';
import * as React from "react";


(function (w, d, s, h, id) {
  w.roistatProjectId = id;
  w.roistatHost = h;
  var p = d.location.protocol == "https:" ? "https://" : "http://";
  var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/" + id +
    "/init?referrer=" + encodeURIComponent(d.location.href);
  var js = d.createElement(s);
  js.charset = "UTF-8";
  js.async = 1;
  js.src = p + h + u;
  var js2 = d.getElementsByTagName(s)[0];
  js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', '77a5a3c7f009f99b3b2bbd06a553736c');

let roistatUtmFieldsObj = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
}
let roistatVisit = "";
window.onRoistatAllModulesLoaded = () => {
  roistatVisit = window.roistat.visit;
  const url = new URL(window.location.href);

  const utm_source = url.searchParams.get('utm_source');
  const utm_medium = url.searchParams.get('utm_medium');
  const utm_campaign = url.searchParams.get('utm_campaign');
  const utm_content = url.searchParams.get('utm_content');
  const utm_term = url.searchParams.get('utm_term');

  roistatUtmFieldsObj = {
    utm_source: utm_source,
    utm_medium: utm_medium,
    utm_campaign: utm_campaign,
    utm_content: utm_content,
    utm_term: utm_term,
  }
}

function App() {
  return (
    <>
      <TopNavigation />
      <AboutComplex />
      <Dignities />
      <Plans />
      <Location />
      <Documents />
      <Footer />
    </>
  );
}

function getRoistatVisit() {
  return roistatVisit;
}
function getRoistatUtmFieldsObj() {
  return roistatUtmFieldsObj;
}

export { App, getRoistatVisit, getRoistatUtmFieldsObj }
