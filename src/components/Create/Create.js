import React , {useState} from 'react';
import './CreateStyles.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function PageCreator({ pageTitle, setPageTitle, additionalInfo, setAdditionalInfo  }) {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/DynamicPage')
  };

  const [changeBg, setChangeBg] = useState(true);

  const toggleDesign = () => {
    setChangeBg(!changeBg)
  };
  return (
    <div className='createPage'>
        <Header/>
        <div className='create'>
          <button className='createBtn' onClick={toggleDesign}>CHANGE</button>
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
            <button onClick={handleButtonClick} className='createButton' >
            <i class="fa-solid fa-angles-left"></i>
              View New Page 
            <i style={{color:'green'}} class="fa-solid fa-angles-right"></i>
            </button>

        </div>
      <Footer/>
      <style>
            {`
            .create {
                background-color: ${changeBg ? 'transparent' : 'rgb(0, 1, 70)'};
            }
            * {
              color: ${changeBg ? 'rgb(92, 92, 92)' : 'white'}
            }
            .createContent{
              border: ${changeBg ? '2px solid rgb(151, 151, 151)' : '2px solid rgb(0, 0, 151)'}
            }
            `}
      </style>
    </div>
  );
}

export default PageCreator;

