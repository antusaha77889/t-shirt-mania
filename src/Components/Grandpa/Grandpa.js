import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty'


 export const RingContext = createContext('silver ring');
 export const moneyContext = createContext(555);

const Grandpa = () => {
    const [house,setHouse] = useState(1);
    const[money,setMoney] =useState(555);

    return (
       <RingContext.Provider value={[house,setHouse]}>
         <moneyContext.Provider value={[money,setMoney]}>
         <div className='grandpa'>
            <h2> hello grandpa</h2>
            <section className='flex'>
                <Father house={house} ></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
         </moneyContext.Provider>
       </RingContext.Provider>
    );
};

export default Grandpa;