import React, { Component } from 'react';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import { ProductConsumer } from './Context';

export default class PopUp extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {openPopUp, closePopUp} = value;
                    const{img, title, price} = value.popUpProduct;
                
                if (!openPopUp){
                    return null;
                } else {
                    return (
                        <PopUpContainer>
                            <div className = 'container'>
                                <div className = 'row'>
                                    <div id='popUp'className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                                        <h5>Item has been added to the cart</h5>
                                        <img src={img} className='img-fluid' alt='product' />
                                        <h5>{title}</h5>
                                        <h5 className='text-muted'>price: $ {price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>closePopUp()} >
                                                Continue Shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart  onClick={()=>closePopUp()} >
                                                Go To Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </PopUpContainer>
                    );
                    }
                }}
            </ProductConsumer>
        )
    }
}

const PopUpContainer = styled.div`
position:fixed;
top:0,
left:0;
right:0;
bottom;
background:rgba(0,0,0,0.3);
display:flex;
align-items: center;
justify-content: center;
#popup {
    background: var(--mainWhite)
}
`;