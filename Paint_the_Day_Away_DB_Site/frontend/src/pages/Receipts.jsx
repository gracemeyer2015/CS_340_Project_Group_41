import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';

function Receipts({backendURL}){
    return (
        <table className = "table-style">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Customer First Name</th>
                    <th>Customer Last Name</th>
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

export default Receipts