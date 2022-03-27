import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/index'
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping page</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title title={ 'Hola mundo' } className="text-bold"/>
                    <ProductCard.Buttons className='custom-buttons'/>
                </ProductCard>

                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className='text-bold'/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        'backgroundColor': "red"
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons
                    style={{
                        display: "flex",
                        justifyContent: "end"
                    }}
                    button_style={{
                        backgroundColor: "blue"
                    }}
                    counter_style={{
                        backgroundColor: "black",
                        color: "white"
                    }}
                    />
                </ProductCard>
            </div>
        </div>
    )
}
