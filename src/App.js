import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './components/Pages/HomePage/HomePage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import DynamicPage from './components/Pages/DynamicPage/DynamicPage';
import PageCreator from './components/Create/Create';

function App() {
  const [pageTitle, setPageTitle] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route
          path="/CreatePage"
          element={
            <PageCreator
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              additionalInfo={additionalInfo}
              setAdditionalInfo={setAdditionalInfo}
            />
          }
        />
        <Route
          path="/DynamicPage"
          element={<DynamicPage pageTitle={pageTitle} additionalInfo={additionalInfo} />}
        />
      </Routes>
    </div>
  );
}

export default App;



