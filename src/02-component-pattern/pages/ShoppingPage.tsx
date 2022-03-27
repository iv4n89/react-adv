import { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/index'
import { Product } from '../interfaces/product.interfaces'
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product, product2]

interface ProductInCart extends Product {
    count: number,
}



export const ShoppingPage = () => {

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

    return (
        <div>
            <h1>Shopping page</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onProductCartChange}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.keys(shoppingCart).map(product => (
                        <ProductCard
                            product={shoppingCart[product]}
                            className="bg-dark text-white"
                            style={{
                                width: "100px"
                            }}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>

        </div>
    )
}
