import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
        <h1>Items</h1>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.first_name} {item.middle_name} {item.last_name}
                    <br />
                    Address: {item.address}
                    <br />
                    Permanent Address: {item.permanent_address}
                    <br />
                    Zip Code: {item.zip_code}
                    <br />
                    Email: {item.email}
                    <br />
                    Phone: {item.phone}
                    <br />
                    Date of Birth: {item.date_of_birth}
                    <br />
                    Place of Birth: {item.place_of_birth}
                    <br />
                    Civil Status: {item.civil_status}
                    <br />
                    Sex: {item.sex === 'M' ? 'Male' : 'Female'}
                    <br />
                    Height: {item.height}
                    <br />
                    Weight: {item.weight}
                    <br />
                    Blood Type: {item.bloodtype}
                    <br />
                    Citizenship: {item.citizenship}
                    <br />
                    GSIS: {item.gsis}
                    <br />
                    Pag-Ibig No: {item.pag_ibig_no}
                    <br />
                    PhilHealth: {item.philhealth}
                    <br />
                    SSS: {item.sss}
                    <br />
                    TIN: {item.tin}
                    <br />
                    Agency Employee No: {item.agency_employee_no}
                    <br />
                    Occupation: {item.occupation}
                    <br />
                    Employee Business: {item.employee_business}
                    <br />
                    Business Address: {item.business_address}
                    <br />
                    <button onClick={() => onEdit(item)}>Edit</button>
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
);
};
export default ItemList;
