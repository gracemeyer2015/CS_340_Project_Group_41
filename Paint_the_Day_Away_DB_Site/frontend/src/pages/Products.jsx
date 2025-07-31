import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';

function Products({backendURL}){
    return (
        <table className = "table-style">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Manufacturer's Price</th>
                    <th>Selling Price</th>
                    <th>New Product</th>
                    <th>First Date Ordered</th>
                    <th>Manufacturer Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        
    )

}
export default Products