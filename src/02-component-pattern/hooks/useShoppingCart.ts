import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/product.interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCartChange = ({ count, product }: { count: number, product: Product }) => {
        console.log('carrito', count, product);

        setShoppingCart(prev => {

            if (count === 0) {

                const { [product.id]: toDelete, ...rest } = prev

                return { ...rest }

            }

            return {
                ...prev,
                [product.id]: { ...product, count }
            }
        })
    }

    return {
        shoppingCart,
        onChange: onProductCartChange,
    }

}