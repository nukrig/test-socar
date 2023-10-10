import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './DynamicPageStyles.css'
import { useNavigate } from 'react-router-dom';


function DynamicPage({ pageTitle, additionalInfo }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/CreatePage')
  };
  return (
    <div>
      <Header/>
        <div className='dynamicPage'>
          <div className='dynamicContent'>
            <h2 style={{color:'black'}}>New Component</h2>
            <p><b style={{fontSize:'20px'}}>Page Title:</b> {pageTitle}</p>
            <p><b style={{fontSize:'20px'}}>Additional Info:</b> {additionalInfo}</p>
            <button onClick={handleButtonClick} >Go Back to Create Page</button>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default DynamicPage;

