import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product } from '../interfaces/product.interfaces';

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [counter, setCounter] = useState( value )


    useEffect(() => {
        setCounter(value)
    }, [ value ])

    const increaseBy = ( value: number ) => {

        const newValue = Math.max( counter + value, 0 )

        setCounter( prev => Math.max( prev + value, 0 ) )

        onChange && onChange({ count:newValue, product  })
    }

    return {
        counter,
        increaseBy
    }

}
