import React from 'react'
import './FooterStyles.css'
import { FaFacebook } from 'react-icons/fa'

function Footer(){
    return (
        <div className='footer'>
            <span>2023 © Copyrights SOCAR Georgia</span>
            <div>
                <a href='https://www.facebook.com/socar.ge/?hc_ref=SEARCH&fref=nf' target='blank'>
                <FaFacebook size={25}/>
                </a>
            </div>
        </div>
    )
}

export default Footer