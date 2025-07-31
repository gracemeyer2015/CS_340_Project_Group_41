import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';

function ProductReceipts({backendURL}){
    return (
        <table className = "table-style">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><ReusableButton/></td>
                    <td><ReusableButton /></td>
                </tr>
            </tbody>
        </table>
        
    )

}

export default ProductReceipts