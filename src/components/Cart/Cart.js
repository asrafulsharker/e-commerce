import React, { Component } from 'react'
import Title from '../Title';
import CartColumn from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class  extends Component {
    render() {
        return (
           <section>
               <ProductConsumer>
                   {value=>{
                       const { cart} = value;
                       if(cart.length >0){
                           return(
                               <React.Fragment>
                                    <Title name="your" title="cart"/>
                                    <CartColumn/>
                                    <CartList value={value}/>
                                    <CartTotals value={value}> </CartTotals>
                               </React.Fragment>
                           );
                       }
                       else{
                        return <EmptyCart />;
                       }
                   }}
               </ProductConsumer>
               
           </section>
        )
    }
}
