import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'

export interface ProductButtonsProps {
    className?: string,
    style?: React.CSSProperties,
    button_style?: React.CSSProperties,
    counter_style?: React.CSSProperties
}

export const ProductButtons = ({ className, style, button_style, counter_style }: ProductButtonsProps) => {

    const { increaseBy, counter } = useContext(ProductContext)

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={ style }>
            <button className={styles.buttonMinus} style={ button_style } onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel} style={ counter_style }>
                {counter}
            </div>
            <button className={styles.buttonAdd} style={ button_style } onClick={() => increaseBy(+1)}>
                +
            </button>
        </div>
    )
}