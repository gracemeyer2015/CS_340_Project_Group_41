function EntityRow({rowObject, backendURL, refreshPeople }){
    return (
        <tr>
            {Object.values(rowObject).map((value, index)=>
            (
                <td key = {index}>{value}</td>
                

            ))}
            <th><button>Update</button><button>Delete</button></th>
        </tr>
        
    )
}

export default EntityRow