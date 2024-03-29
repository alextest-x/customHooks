import { useState} from 'react';


export const useCounter = ( initialState= 10 ) => {
  
    const [state, setState ] = useState(initialState); //10

    /*
   
    const increment = () => {
        setState( state +1 );
    }

    const decrement = () => {
        setState( state -1 );
    }

   */

    //mandando por referencia argumento factor
    const increment = ( factor = 1) => {
        setState( state + factor );
    }

    const decrement = (factor = 1) => {
        setState( state - factor );
    }

    const reset = () => {
        setState( initialState );
    }

 return {
    state,
    increment,
    decrement,
    reset
    };
}
