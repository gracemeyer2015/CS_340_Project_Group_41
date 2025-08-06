import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';
import { header } from 'express-validator';

function ProductReceipts({backendURL}){
    const [productreceipts, setProductreceipts] = useState([])

    const getData = async function(){
        try{
            const response = await fetch(backendURL + '/productreceipts')
            const {productreceipts} = await response.json()
            console.log(productreceipts)

            setProductreceipts(productreceipts)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <>
            <h1>Product Receipts</h1>
            <table>
                <thead>
                    <tr>
                        {productreceipts.length > 0 && Object.keys(productreceipts[0]).map((key) => (
                            <th>{key}</th>
                        ))} 
                        
                    </tr>
                </thead>
                <tbody>
                    {productreceipts.map((productreceipt, index)=>(
                       <EntityRow key={index} rowObject = {productreceipt} backendURL = {backendURL} refreshProductreceipts = {getData}/>
                    ))}

                </tbody>
            </table>
        
        
        
        </>
        
    )

}
export default ProductReceipts;