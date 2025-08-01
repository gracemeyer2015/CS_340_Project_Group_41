import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';
import { header } from 'express-validator';

function Receipts({backendURL}){
    const [receipts, setReceipts] = useState([])

    const getData = async function(){
        try{
            const response = await fetch(backendURL + '/receipts')
            const {receipts} = await response.json()
            console.log(receipts)

            setReceipts(receipts)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <>
            <h1>Receipts</h1>
            <table>
                <thead>
                    <tr>
                        {receipts.length > 0 && Object.keys(receipts[0]).map((key) => (
                            <th>{key}</th>
                    
                        ))} 
                        
                    </tr>
                </thead>
                <tbody>
                    {receipts.map((receipt, index)=>(
                       <EntityRow key={index} rowObject = {receipt} backendURL = {backendURL} refreshReceipts = {getData}/>
                    ))}

                </tbody>
            </table>
        
        
        
        </>
        
    )

} export default Receipts