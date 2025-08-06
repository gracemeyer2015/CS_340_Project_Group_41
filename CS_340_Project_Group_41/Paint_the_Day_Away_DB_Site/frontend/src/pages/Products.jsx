import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';
import { header } from 'express-validator';

function Products({backendURL}){
    const [products, setProducts] = useState([])

    const getData = async function(){
        try{
            const response = await fetch(backendURL + '/products')
            const {products} = await response.json()
            console.log(products)

            setProducts(products)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        {products.length > 0 && Object.keys(products[0]).map((key) => (
                            <th>{key}</th>
                        ))} 
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>(
                       <EntityRow key={index} rowObject = {product} backendURL = {backendURL} refreshProducts = {getData}/>
                    ))}

                </tbody>
            </table>
        
        
        
        </>
        
    )

}
export default Products