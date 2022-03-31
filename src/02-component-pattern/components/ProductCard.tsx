import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues } from '../interfaces/product.interfaces';
import { ProductCardHandlers } from '../../../.history/src/02-component-pattern/interfaces/product.interfaces_20220331215855';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
    product: Product,
    children: (args: ProductCardHandlers) => JSX.Element,
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                } as ProductCardHandlers)}
            </div>
        </Provider>
    )
}
