import React, { Component } from 'react';
import {storeProducts, productDetail} from '../StoreProducts';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products:storeProducts,
        productDetail:productDetail,
        cart: [],
        popUpOpen: false,
        popUpProduct: productDetail,
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem] 
        });
        this.setState(() => {
            return { products: tempProducts };
        });
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(() =>{
            return {productDetail:product}
        })

    };
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
    this.setState(() => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
    }, () => {
        console.log(this.state);
    });

    };

    openPopUp = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {popUpProduct: product, popUpOpen: true}
        })
    }

    closePopUp = () => {
        this.setState(()=>{
            return{ popUpOpen: false};
        });
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openPopUp: this.openPopUp,
                closePopUp: this.closePopUp
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };