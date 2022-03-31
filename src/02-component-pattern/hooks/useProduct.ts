import { useState, useEffect, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/product.interfaces';

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues,
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value )
    const isMounted = useRef(false);

    useEffect(() => {
        if(!isMounted.current) {
            return;
        }
        setCounter(value)
    }, [ value ])
    
    useEffect(() => {
        isMounted.current = true;
    }, [])

    const increaseBy = ( value: number ) => {
        const newValue = Math.max(Math.min( counter + value, initialValues?.maxCount || 99 ), 0)

        setCounter( prev => newValue )

        onChange && onChange({ count:newValue, product  })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }

}
