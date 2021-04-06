import React from 'react'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css"




function Checkout() {

    const [{basket}] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">      
     <img className="checkout__ad" src="https://assets1.progressivegrocer.com/files/styles/hero/s3/2019-07/Invatron-Hero.jpg?itok=2lbbxtvY" alt=""/>
        {basket?.length === 0 ? (
           <div>
           <h2>your shopping basket is empty</h2>
           <p>Dear customer you don't have any item on the basket.
              To buy one or more just click "add to basket" next to the item.
             </p>
            </div>   
                ):(

                    <div>
                      <h2 className="checkout__title">
                        your shopping basket 
                      </h2>
                      {basket?.map (item => (
                        <CheckoutProduct 
                        
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                      rating={item.rating}
                        
                        />

                      ))}
                      
                    </div>

                            )}
                            </div>
                            {basket.length > 0 && (
                              <div className="checkout__right">
                                  <h1>Subtotal</h1>
                               

                                </div>
                            )}
                            </div>
                      );
                    
                    }

                          
  
      
        
        


              
                          
              
 
export default Checkout;              
              
        
  

