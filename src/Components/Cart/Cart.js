import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveItem}) => {

    let message;
    if (cart.length ===0) {
        message = <p>Please buy at least one Item!!!</p>
    }
    else if (cart.length ===1){
        message =<div>
            <h3>Amr jonno ekta nw</h3>
            <p>tomar jonno ekta nw</p>
            <p><small>amdr babir jonno tmi ekta nio </small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 2 ? 'orange' : 'blue'}>Oder summery</h2>
            <h5 className={`bold ${cart.length ===2 ? 'purple' : 'yellow'}`}>Order quantity:{cart.length}</h5>
            {
                cart.map(tshirt =><p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length ===3 ? <p>3 joner er jonnoi ki kinba</p> : <p>kino kino </p>}
            <p>and operator</p>
            {cart.length ===2  && <h2>Double Items</h2>}
            <p>Or operator</p>
            {cart.length ===4 || <p>4 ta item na!</p>}

        </div>
    );
};

export default Cart;



/*
Condition rendering
1.use element in a variable and then see if-else to see value.
2.ternary operation conditon ?  true : false
3.&& operator(if condition is true, i want to display something)
4. || operator (if condition is false, i want to display something)
5.
*/