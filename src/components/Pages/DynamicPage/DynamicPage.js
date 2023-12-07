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
            <h2 style={{color:'black'}}>
            <i style={{color:'red'}} className="fa-solid fa-bomb"></i>
              New Component
            <i style={{color:'red'}} className="fa-solid fa-triangle-exclamation"></i>
            </h2>
            <p><b style={{fontSize:'20px'}}>Page Title:</b> {pageTitle}</p>
            <p><b style={{fontSize:'20px'}}>Additional Info:</b> {additionalInfo}</p>
            <button onClick={handleButtonClick} >
            <i style={{color:'green'}} className="fa-solid fa-angles-left"></i>
              Go Back
            <i  style={{color:'grey'}} className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default DynamicPage;

