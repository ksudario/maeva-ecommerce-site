import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

const NavBar = (props) => {
    
        return (
        <ul className='nav nav-tabs bg-light'>
            <Link to='/' className='nav-link'>
                        Maeva 🏝️
            </Link>
            {props.user ?
            <div>
                <span>Welcome, <strong>{props.user.name}</strong>!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="" onClick={props.handleLogout} className="NavBar-link">LOG OUT</Link>&nbsp;&nbsp; &nbsp;&nbsp;
       
            </div>  
        :
        <div>
        <Link to="/login" className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <Link to="/signup" className='NavBar-link'>SIGN UP</Link>&nbsp;&nbsp; &nbsp;&nbsp;
      </div> 
      
        
    }
            
        
                        
        <div>               
        <Link to='/reviewForm'>Share a Review! </Link></div> &nbsp;&nbsp; &nbsp;&nbsp;
        <div><Link to='/reviews'>See What Others Have To Say About Our Products</Link></div> 
               <Link to ='/cart' className='ml-auto'>
                   <ButtonContainer>
                       <span className='mr-2'>
                       <i className='fas fa-cart-plus'>Cart</i>
                       </span>
                   </ButtonContainer>
               </Link>
           </ul>
        )
    }

export default NavBar;