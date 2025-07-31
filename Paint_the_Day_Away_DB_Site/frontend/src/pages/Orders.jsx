import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';

function Orders({backendURL}){
    return (
        <table className = "table-style">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Product Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        
    )

}

export default Orders