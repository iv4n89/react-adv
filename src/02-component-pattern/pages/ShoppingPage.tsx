import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/index'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

    const { shoppingCart, onChange } = useShoppingCart()

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
                    products.map((product) => (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onChange}
                            value={ shoppingCart[product.id]?.count || 0 }
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
                            style={{ width: "100px" }}
                            onChange={ onChange }
                            value={ shoppingCart[product].count }
                            key={shoppingCart[product].id}
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
