import React , { useState } from 'react'
import './ContactStyles.css'

function Contact(){
    const [changeBg, setChangeBg] = useState(true);

  const toggleDesign = () => {
    setChangeBg(!changeBg)
  };
    return (
        <div className='contact'>
                <button onClick={toggleDesign}>CHANGE</button>
            <div>
            <a href='https://maps.app.goo.gl/NvEBwhE1rnuTA9jv9' target='blank'>
                <i style={{left:'45%'}} class="fa-solid fa-location-dot"></i>
                <span  style={{color:'black'}}>300 არაგველის ქუჩა 24, 0144, თბილისი,საქართველო</span>
            </a>
            </div>
            <div>
            <a href="tel:+1234567890">
            <i class="fa-solid fa-phone"></i>
                <span style={{color:'black'}}>*0001</span>
            </a>
            </div>
            <div>
            <a href="mailto:recipient@example.com">
            <i class="fa-solid fa-envelope"></i>
                <span style={{color:'black'}}>info@sgp.ge</span>
            </a>
            </div>
            <div>
                <a href='https://www.facebook.com/socar.ge/?hc_ref=SEARCH&fref=nf' target='blank'>
                <i class="fa-brands fa-facebook-f"></i>
                    <span style={{color:'black'}}>Facebook</span>
                </a>
            </div>
            <style>
            {`
            .contact {
                background-color: ${changeBg ? 'transparent' : 'rgba(0, 1, 70, 0.411)'};
            }
            .contact div i {
                color: ${changeBg ? '#1abc9c' : 'rgb(0, 1, 70)'}

              }
            `}
            </style>
        </div>
    )
}

export default Contact