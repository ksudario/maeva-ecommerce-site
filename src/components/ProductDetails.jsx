import React, { Component } from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
               {(value)=>{
                    const{
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart
                    } = value.productDetail;
                    return(
                        <div className='container py-5'>
                            {/* title */}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                        <div className='row'>
                            <div className='col-10 mx-auto col-md-6 my-3'>
                                <img src={img} className='img-fluid' alt='product'/>
                            </div>
                        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                            <h2>Model: {title}</h2>
                        <h4 className='text-blue'>
                            <strong>
                                price: <span>$</span>
                                {price}
                            </strong>
                        </h4>
                        <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                            some info about product:</p>
                        <p className='text-muted lead'>{info}</p>
                        </div>
                        </div>
                        <Link to='/'>
                            <ButtonContainer>
                                Back To Products
                            </ButtonContainer>
                           <ButtonContainer 
                           cart
                           disabled={inCart ? true:false}
                           onClick={() => {
                               value.addToCart(id);
                               value.openPopUp(id);
                           }}
                           >
                               {inCart ? 'inCart' : 'add to cart'}
                           </ButtonContainer>
                        </Link> 
                        <Link to='/reviews'>
                            <ButtonContainer>
                                Add A Review
                            </ButtonContainer>
                        </Link>
                        </div>
                    );
                    
                }}
            </ProductConsumer>
        );
    }
} 