import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import EntityRow from '../components/EntityRow';
// import CreatePersonForm from '../components/CreatePersonForm';
// import UpdatePersonForm from '../components/UpdatePersonForm';


function Manufacturers({ backendURL }) {

    // Set up a state variable `people` to store and display the backend response
    const [manufacturers, setManufacturers] = useState([]);

    const getData = async function () {
        try {
            // Make a GET request to the backend
            const response = await fetch(backendURL + '/manufacturers');
            
            // Convert the response into JSON format
            const {manufacturers} = await response.json();
    
            // Update the people state with the response data
            setManufacturers(manufacturers);
           
            
        } catch (error) {
          // If the API call fails, print the error to the console
          console.log(error);
        }

    };

    // Load table on page load
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Manufacturers</h1>

            <table>
                <thead>
                    <tr>
                        {manufacturers.length > 0 && Object.keys(manufacturers[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {manufacturers.map((manufacturer, index) => (
                        <EntityRow key={index} rowObject={manufacturer} backendURL={backendURL} refreshManufacruers={getData}/>
                    ))}

                </tbody>
            </table>
{/*             
            <CreatePersonForm homeworlds={homeworlds} backendURL={backendURL} refreshPeople={getData} />
            <UpdatePersonForm people={people} homeworlds={homeworlds} backendURL={backendURL} refreshPeople={getData} />                */}
        </>
    );

} export default Manufacturers;