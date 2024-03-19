import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';
import Title from './components/Title';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import LanguageSelector from './components/LanguageSelector';

const App = () => {

  const [countryCode, setCountryCode] = useState('us');

  const setAus = () => {
    setCountryCode('au');
  }

  const setChi = () => {
    setCountryCode('cn');
  }
  const setFra = () => {
    setCountryCode('fr');
  }
  const setInd = () => {
    setCountryCode('in');
  }
  const setJap = () => {
    setCountryCode('jp');
  }
  const setNz = () => {
    setCountryCode('nz');
  }
  const setRus = () => {
    setCountryCode('ru');
  }
  const setSar = () => {
    setCountryCode('sa');
  }
  const setUsa = () => {
    setCountryCode('us');
  }

  // console.log(countryCode);

  const pageSize = 15;
  const apiKey = 'fa9248d531e940989b6ba8beb3ab7389'
  // const searchApi = `https://newsapi.org/v2/top-headlines?&apiKey=fa9248d531e940989b6ba8beb3ab7389`
  const [progress, setProgress] = useState(0);


 
    return (
      <div id="mainContainer">
        <Router>
          <Title />
        <NavBar setAus={setAus} setChi={setChi} setFra={setFra} setInd={setInd} setJap={setJap} setNz={setNz} setRus={setRus} setSar={setSar} setUsa={setUsa} />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <SearchInput />

        <Routes>

          <Route exact path="/language" element={<LanguageSelector/>} />
          <Route exact path="/search" element={<SearchResult apiKey={apiKey} />} />
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route exact path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>} /> 

          <Route exact path="/home/usa" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/home/usa/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route exact path="/home/usa/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>} /> 
        </Routes>
        </Router>
      </div>
    )
  }

export default App;
