import React,{createContext, useState, useEffect} from 'react'
import shop from '../api/shop'

export const ProductsContext = createContext({
    test: '',
    products: []
})

const ProductsProvider = ({children}) => {
    const [test] = useState('the products provider has been successfully connected :)')
    const [products, setProducts] = useState([])
    useEffect(async ()=> {
        const response = await shop.getProducts(products => products)
        setProducts(response)
},[])
    return (
        <ProductsContext.Provider value={{test, products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider