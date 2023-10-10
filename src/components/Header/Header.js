import React, { useState } from "react"
import './HeaderStyles.css'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from 'react-icons/fa'

function Header(){
    const[click,setClick]=useState(false)


    const handleClick = ()=>{
        setClick(!click)
    }


    return (
        <div className={'header'}>
            <Link to='/'>
                <div className="logo">
                    <img style={{width:50,height:50}} 
                        src="https://play-lh.googleusercontent.com/tTUE8ELtvueBjbuY1OMeTIKo3c045FsU5rHLGD4-0nFGyLeMReyN-2bmS5kc92ztGVfO"/>
                    <h1 style={{color:'white'}}> SocarTest</h1>
                </div>
                
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' style={{color:'white'}}> Home </Link>
                </li>
                <li>
                    <Link to='/contact' style={{color:'white'}}> Contact </Link>
                </li>
                <li>
                    <Link to='/CreatePage' style={{color:'white'}}> CreatePage </Link>
                </li>
                <li>
                    <Link to='/DynamicPage' style={{color:'white'}}> Dynamic Page </Link>
                </li>
            </ul>
            <div className="burger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:'white'}} />) 
                : (<FaBars size={20} style={{color:'white'}} />)}  
            </div>
        </div>
    )
}

export default Header