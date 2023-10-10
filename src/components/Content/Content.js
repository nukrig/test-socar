import React, { useEffect, useState } from 'react'
import './ContentStyles.css'


function Content(){
    const [changeDesign, setChangeDesign] = useState(true);
    const [changeBg, setChangeBg] = useState(true);

  const toggleDesign = () => {
    setChangeDesign(!changeDesign);
    setChangeBg(!changeBg)
  };
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1040) {
        setChangeDesign(false); 
      } 
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [changeDesign]); 
    return (
        
        <div className='content'>
            <div className='design'>
                <button onClick={toggleDesign}>CHANGE</button>
            </div>
            <div className='card'>
                <a href='https://www.sgp.ge/ge/' target='blank'>
                    <img src='https://socar.ge/wp-content/uploads/2019/10/SGP_Background-scaled-thegem-portfolio-masonry-double.jpg'/>
                </a>
                <span>SOCAR GEORGIA <br/> PETROLEUM</span>
            </div>
            <div className='card'>
                <a href='https://www.socargas.ge/ge/#1' target='blank'>
                    <img src='https://socar.ge/wp-content/uploads/2019/10/gaz-line-thegem-portfolio-thegem-portfolio-masonry-2x-500.jpg'/>
                </a>
                <span>SOCAR GEORGIA GAS <br/> SAKORGGAZI</span>
            </div>
            <div className='card'>
                <a href='https://www.kulevioilterminal.com/' target='blank'>
                    <img src='https://socar.ge/wp-content/uploads/2019/10/oil-thegem-portfolio.jpg'/>
                </a>
                <span>KULEVI OIL TERMINAl</span>
            </div>
               
                
        <style>
            {`
            .content {
                flex-direction: ${changeDesign ? 'row' : 'column'};
                background-color: ${changeBg ? 'transparent' : 'rgb(52, 35, 94)'};
                padding: ${changeDesign ? '': '50px 0'};
                gap: ${changeDesign ? '': '30px'}
            }
            `}
      </style>   
        </div>
    )
}

export default Content