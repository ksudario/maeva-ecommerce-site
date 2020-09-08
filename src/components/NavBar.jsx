import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

export default class NavBar extends Component {
    render() {
        return (
            <ul className='nav nav-tabs bg-light'>
            
        
                        <Link to='/' className='nav-link'>
                        Maeva 🏝️
                        </Link>
                        
                    
               <Link to ='/cart' className='ml-auto'>
               <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                   <ButtonContainer>
                       <span className='mr-2'>
                       <i className='fas fa-cart-plus'>Cart</i>
                       </span>
                   </ButtonContainer>
               </Link>
           </ul>
        )
    }
}