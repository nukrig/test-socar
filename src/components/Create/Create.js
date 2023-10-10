import React from 'react';
import './CreateStyles.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function PageCreator({ pageTitle, setPageTitle, additionalInfo, setAdditionalInfo  }) {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/DynamicPage')
  };
  return (
    <div className='createPage'>
        <Header/>
        <div className='create'>
          <div className='createContent'>
            <label for='title'>What is the title of the page ?</label>
            <input
                id='title'
                type="text"
                placeholder="Type Here"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
            />
          </div>
          <div className='createContent'>
            <label for='info'>Please type the additional information about you <br/> (name,surname,age,male and some more information)...</label>
            <textarea
                id='info'
                rows="10" cols="50"
                placeholder="Additional Information"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
            />
            
            <button onClick={() => {
              setAdditionalInfo('');
              setPageTitle('');
            }} className='createButton redButton'>CLEAR</button>
          </div>
            <button onClick={handleButtonClick} className='createButton' >View New Page</button>

        </div>
      <Footer/>
    </div>
  );
}

export default PageCreator;

