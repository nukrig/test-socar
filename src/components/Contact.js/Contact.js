import React from 'react'
import './ContactStyles.css'

function Contact(){
    return (
        <div className='contact'>
            <div>
                <i class="fa-solid fa-location-dot"></i>
                <span>300 არაგველის ქუჩა 24, 0144, თბილისი,საქართველო</span>
            </div>
            <div>
            <i class="fa-solid fa-phone"></i>
                <span>*0001</span>
            </div>
            <div>
            <i class="fa-solid fa-envelope"></i>
                <span>info@sgp.ge</span>
            </div>
            <div>
                <a href='https://www.facebook.com/socar.ge/?hc_ref=SEARCH&fref=nf' target='blank'>
                <i class="fa-brands fa-facebook-f"></i>
                    <span style={{color:'#555'}}>Facebook</span>
                </a>
            </div>
        </div>
    )
}

export default Contact